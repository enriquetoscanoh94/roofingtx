import { motion, useReducedMotion } from 'motion/react'
import { MapPin, Clock } from '@phosphor-icons/react'
import { WhatsappIcon, CallIcon, SmsIcon } from './BrandIcons'
import { useLang } from '../i18n/LanguageContext'
import { BUSINESS } from '../i18n/translations'

export default function Contact() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  // Three contact channels the client asked for, each with its official icon
  // and real app brand color.
  const channels = [
    {
      icon: CallIcon,
      color: '#34C759', // phone / call green
      label: t.cta.call,
      value: BUSINESS.phoneDisplay,
      href: `tel:${BUSINESS.phoneRaw}`,
    },
    {
      icon: SmsIcon,
      color: '#1A73E8', // messages blue
      label: t.cta.text,
      value: BUSINESS.phoneDisplay,
      href: `sms:${BUSINESS.phoneRaw}`,
    },
    {
      icon: WhatsappIcon,
      color: '#25D366', // official WhatsApp green
      label: t.cta.whatsapp,
      value: BUSINESS.phoneDisplay,
      href: `https://wa.me/${BUSINESS.whatsapp}`,
      external: true,
    },
  ]

  return (
    <section id="contact" className="bg-navy-800 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            {t.contact.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t.cta.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">{t.cta.subtitle}</p>
        </div>

        {/* Contact channel cards */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {channels.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:-translate-y-1 hover:border-brand-500/50 hover:bg-white/10"
              >
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full text-white transition-transform group-hover:scale-110"
                  style={{ backgroundColor: c.color }}
                >
                  <Icon size={30} />
                </span>
                <span className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/60">
                  {c.label}
                </span>
                <span className="mt-1 text-lg font-bold text-white">{c.value}</span>
              </motion.a>
            )
          })}
        </div>

        {/* Area + hours */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <MapPin weight="fill" size={28} className="shrink-0 text-brand-500" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {t.contact.areaLabel}
              </p>
              <p className="mt-0.5 font-bold text-white">{t.contact.areaValue}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <Clock weight="fill" size={28} className="shrink-0 text-brand-500" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {t.contact.hoursLabel}
              </p>
              <p className="mt-0.5 font-bold text-white">{t.contact.hoursValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
