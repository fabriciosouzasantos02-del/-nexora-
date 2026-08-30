/** Direção visual: uma sequência de frames editoriais — assimétrica, escura e com ouro reservado apenas ao gesto de ação. */
import { ArrowUpRight, Clapperboard } from 'lucide-react';
import { SERVICES_DATA } from '../data/nexoraData';

interface ServicesSectionProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

const frameLayouts = [
  'md:col-span-7 md:row-span-2 min-h-[420px] md:min-h-[610px]',
  'md:col-span-5 min-h-[300px]',
  'md:col-span-5 min-h-[300px]',
  'md:col-span-6 min-h-[330px]',
  'md:col-span-6 min-h-[330px]',
];

export function ServicesSection({ onOpenQuote }: ServicesSectionProps) {
  return (
    <section id="servicos" className="relative overflow-hidden border-t border-white/[0.06] bg-[#09090d] py-24">
      <div className="pointer-events-none absolute left-[8%] top-28 h-px w-[28%] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              <Clapperboard className="h-4 w-4" />
              <span>Capítulo 02 — Produção</span>
            </div>
            <h2 className="max-w-xl font-display text-4xl font-bold leading-[0.93] tracking-[-0.045em] text-white sm:text-6xl">
              Não são serviços.<br />
              São <span className="font-serif-cinematic font-medium italic text-amber-300">cenas que movem</span> uma marca.
            </h2>
          </div>
          <p className="border-l border-white/15 pl-5 text-sm font-light leading-relaxed text-zinc-400 md:col-span-4 md:col-start-9">
            Cada entrega recebe direção, linguagem e acabamento próprios — do primeiro quadro à última conversão.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-12">
          {SERVICES_DATA.map((service, index) => (
            <button
              key={service.id}
              type="button"
              onClick={() => onOpenQuote(service.title)}
              className={`group relative overflow-hidden bg-[#0b0c10] p-6 text-left transition-transform duration-300 hover:z-10 hover:-translate-y-1 sm:p-8 ${frameLayouts[index]}`}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="cinematic-frame absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-[#070709]/10" />
              <div className="absolute inset-x-0 top-0 h-px bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-[0.26em] text-zinc-400">NXR—0{index + 1}</span>
                <span className="flex h-9 w-9 items-center justify-center border border-white/15 bg-black/30 text-zinc-300 backdrop-blur-sm transition-colors group-hover:border-white/35 group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="relative z-10 mt-auto max-w-sm pt-24">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400">Direção Nexora</p>
                <h3 className="mb-3 font-display text-2xl font-bold leading-[0.95] tracking-[-0.035em] text-white sm:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-xs text-sm font-light leading-relaxed text-zinc-300">{service.description}</p>
                <span className="mt-6 inline-block border-b border-amber-400 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300">
                  Definir direção
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
