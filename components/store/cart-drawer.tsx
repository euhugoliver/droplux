'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, ShoppingBag, Trash2, Truck, X } from 'lucide-react'
import { formatBRL, maxInstallment, pixPrice } from '@/lib/pricing'
import { useCart } from './cart-context'

export function CartDrawer() {
  const { lines, isOpen, close, update, remove, subtotal, count } = useCart()

  if (!isOpen) return null

  const installment = maxInstallment(subtotal)

  return (
    <div className="fixed inset-0 z-50 text-foreground" role="dialog" aria-modal="true" aria-label="Sacola de compras">
      <button type="button" className="absolute inset-0 bg-black/50" aria-label="Fechar sacola" onClick={close} />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-lg font-semibold">
            Sua sacola <span className="font-normal text-muted-foreground">({count})</span>
          </h2>
          <button type="button" onClick={close} aria-label="Fechar sacola" className="rounded-md p-1 hover:bg-muted">
            <X className="size-6" strokeWidth={1.3} />
          </button>
        </div>

        <div className="flex items-center gap-2 bg-secondary px-5 py-3 text-sm">
          <Truck className="size-5 text-accent" strokeWidth={1.5} />
          <span>
            Parabéns! Você ganhou <strong className="text-brand">frete grátis</strong>
          </span>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <ShoppingBag className="size-12 text-muted-foreground" strokeWidth={1} />
            <p className="text-muted-foreground">Sua sacola está vazia.</p>
            <button
              type="button"
              onClick={close}
              className="rounded-[10px] bg-black px-6 py-3 text-sm font-semibold text-white"
            >
              Continuar comprando
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y overflow-y-auto px-5">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4 py-4">
                  <Link
                    href={`/produto/${line.product.slug}`}
                    onClick={close}
                    className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-secondary"
                  >
                    <Image src={line.product.images[0]} alt={line.product.name} fill sizes="80px" className="object-cover" />
                  </Link>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium leading-snug">{line.product.name}</p>
                      <button
                        type="button"
                        onClick={() => remove(line.key)}
                        aria-label={`Remover ${line.product.name}`}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="size-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    {line.size && <p className="text-xs text-muted-foreground">Tamanho: {line.size}</p>}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-md border">
                        <button
                          type="button"
                          onClick={() => update(line.key, line.quantity - 1)}
                          className="p-1.5"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm" aria-live="polite">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => update(line.key, line.quantity + 1)}
                          className="p-1.5"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold">{formatBRL(line.product.price * line.quantity)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t px-5 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-lg font-bold">{formatBRL(subtotal)}</span>
              </div>
              <p className="mt-1 text-right text-sm">
                ou <strong className="text-success">{formatBRL(pixPrice(subtotal))}</strong> no Pix
              </p>
              <p className="text-right text-xs text-muted-foreground">
                ou em até {installment.count}x de {formatBRL(installment.perInstallment)}
              </p>
              <button
                type="button"
                className="mt-4 w-full rounded-[10px] bg-accent py-4 text-sm font-bold tracking-wide text-white transition hover:brightness-95"
              >
                FINALIZAR COMPRA
              </button>
              <button type="button" onClick={close} className="mt-3 w-full text-center text-sm underline underline-offset-4">
                Continuar comprando
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
