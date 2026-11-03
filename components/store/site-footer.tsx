import Link from 'next/link'
import { Lock, Mail, MessageCircle } from 'lucide-react'
import { categories } from '@/lib/products'
import { storeConfig } from '@/lib/store-config'

const payments = ['Visa', 'Mastercard', 'Elo', 'Amex', 'Hipercard', 'Diners', 'Pix']

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-brand text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-heading text-xl font-bold">{storeConfig.name}</p>
          <p className="mt-3 text-sm text-white/75">{storeConfig.tagline}</p>
        </div>

        <nav aria-label="Categorias">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Categorias</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/colecao/${c.slug}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Institucional">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Ajuda</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>Política de trocas</li>
            <li>Política de privacidade</li>
            <li>Prazos de entrega</li>
            <li>Rastrear pedido</li>
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Atendimento</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-2">
              <Mail className="size-4" strokeWidth={1.5} aria-hidden="true" />
              {storeConfig.contact.email}
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4" strokeWidth={1.5} aria-hidden="true" />
              {storeConfig.contact.whatsapp}
            </li>
            <li>{storeConfig.contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <ul className="flex flex-wrap justify-center gap-2" aria-label="Formas de pagamento">
            {payments.map((p) => (
              <li key={p} className="rounded bg-white px-2 py-1 text-[10px] font-bold text-black">
                {p}
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2 text-xs text-white/70">
            <Lock className="size-3.5" aria-hidden="true" />
            {`© ${new Date().getFullYear()} ${storeConfig.name}. Ambiente 100% seguro.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
