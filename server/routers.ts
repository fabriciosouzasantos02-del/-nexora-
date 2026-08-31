import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { sendContactEmail } from "./contact";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().trim().min(2).max(120),
          email: z.string().trim().email().max(320),
          phone: z.string().trim().min(8).max(40),
          businessName: z.string().trim().max(160).default(""),
          niche: z.string().trim().max(120).default(""),
          selectedPackage: z.string().trim().max(160).default(""),
          contactType: z.string().trim().min(2).max(80),
          details: z.string().trim().min(10).max(2_000),
        })
      )
      .mutation(async ({ input }) => sendContactEmail(input)),
  }),
});

export type AppRouter = typeof appRouter;
