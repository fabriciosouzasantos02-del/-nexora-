import { Instagram, Linkedin, Youtube, Film } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Serviços', href: '#para-quem' },
    { label: 'Processo', href: '#processo' },
    { label: 'Sobre', href: '#manifesto' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#060608] border-t border-white/[0.08] py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-500/30 flex items-center justify-center p-1">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <path
                  d="M8 32V8L24 32V8"
                  stroke="#D4AF37"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 16L32 8V32"
                  stroke="#D4AF37"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold tracking-[0.2em] text-white uppercase font-display leading-tight">
                NEXORA
              </span>
              <span className="text-[8px] tracking-[0.3em] text-amber-400 font-medium uppercase leading-none">
                AI CREATIVE STUDIO
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm text-zinc-400 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider hidden sm:inline">
              Siga a NEXORA
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 hover:border-amber-400 hover:text-amber-400 text-zinc-300 flex items-center justify-center transition-all"
                aria-label="Instagram da NEXORA"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 hover:border-amber-400 hover:text-amber-400 text-zinc-300 flex items-center justify-center transition-all"
                aria-label="LinkedIn da NEXORA"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 hover:border-amber-400 hover:text-amber-400 text-zinc-300 flex items-center justify-center transition-all"
                aria-label="YouTube da NEXORA"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 hover:border-amber-400 hover:text-amber-400 text-zinc-300 flex items-center justify-center transition-all"
                aria-label="TikTok da NEXORA"
              >
                <Film className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} NEXORA AI CREATIVE STUDIO. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Termos de Uso</span>
            <span className="hover:text-zinc-300 cursor-pointer">Privacidade</span>
            <span className="hover:text-zinc-300 cursor-pointer">Diretrizes de IA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
