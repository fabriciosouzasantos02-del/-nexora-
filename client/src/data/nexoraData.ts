import { AudienceItem, BrandItem, MaterialItem, PackageItem, ProcessStep, ProjectItem, ServiceItem } from '../types';

export const BRANDS_DATA: BrandItem[] = [
  { name: 'ASTRO TECH', sub: 'TECH', iconType: 'astro' },
  { name: 'ELEVARE', sub: 'IMÓVEIS', iconType: 'elevare' },
  { name: 'ORION', sub: 'SOFTWARES', iconType: 'orion' },
  { name: 'VITALIS', sub: 'SAÚDE E BEM-ESTAR', iconType: 'vitalis' },
  { name: 'NUTRAX', sub: 'SUPLEMENTOS', iconType: 'nutrax' },
  { name: 'VELOCE', sub: 'AUTOMOTIVE', iconType: 'veloce' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'anuncios',
    title: 'Criativos para anúncios',
    description: 'Vídeos que param o scroll e geram cliques.',
    imageUrl: '/assets/images/smartphone-commercial_70f5c89b.webp',
  },
  {
    id: 'redes-sociais',
    title: 'Conteúdo para redes sociais',
    description: 'Reels, TikToks e vídeos curtos que engajam.',
    imageUrl: '/assets/images/creator-smartphone_a70d5523.webp',
  },
  {
    id: 'cinematograficas',
    title: 'Produções cinematográficas',
    description: 'Histórias que emocionam e conectam.',
    imageUrl: '/assets/images/crew-camera_2f8618cb.webp',
  },
  {
    id: 'institucionais',
    title: 'Vídeos institucionais',
    description: 'Fortaleça sua marca e sua credibilidade.',
    imageUrl: '/assets/images/client-direction_13902d3b.webp',
  },
  {
    id: 'produtos',
    title: 'Vídeos de produtos',
    description: 'Mostre o valor do seu produto com impacto.',
    imageUrl: '/assets/images/product-camera_6d63c1fc.webp',
  },
];

export const PROBLEMS_DATA = [
  {
    title: 'Vídeos amadores que não passam credibilidade.',
    description: 'Formatos improvisados que diminuem a percepção de valor da sua marca e não constroem autoridade.',
  },
  {
    title: 'Mensagens confusas que não prendem a atenção.',
    description: 'Roteiros genéricos sem gancho inicial que fazem o público passar direto nos primeiros 3 segundos.',
  },
  {
    title: 'Produções caras, lentas e com resultados limitados.',
    description: 'Orçamentos de produtoras tradicionais de R$ 20k+ com semanas de espera para entregar vídeos estáticos.',
  },
  {
    title: 'Falta de estratégia e foco no que realmente importa.',
    description: 'Efeitos sem propósito que impressionam a equipe, mas não atraem leads e não geram vendas.',
  },
];

export const SOLUTIONS_DATA = [
  {
    title: 'Produções estratégicas pensadas para atingir objetivos.',
    description: 'Cada segundo é planejado para reter a atenção, educar o público e conduzir à conversão direta.',
  },
  {
    title: 'Narrativas que conectam e geram impacto.',
    description: 'Storytelling estruturado por diretores de cinema para despertar emoção genuína e identificação.',
  },
  {
    title: 'Tecnologia + criatividade para entregar mais com inteligência.',
    description: 'Processo ágil potencializado por IA de última geração que viabiliza cenários impossíveis.',
  },
  {
    title: 'Foco total em resultado, crescimento e posicionamento.',
    description: 'Vídeos pensados para anúncios de alta conversão, autoridade institucional e lançamentos.',
  },
];

export const AUDIENCE_DATA: AudienceItem[] = [
  {
    id: 'empresas',
    title: 'EMPRESAS',
    description: 'Institucional, cultura, posicionamento e apresentação.',
    imageUrl: '/assets/images/corporate-architecture_aed1ee49.webp',
  },
  {
    id: 'ecommerce',
    title: 'E-COMMERCE',
    description: 'Apresentação de produtos, campanhas, anúncios e lançamentos.',
    imageUrl: '/assets/images/luxury-product_ad8492e9.webp',
  },
  {
    id: 'saas',
    title: 'SOFTWARE / SAAS',
    description: 'Demo de produto, plataformas, funcionalidades e aquisição de clientes.',
    imageUrl: '/assets/images/post-production_c2c0901a.webp',
  },
  {
    id: 'locais',
    title: 'SERVIÇOS LOCAIS',
    description: 'Restaurantes, clínicas, imobiliárias, academias e muito mais.',
    imageUrl: '/assets/images/dish-photography_61292deb.webp',
  },
  {
    id: 'marcas-pessoais',
    title: 'MARCAS PESSOAIS',
    description: 'Autoridade, conteúdo, posicionamento e campanhas.',
    imageUrl: '/assets/images/professional-portrait_c6cd67d9.webp',
  },
  {
    id: 'muito-mais',
    title: 'E MUITO MAIS',
    description: 'Adaptamos o método para o nicho, objetivo e público do seu negócio.',
    imageUrl: '/assets/images/mountain-world_29f2d3d4.webp',
  },
];

export const SMART_FLOW_STEPS = [
  {
    number: '01',
    name: 'CLIENTE',
    description: 'Você tem uma ideia ou objetivo.',
    icon: 'User',
  },
  {
    number: '02',
    name: 'MATERIAIS',
    description: 'Informações, fotos, referências e identidade.',
    icon: 'FolderOpen',
  },
  {
    number: '03',
    name: 'DIREÇÃO CRIATIVA',
    description: 'Transformamos em conceito, roteiro e estratégia.',
    icon: 'Sparkles',
  },
  {
    number: '04',
    name: 'STORYBOARD',
    description: 'Planejamento visual de cada cena.',
    icon: 'LayoutGrid',
  },
  {
    number: '05',
    name: 'VÍDEO FINAL',
    description: 'Produção completa, edição e entrega.',
    icon: 'Film',
  },
];

export const MATERIALS_DATA: MaterialItem[] = [
  { name: 'Ideia ou briefing', iconName: 'Lightbulb' },
  { name: 'Informações do negócio', iconName: 'Building2' },
  { name: 'Site e redes sociais', iconName: 'Globe' },
  { name: 'Fotos e vídeos', iconName: 'Camera' },
  { name: 'Identidade visual', iconName: 'Palette' },
  { name: 'Referências e campanhas', iconName: 'FileText' },
  { name: 'Equipe e ambiente', iconName: 'Users2' },
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'BRIEFING',
    description: 'Entendemos seu objetivo e público.',
    iconName: 'Compass',
  },
  {
    number: '02',
    title: 'CONCEITO',
    description: 'Transformamos a ideia em direção criativa.',
    iconName: 'Sparkles',
  },
  {
    number: '03',
    title: 'ROTEIRO',
    description: 'Estruturamos a mensagem e o tom certo.',
    iconName: 'FileEdit',
  },
  {
    number: '04',
    title: 'STORYBOARD',
    description: 'Planejamos visualmente cada cena.',
    iconName: 'Layers',
  },
  {
    number: '05',
    title: 'PRODUÇÃO',
    description: 'Criamos cada detalhe com qualidade.',
    iconName: 'Video',
  },
  {
    number: '06',
    title: 'PÓS-PRODUÇÃO',
    description: 'Edição, efeitos e finalização com padrão cinematográfico.',
    iconName: 'Wand2',
  },
];

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    category: 'E-COMMERCE',
    title: 'Destaque que vende',
    subtitle: 'Comercial cinematográfico para linha de fragrâncias premium',
    imageUrl: '/assets/images/luxury-product_ad8492e9.webp',
    videoUrl: '/assets/videos/comercial-produto-luxo.mp4',
    duration: '0:30',
    description: 'Direção de arte sofisticada com reflexos dourados, texturas nobres e iluminação dramática de alto padrão comercial.',
  },
  {
    id: 'proj-2',
    category: 'TECNOLOGIA / SAAS',
    title: 'Inovação em movimento',
    subtitle: 'Vídeo explicativo com animação de interface 3D e métricas',
    imageUrl: '/assets/images/post-production_c2c0901a.webp',
    videoUrl: '/assets/videos/demo-software-saas.mp4',
    duration: '0:45',
    description: 'Demonstração de produto com linguagem dinâmica focada em captação de clientes corporativos e redução de atrito comercial.',
  },
  {
    id: 'proj-3',
    category: 'MARCA PESSOAL',
    title: 'Autoridade e conexão',
    subtitle: 'Manifesto de liderança para executivo e mentor de negócios',
    imageUrl: '/assets/images/professional-portrait_c6cd67d9.webp',
    videoUrl: '/assets/videos/anuncio-marca-pessoal.mp4',
    duration: '0:50',
    description: 'Vídeo de posicionamento transmitindo credibilidade sólida, elegância e clareza de visão de mercado.',
  },
  {
    id: 'proj-4',
    category: 'RESTAURANTE',
    title: 'Sabor que valoriza',
    subtitle: 'Campanha sensorial gastronômica com apelo irresistível',
    imageUrl: '/assets/images/dish-photography_61292deb.webp',
    videoUrl: '/assets/videos/comercial-restaurante.mp4',
    duration: '0:35',
    description: 'Fotografia gastronômica em macro com iluminação quente, movimento lento e apelo sensorial imediato.',
  },
  {
    id: 'proj-5',
    category: 'SERVIÇOS LOCAIS',
    title: 'Mais clientes, mais resultados',
    subtitle: 'Apresentação de clínica e estúdio de estética premium',
    imageUrl: '/assets/images/executive-office_7f5c8f52.webp',
    videoUrl: '/assets/videos/comercial-escritorio.mp4',
    duration: '0:40',
    description: 'Ambientes requintados, experiência do cliente e padrão de excelência visual para serviços de alto ticket.',
  },
  {
    id: 'proj-6',
    category: 'EMPRESA',
    title: 'Confiança que impulsiona',
    subtitle: 'Posicionamento institucional para holding de investimentos',
    imageUrl: '/assets/images/corporate-architecture_aed1ee49.webp',
    videoUrl: '/assets/videos/comercial-corporativo-nexora.mp4',
    duration: '0:60',
    description: 'Apresentação de infraestrutura moderna, solidez corporativa e impacto de mercado em escala global.',
  },
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'essencial',
    name: 'ESSENCIAL',
    subtitle: '1 VÍDEO',
    price: '800',
    deliveryTime: 'Entrega em até 7 dias úteis',
    features: [
      'Roteiro e conceito',
      'Storyboard',
      'Produção e edição',
      'Revisões inclusas',
      'Entrega em até 7 dias úteis',
    ],
  },
  {
    id: 'profissional',
    name: 'PROFISSIONAL',
    subtitle: '3 VÍDEOS',
    badge: 'MAIS ESCOLHIDO',
    isPopular: true,
    price: '2.200',
    deliveryTime: 'Entrega em até 14 dias úteis',
    features: [
      'Roteiro e conceito',
      'Storyboard',
      'Produção e edição',
      'Revisões inclusas',
      'Entrega em até 14 dias úteis',
    ],
  },
  {
    id: 'estrategico',
    name: 'ESTRATÉGICO',
    subtitle: '5 VÍDEOS',
    price: '3.497',
    deliveryTime: 'Entrega em até 21 dias úteis',
    features: [
      'Roteiro e conceito',
      'Storyboard',
      'Produção e edição',
      'Revisões inclusas',
      'Entrega em até 21 dias úteis',
    ],
  },
];

export const MANIFESTO_PRINCIPLES = [
  {
    title: 'Estratégia',
    description: 'Vídeos com propósito, não por acaso.',
    icon: 'Target',
  },
  {
    title: 'Tecnologia',
    description: 'Ferramentas de última geração com IA.',
    icon: 'Cpu',
  },
  {
    title: 'Criatividade',
    description: 'Ideias que saem do comum.',
    icon: 'Flame',
  },
  {
    title: 'Execução',
    description: 'Profissionais experientes em cada etapa.',
    icon: 'Award',
  },
  {
    title: 'Resultados reais',
    description: 'Mais engajamento, mais clientes, mais vendas.',
    icon: 'TrendingUp',
  },
];

export const BEHIND_THE_SCENES = {
  bastidores: {
    tag: 'BASTIDORES',
    title: 'Por trás de cada vídeo, existe estratégia, criatividade e direção.',
    imageUrl: '/assets/images/camera-operator_ae9e9c11.webp',
    description: 'Combinamos diretores de cena experientes, iluminação dramática e processos avançados de geração controlada por IA para criar atmosferas que prendem a atenção.',
  },
  storyboard: {
    tag: 'STORYBOARD',
    title: 'Cada cena é planejada antes de ser produzida.',
    imageUrl: '/assets/images/storyboard-review_1b967077.webp',
    description: 'Desenhamos quadro a quadro a sequência visual, ritmo, enquadramentos de câmera e transições antes de iniciar qualquer renderização ou montagem.',
  },
};
