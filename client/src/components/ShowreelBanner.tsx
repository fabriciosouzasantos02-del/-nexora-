import { Play, Sparkles, Plus } from 'lucide-react';

/** Direção visual: faixa panorâmica escura que funciona como uma cena de filme e preserva contraste para o conteúdo sobreposto. */

interface ShowreelBannerProps {
  onOpenShowreel: () => void;
}

/** Direção visual: banner panorâmico como intervalo de filme, com um único frame escuro e CTA de reprodução. */
export function ShowreelBanner({ onOpenShowreel }: ShowreelBannerProps) {
  return (
    <section className="py-12 bg-[#08080a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Container with High Resolution Cinematic Panoramic Photo */}
        <div
          onClick={onOpenShowreel}
          className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-500 cursor-pointer group shadow-2xl min-h-[380px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-10"
        >
          {/* Panoramic Atmospheric Background Image */}
          <img
            src="/assets/images/crew-set_08736bce.webp"
            alt="Bastidores da produção audiovisual da Nexora em set de estúdio"
            className="absolute inset-0 w-full h-full object-cover object-[center_46%] group-hover:scale-105 transition-transform duration-1000 brightness-50 group-hover:brightness-70 contrast-115 saturate-90"
          />

          {/* Vignette & Ambient Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/40 to-[#08080a]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-500 pointer-events-none" />

          {/* Top Row: Badge & Counter */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-zinc-200 text-xs font-semibold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>SHOWREEL — NXR.01</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="text-zinc-100 font-bold uppercase tracking-wider flex items-center gap-1">
                ASSISTIR SHOWREEL <Plus className="w-3 h-3 text-amber-400" />
              </span>
              <span className="text-zinc-500">|</span>
              <span className="text-zinc-400">01 / 04</span>
            </div>
          </div>

          {/* Center Pulsing Play Button */}
          <div className="relative z-10 flex items-center justify-center my-6">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-400/90 text-zinc-950 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber-300 transition-all duration-300 gold-glow">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
              </div>
              <div className="absolute -inset-3 rounded-full border border-amber-400/40 animate-ping pointer-events-none opacity-40" />
            </div>
          </div>

          {/* Bottom Row: Title & Subtitle */}
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight drop-shadow-md">
              Grandes ideias ganham vida aqui.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-xl drop-shadow">
              Assista ao nosso showreel e veja como transformamos conceitos em vídeos que realmente geram resultados.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
