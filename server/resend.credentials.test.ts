import { describe, expect, it } from "vitest";

describe("Resend credentials", () => {
  it("authenticates the configured send-only key and recipient", async () => {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
    expect(apiKey, "RESEND_API_KEY must be configured").toMatch(/^re_[A-Za-z0-9_]+$/);
    expect(recipient, "CONTACT_RECIPIENT_EMAIL must be configured").toBe("Galeria.faz11@gmail.com");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      // Invalid payload intentionally avoids sending an email while proving
      // that the restricted key reaches the send-only endpoint.
      body: JSON.stringify({}),
    });

    expect(response.status, await response.text()).toBe(422);
  }, 15_000);
});
