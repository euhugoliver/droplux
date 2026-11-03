import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ProductCard } from '@/components/store/product-card'
import { categories, getCategory, getProductsByCategory } from '@/lib/products'

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps<'/colecao/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)
  return category ? { title: category.name, description: category.description } : {}
}

export default async function CollectionPage({ params }: PageProps<'/colecao/[slug]'>) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()
  const items = getProductsByCategory(slug)

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <nav aria-label="Caminho" className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Início
        </Link>{' '}
        / <span className="text-foreground">{category.name}</span>
      </nav>
      <header className="mt-4 mb-8">
        <h1 className="text-[24px] font-bold md:text-[30px]">{category.name}</h1>
        <p className="mt-1 text-muted-foreground">
          {category.description} {items.length} {items.length === 1 ? 'produto' : 'produtos'}.
        </p>
      </header>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  )
}
