'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { categories } from '@/lib/products'
import { storeConfig } from '@/lib/store-config'
import { useCart } from './cart-context'
import { CartDrawer } from './cart-drawer'

export function SiteHeader() {
  const { count, open } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-brand text-brand-foreground">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20">
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="-ml-2 rounded-md p-2 hover:bg-white/10"
            aria-label="Abrir menu"
          >
            <Menu className="size-6" strokeWidth={1.3} />
          </button>
        </div>

        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight md:text-2xl"
          aria-label={`${storeConfig.name} - página inicial`}
        >
          {storeConfig.name}
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/colecao/${c.slug}`} className="opacity-90 transition hover:opacity-100 hover:underline underline-offset-8">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button type="button" className="hidden rounded-md p-2 hover:bg-white/10 sm:block" aria-label="Buscar">
            <Search className="size-5" strokeWidth={1.3} />
          </button>
          <button type="button" className="hidden rounded-md p-2 hover:bg-white/10 sm:block" aria-label="Minha conta">
            <User className="size-5" strokeWidth={1.3} />
          </button>
          <button
            type="button"
            onClick={open}
            className="relative rounded-md p-2 hover:bg-white/10"
            aria-label={`Abrir sacola, ${count} ${count === 1 ? 'item' : 'itens'}`}
          >
            <ShoppingBag className="size-6" strokeWidth={1.3} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-brand">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative flex h-full w-80 max-w-[85%] flex-col bg-white text-foreground">
            <div className="flex items-center justify-between bg-brand px-4 py-4 text-brand-foreground">
              <span className="font-heading text-lg font-bold">{storeConfig.name}</span>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="Fechar menu" className="p-1">
                <X className="size-6" strokeWidth={1.3} />
              </button>
            </div>
            <nav aria-label="Menu mobile">
              <ul className="divide-y">
                <li>
                  <Link href="/" onClick={() => setMenuOpen(false)} className="block px-5 py-4 font-medium">
                    Início
                  </Link>
                </li>
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/colecao/${c.slug}`}
                      onClick={() => setMenuOpen(false)}
                      className="block px-5 py-4 font-medium"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      <CartDrawer />
    </header>
  )
}
