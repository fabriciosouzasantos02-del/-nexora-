import { MANIFESTO_PRINCIPLES } from '../data/nexoraData';
import { Target, Cpu, Flame, Award, TrendingUp, Sparkles } from 'lucide-react';

export function ManifestoSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="manifesto" className="relative py-28 overflow-hidden bg-[#08080a] border-t border-white/[0.06]">
      {/* Cinematic Visionary Background Panorama */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
          alt="Paisagem cinematográfica com visão de futuro e estratégia"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/80 to-[#08080a]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NOSSO MANIFESTO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Estratégia antes da geração. <br />
            Direção antes da cena. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-serif-cinematic italic">
              Narrativa antes do efeito.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Na NEXORA, não acreditamos em vídeos genéricos. Cada projeto é pensado para o seu público, o seu objetivo e a sua marca única.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MANIFESTO_PRINCIPLES.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0e0f16]/90 backdrop-blur-md border border-white/[0.08] hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-all">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.05] text-[10px] font-mono text-zinc-400">
                PILAR 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
