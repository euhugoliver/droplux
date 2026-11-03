import Link from 'next/link'

export function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-brand px-6 py-12 text-center text-white md:py-16">
        <span className="rounded-[4px] bg-accent px-3 py-1 text-xs font-bold tracking-[0.2em]">EXCLUSIVIDADE</span>
        <h2 className="max-w-2xl text-balance text-3xl font-bold text-white md:text-4xl">
          Ganhe 5% de desconto extra pagando no Pix
        </h2>
        <p className="max-w-xl text-pretty text-white/80">
          Aprovação imediata, envio mais rápido e o melhor preço garantido em todos os produtos da loja.
        </p>
        <Link
          href="/colecao/calcados"
          className="mt-2 rounded-[10px] bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-accent hover:text-white"
        >
          Aproveitar agora
        </Link>
      </div>
    </section>
  )
}
