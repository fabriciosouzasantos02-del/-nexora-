/** Direção visual: contraste editorial entre problema e solução, dentro de uma única moldura horizontal com cartões de leitura rápida. */
import { PROBLEMS_DATA, SOLUTIONS_DATA } from '../data/nexoraData';
import { AlertCircle, CheckCircle2, Clock, Sparkles, TrendingUp, XCircle, Zap } from 'lucide-react';

export function ProblemSolutionSection() {
  const problemIcons = [XCircle, AlertCircle, Clock, Zap];
  const solutionIcons = [CheckCircle2, Sparkles, Zap, TrendingUp];

  return (
    <section id="problema-solucao" className="relative overflow-hidden border-t border-white/[0.06] bg-[#080a0f] py-9 sm:py-12">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-amber-400/55 to-transparent lg:block" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden border border-white/15 bg-[#0b0d12] lg:grid-cols-2">
          <article className="border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
            <div className="mb-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.28em] text-red-300">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>O problema</span>
            </div>
            <h2 className="mb-6 max-w-md font-display text-2xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-3xl">Muitas empresas ainda comunicam suas ideias de forma fraca.</h2>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10">
              {PROBLEMS_DATA.map((item, index) => {
                const Icon = problemIcons[index];
                return (
                  <div key={item.title} className="bg-[#101218] p-3 transition-colors hover:bg-[#15171f] sm:p-4">
                    <Icon className="mb-3 h-4 w-4 text-red-300" />
                    <h3 className="mb-1 text-[11px] font-semibold leading-[1.15] text-zinc-200">{item.title}</h3>
                    <p className="text-[10px] font-light leading-[1.35] text-zinc-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="p-5 sm:p-7 lg:p-8">
            <div className="mb-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>A solução</span>
            </div>
            <h2 className="mb-6 max-w-md font-display text-2xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-3xl">A NEXORA transforma ideias em experiências visuais estratégicas que geram resultados reais.</h2>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-amber-400/20 bg-amber-400/20">
              {SOLUTIONS_DATA.map((item, index) => {
                const Icon = solutionIcons[index];
                return (
                  <div key={item.title} className="bg-[#11141b] p-3 transition-colors hover:bg-[#171a22] sm:p-4">
                    <Icon className="mb-3 h-4 w-4 text-amber-300" />
                    <h3 className="mb-1 text-[11px] font-semibold leading-[1.15] text-zinc-100">{item.title}</h3>
                    <p className="text-[10px] font-light leading-[1.35] text-zinc-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
