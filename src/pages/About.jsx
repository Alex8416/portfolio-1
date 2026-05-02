import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '../lib/translations'
import Icon from '../components/Icon'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
}

const expertiseColors = [
  'bg-purple-100 text-purple-600',
  'bg-blue-100 text-blue-600',
  'bg-teal-100 text-teal-600',
  'bg-orange-100 text-orange-600',
  'bg-sky-100 text-sky-600',
  'bg-indigo-100 text-indigo-600',
]

export default function About() {
  const a = t.about
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.35) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sky-400 font-semibold text-xs uppercase tracking-widest mb-3">{a.headline}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 max-w-3xl leading-tight tracking-tight">{a.vision}</h1>
            <p className="text-gray-300 text-base max-w-2xl leading-relaxed">{a.description}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,40 C480,0 960,40 1440,15 L1440,40 Z" fill="white" />
          </svg>
        </div>
        <div className="h-6" />
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-sky-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-200">
              <span className="text-white font-bold text-2xl">V</span>
            </div>
            <p className="text-sky-600 font-semibold text-xs uppercase tracking-widest mb-2">Was uns antreibt</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Unsere Mission</h2>
            <p className="text-gray-600 text-base leading-relaxed">{a.mission}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {[
              { value: '30+', label: 'Projekte', sub: 'erfolgreich umgesetzt' },
              { value: '3', label: 'Kernbranchen', sub: 'Fachbetriebe · Bau · Vereine' },
              { value: '8 Wo.', label: 'Ø Umsetzungszeit', sub: 'Analyse bis Go-live' },
              { value: '24h', label: 'Reaktionszeit', sub: 'bei Support-Anfragen' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center py-7 px-4"
              >
                <div className="text-3xl font-bold text-sky-600 tracking-tight">{s.value}</div>
                <div className="text-xs text-gray-700 mt-1 font-semibold">{s.label}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <p className="text-sky-600 font-semibold text-xs uppercase tracking-widest mb-2">{a.expertiseHeadline}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Was wir mitbringen</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {a.expertise.map((item, i) => (
              <motion.div
                key={item.title} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-gray-100 hover:border-sky-100 transition-all"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${expertiseColors[i % expertiseColors.length]}`}>
                  <Icon name={item.icon} size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <p className="text-sky-600 font-semibold text-xs uppercase tracking-widest mb-2">Schwerpunkte</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{a.industries.headline}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {a.industries.items.map((ind, i) => (
              <motion.div
                key={ind.title} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 hover:shadow-lg hover:shadow-sky-100/60 transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                  <Icon name={ind.icon} size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">{ind.title}</h3>
                <p className="text-sm text-gray-500">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <p className="text-sky-600 font-semibold text-xs uppercase tracking-widest mb-2">Unser Fundament</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Unsere Werte</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {a.values.map((v, i) => (
              <motion.div
                key={v.title} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:border-sky-100 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-3">
                  <Icon name={v.icon} size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 tracking-tight">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-700 to-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Lernen Sie uns kennen</h2>
            <p className="text-sky-100 mb-8 text-base">Buchen Sie ein kostenloses Erstgespräch – wir freuen uns auf Ihre Herausforderungen.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-700 font-bold rounded-xl hover:bg-sky-50 transition-colors shadow-lg"
            >
              {a.cta}
              <Icon name="ArrowRight" size={18} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
