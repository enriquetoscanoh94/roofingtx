import { MapPin } from '@phosphor-icons/react'
import { WhatsappIcon, CallIcon } from './BrandIcons'
import { useLang } from '../i18n/LanguageContext'
import { BUSINESS } from '../i18n/translations'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 pt-16 pb-8">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-2">
          <span className="inline-flex items-center rounded-lg bg-white px-3 py-2">
            <img src="./logo/logo-perez.png" alt={BUSINESS.name} className="h-12 w-auto" />
          </span>
          <p className="mt-5 max-w-md leading-relaxed text-white/65">{t.footer.tagline}</p>
          <div className="mt-5 flex items-center gap-2 text-white/70">
            <MapPin weight="fill" size={18} className="text-brand-500" />
            <span className="text-sm">{t.contact.areaValue}</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">{t.footer.services}</h4>
          <ul className="mt-4 space-y-2">
            {t.services.items.map((s) => (
              <li key={s.title}>
                <a href="#services" className="text-sm text-white/65 transition-colors hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">{t.nav.contact}</h4>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
              >
                <CallIcon size={18} className="text-[#34C759]" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
              >
                <WhatsappIcon size={18} className="text-[#25D366]" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1400px] border-t border-white/10 px-5 pt-6 lg:px-8">
        <p className="text-center text-xs text-white/50">
          © {year} {BUSINESS.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
