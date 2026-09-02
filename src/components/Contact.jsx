import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { MapPin, Clock, EnvelopeSimple, Lightning, CheckCircle } from '@phosphor-icons/react'
import { WhatsappIcon, CallIcon, SmsIcon } from './BrandIcons'
import { useLang } from '../i18n/LanguageContext'
import { BUSINESS } from '../i18n/translations'

export default function Contact() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const [sent, setSent] = useState(false)

  // Static-site form: build a mailto link with the form data and open the
  // visitor's email app with the message ready to send. No backend needed.
  function handleSubmit(e) {
    e.preventDefault()
    const f = e.target
    const subject = `Estimate request - ${f.name.value}`
    const body =
      `${t.form.name}: ${f.name.value}\n` +
      `${t.form.phone}: ${f.phone.value}\n` +
      `${t.form.email}: ${f.email.value}\n\n` +
      `${f.message.value}`
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

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
      icon: CallIcon,
      color: '#34C759', // phone / call green
      label: t.cta.call,
      value: BUSINESS.phone2Display,
      href: `tel:${BUSINESS.phone2Raw}`,
    },
    {
      icon: SmsIcon,
      color: '#1A73E8', // messages blue
      label: t.cta.text,
      value: BUSINESS.phoneDisplay,
      href: `sms:${BUSINESS.phoneRaw}`,
    },
    {
      icon: SmsIcon,
      color: '#1A73E8', // messages blue
      label: t.cta.text,
      value: BUSINESS.phone2Display,
      href: `sms:${BUSINESS.phone2Raw}`,
    },
    {
      icon: WhatsappIcon,
      color: '#25D366', // official WhatsApp green
      label: t.cta.whatsapp,
      value: BUSINESS.phoneDisplay,
      href: `https://wa.me/${BUSINESS.whatsapp}`,
      external: true,
    },
    {
      icon: WhatsappIcon,
      color: '#25D366', // official WhatsApp green
      label: t.cta.whatsapp,
      value: BUSINESS.phone2Display,
      href: `https://wa.me/${BUSINESS.whatsapp2}`,
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
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.a
                key={`${c.label}-${c.value}`}
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

        {/* Area + hours + email */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
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
          <a
            href={`mailto:${BUSINESS.email}`}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-500/50 hover:bg-white/10"
          >
            <EnvelopeSimple weight="fill" size={28} className="shrink-0 text-brand-500" />
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {t.contact.emailLabel}
              </p>
              <p className="mt-0.5 truncate font-bold text-white">{BUSINESS.email}</p>
            </div>
          </a>
        </div>

        {/* Estimate request form */}
        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-500">
            <Lightning weight="fill" size={14} />
            {t.form.emergency}
          </div>
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{t.form.title}</h3>
          <p className="mt-2 text-white/70">{t.form.subtitle}</p>

          {sent ? (
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-green-400/30 bg-green-400/10 p-6 text-green-200">
              <CheckCircle weight="fill" size={28} className="shrink-0" />
              <p className="font-semibold">{t.form.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder={t.form.name}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-brand-500"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder={t.form.phone}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-brand-500"
              />
              <input
                type="email"
                name="email"
                placeholder={t.form.email}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-brand-500 sm:col-span-2"
              />
              <textarea
                name="message"
                rows={4}
                required
                placeholder={t.form.message}
                className="resize-none rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-brand-500 sm:col-span-2"
              />
              <button
                type="submit"
                className="rounded-xl bg-brand-500 px-6 py-3.5 font-bold text-white transition-colors hover:bg-brand-600 sm:col-span-2"
              >
                {t.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
