import { motion, useReducedMotion } from 'motion/react'
import {
  HouseLine,
  Wrench,
  CloudLightning,
  Buildings,
  Drop,
  MagnifyingGlass,
} from '@phosphor-icons/react'
import { useLang } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'

const icons = [HouseLine, Wrench, CloudLightning, Buildings, Drop, MagnifyingGlass]

export default function Services() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  return (
    <section id="services" className="bg-sand-100 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.article
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white transition-colors group-hover:bg-brand-500">
                  <Icon weight="duotone" size={30} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-navy-500">{item.desc}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
