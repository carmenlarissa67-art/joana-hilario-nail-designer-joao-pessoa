// ==============================================================================
// CONFIGURAÇÃO CENTRAL DA CLIENTE — JOANA HILARIO NAIL DESIGNER (JOÃO PESSOA)
// Toda a personalização do site fica neste arquivo.
// Fontes: dados da empresa no Instagram @joanahilarionails (endereço, horário),
// card "Nossos serviços" e card "Agendamento exclusivo por mensagens via WhatsApp".
// ATENÇÃO: os valores dos serviços abaixo são uma ESTIMATIVA para a demo.
// Trocar pelos valores reais da Joana antes da entrega.
// ==============================================================================

export const studioConfig = {
  name: "Joana Hilario",
  nameSuffix: "Nail Designer",
  fullName: "Joana Hilario Nail Designer",
  tagline: "Beleza, cuidado e elegância em Manaíra",
  subtitle:
    "Alongamento em molde F1, molde de papel e fibra de vidro, unhas em gel, pé e mão. Escolha o serviço, veja o valor e reserve seu horário em poucos toques.",
  city: "João Pessoa, PB",
  neighborhood: "Manaíra",
  addressShort: "Av. João Maurício, 315, sala 6",
  address: "Av. João Maurício, 315, sala 6 - Manaíra, João Pessoa - PB, 58038-000",
  addressNote: "No espaço Vanderleia Arruda",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+João+Maurício,+315,+Manaíra,+João+Pessoa+-+PB",
  whatsappNumber: "5583987534161", // Apenas dígitos com DDI e DDD
  whatsappDisplay: "(83) 98753-4161",
  instagramHandle: "@joanahilarionails",
  instagramUrl: "https://www.instagram.com/joanahilarionails",
  // Link do Calendly. Na demo usamos a agenda de teste; na entrega vai o da Joana.
  calendlyUrl: "https://calendly.com/carbosalarissa/30min",
  workingHours: [
    { days: "Terça a Sábado", hours: "09h às 18h" },
    { days: "Domingo e Segunda", hours: "Fechado" },
  ],
  workingHoursShort: "Terça a sábado, 09h às 18h",
  // Dias sem atendimento (0 = domingo ... 6 = sábado). Vazio = abre todos os dias.
  closedWeekdays: [0, 1],
  periods: [
    { id: "Manhã (09h às 12h)", label: "Manhã", sub: "09h às 12h" },
    { id: "Tarde (13h às 18h)", label: "Tarde", sub: "13h às 18h" },
  ],
  paymentNote: "O agendamento é feito só por mensagem no WhatsApp, para o atendimento ser mais rápido e organizado.",
  // Avisos que a cliente confirma antes de agendar
  bookingNotes: [
    "Agendamento só por mensagem no WhatsApp. Por favor, evite ligações.",
    "Chegue 5 minutinhos antes do seu horário.",
    "Se precisar desmarcar, avise com antecedência para liberar a vaga.",
  ],
  decoratedNote: "Decorações e nail art têm valor sob consulta. É só escrever nas observações.",

  // Categorias de serviço (cada uma com suas opções e valores)
  categories: [
    {
      id: "alongamento",
      title: "Alongamento de Unhas",
      short: "Alongamento",
      description: "Três técnicas para você escolher: molde F1, molde de papel ou fibra de vidro. Unha fina, resistente e no formato que combina com a sua mão.",
      image: "/images/estrelas-francesinha-preta.webp",
      duration: "2h a 2h30",
      maintenance: "Manutenção indicada a cada 20 a 25 dias",
      notes: ["Inclui cutilagem", "Formato à sua escolha: amendoado, quadrado, bailarina"],
      items: [
        { id: "molde-f1", title: "Alongamento em molde F1", price: 140, popular: true },
        { id: "molde-papel", title: "Alongamento em molde de papel", price: 150 },
        { id: "fibra", title: "Alongamento na fibra de vidro", price: 160 },
      ],
    },
    {
      id: "manutencao",
      title: "Manutenção",
      short: "Manutenção",
      description: "Manutenção do alongamento no prazo certo, para as unhas continuarem bonitas e firmes.",
      image: "/images/marsala-quadrado.webp",
      duration: "1h30 a 2h",
      maintenance: "Indicada a cada 20 a 25 dias",
      notes: ["Inclui cutilagem", "Unha quebrada é cobrada à parte"],
      items: [
        { id: "manut-f1", title: "Manutenção do molde F1", price: 90, popular: true },
        { id: "manut-papel-fibra", title: "Manutenção do molde de papel ou fibra", price: 100 },
      ],
    },
    {
      id: "gel",
      title: "Unhas em Gel",
      short: "Unhas em Gel",
      description: "Banho de gel para a unha natural crescer forte, ou esmaltação em gel com brilho que dura semanas sem descascar.",
      image: "/images/chocolate-gel.webp",
      duration: "1h a 1h30",
      maintenance: "Dura de 15 a 20 dias",
      notes: ["Inclui cutilagem"],
      items: [
        { id: "banho-gel", title: "Banho de gel", price: 90 },
        { id: "gel-mao", title: "Esmaltação em gel nas mãos", price: 60, popular: true },
        { id: "gel-pe", title: "Esmaltação em gel nos pés", price: 60 },
        { id: "gel-mao-pe", title: "Esmaltação em gel nas mãos e nos pés", price: 110 },
      ],
    },
    {
      id: "tradicionais",
      title: "Serviços Tradicionais",
      short: "Pé e Mão",
      description: "O cuidado do dia a dia, com cutilagem caprichada e esmaltação comum.",
      image: "/images/francesinha-classica.webp",
      duration: "1h",
      maintenance: "",
      notes: ["Esmaltação comum inclusa"],
      items: [
        { id: "mao", title: "Manicure (mãos)", price: 30 },
        { id: "pe", title: "Pedicure (pés)", price: 35 },
        { id: "pe-mao", title: "Pé e mão", price: 60, popular: true },
      ],
    },
    {
      id: "remocao",
      title: "Remoção",
      short: "Remoção",
      description: "Retirada cuidadosa do alongamento ou do gel, preservando a sua unha natural.",
      image: "/images/esmaltacao-preta.webp",
      duration: "40min",
      maintenance: "",
      notes: [],
      items: [
        { id: "remocao", title: "Remoção de alongamento ou gel", price: 40 },
      ],
    },
  ],

  // Adicionais que podem ser somados no agendamento
  addons: [
    { id: "nail-art", name: "Decoração simples (por unha)", price: 5 },
    { id: "quebrada", name: "Reposição de unha quebrada (por unha)", price: 15 },
  ],

  // Informações importantes
  policies: [
    {
      title: "Só por mensagem",
      description: "O agendamento é exclusivo por mensagem no WhatsApp. Assim a Joana responde mais rápido e organiza a agenda. Por favor, evite ligações.",
    },
    {
      title: "Pontualidade",
      description: "Chegue 5 minutinhos antes. Assim o seu horário rende e ninguém fica esperando.",
    },
    {
      title: "Desmarcar",
      description: "Imprevisto acontece. Avise com antecedência para a vaga ir para outra cliente.",
    },
    {
      title: "Decorações",
      description: "Nail art, pedrarias e decorações especiais têm valor sob consulta. Mande a foto da inspiração.",
    },
  ],

  // Galeria de fotos de resultados (fotos reais do Instagram da Joana)
  gallery: [
    { url: "/images/francesinha-classica.webp", tag: "Francesinha clássica" },
    { url: "/images/estrelas-francesinha-preta.webp", tag: "Francesinha preta com estrelas" },
    { url: "/images/marsala-quadrado.webp", tag: "Marsala no quadrado" },
    { url: "/images/chocolate-gel.webp", tag: "Chocolate em gel" },
    { url: "/images/esmaltacao-preta.webp", tag: "Preto espelhado" },
  ],
};

// Lista "achatada" de todos os serviços, usada no agendamento
export const allServices = studioConfig.categories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.title,
    categoryId: cat.id,
    duration: item.duration || cat.duration,
  }))
);

export const formatPrice = (value) =>
  `R$ ${Number(value).toFixed(2).replace(".", ",")}`;
