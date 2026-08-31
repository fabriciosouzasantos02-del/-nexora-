import { useState, useEffect, useRef, type FormEvent } from 'react';
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
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(initialPackage || 'PROFISSIONAL (3 VÍDEOS)');
  const [contactType, setContactType] = useState('Orçamento de vídeo');
  const [niche, setNiche] = useState(initialNiche || 'E-commerce');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (initialPackage) setSelectedPackage(initialPackage);
    if (initialNiche) setNiche(initialNiche);
  }, [initialPackage, initialNiche]);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = modalRef.current;
    const focusableSelector = 'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]';
    const focusInitialControl = () => dialog?.querySelector<HTMLElement>(focusableSelector)?.focus();
    focusInitialControl();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedRef.current?.focus();
      previouslyFocusedRef.current = null;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, phone, businessName, niche, selectedPackage, contactType, details }),
      });
      const contentType = response.headers.get('content-type') || '';
      const payload = contentType.includes('application/json') ? await response.json() : null;

      if (!response.ok || !payload?.success) {
        throw new Error(payload?.error || 'Não foi possível enviar agora. Tente novamente.');
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Não foi possível enviar agora. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá NEXORA! Me chamo ${name || 'um cliente'} da empresa ${businessName || 'meu negócio'}.\n` +
      `Meu e-mail: ${email || 'não informado'}\n` +
      `Tipo de contato: ${contactType}\n` +
      `Estou interessado no pacote: ${selectedPackage}\n` +
      `Segmento: ${niche}\n` +
      `Detalhes: ${details || 'Gostaria de uma proposta personalizada'}`
    );
    window.open(`https://wa.me/5511951493429?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        aria-labelledby="quote-modal-title"
        aria-describedby="quote-modal-description"

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
              <h2 id="quote-modal-title" className="text-2xl font-bold tracking-tight text-white">
                Vamos criar algo cinematográfico
              </h2>
              <p id="quote-modal-description" className="text-xs sm:text-sm text-zinc-400 mt-1 font-light">
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

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Como podemos ajudar?
                </label>
                <select
                  value={contactType}
                  onChange={(e) => setContactType(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Orçamento de vídeo">Quero solicitar um orçamento</option>
                  <option value="Nova ideia">Quero apresentar uma ideia</option>
                  <option value="Suporte">Preciso de suporte / retorno</option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                    E-mail
                  </label>
                  <div className="relative">
                    <Send className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="voce@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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

              {submitError ? (
                <p className="text-xs text-red-300" role="alert" aria-live="polite">
                  {submitError}
                </p>
              ) : null}

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-zinc-950 hover:brightness-110 disabled:opacity-60 disabled:cursor-wait transition-all flex items-center justify-center gap-2 gold-glow"
                >
                  <Send className="w-4 h-4 text-zinc-950" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar solicitação'}</span>
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
