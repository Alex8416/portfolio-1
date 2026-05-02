import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '../lib/translations'
import Icon from '../components/Icon'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } }),
}

const iconBg = {
  blue:   'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
  teal:   'bg-teal-100 text-teal-600',
  sky:    'bg-sky-100 text-sky-600',
}

export default function Home() {
  const fp = t.featuredPoc
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-600 to-blue-600 text-white">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pt-28 md:pb-36 lg:pt-36 lg:pb-44">
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-5 max-w-3xl"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
            className="text-base md:text-lg text-sky-100 max-w-xl mb-8 leading-relaxed"
          >
            {t.hero.subline}
          </motion.p>

          <motion.div
            custom={3} initial="hidden" animate="visible" variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-sky-700 font-semibold rounded-xl hover:bg-sky-50 transition-colors shadow-lg shadow-sky-900/20 text-sm"
            >
              {t.hero.cta}
              <Icon name="ArrowRight" size={16} />
            </Link>
            <Link
              to="/poc"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 text-white font-semibold rounded-xl hover:bg-white/25 transition-colors border border-white/25 text-sm"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,64 C360,10 1080,56 1440,24 L1440,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ─── Stats strip ─── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {t.hero.stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center py-6 px-4"
              >
                <div className="text-3xl font-bold text-sky-600">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45 }}
            className="text-center mb-12"
          >
            <p className="text-sky-600 font-semibold text-xs uppercase tracking-widest mb-2">{t.services.headline}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.services.subline}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.items.map((svc, i) => (
              <motion.div
                key={svc.href} custom={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp}
              >
                <Link
                  to={svc.href}
                  className="group flex flex-col h-full p-6 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-50 transition-all duration-250"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${iconBg[svc.color] || 'bg-gray-100 text-gray-600'}`}>
                    <Icon name={svc.icon} size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">{svc.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{svc.desc}</p>
                  <div className="mt-4 flex items-center text-sm text-sky-600 font-semibold">
                    Mehr erfahren
                    <Icon name="ChevronRight" size={16} className="ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link
                to="/contact"
                className="group flex flex-col h-full p-6 bg-gradient-to-br from-sky-600 to-blue-600 rounded-2xl text-white hover:shadow-xl hover:shadow-sky-200 transition-all duration-250"
              >
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon name="Rocket" size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold mb-2">Bereit für den Start?</h3>
                <p className="text-sm text-sky-100 leading-relaxed flex-1">Kostenlose Prozessanalyse – wir zeigen Ihnen das Potenzial in Ihrem Betrieb.</p>
                <div className="mt-4 flex items-center text-sm font-semibold">
                  Jetzt anfragen
                  <Icon name="ChevronRight" size={16} className="ml-0.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Featured PoC ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full mb-4">
              {fp.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{fp.headline}</h2>
            <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full">{fp.industry}</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <BeforeAfterSlider before={fp.before} after={fp.after} />

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {fp.highlights.map((h, i) => (
                <div key={i} className="text-center px-8 py-4 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[130px]">
                  <div className="text-3xl font-bold text-sky-600">{h.value}</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/poc"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 transition-colors text-sm"
              >
                {fp.cta}
                <Icon name="ArrowRight" size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Industries ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-12"
          >
            <p className="text-sky-600 font-semibold text-xs uppercase tracking-widest mb-2">Unsere Zielgruppen</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Spezialisiert auf Ihre Branche</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.industries.items.map((ind, i) => (
              <motion.div
                key={ind.title} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                  <Icon name={ind.icon} size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{ind.title}</h3>
                <p className="text-sm text-gray-500">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-16 bg-gradient-to-r from-sky-700 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Bereit, Ihre Prozesse zu transformieren?
          </motion.h2>
          <p className="text-sky-100 text-base mb-8 max-w-xl mx-auto">
            Kostenlose Erstberatung – unverbindlich, individuell, auf Ihr Unternehmen zugeschnitten.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-700 font-bold rounded-xl hover:bg-sky-50 transition-colors shadow-lg text-base"
          >
            {t.hero.cta}
            <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
