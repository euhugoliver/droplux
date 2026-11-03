export const storeConfig = {
  name: 'Rei do Varejo',
  tagline: 'Estilo premium com entrega para todo o Brasil',
  announcements: [
    'FRETE GRÁTIS PARA TODO O BRASIL',
    '5% DE DESCONTO NO PIX',
    'PARCELE EM ATÉ 12X NO CARTÃO',
    'TROCA GRÁTIS EM ATÉ 7 DIAS',
  ],
  pixDiscountPercent: 5,
  maxInstallments: 12,
  /** Taxa acumulada (%) por número de parcelas, conforme o tema original */
  installmentRates: {
    1: 0,
    2: 7.64,
    3: 9.23,
    4: 10.86,
    5: 12.31,
    6: 13.65,
    7: 14.72,
    8: 16.23,
    9: 17.69,
    10: 18.65,
    11: 20.12,
    12: 21.61,
  } as Record<number, number>,
  contact: {
    email: 'contato@reidovarejo.com.br',
    whatsapp: '(00) 00000-0000',
    hours: 'Seg a Sex, 9h às 18h',
  },
}
