import { motion, useReducedMotion } from 'motion/react'

// Shared section header. Eyebrow is optional and used sparingly across the page
// so the layout doesn't fall into the templated "label above every section" look.
export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-2xl"
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? 'text-brand-500' : 'text-brand-600'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/75' : 'text-navy-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
