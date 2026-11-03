import { Benefits } from '@/components/store/benefits'
import { CategoryGrid } from '@/components/store/category-grid'
import { HeroSlideshow } from '@/components/store/hero-slideshow'
import { ProductSection } from '@/components/store/product-section'
import { PromoBanner } from '@/components/store/promo-banner'
import { bestSellers, featuredProducts } from '@/lib/products'

export default function HomePage() {
  return (
    <main>
      <HeroSlideshow />
      <Benefits />
      <CategoryGrid />
      <ProductSection
        title="Mais vendidos"
        subtitle="Os queridinhos dos nossos clientes"
        products={bestSellers}
      />
      <PromoBanner />
      <ProductSection title="Destaques da semana" subtitle="Seleção especial com preços imperdíveis" products={featuredProducts.slice(0, 8)} />
    </main>
  )
}
