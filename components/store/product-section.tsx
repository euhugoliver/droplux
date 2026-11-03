import Link from 'next/link'
import type { Product } from '@/lib/products'
import { ProductCard } from './product-card'

type Props = {
  title: string
  subtitle?: string
  products: Product[]
  href?: string
}

export function ProductSection({ title, subtitle, products, href }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-balance text-2xl font-bold md:text-3xl">{title}</h2>
          {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
        </div>
        {href && (
          <Link href={href} className="shrink-0 text-sm font-semibold underline underline-offset-4">
            Ver todos
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  )
}
