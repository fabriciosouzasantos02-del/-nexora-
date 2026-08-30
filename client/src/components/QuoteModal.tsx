import { useState, useEffect, type FormEvent } from 'react';
import { X, Sparkles, Send, CheckCircle2, MessageSquare, Phone, User, Building, Film } from 'lucide-react';
import { PACKAGES_DATA } from '../data/nexoraData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
  initialNiche?: string;
}

export function QuoteModal({ isOpen, onClose, initialPackage, initialNiche }: QuoteModalProps) {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(initialPackage || 'PROFISSIONAL (3 VÍDEOS)');
  const [niche, setNiche] = useState(initialNiche || 'E-commerce');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackage) setSelectedPackage(initialPackage);
    if (initialNiche) setNiche(initialNiche);
  }, [initialPackage, initialNiche]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá NEXORA! Me chamo ${name || 'um cliente'} da empresa ${businessName || 'meu negócio'}.\n` +
      `Estou interessado no pacote: ${selectedPackage}\n` +
      `Segmento: ${niche}\n` +
      `Detalhes: ${details || 'Gostaria de uma proposta personalizada'}`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#0e0f16] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-zinc-100 gold-glow max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-semibold tracking-wider uppercase mb-2">
                <Sparkles className="w-3 h-3" />
                <span>ORÇAMENTO PERSONALIZADO</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Vamos criar algo cinematográfico
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-light">
                Preencha as informações do seu negócio para receber uma proposta estratégica sob medida.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Package selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Pacote desejado
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {PACKAGES_DATA.map((pkg) => {
                    const label = `${pkg.name} (${pkg.subtitle})`;
                    const isSelected = selectedPackage.includes(pkg.name);
                    return (
                      <button
                        type="button"
                        key={pkg.id}
                        onClick={() => setSelectedPackage(label)}
                        className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                          isSelected
                            ? 'border-amber-400 bg-amber-500/10 text-white font-semibold'
                            : 'border-white/10 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <div className="font-bold text-amber-300">{pkg.name}</div>
                        <div className="text-[10px] text-zinc-400">{pkg.subtitle} • R$ {pkg.price}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Seu nome
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Mendes"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Business Name & Niche */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Nome da empresa / marca
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Elevare Imóveis"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Segmento
                  </label>
                  <select
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Empresas & Institucional">Empresas & Institucional</option>
                    <option value="E-commerce & Produtos">E-commerce & Produtos</option>
                    <option value="Software / SaaS">Software / SaaS</option>
                    <option value="Serviços Locais & Clínicas">Serviços Locais & Clínicas</option>
                    <option value="Marcas Pessoais & Mentores">Marcas Pessoais & Mentores</option>
                    <option value="Imobiliária & Construtora">Imobiliária & Construtora</option>
                    <option value="Gastronomia & Restaurante">Gastronomia & Restaurante</option>
                    <option value="Outro Segmento">Outro Segmento</option>
                  </select>
                </div>
              </div>

              {/* Briefing details */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Qual o objetivo principal do vídeo?
                </label>
                <textarea
                  rows={3}
                  placeholder="Conte um pouco sobre o objetivo (ex: lançamento de produto, anúncio para captação, vídeo institucional para site, etc.)"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-zinc-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 gold-glow"
                >
                  <Send className="w-4 h-4 text-zinc-950" />
                  <span>Enviar solicitação</span>
                </button>
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chamar no WhatsApp</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-white">
              Solicitação recebida com sucesso!
            </h3>
            
            <p className="text-sm text-zinc-300 max-w-md mx-auto font-light leading-relaxed">
              Obrigado, <strong className="text-white">{name}</strong>. Nossa equipe de direção criativa já está analisando as informações da <strong className="text-amber-300">{businessName}</strong> e entrará em contato via WhatsApp ({phone}).
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleSendWhatsApp}
                className="px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Iniciar conversa agora</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 rounded-full text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
