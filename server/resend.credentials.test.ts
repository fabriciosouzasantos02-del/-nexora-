import { describe, expect, it } from "vitest";

describe("Resend credentials", () => {
  it("authenticates against the Resend domains endpoint", async () => {
    const apiKey = process.env.RESEND_API_KEY;
    expect(apiKey, "RESEND_API_KEY must be configured").toMatch(/^re_[A-Za-z0-9_]+$/);

    const response = await fetch("https://api.resend.com/domains", {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    expect(response.status, await response.text()).toBe(200);
  }, 15_000);
});
