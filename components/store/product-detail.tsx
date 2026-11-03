'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Check, ChevronDown, Minus, Plus, ShieldCheck, Star, Truck } from 'lucide-react'
import type { Product } from '@/lib/products'
import { discountPercent, formatBRL, installmentOptions, pixPrice } from '@/lib/pricing'
import { storeConfig } from '@/lib/store-config'
import { cn } from '@/lib/utils'
import { useCart } from './cart-context'

export function ProductDetail({ product }: { product: Product }) {
  const { add } = useCart()
  const [size, setSize] = useState<string | undefined>()
  const [quantity, setQuantity] = useState(1)
  const [showInstallments, setShowInstallments] = useState(false)
  const [error, setError] = useState(false)

  const off = discountPercent(product.price, product.compareAtPrice)
  const installments = installmentOptions(product.price)
  const max = installments[installments.length - 1]

  const handleAdd = () => {
    if (product.sizes && !size) {
      setError(true)
      return
    }
    add(product.slug, quantity, size)
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-6 md:grid-cols-2 md:gap-12 md:py-10">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
        <Image src={product.images[0]} alt={product.name} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        {off > 0 && (
          <span className="absolute left-4 top-4 rounded-[4px] bg-accent px-3 py-1 text-sm font-bold text-white">
            -{off}% OFF
          </span>
        )}
      </div>

      <div className="flex flex-col">
        {product.badge && (
          <span className="mb-3 w-fit rounded-[4px] bg-brand px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {product.badge}
          </span>
        )}
        <h1 className="text-balance text-2xl font-bold md:text-3xl">{product.name}</h1>

        <div className="mt-2 flex items-center gap-2 text-sm">
          <div className="flex" aria-label={`Nota ${product.rating} de 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <span className="text-muted-foreground">({product.reviews} avaliações)</span>
          <span className="font-semibold text-brand">+{product.sold} vendidos</span>
        </div>

        <div className="mt-6">
          {product.compareAtPrice && (
            <p className="text-muted-foreground line-through">{formatBRL(product.compareAtPrice)}</p>
          )}
          <p className="text-[29px] font-bold leading-tight text-black md:text-[27px]">{formatBRL(product.price)}</p>
          <div className="mt-2 flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm">
            <span className="rounded bg-accent px-1.5 py-0.5 text-xs font-bold text-white">PIX</span>
            <span>
              <strong className="text-success">{formatBRL(pixPrice(product.price))}</strong> com{' '}
              {storeConfig.pixDiscountPercent}% de desconto
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowInstallments((v) => !v)}
            aria-expanded={showInstallments}
            className="mt-2 flex items-center gap-1 text-sm"
          >
            ou em até <strong>{max.count}x de {formatBRL(max.perInstallment)}</strong>
            <ChevronDown className={cn('size-4 transition', showInstallments && 'rotate-180')} />
          </button>
          {showInstallments && (
            <ul className="mt-2 grid grid-cols-2 gap-x-4 rounded-[4px] border border-input p-3 text-xs">
              {installments.map((o) => (
                <li key={o.count} className="flex justify-between py-1">
                  <span>
                    {o.count}x de {formatBRL(o.perInstallment)}
                  </span>
                  <span className="text-muted-foreground">{o.interestFree ? 'sem juros' : formatBRL(o.total)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {product.sizes && (
          <fieldset className="mt-6">
            <legend className="mb-2 text-sm font-semibold">
              Tamanho: <span className="font-normal">{size ?? 'selecione'}</span>
            </legend>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setSize(s)
                    setError(false)
                  }}
                  aria-pressed={size === s}
                  className={cn(
                    'flex h-11 min-w-11 items-center justify-center rounded-[7px] border px-3 text-sm font-medium transition',
                    size === s ? 'border-black bg-black text-white' : 'border-input hover:border-black',
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
            {error && (
              <p className="mt-2 text-sm text-destructive" role="alert">
                Selecione um tamanho para continuar.
              </p>
            )}
          </fieldset>
        )}

        <div className="mt-6 flex gap-3">
          <div className="flex h-[55px] items-center rounded-[7px] border border-input">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3"
              aria-label="Diminuir quantidade"
            >
              <Minus className="size-4" />
            </button>
            <span className="w-8 text-center font-medium" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(10, q + 1))}
              className="px-3"
              aria-label="Aumentar quantidade"
            >
              <Plus className="size-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            className="h-[55px] flex-1 rounded-[10px] bg-black text-sm font-bold tracking-wide text-white transition hover:bg-brand"
          >
            ADICIONAR À SACOLA
          </button>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="mt-3 h-[55px] w-full rounded-[10px] bg-accent text-sm font-bold tracking-wide text-white transition hover:brightness-95"
        >
          COMPRAR AGORA
        </button>

        <ul className="mt-6 space-y-3 rounded-xl border p-4 text-sm">
          <li className="flex items-center gap-3">
            <Truck className="size-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <span>
              <strong>Frete grátis</strong> para todo o Brasil
            </span>
          </li>
          <li className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <span>Compra 100% segura e garantia de entrega</span>
          </li>
        </ul>

        <div className="mt-8">
          <h2 className="text-lg font-semibold">Descrição</h2>
          <p className="mt-2 text-pretty leading-relaxed text-foreground/85">{product.description}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {product.details.map((d) => (
              <li key={d} className="flex items-center gap-2">
                <Check className="size-4 text-accent" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
