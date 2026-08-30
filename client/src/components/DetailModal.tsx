import { X, Camera, LayoutGrid, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { BEHIND_THE_SCENES } from '../data/nexoraData';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'bastidores' | 'storyboard' | null;
  onOpenQuote: () => void;
}

export function DetailModal({ isOpen, onClose, type, onOpenQuote }: DetailModalProps) {
  if (!isOpen || !type) return null;

  const isBastidores = type === 'bastidores';
  const data = isBastidores ? BEHIND_THE_SCENES.bastidores : BEHIND_THE_SCENES.storyboard;

  const storyboardFrames = [
    { frame: '01', title: 'Estabelecendo Atmosfera', angle: 'Plano Geral (Wide)', notes: 'Abertura imersiva com iluminação volumétrica e silhueta.' },
    { frame: '02', title: 'Apresentação do Produto / Solução', angle: 'Macro Close-Up', notes: 'Destaque para texturas, materiais nobres e reflexos de luz dourada.' },
    { frame: '03', title: 'O Clímax Visual', angle: 'Câmera em Órbita Dinâmica', notes: 'Movimento contínuo acelerando a percepção de tecnologia e impacto.' },
    { frame: '04', title: 'Call To Action & Assinatura', angle: 'Plano Médio / Logo Reveal', notes: 'Encerramento com clareza da marca e chamada direta para ação comercial.' },
  ];

  const bastidoresHighlights = [
    { title: 'Iluminação & Fotometria', desc: 'Esquemas de luz dramáticos em 3 pontos com refletores quentes e luz de recorte.' },
    { title: 'Direção de Arte & IA Controlada', desc: 'Prompts de geração fotorealistas orientados por diretores com anos de set cinematográfico.' },
    { title: 'Color Grading & Trilha Orquestrada', desc: 'Tratamento de cor em espaço LOG com curvas de filme 35mm e sound design imersivo.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#0e0f16] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-zinc-100 gold-glow max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-semibold tracking-wider uppercase mb-2">
            {isBastidores ? <Camera className="w-3.5 h-3.5" /> : <LayoutGrid className="w-3.5 h-3.5" />}
            <span>{data.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
            {data.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-6 border border-white/10 shadow-lg">
          <img
            src={data.imageUrl}
            alt={data.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-95"
          />
        </div>

        {/* Specific content based on type */}
        {isBastidores ? (
          <div className="space-y-4 mb-6">
            <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Pilares da Direção Cinematográfica NEXORA
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {bastidoresHighlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/70 border border-white/5">
                  <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-bold text-white">{item.title}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4 mb-6">
            <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Exemplo de Estrutura de Storyboard & Cenas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {storyboardFrames.map((frame) => (
                <div key={frame.frame} className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-bold text-amber-400">CENA {frame.frame}</span>
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">{frame.angle}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white mb-1">{frame.title}</h4>
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">{frame.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-zinc-400">
            Pronto para ver essa metodologia aplicada ao seu negócio?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-400 text-zinc-950 hover:bg-amber-300 transition-all gold-glow flex items-center justify-center gap-2"
          >
            <span>Solicitar proposta para meu vídeo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
