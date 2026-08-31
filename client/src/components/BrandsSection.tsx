/** Direção visual: prova social em uma faixa de créditos, com logotipos tipográficos neutros e ouro reservado ao título da cena. */
import { BRANDS_DATA } from '../data/nexoraData';

export function BrandsSection() {
  return (
    <section id="brands" className="border-y border-white/[0.06] bg-[#0c0d12]/80 py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-center font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">MARCAS QUE CONFIAM NA NEXORA</p>
        <div className="grid grid-cols-2 items-center gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {BRANDS_DATA.map((brand) => (
            <div key={brand.name} className="group flex items-center justify-center px-2 text-center">
              <span className="font-display text-[11px] font-bold tracking-[0.12em] text-zinc-300 transition-colors group-hover:text-white">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
