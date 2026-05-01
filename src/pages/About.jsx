import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '../lib/translations'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

export default function About() {
  const a = t.about
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sky-400 font-semibold text-sm uppercase tracking-wider mb-3">{a.headline}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
              {a.vision}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">{a.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-sky-600 to-blue-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Unsere Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{a.mission}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-2">{a.expertiseHeadline}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Was wir mitbringen</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.expertise.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-sky-100 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{a.industries.headline}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {a.industries.items.map((ind, i) => (
              <motion.div
                key={ind.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{ind.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ind.title}</h3>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Unsere Werte</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Ergebnisorientiert', desc: 'Wir messen unseren Erfolg an Ihren messbaren Ergebnissen.' },
              { icon: '🔒', title: 'Vertrauenswürdig', desc: 'DSGVO-Konformität und Datensicherheit stehen bei uns an erster Stelle.' },
              { icon: '⚡', title: 'Agil', desc: 'Kurze Entwicklungszyklen und schnelle Ergebnisse statt jahrelanger Projekte.' },
              { icon: '🤝', title: 'Partnerschaftlich', desc: 'Wir verstehen uns als langfristiger Technologiepartner, nicht als Dienstleister.' },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6 bg-white rounded-2xl border border-gray-100"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">Lernen Sie uns kennen</h2>
            <p className="text-sky-100 mb-8">Buchen Sie ein kostenloses Erstgespräch – wir freuen uns auf Ihre Herausforderungen.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-700 font-bold rounded-xl hover:bg-sky-50 transition-colors shadow-lg"
            >
              {a.cta}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
