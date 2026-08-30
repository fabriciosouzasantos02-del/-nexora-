import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

/** Direção visual: encerramento como último frame da narrativa, com horizonte escuro e conversão concentrada em um CTA. */
interface CtaSectionProps {
  onOpenQuote: () => void;
}

export function CtaSection({ onOpenQuote }: CtaSectionProps) {
  return (
    <section id="contato" className="relative py-28 overflow-hidden bg-[#0a0b10] border-t border-white/[0.06]">
      {/* Golden atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/15 rounded-full blur-[180px] pointer-events-none" />

      {/* Cinematic Horizon Silhouette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/mountain-world_29f2d3d4.jpeg"
          alt="Pessoa observando uma paisagem montanhosa ao entardecer, frame final da Nexora"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_58%] opacity-20 brightness-45 contrast-110 saturate-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/90 to-[#08080a]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 gold-glow-subtle">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TEM UMA IDEIA?</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
          Vamos transformar <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-serif-cinematic italic">
            em um vídeo.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Fale com a nossa equipe e receba uma proposta personalizada para o seu projeto.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-quote-btn"
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-zinc-950 hover:brightness-110 transition-all gold-glow flex items-center justify-center gap-2 shadow-2xl"
          >
            <span>Solicitar orçamento</span>
            <ArrowRight className="w-4 h-4 text-zinc-950" />
          </button>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20NEXORA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#14151b] text-zinc-200 border border-white/10 hover:border-amber-400/40 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
