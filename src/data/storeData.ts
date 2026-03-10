export const storeData = {
  name: 'Loja Tutti Frutti',
  segment: 'Compras e varejo',
  specialty: 'Roupas Infantil e Juvenil',
  city: 'Piratininga - SP',
  rating: '4,5',
  reviewsCount: 15,
  phoneDisplay: '(14) 3265-1473',
  whatsappDisplay: '(14) 99817-2418',
  phoneLink: 'tel:+551432651473',
  whatsappLink: 'https://wa.me/5514998172418',
  address: 'Rua Dr. José Lisboa Júnior, 138, Piratininga - SP, 17490-000',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Jos%C3%A9+Lisboa+J%C3%BAnior,+138,+Piratininga+-+SP,+17490-000',
  status: 'Fechado · Abre terça às 09:00',
  description:
    'Moda infantil e juvenil com variedade, estilo e atendimento que encanta.',
};

export const quickInfo = [
  { label: 'Telefone', value: storeData.phoneDisplay, icon: 'phone' },
  { label: 'WhatsApp', value: storeData.whatsappDisplay, icon: 'message-circle' },
  { label: 'Endereço', value: 'Rua Dr. José Lisboa Júnior, 138', icon: 'map-pin' },
  { label: 'Cidade', value: storeData.city, icon: 'building-2' },
  { label: 'Status', value: storeData.status, icon: 'clock-3' },
  { label: 'Segmento', value: storeData.specialty, icon: 'shirt' },
] as const;

export const socialProof = [
  'Roupas lindas',
  'Muitas opções',
  'Atendimento top',
  'Loja completa',
  'Atendentes ótimas',
] as const;

export const highlights = [
  'Moda Infantil',
  'Moda Juvenil',
  'Atendimento de Qualidade',
  'Variedade de Peças',
  'Loja Bem Avaliada',
] as const;
