import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { pocs } from '../lib/pocData'
import { BeforeAfterFull } from '../components/BeforeAfterSlider'

const filters = ['Alle', 'Fachbetriebe', 'Baugewerbe', 'Vereine']

const industryColor = {
  Fachbetriebe: 'bg-orange-100 text-orange-700',
  Baugewerbe: 'bg-blue-100 text-blue-700',
  Vereine: 'bg-green-100 text-green-700',
}

const categoryColor = {
  'AI-Workflows': 'bg-purple-100 text-purple-700',
  'Custom Applications': 'bg-teal-100 text-teal-700',
  Automatisierungen: 'bg-amber-100 text-amber-700',
}

export default function PoCGallery() {
  const [activeFilter, setActiveFilter] = useState('Alle')
  const [expanded, setExpanded] = useState(null)

  const filtered = activeFilter === 'Alle' ? pocs : pocs.filter(p => p.industry === activeFilter)

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sky-400 font-semibold text-sm uppercase tracking-wider mb-3">Proof of Concepts</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Referenzprojekte</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Reale Ergebnisse für echte Betriebe. Sehen Sie, wie VAMIT manuelle Prozesse in effiziente Systeme verwandelt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => { setActiveFilter(f); setExpanded(null) }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === f
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PoC Cards */}
      <section className="py-12 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map(poc => (
                <motion.div
                  key={poc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <PoCCard
                    poc={poc}
                    isExpanded={expanded === poc.id}
                    onToggle={() => setExpanded(prev => prev === poc.id ? null : poc.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              Keine Referenzprojekte für diese Branche gefunden.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ihr Betrieb als nächstes?</h2>
          <p className="text-sky-100 mb-8">Lassen Sie uns gemeinsam analysieren, wo in Ihrem Unternehmen das größte Potenzial steckt.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-700 font-bold rounded-xl hover:bg-sky-50 transition-colors shadow-lg"
          >
            Kostenlose Demo buchen
          </Link>
        </div>
      </section>
    </main>
  )
}

function PoCCard({ poc, isExpanded, onToggle }) {
  return (
    <div className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${isExpanded ? 'border-sky-300 shadow-lg' : 'border-gray-100 hover:shadow-md'}`}>
      {/* Card header */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${industryColor[poc.industry]}`}>
            {poc.industry}
          </span>
          <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${categoryColor[poc.category] || 'bg-gray-100 text-gray-600'}`}>
            {poc.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">{poc.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{poc.problem}</p>

        {/* Quick savings preview */}
        <div className="flex gap-4 mb-4">
          {poc.savings.slice(0, 2).map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-xl font-bold text-sky-600">{s.value}</div>
              <div className="text-xs text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-sky-600 border border-sky-200 rounded-xl hover:bg-sky-50 transition-colors"
        >
          {isExpanded ? 'Schließen' : 'Details ansehen'}
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expanded view */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-100"
          >
            <div className="p-6 pt-4">
              <BeforeAfterFull poc={poc} />
              <div className="mt-4 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
                >
                  Kostenlose Demo buchen
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
