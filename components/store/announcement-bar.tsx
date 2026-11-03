import { storeConfig } from '@/lib/store-config'

export function AnnouncementBar() {
  const items = [...storeConfig.announcements, ...storeConfig.announcements]
  return (
    <div className="overflow-hidden bg-black text-white" role="region" aria-label="Avisos da loja">
      <p className="sr-only">{storeConfig.announcements.join(' • ')}</p>
      <div
        aria-hidden="true"
        className="flex w-max animate-[marquee_30s_linear_infinite] items-center motion-reduce:animate-none"
      >
        {items.map((text, i) => (
          <span
            key={i}
            className="flex h-9 items-center gap-8 px-8 text-xs font-semibold tracking-widest md:text-sm"
          >
            {text}
            <span className="size-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}
