/** Direção visual: o App segue a montagem vertical da referência — hero, prova, problema, públicos, método e conversão. */
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandsSection } from './components/BrandsSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { AudienceSection } from './components/AudienceSection';
import { IntelligentProductionSection } from './components/IntelligentProductionSection';
import { ProcessSection } from './components/ProcessSection';
import { BehindTheScenesSection } from './components/BehindTheScenesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PackagesSection } from './components/PackagesSection';
import { ManifestoSection } from './components/ManifestoSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { VideoModal } from './components/VideoModal';
import { DetailModal } from './components/DetailModal';
import { ProjectItem } from './types';

export default function App() {
  // Modal states
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedPackageForQuote, setSelectedPackageForQuote] = useState<string | undefined>();
  const [selectedNicheForQuote, setSelectedNicheForQuote] = useState<string | undefined>();

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isShowreel, setIsShowreel] = useState(false);

  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [detailType, setDetailType] = useState<'bastidores' | 'storyboard' | null>(null);

  // Handlers
  const handleOpenQuote = (pkgOrNiche?: string) => {
    if (pkgOrNiche) {
      if (pkgOrNiche.includes('VÍDEO') || pkgOrNiche.includes('ESSENCIAL') || pkgOrNiche.includes('PROFISSIONAL') || pkgOrNiche.includes('ESTRATÉGICO')) {
        setSelectedPackageForQuote(pkgOrNiche);
      } else {
        setSelectedNicheForQuote(pkgOrNiche);
      }
    }
    setQuoteModalOpen(true);
  };

  const handleOpenShowreel = () => {
    setSelectedProject(null);
    setIsShowreel(true);
    setVideoModalOpen(true);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsShowreel(false);
    setVideoModalOpen(true);
  };

  const handleOpenDetailModal = (type: 'bastidores' | 'storyboard') => {
    setDetailType(type);
    setDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#EDEDEE] selection:bg-[#d4af37] selection:text-[#08080a] relative">
      
      {/* Fixed Navigation Bar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onOpenShowreel={handleOpenShowreel}
        />

        {/* 2. Prova social */}
        <BrandsSection />

        {/* 3. O problema e a solução */}
        <ProblemSolutionSection />

        {/* 4. Para quem a Nexora produz */}
        <AudienceSection onOpenQuote={(niche) => handleOpenQuote(niche)} />

        {/* 5. Produção inteligente */}
        <IntelligentProductionSection />

        {/* 6. Processo de produção */}
        <ProcessSection />

        {/* 7. Bastidores + storyboard */}
        <BehindTheScenesSection onOpenModal={handleOpenDetailModal} />

        {/* 8. Alguns trabalhos */}
        <PortfolioSection
          onSelectProject={handleSelectProject}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 9. Pacotes */}
        <PackagesSection onSelectPackage={(pkg) => handleOpenQuote(pkg)} />

        {/* 10. Nosso manifesto */}
        <ManifestoSection />

        {/* 11. CTA final */}
        <CtaSection onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* 14. Rodapé */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialPackage={selectedPackageForQuote}
        initialNiche={selectedNicheForQuote}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        project={selectedProject}
        isShowreel={isShowreel}
        onOpenQuote={(cat) => handleOpenQuote(cat)}
      />

      <DetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        type={detailType}
        onOpenQuote={() => handleOpenQuote()}
      />

    </div>
  );
}
