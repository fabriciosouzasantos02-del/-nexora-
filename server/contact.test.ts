import { describe, expect, it } from "vitest";
import { validateContactInput, type ContactInput } from "./contact";

const validInput: ContactInput = {
  name: "Ana Souza",
  email: "ana@empresa.com",
  phone: "11999999999",
  businessName: "Empresa Criativa",
  niche: "Software / SaaS",
  selectedPackage: "PROFISSIONAL (3 VÍDEOS)",
  contactType: "Orçamento de vídeo",
  details: "Precisamos de um vídeo para o lançamento da nova plataforma.",
};

describe("contact validation", () => {
  it("normalizes valid fields and keeps the customer email", () => {
    expect(validateContactInput({ ...validInput, name: "  Ana Souza  " })).toMatchObject({
      name: "Ana Souza",
      email: "ana@empresa.com",
    });
  });

  it("rejects an invalid email", () => {
    expect(() => validateContactInput({ ...validInput, email: "not-an-email" })).toThrow(
      "Informe um e-mail válido."
    );
  });

  it("rejects an empty required message", () => {
    expect(() => validateContactInput({ ...validInput, details: "   " })).toThrow(
      "Preencha nome, e-mail, telefone e mensagem."
    );
  });
});
