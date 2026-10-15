export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Luísa Tecchio',
  monogram: 'LT',
  headline: 'A beleza de continuar sendo você.',
  cro: '',
  bio: 'Sou a Dra. Luísa Tecchio, enfermeira esteta. Meu olhar para a harmonização facial valoriza a sua beleza de forma personalizada e natural, respeitando os traços que fazem de você quem é.',
  education: [] as string[],
  specialties: ['Harmonização facial'],
  phone: '+55 (55) 99208-7414',
  whatsapp: '5555992087414',
  whatsappUrl: 'https://wa.me/5555992087414?text=Ol%C3%A1%2C%20Dra.%20Lu%C3%ADsa!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  address: 'Ijuí, RS',
  professionalPhilosophy: 'Refinar sem transformar.',
  instagram: 'https://www.instagram.com/dra.luisatecchio/',
  instagramHandle: '@dra.luisatecchio',
  philosophy: ['SEUS TRAÇOS.', 'SUA ESSÊNCIA.', 'SUA VERSÃO.'],
  colors: { paper: '#F7F4ED', sand: '#EBE5D7', goldDeep: '#89733D', ink: '#29271F', taupe: '#B39A58', champagne: '#E7D9A6', dark: '#201E18', wine: '#29271F', muted: '#746D5E' },
  images: { hero: '/images/luisa-retrato-frontal.webp', essence: '/images/luisa-retrato-janela.webp', about: '/images/luisa-sobre.webp', beauty: '/images/luisa-experiencia.webp' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.webp', label: 'Delicadeza nos lábios', alt: 'Comparativo fotográfico de antes e depois, lado a lado.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1281 / 1600 },
    { image: '/images/resultado-02.webp', label: 'Harmonia de perfil', alt: 'Comparativo fotográfico de antes e depois, lado a lado.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1275 / 1600 },
    { image: '/images/resultado-03.webp', label: 'Detalhes que valorizam', alt: 'Comparativo fotográfico de antes e depois, com os registros um acima do outro.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1267 / 1600 },
    { image: '/images/resultado-04.webp', label: 'Equilíbrio dos traços', alt: 'Comparativo fotográfico de antes e depois, lado a lado.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1240 / 1600 },
    { image: '/images/resultado-05.webp', label: 'Beleza em cada ângulo', alt: 'Comparativo fotográfico de antes e depois, lado a lado.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1268 / 1600 },
    { image: '/images/resultado-06.webp', label: 'Naturalidade nos detalhes', alt: 'Comparativo fotográfico de antes e depois, com os registros um acima do outro.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1279 / 1600 },
  ] },
  seo: { title: 'Dra. Luísa Tecchio | Harmonização Facial em Ijuí', description: 'Harmonização facial com naturalidade e planejamento individual. Conheça o olhar da Dra. Luísa Tecchio e agende uma avaliação em Ijuí.', url: '' },
};

export const appointmentUrl = site.whatsappUrl;
