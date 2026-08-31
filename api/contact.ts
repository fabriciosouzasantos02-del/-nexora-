type ContactInput = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  niche: string;
  selectedPackage: string;
  contactType: string;
  details: string;
};

type VercelRequest = {
  method?: string;
  body?: unknown;
};

type VercelResponse = {
  statusCode: number;
  setHeader: (name: string, value: string) => void;
  end: (body?: string) => void;
};

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const CONTACT_RECIPIENT = 'galeria.faz11@gmail.com';
const MAX_FIELD_LENGTH = 2_000;

function json(res: VercelResponse, status: number, payload: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function normalize(value: string) {
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

function parseInput(body: unknown): ContactInput {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new Error('Corpo da solicitação inválido.');
  }

  const data = body as Record<string, unknown>;
  const fields = ['name', 'email', 'phone', 'businessName', 'niche', 'selectedPackage', 'contactType', 'details'] as const;
  if (fields.some((field) => typeof data[field] !== 'string')) {
    throw new Error('Preencha todos os campos do formulário corretamente.');
  }

  const input = Object.fromEntries(fields.map((field) => [field, normalize(data[field] as string)])) as ContactInput;
  if (!input.name || !input.email || !input.phone || !input.contactType || !input.details) {
    throw new Error('Preencha nome, e-mail, telefone e mensagem.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    throw new Error('Informe um e-mail válido.');
  }
  return input;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { success: false, error: 'Método não permitido. Use POST.' });
  }

  try {
    const data = parseInput(req.body);
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('Serviço de contato não configurado.');
    }

    const rows = [
      ['Nome', data.name],
      ['E-mail', data.email],
      ['Telefone / WhatsApp', data.phone],
      ['Empresa / marca', data.businessName || 'Não informado'],
      ['Segmento', data.niche || 'Não informado'],
      ['Pacote desejado', data.selectedPackage || 'Não informado'],
      ['Tipo de contato', data.contactType],
    ] as const;
    const htmlRows = rows
      .map(([label, value]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #27272a;color:#a1a1aa;width:180px">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #27272a;color:#f4f4f5">${escapeHtml(value)}</td></tr>`)
      .join('');
    const text = [
      'Nova solicitação de orçamento — Nexora',
      '',
      ...rows.map(([label, value]) => `${label}: ${value}`),
      '',
      'Mensagem / ideia:',
      data.details,
    ].join('\n');

    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: [CONTACT_RECIPIENT],
        reply_to: data.email,
        subject: `Novo contato de ${data.name} — ${data.businessName || 'orçamento'}`,
        text,
        html: `<div style="background:#09090b;padding:28px;font-family:Arial,sans-serif;color:#f4f4f5"><div style="max-width:680px;margin:auto"><p style="color:#fbbf24;letter-spacing:.14em;text-transform:uppercase;font-size:12px">Nexora · novo contato</p><h1 style="font-size:24px;margin:0 0 20px">Solicitação de orçamento</h1><table style="width:100%;border-collapse:collapse;background:#18181b;border:1px solid #27272a">${htmlRows}</table><h2 style="font-size:16px;margin:24px 0 8px">Mensagem / ideia</h2><p style="white-space:pre-wrap;line-height:1.6;color:#d4d4d8">${escapeHtml(data.details)}</p></div></div>`,
      }),
    });

    if (!resendResponse.ok) {
      console.error('[Resend] Email send failed', resendResponse.status, await resendResponse.text());
      return json(res, 502, { success: false, error: 'Não foi possível enviar sua mensagem agora. Tente novamente.' });
    }

    return json(res, 200, { success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Não foi possível processar sua solicitação.';
    const isValidationError = /Preencha|Informe|inválido|corretamente/i.test(message);
    console.error('[API contact]', error);
    return json(res, isValidationError ? 400 : 500, {
      success: false,
      error: isValidationError ? message : 'Não foi possível enviar sua mensagem agora. Tente novamente.',
    });
  }
}
