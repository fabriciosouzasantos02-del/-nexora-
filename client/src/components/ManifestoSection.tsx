/** Direção visual: manifesto como plano panorâmico de visão, com texto à esquerda e cinco pilares alinhados como créditos de uma obra. */
import { MANIFESTO_PRINCIPLES } from '../data/nexoraData';
import { Target, Cpu, Flame, Award, TrendingUp, Sparkles } from 'lucide-react';

export function ManifestoSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="h-4 w-4" />;
      case 'Cpu': return <Cpu className="h-4 w-4" />;
      case 'Flame': return <Flame className="h-4 w-4" />;
      case 'Award': return <Award className="h-4 w-4" />;
      case 'TrendingUp': return <TrendingUp className="h-4 w-4" />;
      default: return <Sparkles className="h-4 w-4" />;
    }
  };

  return (
    <section id="manifesto" className="relative overflow-hidden border-t border-white/[0.06] bg-[#08080a] py-16 sm:py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/mountain-world_29f2d3d4.jpeg"
          alt="Pessoa observando uma paisagem de montanha, visão de futuro e estratégia"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-[center_48%] opacity-28 brightness-45 contrast-110 saturate-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#08080a]/90 to-[#08080a]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-[#08080a]/60" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8">
        <div className="lg:col-span-5">
          <div className="mb-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Nosso manifesto</span>
          </div>
          <h2 className="max-w-xl font-display text-3xl font-bold leading-[0.95] tracking-[-0.045em] text-white sm:text-4xl">
            Estratégia antes da geração.<br />
            Direção antes da cena.<br />
            <span className="font-serif-cinematic font-medium italic text-amber-300">Narrativa antes do efeito.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-zinc-300">
            Na NEXORA, não acreditamos em vídeos genéricos. Cada projeto é pensado para o seu público, o seu objetivo e a sua marca única.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-5 lg:col-span-7">
          {MANIFESTO_PRINCIPLES.map((item, index) => (
            <div key={item.title} className="group">
              <div className="mb-3 flex h-9 w-9 items-center justify-center border border-amber-400/40 bg-black/25 text-amber-300 transition-colors group-hover:border-amber-300 group-hover:bg-amber-400 group-hover:text-zinc-950">
                {getIcon(item.icon)}
              </div>
              <h3 className="mb-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">{item.title}</h3>
              <p className="text-[10px] font-light leading-[1.4] text-zinc-400">{item.description}</p>
              <span className="mt-3 block font-mono text-[8px] tracking-[0.18em] text-zinc-600">PILAR 0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
