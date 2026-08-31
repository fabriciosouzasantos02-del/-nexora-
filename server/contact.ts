import { ENV } from "./_core/env";

export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  niche: string;
  selectedPackage: string;
  contactType: string;
  details: string;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_FIELD_LENGTH = 2_000;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value: string) {
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export function validateContactInput(input: ContactInput) {
  const normalized = Object.fromEntries(
    Object.entries(input).map(([key, value]) => [key, normalize(value)])
  ) as ContactInput;

  if (!normalized.name || !normalized.email || !normalized.phone || !normalized.contactType || !normalized.details) {
    throw new Error("Preencha nome, e-mail, telefone e mensagem.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email)) {
    throw new Error("Informe um e-mail válido.");
  }

  return normalized;
}

export async function sendContactEmail(input: ContactInput) {
  if (!ENV.resendApiKey || !ENV.contactRecipientEmail) {
    throw new Error("Serviço de contato não configurado.");
  }

  const data = validateContactInput(input);
  const rows = [
    ["Nome", data.name],
    ["E-mail", data.email],
    ["Telefone / WhatsApp", data.phone],
    ["Empresa / marca", data.businessName || "Não informado"],
    ["Segmento", data.niche || "Não informado"],
    ["Pacote desejado", data.selectedPackage || "Não informado"],
    ["Tipo de contato", data.contactType],
  ] as const;

  const htmlRows = rows
    .map(([label, value]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #27272a;color:#a1a1aa;width:180px">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #27272a;color:#f4f4f5">${escapeHtml(value)}</td></tr>`)
    .join("");

  const text = [
    "Nova solicitação de orçamento — Nexora",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Mensagem / ideia:",
    data.details,
  ].join("\n");

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ENV.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Nexora <onboarding@resend.dev>",
      to: [ENV.contactRecipientEmail],
      reply_to: data.email,
      subject: `Novo contato de ${data.name} — ${data.businessName || "orçamento"}`,
      text,
      html: `<div style="background:#09090b;padding:28px;font-family:Arial,sans-serif;color:#f4f4f5"><div style="max-width:680px;margin:auto"><p style="color:#fbbf24;letter-spacing:.14em;text-transform:uppercase;font-size:12px">Nexora · novo contato</p><h1 style="font-size:24px;margin:0 0 20px">Solicitação de orçamento</h1><table style="width:100%;border-collapse:collapse;background:#18181b;border:1px solid #27272a;border-radius:8px;overflow:hidden">${htmlRows}</table><h2 style="font-size:16px;margin:24px 0 8px">Mensagem / ideia</h2><p style="white-space:pre-wrap;line-height:1.6;color:#d4d4d8">${escapeHtml(data.details)}</p></div></div>`,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("[Resend] Email send failed", response.status, errorBody);
    throw new Error("Não foi possível enviar sua mensagem agora.");
  }

  return { success: true as const };
}
