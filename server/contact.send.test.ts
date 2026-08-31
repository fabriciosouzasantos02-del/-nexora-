import { afterEach, describe, expect, it, vi } from "vitest";
import { sendContactEmail } from "./contact";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("sendContactEmail", () => {
  it("sends the exact Resend Free payload with all form data", async () => {
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, init?: RequestInit) => {
      const body = JSON.parse(String(init?.body));
      expect(body.from).toBe("onboarding@resend.dev");
      expect(body.to).toEqual(["galeria.faz11@gmail.com"]);
      expect(body.reply_to).toBe("visitante@empresa.com");
      expect(body.text).toContain("Tipo de contato: Nova ideia");
      expect(body.text).toContain("Mensagem / ideia:");
      expect(body.text).toContain("Queremos lançar uma campanha audiovisual.");
      expect(body.html).toContain("visitante@empresa.com");
      expect(body.html).toContain("Nova ideia");
      expect(body.html).toContain("Queremos lançar uma campanha audiovisual.");
      return new Response(JSON.stringify({ id: "email_test" }), { status: 200 });
    });
    vi.stubGlobal("fetch", fetchMock);

    const result = await sendContactEmail({
      name: "Visitante Teste",
      email: "visitante@empresa.com",
      phone: "11999999999",
      businessName: "Empresa Teste",
      niche: "Software / SaaS",
      selectedPackage: "PROFISSIONAL (3 VÍDEOS)",
      contactType: "Nova ideia",
      details: "Queremos lançar uma campanha audiovisual.",
    });

    expect(result).toEqual({ success: true });
    expect(fetchMock).toHaveBeenCalledOnce();
  });
});
