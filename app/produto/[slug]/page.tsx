import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ProductDetail } from '@/components/store/product-detail'
import { ProductSection } from '@/components/store/product-section'
import { getCategory, getProduct, getProductsByCategory, products } from '@/lib/products'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/produto/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  return product ? { title: product.name, description: product.description } : {}
}

export default async function ProductPage({ params }: PageProps<'/produto/[slug]'>) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const category = getCategory(product.category)
  const related = getProductsByCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 4)

  return (
    <main>
      <nav aria-label="Caminho" className="mx-auto max-w-7xl px-4 pt-6 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-foreground">
              Início
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          {category && (
            <>
              <li>
                <Link href={`/colecao/${category.slug}`} className="hover:text-foreground">
                  {category.name}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
            </>
          )}
          <li aria-current="page" className="text-foreground">
            {product.name}
          </li>
        </ol>
      </nav>
      <ProductDetail product={product} />
      {related.length > 0 && <ProductSection title="Você também pode gostar" products={related} />}
    </main>
  )
}
