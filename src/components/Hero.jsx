import { motion, useReducedMotion } from 'motion/react'
import { Phone, ShieldCheck } from '@phosphor-icons/react'
import { useLang } from '../i18n/LanguageContext'
import { BUSINESS } from '../i18n/translations'

export default function Hero() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  const rise = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  })

  const stats = [
    { big: t.hero.stat1, label: t.hero.stat1label },
    { big: t.hero.stat2, label: t.hero.stat2label },
    { big: t.hero.stat3, label: t.hero.stat3label },
  ]

  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden">
      {/* Real hero photography */}
      <img
        src="./images/hero-crew.jpg"
        alt="Perez Roofing crew installing a new roof on a home in the Washington DC area"
        className="absolute inset-0 h-full w-full object-cover"
        fetchpriority="high"
      />
      {/* Navy scrim for text contrast (left-weighted) */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/30" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-28 pb-16 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            {...rise(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90"
          >
            <ShieldCheck weight="fill" size={16} className="text-brand-500" />
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}
            <br />
            <span className="text-brand-500">{t.hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-brand-600 active:scale-[0.98]"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition-all hover:bg-white/15 active:scale-[0.98]"
            >
              <Phone weight="fill" size={18} />
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.dl
            {...rise(0.32)}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-white sm:text-3xl">{s.big}</dt>
                <dd className="mt-1 text-xs leading-snug text-white/70">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
