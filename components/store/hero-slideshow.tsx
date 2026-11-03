'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const slides = [
  {
    image: '/banners/hero-1.webp',
    eyebrow: 'Nova coleção',
    title: 'Elegância para todos os momentos',
    text: 'Peças premium com até 40% OFF e frete grátis para todo o Brasil.',
    cta: 'Comprar agora',
    href: '/colecao/camisas',
    align: 'left' as const,
  },
  {
    image: '/banners/hero-2.webp',
    eyebrow: 'Ofertas exclusivas',
    title: 'Acessórios que fazem a diferença',
    text: 'Calçados, bolsas e perfumes selecionados para você.',
    cta: 'Ver ofertas',
    href: '/colecao/calcados',
    align: 'right' as const,
  },
]

export function HeroSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [index])

  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length)

  return (
    <section aria-roledescription="carrossel" aria-label="Destaques" className="relative overflow-hidden bg-brand">
      <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[16/7]">
        {slides.map((s, i) => (
          <div
            key={s.image}
            className={cn(
              'absolute inset-0 transition-opacity duration-700',
              i === index ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
            aria-hidden={i !== index}
          >
            <Image src={s.image} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
            <div
              className={cn(
                'absolute inset-0 from-black/70 via-black/30 to-transparent',
                s.align === 'left' ? 'bg-gradient-to-r' : 'bg-gradient-to-l',
              )}
            />
            <div
              className={cn(
                'relative mx-auto flex h-full max-w-7xl items-end px-6 pb-16 sm:items-center sm:pb-0',
                s.align === 'right' && 'sm:justify-end',
              )}
            >
              <div className="max-w-md text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{s.eyebrow}</p>
                <h2 className="mt-3 text-balance font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-pretty text-white/85 md:text-lg">{s.text}</p>
                <Link
                  href={s.href}
                  tabIndex={i === index ? 0 : -1}
                  className="mt-6 inline-flex rounded-[10px] bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-accent hover:text-white"
                >
                  {s.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-black shadow md:block"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-black shadow md:block"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ir para o slide ${i + 1}`}
            aria-current={i === index}
            className={cn('h-1.5 rounded-full bg-white transition-all', i === index ? 'w-8' : 'w-3 opacity-50')}
          />
        ))}
      </div>
    </section>
  )
}
