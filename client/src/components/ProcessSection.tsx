/** Direção visual: processo como uma faixa técnica de seis etapas, compacta no desktop e com a numeração como elemento de orientação. */
import { Compass, Sparkles, FileEdit, Layers, Video, Wand2 } from 'lucide-react';
import { PROCESS_DATA } from '../data/nexoraData';

export function ProcessSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="h-4 w-4" />;
      case 'Sparkles': return <Sparkles className="h-4 w-4" />;
      case 'FileEdit': return <FileEdit className="h-4 w-4" />;
      case 'Layers': return <Layers className="h-4 w-4" />;
      case 'Video': return <Video className="h-4 w-4" />;
      case 'Wand2': return <Wand2 className="h-4 w-4" />;
      default: return <Sparkles className="h-4 w-4" />;
    }
  };

  return (
    <section id="processo" className="relative border-t border-white/[0.06] bg-[#0a0b10] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-6">
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">PROCESSO DE PRODUÇÃO</p>
          <p className="hidden text-[10px] font-light tracking-[0.08em] text-zinc-500 sm:block">Do briefing ao color grading, cada etapa deixa a próxima mais precisa.</p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
          {PROCESS_DATA.map((step, index) => (
            <article key={step.number} className="group relative flex min-h-[190px] flex-col justify-between bg-[#0c0d12] p-5 transition-colors duration-300 hover:bg-[#11131a]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold tracking-[0.24em] text-zinc-500 transition-colors group-hover:text-amber-300">{step.number}</span>
                <span className="flex h-8 w-8 items-center justify-center border border-white/15 text-zinc-300 transition-colors group-hover:border-amber-400 group-hover:text-amber-300">{getIcon(step.iconName)}</span>
              </div>
              <div>
                <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-[0.08em] text-white">{step.title}</h3>
                <p className="text-[11px] font-light leading-relaxed text-zinc-400">{step.description}</p>
              </div>
              <div className="mt-4 h-px bg-white/10">
                <div className="h-px bg-amber-400 transition-all duration-300 group-hover:bg-amber-200" style={{ width: `${((index + 1) / PROCESS_DATA.length) * 100}%` }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
