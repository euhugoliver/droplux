import { storeConfig } from './store-config'

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function formatBRL(value: number) {
  return brl.format(value)
}

export function pixPrice(price: number) {
  return price * (1 - storeConfig.pixDiscountPercent / 100)
}

export function discountPercent(price: number, compareAt?: number) {
  if (!compareAt || compareAt <= price) return 0
  return Math.round((1 - price / compareAt) * 100)
}

export function installmentOptions(price: number) {
  return Array.from({ length: storeConfig.maxInstallments }, (_, i) => {
    const count = i + 1
    const rate = storeConfig.installmentRates[count] ?? 0
    const total = price * (1 + rate / 100)
    return { count, perInstallment: total / count, total, interestFree: rate === 0 }
  })
}

export function maxInstallment(price: number) {
  const options = installmentOptions(price)
  return options[options.length - 1]
}
