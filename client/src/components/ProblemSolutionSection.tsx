import { AlertCircle, CheckCircle2, ArrowRight, XCircle, Sparkles, TrendingUp, Zap, Clock } from 'lucide-react';
import { PROBLEMS_DATA, SOLUTIONS_DATA } from '../data/nexoraData';

export function ProblemSolutionSection() {
  return (
    <section id="problema-solucao" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT SIDE: O PROBLEMA */}
          <div className="lg:col-span-6 bg-[#0e0f14]/80 border border-red-500/20 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl relative group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-wider uppercase mb-5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>O PROBLEMA</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8 leading-tight">
                Muitas empresas ainda comunicam suas ideias de forma fraca.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROBLEMS_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] hover:border-red-500/30 transition-all flex flex-col justify-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center mb-3">
                      {idx === 0 && <XCircle className="w-4 h-4" />}
                      {idx === 1 && <AlertCircle className="w-4 h-4" />}
                      {idx === 2 && <Clock className="w-4 h-4" />}
                      {idx === 3 && <Zap className="w-4 h-4" />}
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-200 mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>O resultado: marcas invisíveis em mercados ultra-competitivos.</span>
            </div>
          </div>

          {/* RIGHT SIDE: A SOLUÇÃO */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#14151e]/90 to-[#0e0f14]/90 border border-amber-500/40 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl relative group gold-glow-subtle">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>A SOLUÇÃO</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8 leading-tight">
                A NEXORA transforma ideias em experiências visuais estratégicas que geram resultados reais.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SOLUTIONS_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/80 border border-amber-500/20 hover:border-amber-400/60 transition-all flex flex-col justify-start hover:bg-amber-500/[0.04]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-400/15 text-amber-400 flex items-center justify-center mb-3">
                      {idx === 0 && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                      {idx === 1 && <Sparkles className="w-4 h-4 text-amber-400" />}
                      {idx === 2 && <Zap className="w-4 h-4 text-amber-400" />}
                      {idx === 3 && <TrendingUp className="w-4 h-4 text-amber-400" />}
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-100 mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-500/20 flex items-center gap-2 text-xs text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="font-medium">Transforme sua comunicação em uma máquina de autoridade e vendas.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
