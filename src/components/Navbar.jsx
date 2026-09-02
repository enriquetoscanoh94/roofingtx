import { useEffect, useState } from 'react'
import { List, X, Phone } from '@phosphor-icons/react'
import { useLang } from '../i18n/LanguageContext'
import { BUSINESS } from '../i18n/translations'

const links = [
  { id: 'services', key: 'services' },
  { id: 'why', key: 'why' },
  { id: 'work', key: 'work' },
  { id: 'contact', key: 'contact' },
]

export default function Navbar() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-navy-800/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 lg:px-8">
        {/* Logo on a light chip so the navy artwork always reads on the navy bar */}
        <a href="#top" className="flex items-center gap-3" onClick={close}>
          <span className="flex h-11 items-center rounded-lg bg-white px-2 shadow-sm">
            <img src="./logo/logo-perez.png" alt={BUSINESS.name} className="h-9 w-auto" />
          </span>
          <span className="hidden text-lg font-bold tracking-tight text-white sm:block">
            Perez Roofing <span className="text-brand-500">SV</span>
          </span>
        </a>

        {/* Desktop links — single line */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              {t.nav[l.key]}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-600 active:scale-[0.98]"
          >
            <Phone weight="fill" size={16} />
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-navy-800 lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={close}
                className="rounded-lg px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/10"
              >
                {t.nav[l.key]}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-base font-bold text-white"
            >
              <Phone weight="fill" size={18} />
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
