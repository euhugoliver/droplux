import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import type { Product } from '@/lib/products'
import { discountPercent, formatBRL, maxInstallment, pixPrice } from '@/lib/pricing'

export function ProductCard({ product }: { product: Product }) {
  const off = discountPercent(product.price, product.compareAtPrice)
  const installment = maxInstallment(product.price)

  return (
    <Link href={`/produto/${product.slug}`} className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-2 top-2 flex flex-col items-start gap-1">
          {off > 0 && (
            <span className="rounded-[4px] bg-accent px-2 py-0.5 text-xs font-bold text-white">-{off}%</span>
          )}
          {product.badge && (
            <span className="rounded-[4px] bg-brand px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
          <span>
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
          <span aria-hidden="true">·</span>
          <span className="font-medium text-brand">+{product.sold} vendidos</span>
        </div>
        <h3 className="line-clamp-2 font-sans text-sm font-medium leading-snug text-foreground md:text-base">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          {product.compareAtPrice && (
            <span className="text-xs text-muted-foreground line-through md:text-sm">
              {formatBRL(product.compareAtPrice)}
            </span>
          )}
          <span className="text-base font-bold text-black md:text-lg">{formatBRL(product.price)}</span>
        </div>
        <p className="text-xs">
          <span className="font-semibold text-success">{formatBRL(pixPrice(product.price))}</span> no Pix
        </p>
        <p className="text-xs text-muted-foreground">
          ou {installment.count}x de {formatBRL(installment.perInstallment)}
        </p>
      </div>
    </Link>
  )
}
