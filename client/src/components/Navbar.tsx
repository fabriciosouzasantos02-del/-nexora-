import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

/** Direção visual: cabeçalho de estúdio premium com marca dourada legível em superfícies escuras e navegação discreta. */

interface NavbarProps {
  onOpenQuote: (packageName?: string) => void;
}

export function Navbar({ onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Serviços', href: '#para-quem' },
    { label: 'Processo', href: '#processo' },
    { label: 'Sobre', href: '#manifesto' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-500/30 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
            <img
              src="/manus-storage/nexora-symbol_b0e18b14.png"
              alt="Símbolo Nexora"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-[0.2em] text-white uppercase font-display leading-tight flex items-center gap-1.5">
              NEXORA
            </span>
            <span className="text-[9px] tracking-[0.3em] text-amber-400/80 font-medium uppercase leading-none">
              AI CREATIVE STUDIO
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors tracking-wide relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-quote-btn"
            onClick={() => onOpenQuote()}
            className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-transparent text-amber-300 border border-amber-500/40 hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-200 gold-glow-subtle flex items-center gap-2"
          >
            <span>Solicitar orçamento</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0f13]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-amber-400 py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                id="mobile-nav-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl text-center text-xs font-bold tracking-wider uppercase bg-amber-400 text-zinc-950 hover:bg-amber-300 transition-all gold-glow flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-zinc-950" />
                <span>Solicitar orçamento</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
