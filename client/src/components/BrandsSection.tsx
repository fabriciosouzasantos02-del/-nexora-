/** Direção visual: prova social em uma faixa de créditos, com logotipos tipográficos neutros e ouro reservado ao título da cena. */
import { BRANDS_DATA } from '../data/nexoraData';

export function BrandsSection() {
  return (
    <section id="brands" className="border-y border-white/[0.06] bg-[#0c0d12]/80 py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-center font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">MARCAS QUE CONFIAM NA NEXORA</p>
        <div className="grid grid-cols-2 items-center gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {BRANDS_DATA.map((brand, index) => (
            <div key={brand.name} className="group flex items-center justify-center gap-2 px-2 text-center">
              <span className="flex h-7 w-7 items-center justify-center border border-white/15 text-[11px] text-zinc-400 transition-colors group-hover:border-amber-400 group-hover:text-amber-300">{['✦', '◇', '◌', '♢', '⬡', '△'][index]}</span>
              <span>
                <span className="block font-display text-[11px] font-bold tracking-[0.12em] text-zinc-300 transition-colors group-hover:text-white">{brand.name}</span>
                <span className="block text-[7px] uppercase tracking-[0.2em] text-zinc-500">{brand.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
