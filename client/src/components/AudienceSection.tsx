/** Direção visual: seis nichos em uma única fileira de frames, com texto curto e leitura imediata como na referência desktop. */
import { ArrowUpRight } from 'lucide-react';
import { AUDIENCE_DATA } from '../data/nexoraData';

interface AudienceSectionProps {
  onOpenQuote: (nicheName?: string) => void;
}

export function AudienceSection({ onOpenQuote }: AudienceSectionProps) {
  return (
    <section id="para-quem" className="relative border-t border-white/[0.06] bg-[#0a0b10] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6 text-center">
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">PARA QUEM A NEXORA PRODUZ</p>
        </header>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
          {AUDIENCE_DATA.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onOpenQuote(item.title)}
              className="group relative flex min-h-[245px] flex-col justify-between overflow-hidden bg-[#0b0c10] p-4 text-left transition-transform duration-300 hover:z-10 hover:-translate-y-1"
              aria-label={`Criar projeto para ${item.title}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="cinematic-frame absolute inset-0 h-full w-full object-cover object-[center_48%] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/55 to-transparent" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-300">0{index + 1}</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-200 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <div className="relative z-10 mt-auto pt-14">
                <h3 className="mb-2 font-display text-lg font-bold leading-none tracking-[-0.03em] text-white">{item.title}</h3>
                <p className="text-[11px] font-light leading-[1.35] text-zinc-300">{item.description}</p>
                <span className="mt-4 inline-block text-[9px] font-bold uppercase tracking-[0.17em] text-amber-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Abrir briefing</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
