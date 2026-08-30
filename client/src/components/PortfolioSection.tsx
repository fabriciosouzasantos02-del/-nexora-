import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/nexoraData';
import { ProjectItem } from '../types';
import { Play, Sparkles, ArrowRight, Film } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

export function PortfolioSection({ onSelectProject, onOpenQuote }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('TODOS');
  const filters = ['TODOS', 'E-COMMERCE', 'TECNOLOGIA / SAAS', 'MARCA PESSOAL', 'RESTAURANTE', 'SERVIÇOS LOCAIS', 'EMPRESA'];

  const filteredProjects = activeFilter === 'TODOS'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category.toUpperCase() === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#090a0f] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>PORTFÓLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projetos que geram resultados
            </h2>
            <p className="text-sm text-zinc-400 mt-2 font-light max-w-xl">
              Projetos audiovisuais desenvolvidos para marcas que buscam destaque imediato e posicionamento premium.
            </p>
          </div>

          {/* Quick Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeFilter === f
                    ? 'bg-amber-400 text-zinc-950 font-bold shadow-md'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-amber-500/50 bg-[#0e0f15] transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`${project.category} - ${project.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-85 group-hover:brightness-95 contrast-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f15] via-transparent to-transparent opacity-80" />

                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5 bg-zinc-950/80 backdrop-blur-md border border-amber-500/30 px-2.5 py-1 rounded-lg">
                  <span className="text-[10px] tracking-[0.2em] font-bold text-amber-300 uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Duration Badge */}
                {project.duration && (
                  <div className="absolute top-3.5 right-3.5 bg-zinc-950/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400">
                    {project.duration}
                  </div>
                )}

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-400/90 text-zinc-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-amber-300 transition-all gold-glow">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors uppercase font-display mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light line-clamp-2">
                  {project.subtitle}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button
            id="view-all-projects-btn"
            onClick={onOpenQuote}
            className="px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 hover:border-amber-400 transition-all inline-flex items-center gap-2"
          >
            <span>Ver todos os projetos</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
