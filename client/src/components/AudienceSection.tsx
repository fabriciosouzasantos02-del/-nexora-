/** Direção visual: segmentos apresentados como lâminas de produção, com ritmos e cortes variados em vez de uma grade uniforme. */
import { ArrowUpRight } from 'lucide-react';
import { AUDIENCE_DATA } from '../data/nexoraData';

interface AudienceSectionProps {
  onOpenQuote: (nicheName?: string) => void;
}

const sceneLayouts = [
  'md:col-span-7 md:min-h-[460px]',
  'md:col-span-5 md:min-h-[460px]',
  'md:col-span-4 md:min-h-[340px]',
  'md:col-span-8 md:min-h-[340px]',
  'md:col-span-8 md:min-h-[360px]',
  'md:col-span-4 md:min-h-[360px]',
];

export function AudienceSection({ onOpenQuote }: AudienceSectionProps) {
  return (
    <section id="para-quem" className="relative border-t border-white/[0.06] bg-[#0a0b10] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:col-span-3">Capítulo 04 — Alcance</p>
          <h2 className="font-display text-4xl font-bold leading-[0.92] tracking-[-0.045em] text-white sm:text-6xl md:col-span-6">
            A mesma assinatura.<br />
            <span className="font-serif-cinematic font-medium italic text-amber-300">Outros universos.</span>
          </h2>
          <p className="border-l border-white/15 pl-5 text-sm font-light leading-relaxed text-zinc-400 md:col-span-3">
            O método muda de enquadramento, ritmo e linguagem para falar com o público certo.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-12">
          {AUDIENCE_DATA.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onOpenQuote(item.title)}
              className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#0b0c10] p-6 text-left sm:p-8 ${sceneLayouts[index]}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="cinematic-frame absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/55 to-transparent" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.26em] text-zinc-300">CENA {String(index + 1).padStart(2, '0')}</span>
                <ArrowUpRight className="h-5 w-5 text-zinc-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="relative z-10 max-w-md">
                <h3 className="mb-2 font-display text-3xl font-bold leading-none tracking-[-0.04em] text-white sm:text-4xl">{item.title}</h3>
                <p className="max-w-sm text-sm font-light leading-relaxed text-zinc-300">{item.description}</p>
                <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Abrir briefing</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
