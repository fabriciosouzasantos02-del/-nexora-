import { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, ArrowRight, Film } from 'lucide-react';
import { ProjectItem } from '../types';

/** Direção visual: player tratado como janela de cinema, usando os mesmos frames escuros e recortes do restante da página. */
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: ProjectItem | null;
  isShowreel?: boolean;
  onOpenQuote: (packageName?: string) => void;
}

export function VideoModal({ isOpen, onClose, project, isShowreel, onOpenQuote }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!isOpen) {
      setProgress(25);
      return;
    }
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 400);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const title = isShowreel
    ? 'NEXORA SHOWREEL 2026'
    : project?.title || 'Produção Audiovisual Cinematográfica';

  const category = isShowreel
    ? 'AI CREATIVE REEL'
    : project?.category || 'PROJETO';

  const description = isShowreel
    ? 'Uma síntese de narrativas visuais estratégicas, direção de cena fotorealista e composições cinematográficas geradas com IA de alta fidelidade.'
    : project?.description || 'Produção completa estruturada desde o briefing e storyboard até a renderização e color grading final.';

  const imageBg = isShowreel
    ? '/manus-storage/crew-camera_2f8618cb.jpeg'
    : project?.imageUrl || '/manus-storage/client-direction_13902d3b.jpeg';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#0b0c12] border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl gold-glow flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-6 flex items-center justify-between border-b border-white/[0.08] bg-[#0e0f16]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] font-mono text-amber-400 uppercase font-bold">
                {category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white uppercase font-display leading-tight">
                {title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Fechar vídeo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Mock with High-Resolution Backdrop & Overlays */}
        <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden group">
          <img
            src={imageBg}
            alt={title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover object-[center_45%] transition-transform duration-1000 ${
              isPlaying ? 'scale-105 brightness-95' : 'scale-100 brightness-75'
            }`}
          />

          {/* Cinematic Letterbox Bars */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black/80 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-black/80 pointer-events-none" />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />

          {/* Watermark Logo */}
          <div className="absolute top-8 right-8 z-10 flex items-center gap-1.5 opacity-60">
            <span className="text-[10px] tracking-[0.25em] font-bold text-white uppercase font-display">
              NEXORA
            </span>
          </div>

          {/* Audio & Timecode overlay */}
          <div className="absolute top-8 left-8 z-10 font-mono text-[11px] text-amber-400/90 bg-black/60 px-2.5 py-1 rounded border border-amber-500/20">
            REC 4K • 24FPS • COLOR LOG
          </div>

          {/* Center Play/Pause button on click */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center group/btn"
          >
            {!isPlaying && (
              <div className="w-16 h-16 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center shadow-2xl transition-all scale-110 gold-glow">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
            )}
          </button>

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-6 left-0 right-0 px-6 py-2 bg-gradient-to-t from-black/90 to-transparent flex flex-col gap-2">
            {/* Scrubber progress */}
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer relative">
              <div
                className="bg-amber-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-300">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-amber-400 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-amber-400 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-zinc-400">
                  00:{Math.floor((progress * 45) / 100).toString().padStart(2, '0')} / 00:45
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-amber-300 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Renderizado com Padrão Cinematográfico</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Details and Direct CTA */}
        <div className="p-6 bg-[#0e0f16] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08]">
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-lg text-center sm:text-left">
            {description}
          </p>

          <button
            onClick={() => {
              onClose();
              onOpenQuote(category);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-400 text-zinc-950 hover:bg-amber-300 transition-all gold-glow flex items-center justify-center gap-2 shrink-0"
          >
            <span>Quero um vídeo neste estilo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
