import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useLang } from '../i18n/LanguageContext'

// Real project photos, shown one at a time in a carousel.
const photos = [
  './images/gallery/proyecto-1.jpg',
  './images/gallery/proyecto-2.jpg',
  './images/gallery/proyecto-3.jpg',
  './images/gallery/proyecto-4.jpg',
  './images/gallery/proyecto-5.jpg',
  './images/gallery/proyecto-6.jpg',
  './images/gallery/proyecto-7.jpg',
  './images/gallery/proyecto-8.jpg',
  './images/gallery/proyecto-9.jpg',
]

export default function Gallery() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const go = useCallback((step) => {
    setDir(step)
    setIndex((i) => (i + step + photos.length) % photos.length)
  }, [])

  const goTo = useCallback((target) => {
    setIndex((i) => {
      if (target !== i) setDir(target > i ? 1 : -1)
      return target
    })
  }, [])

  // Auto-advance one photo at a time; pauses if the user prefers reduced motion.
  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => go(1), 4500)
    return () => clearInterval(id)
  }, [go, reduce, index])

  return (
    <section id="gallery" className="bg-navy-900 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            {t.gallery.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">{t.gallery.subtitle}</p>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          {/* Stage: one photo at a time, slides in from the side */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <motion.img
                key={index}
                src={photos[index]}
                alt=""
                custom={dir}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Arrows */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={t.gallery.prev}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-900/60 text-white backdrop-blur transition-colors hover:bg-brand-500"
            >
              <CaretLeft size={22} weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={t.gallery.next}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-900/60 text-white backdrop-blur transition-colors hover:bg-brand-500"
            >
              <CaretRight size={22} weight="bold" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2.5">
            {photos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? 'w-7 bg-brand-500' : 'w-2.5 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
