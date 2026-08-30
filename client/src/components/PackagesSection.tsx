import { Check, Sparkles, MessageSquare, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PACKAGES_DATA } from '../data/nexoraData';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  return (
    <section id="pacotes" className="py-24 bg-[#08080c] border-t border-white/[0.06] relative">
      {/* Background Glow behind popular card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>PACOTES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Escolha o pacote ideal <br />
              para o seu projeto.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
              <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Produções estratégicas</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
              <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Alta qualidade e padrão cinematográfico</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
              <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Entrega rápida e profissional</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
              <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Foco total em resultados</span>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300/90 font-medium">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Personalizamos conforme a necessidade do seu projeto.</span>
            </div>
          </div>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-[#181926] to-[#0e0f16] border-2 border-amber-400/80 gold-glow shadow-2xl scale-[1.02] md:-translate-y-2'
                  : 'bg-[#0d0e14] border border-white/[0.08] hover:border-white/20 shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-zinc-950 font-bold text-[10px] tracking-[0.2em] px-4 py-1 rounded-full uppercase shadow-md flex items-center gap-1.5">
                  <Zap className="w-3 h-3 fill-current" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="mb-6">
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-amber-400 uppercase">
                    {pkg.name}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {pkg.subtitle}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="mb-8 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-semibold text-zinc-400">R$</span>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-400 font-light mt-1 block">
                    Pagamento único por pacote de produção
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        pkg.isPopular ? 'bg-amber-400 text-zinc-950' : 'bg-zinc-800 text-amber-400'
                      }`}>
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  id={`select-package-${pkg.id}`}
                  onClick={() => onSelectPackage(`${pkg.name} (${pkg.subtitle})`)}
                  className={`w-full py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-zinc-950 hover:brightness-110 shadow-lg'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-white/10 hover:border-amber-400'
                  }`}
                >
                  <span>Solicitar este pacote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
