import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/lib/products'

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 md:pt-16">
      <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Compre por categoria</h2>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={`/colecao/${c.slug}`} className="group block">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent" />
                <span className="absolute inset-x-0 bottom-4 text-center font-heading text-lg font-bold text-white">
                  {c.name}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
