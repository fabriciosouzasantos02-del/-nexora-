import { Play, ArrowRight, Sparkles, Lightbulb, FileText, Clapperboard, Target } from 'lucide-react';

/** Direção visual: hero cinematográfico assimétrico, com texto claro sobre campo grafite de baixa luminosidade. */

interface HeroProps {
  onOpenQuote: () => void;
  onOpenShowreel: () => void;
}

/** Direção visual: abertura em dois painéis, headline de pôster à esquerda e frame real de produção à direita. */
export function Hero({ onOpenQuote, onOpenShowreel }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[500px] lg:min-h-[460px] pt-24 pb-10 lg:pt-24 lg:pb-8 flex items-center overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/10 via-[#08080a] to-[#08080a] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 border border-white/15 bg-black/20 px-3.5 py-1.5 text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>AI CREATIVE STUDIO</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.15rem] font-bold tracking-tight text-white leading-[0.98] mb-5">
              Sua marca merece <br />
              mais do que um <br />
              <span className="font-serif-cinematic italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_2px_15px_rgba(212,175,55,0.3)]">
                vídeo genérico.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed mb-8 font-light">
              Criamos criativos audiovisuais que transformam ideias em experiências visuais.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#portfolio"
                id="hero-see-work-btn"
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-zinc-950 hover:brightness-110 transition-all gold-glow flex items-center gap-2"
              >
                <span>Ver trabalhos</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </a>

              <button
                id="hero-quote-btn"
                onClick={onOpenQuote}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#14151b]/90 text-zinc-200 border border-white/10 hover:border-amber-400/50 hover:text-white transition-all backdrop-blur-sm"
              >
                Solicitar orçamento
              </button>
            </div>

            {/* Showreel Link */}
            <button
              id="hero-showreel-btn"
              onClick={onOpenShowreel}
              className="inline-flex items-center gap-3 text-sm text-zinc-300 hover:text-amber-400 transition-colors group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-all">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span className="font-medium tracking-wide">Assista ao showreel</span>
            </button>
          </div>

          {/* Right Column: High-End Cinematic Studio Scene with Floating Markers */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow Container */}
              <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl bg-gradient-to-b from-zinc-800/40 to-zinc-950/80 p-2 group">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-[2.1/1]">
                  <img
                    src="/manus-storage/hero-reference_537d8a80.jpeg"
                    alt="Set de produção audiovisual da Nexora com câmera, luzes e monitor de referência"
                    className="w-full h-full object-cover object-[center_48%] group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-110 saturate-90"
                  />
                  
                  {/* Studio Atmospheric Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/90 via-transparent to-transparent" />
                  
                  {/* Overlay Studio Badge */}
                  <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <span className="text-[10px] tracking-[0.25em] text-zinc-300 font-bold uppercase font-mono">
                      NXR.01 • DIREÇÃO DE CENA
                    </span>
                  </div>

                  {/* Play preview trigger on image */}
                  <button
                    onClick={onOpenShowreel}
                    className="absolute inset-0 flex items-center justify-center group/btn"
                    aria-label="Assistir showreel"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-400/90 text-zinc-950 flex items-center justify-center shadow-2xl group-hover/btn:scale-110 group-hover/btn:bg-amber-300 transition-all gold-glow">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Floating Feature Markers (Ideias, Roteiros, Cenas, Resultados) */}
              <div className="hidden sm:flex flex-col gap-2.5 absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                <div className="bg-[#121319]/95 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-200 shadow-2xl flex items-center gap-3 hover:border-white/30 transition-all hover:translate-x-1">
                  <div className="p-1 rounded-md bg-white/5 text-zinc-300">
                    <Lightbulb className="w-3.5 h-3.5" />
                  </div>
                  <span className="tracking-wide">Ideias</span>
                </div>

                <div className="bg-[#121319]/95 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-200 shadow-2xl flex items-center gap-3 hover:border-white/30 transition-all hover:translate-x-1">
                  <div className="p-1 rounded-md bg-white/5 text-zinc-300">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <span className="tracking-wide">Roteiros</span>
                </div>

                <div className="bg-[#121319]/95 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-200 shadow-2xl flex items-center gap-3 hover:border-white/30 transition-all hover:translate-x-1">
                  <div className="p-1 rounded-md bg-white/5 text-zinc-300">
                    <Clapperboard className="w-3.5 h-3.5" />
                  </div>
                  <span className="tracking-wide">Cenas</span>
                </div>

                <div className="bg-[#121319]/95 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-200 shadow-2xl flex items-center gap-3 hover:border-white/30 transition-all hover:translate-x-1">
                  <div className="p-1 rounded-md bg-white/5 text-zinc-300">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <span className="tracking-wide">Resultados</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator (Role para explorar) as in Reference 2 */}
        <div className="mt-14 flex items-center justify-center">
          <a
            href="#marcas"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-950/60 border border-white/10 text-zinc-400 hover:text-amber-300 hover:border-amber-400/30 text-xs font-medium tracking-wider transition-all duration-300 group"
          >
            <div className="w-4 h-6 rounded-full border border-zinc-500 group-hover:border-amber-400 flex items-start justify-center p-1">
              <div className="w-1 h-1.5 rounded-full bg-amber-400 animate-bounce" />
            </div>
            <span>Role para explorar</span>
          </a>
        </div>
      </div>
    </section>
  );
}
