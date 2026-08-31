import { useEffect, useRef, useState } from 'react';
import { X, Play, Sparkles, ArrowRight, Film } from 'lucide-react';
import { ProjectItem } from '../types';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: ProjectItem | null;
  isShowreel?: boolean;
  onOpenQuote: (packageName?: string) => void;
}

const SHOWREEL_VIDEO = '/assets/videos/hero-direcao-de-cena.mp4';
const SHOWREEL_VIDEO_WEBM = '/assets/videos/hero-direcao-de-cena.webm';
const SHOWREEL_POSTER = '/assets/images/hero-reference_537d8a80.webp';

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00';
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainder = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainder}`;
}

export function VideoModal({ isOpen, onClose, project, isShowreel, onOpenQuote }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      setProgress(0);
      setDuration(0);
      return;
    }
    setIsPlaying(false);
    setProgress(0);
    setDuration(0);
  }, [isOpen, project, isShowreel]);

  useEffect(() => {
    if (isPlaying) {
      void videoRef.current?.play();
    }
  }, [isPlaying]);

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

  const poster = isShowreel
    ? SHOWREEL_POSTER
    : project?.imageUrl || '/assets/images/client-direction_13902d3b.webp';
  const videoUrl = isShowreel ? SHOWREEL_VIDEO : project?.videoUrl;
  const videoWebmUrl = isShowreel
    ? SHOWREEL_VIDEO_WEBM
    : project?.videoUrl?.replace(/\.mp4$/i, '.webm');

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress(video.currentTime / video.duration * 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-amber-500/30 bg-[#0b0c12] shadow-2xl gold-glow"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0e0f16] p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
              <Film className="h-4 w-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
                {category}
              </span>
              <h3 className="font-display text-base font-bold uppercase leading-tight text-white sm:text-lg">
                {title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-zinc-900/80 p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
            aria-label="Fechar vídeo"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="group relative aspect-video w-full overflow-hidden bg-zinc-950">
          {!isPlaying ? (
            <>
              <img
                src={poster}
                alt={title}
                className="h-full w-full object-cover object-[center_45%] brightness-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
                aria-label={`Reproduzir ${title}`}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-zinc-950 shadow-2xl transition-transform group-hover:scale-110 gold-glow">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </span>
              </button>
            </>
          ) : videoUrl ? (
            <video
              ref={videoRef}
              autoPlay
              controls
              playsInline
              preload="metadata"
              poster={poster}
              muted={isMuted}
              onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="h-full w-full object-contain"
            >
              {videoWebmUrl && <source src={videoWebmUrl} type="video/webm" />}
              <source src={videoUrl} type="video/mp4" />
              Seu navegador não suporta a reprodução deste vídeo.
            </video>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-zinc-400">
              Vídeo indisponível para este projeto.
            </div>
          )}

          {isPlaying && (
            <div className="pointer-events-none absolute left-6 right-6 top-6 flex items-center justify-between text-[11px] text-amber-400/90">
              <span className="rounded border border-amber-500/20 bg-black/60 px-2.5 py-1 font-mono">REC 4K • 24FPS • COLOR LOG</span>
              <span className="font-display font-bold tracking-[0.25em] text-white/70">NEXORA</span>
            </div>
          )}
        </div>

        <div className="border-t border-white/[0.08] bg-[#0e0f16] p-6">
          <div className="mb-4 flex items-center justify-between gap-4 text-xs text-zinc-400">
            <span className="font-mono">{formatTime((progress / 100) * duration)} / {formatTime(duration)}</span>
            <div className="flex items-center gap-3">
              <span>{Math.round(progress)}%</span>
              <button
                type="button"
                onClick={() => {
                  setIsMuted((muted) => !muted);
                  if (videoRef.current) videoRef.current.muted = !isMuted;
                }}
                className="text-amber-300 hover:text-amber-200"
                aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
              >
                {isMuted ? 'ATIVAR SOM' : 'SILENCIAR'}
              </button>
            </div>
          </div>
          <div className="mb-5 h-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-amber-400 transition-[width] duration-150" style={{ width: `${progress}%` }} />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-[11px] font-medium text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Renderizado com padrão cinematográfico</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(category);
              }}
              className="flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 transition-all hover:bg-amber-300 sm:w-auto gold-glow"
            >
              <span>Quero um vídeo neste estilo</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
