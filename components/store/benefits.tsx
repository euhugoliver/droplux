import { CreditCard, RefreshCcw, ShieldCheck, Truck } from 'lucide-react'

const items = [
  { icon: Truck, title: 'Frete grátis', text: 'Para todo o Brasil' },
  { icon: CreditCard, title: 'Até 12x no cartão', text: 'Ou 5% OFF no Pix' },
  { icon: RefreshCcw, title: 'Troca grátis', text: 'Em até 7 dias' },
  { icon: ShieldCheck, title: 'Compra segura', text: 'Site 100% protegido' },
]

export function Benefits() {
  return (
    <section aria-label="Vantagens" className="border-b bg-secondary">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 md:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-brand">
              <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-black">{title}</p>
              <p className="text-xs text-muted-foreground">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
