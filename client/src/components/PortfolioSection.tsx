/** Direção visual: portfólio em uma fileira de frames de campanha, compacto no desktop e com play como único acento dourado. */
import { PORTFOLIO_DATA } from '../data/nexoraData';
import { ProjectItem } from '../types';
import { ArrowRight, Film, Play } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

export function PortfolioSection({ onSelectProject, onOpenQuote }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="relative border-t border-white/[0.06] bg-[#090a0f] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6 text-center">
          <div className="flex items-center justify-center gap-3 text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">
            <Film className="h-3.5 w-3.5" />
            <span>Alguns trabalhos</span>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
          {PORTFOLIO_DATA.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelectProject(project)}
              className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-[#0b0c10] p-4 text-left transition-transform duration-300 hover:z-10 hover:-translate-y-1 sm:min-h-[290px] lg:min-h-[232px]"
              aria-label={`Abrir projeto ${project.title}`}
            >
              <img
                src={project.imageUrl}
                alt={`${project.category} — ${project.title}`}
                referrerPolicy="no-referrer"
                className="cinematic-frame absolute inset-0 h-full w-full object-cover object-[center_48%] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/55 to-[#070709]/10" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.22em] text-zinc-300">FILME 0{index + 1}</span>
                <span className="text-[10px] text-zinc-400">{project.duration}</span>
              </div>
              <div className="relative z-10 mt-auto pt-16">
                <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400">{project.category}</span>
                <h3 className="font-display text-lg font-bold leading-none tracking-[-0.03em] text-white">{project.title}</h3>
                <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-zinc-950 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            id="view-all-projects-btn"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 border border-white/15 bg-transparent px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:border-amber-400 hover:text-amber-300"
          >
            <span>Ver todos os projetos</span>
            <ArrowRight className="h-4 w-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
