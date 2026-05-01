import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '../lib/translations'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function Home() {
  const fp = t.featuredPoc
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-500 to-blue-500 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg md:text-xl text-sky-100 max-w-2xl mb-8"
          >
            {t.hero.subline}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-sky-700 font-semibold rounded-xl hover:bg-sky-50 transition-colors shadow-lg"
            >
              {t.hero.cta}
            </Link>
            <Link
              to="/poc"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="white" />
          </svg>
        </div>
        <div className="h-10" />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-2">{t.services.headline}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.services.subline}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((svc, i) => (
              <motion.div
                key={svc.href}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to={svc.href}
                  className="group block h-full p-6 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-lg transition-all duration-200"
                >
                  <div className="text-3xl mb-4">{svc.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">{svc.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                  <div className="mt-4 flex items-center text-sm text-sky-600 font-medium">
                    Mehr erfahren
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Last card: CTA */}
            <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link
                to="/contact"
                className="group block h-full p-6 bg-gradient-to-br from-sky-600 to-blue-500 rounded-2xl text-white hover:shadow-lg transition-all duration-200"
              >
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-bold mb-2">Bereit für den Start?</h3>
                <p className="text-sm text-sky-100 leading-relaxed">Kostenlose Prozessanalyse – wir zeigen Ihnen das Potenzial in Ihrem Betrieb.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-white">
                  Jetzt anfragen
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured PoC */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
              {fp.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{fp.headline}</h2>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full">{fp.industry}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BeforeAfterSlider before={fp.before} after={fp.after} />

            {/* Highlight stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:flex sm:justify-center sm:gap-8">
              {fp.highlights.map((h, i) => (
                <div key={i} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-sky-600">{h.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/poc"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 transition-colors"
              >
                {fp.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-2">Unsere Zielgruppen</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Spezialisiert auf Ihre Branche</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.industries.items.map((ind, i) => (
              <motion.div
                key={ind.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{ind.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ind.title}</h3>
                <p className="text-sm text-gray-500">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Bereit, Ihre Prozesse zu transformieren?
          </motion.h2>
          <p className="text-sky-100 text-lg mb-8">
            Kostenlose Erstberatung – unverbindlich, individuell, auf Ihr Unternehmen zugeschnitten.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-700 font-bold rounded-xl hover:bg-sky-50 transition-colors shadow-lg text-lg"
          >
            {t.hero.cta}
          </Link>
        </div>
      </section>
    </main>
  )
}
