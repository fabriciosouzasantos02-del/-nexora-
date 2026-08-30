import { PROCESS_DATA } from '../data/nexoraData';
import { Compass, Sparkles, FileEdit, Layers, Video, Wand2 } from 'lucide-react';

export function ProcessSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'FileEdit': return <FileEdit className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      case 'Wand2': return <Wand2 className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="processo" className="py-24 bg-[#0a0b10] border-t border-white/[0.06] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NOSSO PROCESSO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Como funciona
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 font-light">
            Um processo claro, criativo e estratégico para entregar o melhor resultado.
          </p>
        </div>

        {/* Large Panoramic Illustrated Editing Suite & Storyboard Monitor Setup (as in Reference) */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-8 group bg-zinc-950">
          <div className="relative aspect-[21/9] sm:aspect-[24/10] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1800&q=85"
              alt="Ilustração do estúdio com múltiplos monitores exibindo storyboards e timeline de edição 4K"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 brightness-75 contrast-105"
            />
            {/* Cinematic Studio Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/70" />
            
            {/* Top Status Indicators */}
            <div className="absolute top-4 left-6 flex items-center gap-3">
              <div className="bg-black/70 backdrop-blur-md border border-amber-500/30 px-3 py-1 rounded-lg text-[10px] font-mono text-amber-300 font-bold uppercase">
                TIMELINE DE MONTAGEM & IA RENDER
              </div>
            </div>

            <div className="absolute bottom-4 right-6 hidden sm:flex items-center gap-2 text-xs text-zinc-300 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ESTÚDIO ATIVO • PROCESSO 100% TRANSPARENTE</span>
            </div>
          </div>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {PROCESS_DATA.map((step) => (
            <div
              key={step.number}
              className="bg-zinc-900/80 backdrop-blur-sm border border-white/[0.08] hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:bg-zinc-900 shadow-xl"
            >
              <div>
                {/* Step Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-amber-400/80 group-hover:text-amber-400">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-zinc-950 transition-all">
                    {getIcon(step.iconName)}
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase mb-2 group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Progress pill line */}
              <div className="mt-5 pt-3 border-t border-white/[0.05]">
                <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-400 h-full rounded-full group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-amber-200 transition-all"
                    style={{ width: `${(parseInt(step.number, 10) / 6) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

