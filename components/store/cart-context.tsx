'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { getProduct, type Product } from '@/lib/products'

export type CartLine = {
  key: string
  product: Product
  size?: string
  quantity: number
}

type CartContextValue = {
  lines: CartLine[]
  count: number
  subtotal: number
  isOpen: boolean
  open: () => void
  close: () => void
  add: (slug: string, quantity?: number, size?: string) => void
  update: (key: string, quantity: number) => void
  remove: (key: string) => void
}

const CartContext = createContext<CartContextValue | null>(null)

const MAX_QTY = 10

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const add = useCallback((slug: string, quantity = 1, size?: string) => {
    const product = getProduct(slug)
    if (!product) return
    const key = `${slug}__${size ?? ''}`
    setLines((prev) => {
      const existing = prev.find((l) => l.key === key)
      if (existing) {
        return prev.map((l) =>
          l.key === key ? { ...l, quantity: Math.min(MAX_QTY, l.quantity + quantity) } : l,
        )
      }
      return [...prev, { key, product, size, quantity: Math.min(MAX_QTY, quantity) }]
    })
    setIsOpen(true)
  }, [])

  const update = useCallback((key: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.key !== key)
        : prev.map((l) => (l.key === key ? { ...l, quantity: Math.min(MAX_QTY, quantity) } : l)),
    )
  }, [])

  const remove = useCallback((key: string) => {
    setLines((prev) => prev.filter((l) => l.key !== key))
  }, [])

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      subtotal: lines.reduce((n, l) => n + l.quantity * l.product.price, 0),
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add,
      update,
      remove,
    }),
    [lines, isOpen, add, update, remove],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
