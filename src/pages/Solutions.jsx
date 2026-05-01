import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '../lib/translations'
import Icon from '../components/Icon'

const solutionMeta = {
  dms:        { icon: 'FolderOpen', heroGradient: 'from-blue-600 to-blue-500' },
  workflows:  { icon: 'Brain',      heroGradient: 'from-purple-600 to-purple-500' },
  automations:{ icon: 'Settings2',  heroGradient: 'from-orange-500 to-amber-500' },
  customApps: { icon: 'Monitor',    heroGradient: 'from-teal-600 to-teal-500' },
  chatbots:   { icon: 'Bot',        heroGradient: 'from-sky-600 to-blue-600' },
}

export default function Solutions() {
  const { slug } = useParams()
  const data = t.solutions[slug]
  const meta = solutionMeta[slug]

  if (!data || !meta) return <Navigate to="/" replace />

  return (
    <main>
      {/* Hero */}
      <section className={`relative bg-gradient-to-br ${meta.heroGradient} text-white py-20 md:py-28 overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.1),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Icon name={meta.icon} size={30} strokeWidth={1.5} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{data.title}</h1>
            <p className="text-xl opacity-90 mb-4">{data.subtitle}</p>
            <p className="text-base opacity-80 max-w-2xl leading-relaxed">{data.description}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,40 C480,0 960,40 1440,15 L1440,40 Z" fill="white" />
          </svg>
        </div>
        <div className="h-6" />
      </section>

      {/* Problem / Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-6">
                ⚠️ Die Herausforderung
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Typische Probleme</h2>
              <ul className="space-y-4">
                {data.problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold mt-0.5">
                      ✗
                    </span>
                    <span className="text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-6">
                ✅ Die VAMIT-Lösung
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Leistungen</h2>
              <ul className="space-y-4">
                {data.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bereit für {data.title}?
            </h2>
            <p className="text-gray-500 mb-8">
              Sprechen Sie mit unseren Experten – kostenlos und unverbindlich.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-500 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg text-lg"
            >
              {data.cta}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Weitere Lösungen</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.nav.solutionsItems
              .filter(s => !s.href.endsWith(slug))
              .map(s => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="p-4 rounded-xl border border-gray-100 hover:border-sky-200 hover:shadow-sm transition-all text-sm font-medium text-gray-700 hover:text-sky-600 text-center"
                >
                  {s.label}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
