import type { IncomingMessage, ServerResponse } from 'node:http';
import { sendContactEmail, type ContactInput } from '../server/contact';

type VercelRequest = IncomingMessage & {
  body?: unknown;
  method?: string;
};

type VercelResponse = ServerResponse & {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
};

function json(res: VercelResponse, status: number, payload: unknown) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(status).json(payload);
  }

  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

function asContactInput(body: unknown): ContactInput {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new Error('Corpo da solicitação inválido.');
  }

  const data = body as Record<string, unknown>;
  const fields = ['name', 'email', 'phone', 'businessName', 'niche', 'selectedPackage', 'contactType', 'details'] as const;

  for (const field of fields) {
    if (typeof data[field] !== 'string') {
      throw new Error('Preencha todos os campos do formulário corretamente.');
    }
  }

  return {
    name: data.name as string,
    email: data.email as string,
    phone: data.phone as string,
    businessName: data.businessName as string,
    niche: data.niche as string,
    selectedPackage: data.selectedPackage as string,
    contactType: data.contactType as string,
    details: data.details as string,
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { success: false, error: 'Método não permitido. Use POST.' });
  }

  try {
    const input = asContactInput(req.body);
    const result = await sendContactEmail(input);
    return json(res, 200, result);
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
