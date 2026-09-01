import { motion, useReducedMotion } from 'motion/react'
import { CheckCircle } from '@phosphor-icons/react'
import { useLang } from '../i18n/LanguageContext'

export default function WhyUs() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  return (
    <section id="why" className="bg-navy-900 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: heading + benefits (different layout family from the services grid) */}
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t.why.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">{t.why.subtitle}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.why.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-3"
              >
                <CheckCircle weight="fill" size={26} className="mt-0.5 shrink-0 text-brand-500" />
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: real image with a framed treatment */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="./images/residential.jpg"
              alt="Newly finished residential asphalt shingle roof"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Accent block for depth (brand-locked color) */}
          <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-3xl bg-brand-500/90" />
        </motion.div>
      </div>
    </section>
  )
}
