import { motion, useReducedMotion } from 'motion/react'
import { useLang } from '../i18n/LanguageContext'

export default function Work() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  // Three projects, three cells: one tall feature + two stacked (asymmetric bento).
  const tiles = [
    { src: './images/residential.jpg', label: t.work.residential, className: 'lg:row-span-2 aspect-4/3 lg:aspect-auto' },
    { src: './images/commercial.jpg', label: t.work.commercial, className: 'aspect-4/3' },
    { src: './images/repair.jpg', label: t.work.repair, className: 'aspect-4/3' },
  ]

  return (
    <section id="work" className="bg-sand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
          {t.work.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-500">{t.work.subtitle}</p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2">
          {tiles.map((tile, i) => (
            <motion.figure
              key={tile.label}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl ${tile.className}`}
            >
              <img
                src={tile.src}
                alt={tile.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-5">
                <span className="text-lg font-bold text-white">{tile.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
