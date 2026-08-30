import { Camera, LayoutGrid, ArrowRight, Eye } from 'lucide-react';
import { BEHIND_THE_SCENES } from '../data/nexoraData';

interface BehindTheScenesSectionProps {
  onOpenModal: (type: 'bastidores' | 'storyboard') => void;
}

/** Direção visual: dois frames editoriais em paralelo, com texto de direção e imagem tratada como still do mesmo set. */
export function BehindTheScenesSection({ onOpenModal }: BehindTheScenesSectionProps) {
  return (
    <section id="bastidores-storyboard" className="py-12 sm:py-16 bg-[#08080a] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
          
          {/* BASTIDORES CARD */}
          <div className="bg-[#0e0f15] hover:bg-[#11131a] p-4 sm:p-5 flex flex-col justify-between transition-colors duration-300 group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
                <Camera className="w-3.5 h-3.5" />
                <span>{BEHIND_THE_SCENES.bastidores.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 leading-snug">
                {BEHIND_THE_SCENES.bastidores.title}
              </h3>

              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-6 border border-white/10 group-hover:border-amber-500/30 transition-all">
                <img
                  src={BEHIND_THE_SCENES.bastidores.imageUrl}
                  alt="Bastidores de produção audiovisual cinematográfica com câmeras profissionais e iluminação"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_46%] group-hover:scale-105 transition-transform duration-700 brightness-70 contrast-110 saturate-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/80 via-transparent to-transparent" />
                
                <button
                  onClick={() => onOpenModal('bastidores')}
                  className="absolute bottom-4 right-4 bg-zinc-950/80 hover:bg-amber-400 hover:text-zinc-950 text-white backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-medium border border-white/10 flex items-center gap-2 transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Explorar galeria</span>
                </button>
              </div>
            </div>

            <div>
              <button
                id="view-bastidores-btn"
                onClick={() => onOpenModal('bastidores')}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 hover:border-amber-400 transition-all flex items-center justify-center gap-2"
              >
                <span>Ver bastidores</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* STORYBOARD CARD */}
          <div className="bg-[#0e0f15] hover:bg-[#11131a] p-4 sm:p-5 flex flex-col justify-between transition-colors duration-300 group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{BEHIND_THE_SCENES.storyboard.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 leading-snug">
                {BEHIND_THE_SCENES.storyboard.title}
              </h3>

              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-6 border border-white/10 group-hover:border-amber-500/30 transition-all">
                <img
                  src={BEHIND_THE_SCENES.storyboard.imageUrl}
                  alt="Esboços e ilustrações de storyboard profissional para planejamento de cenas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_46%] group-hover:scale-105 transition-transform duration-700 brightness-70 contrast-110 saturate-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/80 via-transparent to-transparent" />
                
                <button
                  onClick={() => onOpenModal('storyboard')}
                  className="absolute bottom-4 right-4 bg-zinc-950/80 hover:bg-amber-400 hover:text-zinc-950 text-white backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-medium border border-white/10 flex items-center gap-2 transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver quadros</span>
                </button>
              </div>
            </div>

            <div>
              <button
                id="view-storyboard-btn"
                onClick={() => onOpenModal('storyboard')}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 hover:border-amber-400 transition-all flex items-center justify-center gap-2"
              >
                <span>Ver storyboard</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
