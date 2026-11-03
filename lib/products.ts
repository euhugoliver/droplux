export type Category = {
  slug: string
  name: string
  description: string
  image: string
}

export type Product = {
  slug: string
  name: string
  category: string
  price: number
  compareAtPrice?: number
  images: string[]
  description: string
  details: string[]
  sizes?: string[]
  badge?: string
  rating: number
  reviews: number
  sold: number
  featured?: boolean
}

export const categories: Category[] = [
  {
    slug: 'calcados',
    name: 'Calçados',
    description: 'Tênis e mocassins em couro legítimo.',
    image: '/products/mocassim-couro.webp',
  },
  {
    slug: 'camisas',
    name: 'Camisas & Polos',
    description: 'Peças essenciais com caimento perfeito.',
    image: '/products/polo-verde.webp',
  },
  {
    slug: 'bolsas',
    name: 'Bolsas',
    description: 'Elegância e praticidade para o dia a dia.',
    image: '/products/bolsa-tote.webp',
  },
  {
    slug: 'perfumes',
    name: 'Perfumes',
    description: 'Fragrâncias marcantes e sofisticadas.',
    image: '/products/perfume-masculino.webp',
  },
]

const clothingSizes = ['P', 'M', 'G', 'GG']
const shoeSizes = ['38', '39', '40', '41', '42', '43']

export const products: Product[] = [
  {
    slug: 'tenis-couro-branco',
    name: 'Tênis Casual em Couro Branco',
    category: 'calcados',
    price: 249.9,
    compareAtPrice: 399.9,
    images: ['/products/tenis-couro-branco.webp'],
    description:
      'Tênis minimalista em couro legítimo, com solado confortável e acabamento premium. Combina com tudo, do casual ao social.',
    details: ['Couro legítimo', 'Palmilha anatômica', 'Solado de borracha antiderrapante'],
    sizes: shoeSizes,
    badge: 'Mais vendido',
    rating: 4.9,
    reviews: 312,
    sold: 1840,
    featured: true,
  },
  {
    slug: 'mocassim-couro-camurca',
    name: 'Mocassim em Camurça',
    category: 'calcados',
    price: 279.9,
    compareAtPrice: 459.9,
    images: ['/products/mocassim-couro.webp'],
    description:
      'Mocassim clássico em camurça com costura aparente. Leve, flexível e perfeito para compor looks elegantes.',
    details: ['Camurça legítima', 'Forro macio', 'Solado flexível'],
    sizes: shoeSizes,
    rating: 4.8,
    reviews: 198,
    sold: 960,
    featured: true,
  },
  {
    slug: 'polo-piquet-verde',
    name: 'Camisa Polo Piquet Verde',
    category: 'camisas',
    price: 129.9,
    compareAtPrice: 199.9,
    images: ['/products/polo-verde.webp'],
    description:
      'Polo em malha piquet 100% algodão, com gola estruturada e caimento slim. Um clássico que nunca sai de moda.',
    details: ['100% algodão', 'Modelagem slim', 'Não desbota'],
    sizes: clothingSizes,
    badge: 'Exclusividade',
    rating: 4.9,
    reviews: 421,
    sold: 2650,
    featured: true,
  },
  {
    slug: 'polo-piquet-branca',
    name: 'Camisa Polo Piquet Branca',
    category: 'camisas',
    price: 129.9,
    compareAtPrice: 199.9,
    images: ['/products/polo-branca.webp'],
    description:
      'Polo branca em malha piquet premium. Versátil, respirável e com acabamento impecável.',
    details: ['100% algodão', 'Modelagem slim', 'Não desbota'],
    sizes: clothingSizes,
    rating: 4.8,
    reviews: 287,
    sold: 1720,
    featured: true,
  },
  {
    slug: 'camisa-linho-azul',
    name: 'Camisa de Linho Azul',
    category: 'camisas',
    price: 169.9,
    compareAtPrice: 259.9,
    images: ['/products/camisa-linho.webp'],
    description:
      'Camisa de linho leve e fresca, ideal para dias quentes. Elegância natural com toque macio.',
    details: ['Linho e algodão', 'Botões de madrepérola', 'Corte regular'],
    sizes: clothingSizes,
    rating: 4.7,
    reviews: 143,
    sold: 640,
  },
  {
    slug: 'camiseta-basica-marinho',
    name: 'Camiseta Premium Azul Marinho',
    category: 'camisas',
    price: 79.9,
    compareAtPrice: 119.9,
    images: ['/products/camiseta-basica.webp'],
    description:
      'Camiseta básica em algodão egípcio, com toque extremamente macio e gola reforçada.',
    details: ['Algodão egípcio', 'Gola reforçada', 'Não deforma'],
    sizes: clothingSizes,
    rating: 4.8,
    reviews: 512,
    sold: 3120,
  },
  {
    slug: 'bolsa-tote-bege',
    name: 'Bolsa Tote Estruturada Bege',
    category: 'bolsas',
    price: 229.9,
    compareAtPrice: 389.9,
    images: ['/products/bolsa-tote.webp'],
    description:
      'Bolsa tote estruturada com amplo espaço interno, alças reforçadas e acabamento sofisticado.',
    details: ['Material sintético premium', 'Bolso interno com zíper', 'Alças reforçadas'],
    badge: 'Novidade',
    rating: 4.9,
    reviews: 176,
    sold: 890,
    featured: true,
  },
  {
    slug: 'bolsa-transversal-preta',
    name: 'Bolsa Transversal Preta',
    category: 'bolsas',
    price: 159.9,
    compareAtPrice: 249.9,
    images: ['/products/bolsa-transversal.webp'],
    description:
      'Bolsa transversal compacta, perfeita para levar o essencial com estilo. Alça ajustável.',
    details: ['Alça ajustável', 'Fecho magnético', 'Compartimento para celular'],
    rating: 4.7,
    reviews: 98,
    sold: 470,
  },
  {
    slug: 'perfume-masculino-verde',
    name: 'Perfume Masculino Intense 100ml',
    category: 'perfumes',
    price: 189.9,
    compareAtPrice: 299.9,
    images: ['/products/perfume-masculino.webp'],
    description:
      'Fragrância amadeirada com notas de cedro, bergamota e âmbar. Alta fixação para o dia todo.',
    details: ['100ml', 'Eau de Parfum', 'Fixação de até 12h'],
    rating: 4.8,
    reviews: 264,
    sold: 1330,
    featured: true,
  },
  {
    slug: 'perfume-feminino-rose',
    name: 'Perfume Feminino Rosé 100ml',
    category: 'perfumes',
    price: 189.9,
    compareAtPrice: 299.9,
    images: ['/products/perfume-feminino.webp'],
    description:
      'Fragrância floral com notas de rosa, peônia e baunilha. Delicada, marcante e envolvente.',
    details: ['100ml', 'Eau de Parfum', 'Fixação de até 10h'],
    rating: 4.9,
    reviews: 301,
    sold: 1510,
    featured: true,
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug)
}

export const featuredProducts = products.filter((p) => p.featured)
export const bestSellers = [...products].sort((a, b) => b.sold - a.sold).slice(0, 8)
