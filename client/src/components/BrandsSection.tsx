import { BRANDS_DATA } from '../data/nexoraData';

export function BrandsSection() {
  return (
    <section id="brands" className="py-12 border-y border-white/[0.06] bg-[#0c0d12]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-8">
          MARCAS QUE CONFIAM NA NEXORA
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {BRANDS_DATA.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-white/[0.03] transition-all group w-full text-center"
            >
              <div className="flex items-center gap-2 mb-1">
                {/* Custom geometric crest for each brand */}
                {brand.iconType === 'astro' && (
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                )}
                {brand.iconType === 'elevare' && (
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                  </svg>
                )}
                {brand.iconType === 'orion' && (
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                )}
                {brand.iconType === 'vitalis' && (
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                )}
                {brand.iconType === 'nutrax' && (
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                )}
                {brand.iconType === 'veloce' && (
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                )}
                <span className="text-sm font-bold tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                  {brand.name}
                </span>
              </div>
              <span className="text-[9px] tracking-[0.2em] text-zinc-400 uppercase font-medium">
                {brand.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
