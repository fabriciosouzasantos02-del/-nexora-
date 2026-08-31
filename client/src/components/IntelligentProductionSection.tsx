/** Direção visual: método apresentado como uma timeline de produção, com interface escura e um único frame de tecnologia como foco. */
import { User, FolderOpen, Sparkles, LayoutGrid, Film, ArrowRight, Lightbulb, Building2, Globe, Camera, Palette, FileText, Users2 } from 'lucide-react';
import { MATERIALS_DATA, SMART_FLOW_STEPS } from '../data/nexoraData';

export function IntelligentProductionSection() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User className="w-5 h-5" />;
      case 'FolderOpen': return <FolderOpen className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5" />;
      case 'Film': return <Film className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getMaterialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className="w-3.5 h-3.5" />;
      case 'Building2': return <Building2 className="w-3.5 h-3.5" />;
      case 'Globe': return <Globe className="w-3.5 h-3.5" />;
      case 'Camera': return <Camera className="w-3.5 h-3.5" />;
      case 'Palette': return <Palette className="w-3.5 h-3.5" />;
      case 'FileText': return <FileText className="w-3.5 h-3.5" />;
      case 'Users2': return <Users2 className="w-3.5 h-3.5" />;
      default: return <FileText className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="producao-inteligente" className="py-24 bg-[#08080c] relative overflow-hidden border-t border-white/[0.06]">
      {/* Glow behind section */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRODUÇÃO INTELIGENTE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
              Sua produção começa <br className="hidden sm:inline" />
              com a ideia. <span className="text-amber-400 font-serif-cinematic italic">Não com uma câmera.</span>
            </h2>

            <p className="text-base text-zinc-400 max-w-xl leading-relaxed font-light">
              Você fornece as informações e materiais. A NEXORA transforma tudo em uma produção audiovisual completa, mesmo sem gravação presencial.
            </p>
          </div>

          {/* Right Preview Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-amber-500/30 p-1.5 bg-gradient-to-br from-amber-500/20 via-zinc-900 to-zinc-950 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-zinc-950">
                <img
                  src="/assets/images/post-production_c2c0901a.webp"
                  alt="Profissional trabalhando em múltiplos monitores durante a pós-produção da Nexora"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_42%] brightness-75 contrast-110 saturate-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-zinc-300 font-mono">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    AI ENGINE • 4K ULTRA-CINEMA
                  </span>
                  <span className="text-zinc-400">FPS: 24.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Flow */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SMART_FLOW_STEPS.map((step, idx) => (
              <div
                key={step.name}
                className="relative bg-zinc-900/70 border border-white/[0.08] hover:border-amber-500/40 rounded-2xl p-5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-all">
                      {getStepIcon(step.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-amber-400/80 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-2 group-hover:text-amber-300 transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector indicator */}
                {idx < SMART_FLOW_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-amber-500/40">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Materials you can send */}
        <div className="bg-[#0f1017]/90 border border-white/[0.08] rounded-2xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-5 text-center sm:text-left">
            MATERIAIS QUE VOCÊ PODE ENVIAR
          </p>

          <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center justify-center sm:justify-start">
            {MATERIALS_DATA.map((mat) => (
              <div
                key={mat.name}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/[0.07] hover:border-amber-400/40 text-xs font-medium text-zinc-200 transition-all shadow-sm"
              >
                <div className="text-amber-400">
                  {getMaterialIcon(mat.iconName)}
                </div>
                <span>{mat.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
