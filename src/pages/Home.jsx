import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '../lib/translations'
import Icon from '../components/Icon'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
}

const iconBg = {
  blue:   'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
  teal:   'bg-teal-100 text-teal-600',
  sky:    'bg-sky-100 text-sky-600',
}

const processSteps = [
  {
    number: '01',
    title: 'Analyse',
    desc: 'Kostenlose Prozessanalyse in Ihrem Betrieb. Wir dokumentieren Abläufe, identifizieren Engpässe und berechnen das genaue Einsparpotenzial.',
    icon: 'Search',
    duration: 'Tag 1–3',
    color: 'bg-sky-100 text-sky-700 border-sky-200',
    dot: 'bg-sky-500',
  },
  {
    number: '02',
    title: 'Konzept & Angebot',
    desc: 'Maßgeschneiderte Lösung mit ROI-Kalkulation, Systemarchitektur und Festpreisangebot. Kein Stundensatz – klare Kosten von Anfang an.',
    icon: 'FileText',
    duration: 'Woche 1',
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    dot: 'bg-blue-500',
  },
  {
    number: '03',
    title: 'Agile Umsetzung',
    desc: 'Entwicklung in 2-Wochen-Sprints. Wöchentliche Updates, Test-Zugang ab Sprint 1, kein Vendor Lock-in und vollständige Quelldokumentation.',
    icon: 'Code2',
    duration: 'Woche 2–8',
    color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    dot: 'bg-indigo-500',
  },
  {
    number: '04',
    title: 'Betrieb & Support',
    desc: 'Proaktives Monitoring, Wartung und kontinuierliche Optimierung. SLA-gesicherter Support und quartalsweise Optimierungsreviews.',
    icon: 'Shield',
    duration: 'Dauerhaft',
    color: 'bg-purple-100 text-purple-700 border-purple-200',
    dot: 'bg-purple-500',
  },
]

const techStack = [
  {
    category: 'Automatisierung',
    icon: 'Settings2',
    bg: 'bg-orange-50 border-orange-100',
    iconBg: 'bg-orange-100 text-orange-600',
    tools: ['n8n', 'Make', 'Zapier', 'UiPath'],
  },
  {
    category: 'KI & Intelligenz',
    icon: 'Brain',
    bg: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-100 text-purple-600',
    tools: ['Python', 'LangChain', 'OpenAI', 'OCR / IDP'],
  },
  {
    category: 'Cloud & Infrastruktur',
    icon: 'Cloud',
    bg: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100 text-blue-600',
    tools: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Nextcloud'],
  },
  {
    category: 'ERP & Buchhaltung',
    icon: 'Database',
    bg: 'bg-teal-50 border-teal-100',
    iconBg: 'bg-teal-100 text-teal-600',
    tools: ['SAP', 'DATEV', 'Lexware', 'Sage'],
  },
  {
    category: 'Entwicklung',
    icon: 'Code2',
    bg: 'bg-sky-50 border-sky-100',
    iconBg: 'bg-sky-100 text-sky-600',
    tools: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    category: 'Dokumentenmanagement',
    icon: 'FolderOpen',
    bg: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-100 text-green-600',
    tools: ['ELO', 'DocuWare', 'SharePoint', 'Alfresco'],
  },
]

const differentiators = [
  { icon: 'Euro', title: 'Festpreis', desc: 'Kein Stundensatz. Kein Scope-Creep. Klares Budget von Anfang an.' },
  { icon: 'Timer', title: '8 Wochen', desc: 'Von der Analyse bis zum Go-live. Nicht 8 Monate wie klassische IT-Projekte.' },
  { icon: 'BadgeCheck', title: 'Kein Lock-in', desc: 'Voller Quellcode, vollständige Dokumentation. Sie behalten die Kontrolle.' },
]

export default function Home() {
  const fp = t.featuredPoc
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-600 to-blue-600 text-white">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.35) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pt-28 md:pb-36 lg:pt-32 lg:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left — text */}
            <div className="lg:col-span-7">
              <motion.div
                initial="hidden" animate="visible" variants={fadeUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {t.hero.badge}
              </motion.div>

              <motion.h1
                custom={1} initial="hidden" animate="visible" variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-5 whitespace-pre-line"
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
                  <Icon name="ArrowRight" size={16} strokeWidth={2} />
                </Link>
                <Link
                  to="/poc"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 text-white font-semibold rounded-xl hover:bg-white/25 transition-colors border border-white/25 text-sm"
                >
                  {t.hero.ctaSecondary}
                </Link>
              </motion.div>
            </div>

            {/* Right — dashboard card */}
            <div className="hidden lg:block lg:col-span-5">
              <HeroDashboardCard />
            </div>
          </div>
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

      {/* ─── Services Grid ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <p className="text-sky-600 font-semibold text-xs uppercase tracking-widest mb-2">{t.services.headline}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{t.services.subline}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.items.map((svc, i) => (
              <motion.div
                key={svc.href} custom={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="h-full"
              >
                <Link
                  to={svc.href}
                  className="group flex flex-col h-full p-6 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-50/60 transition-all duration-250"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${iconBg[svc.color] || 'bg-gray-100 text-gray-600'}`}>
                    <Icon name={svc.icon} size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors tracking-tight">{svc.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{svc.desc}</p>
                  <div className="mt-4 flex items-center text-sm text-sky-600 font-semibold">
                    Mehr erfahren
                    <Icon name="ChevronRight" size={16} className="ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
            >
              <Link
                to="/contact"
                className="group flex flex-col h-full p-6 bg-gradient-to-br from-sky-600 to-blue-600 rounded-2xl text-white hover:shadow-xl hover:shadow-sky-200 transition-all duration-250"
              >
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon name="Rocket" size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold mb-2 tracking-tight">Bereit für den Start?</h3>
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

      {/* ─── Differentiators ─── */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-700">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-gray-900 px-8 py-8 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                  <Icon name={d.icon} size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg tracking-tight mb-1">{d.title}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{d.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-14"
          >
            <p className="text-sky-600 font-semibold text-xs uppercase tracking-widest mb-2">Unser Vorgehen</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">Von der Idee zum laufenden System</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">Strukturiert, transparent und in einem klar definierten Zeitrahmen – so läuft jedes VAMIT-Projekt ab.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative"
              >
                {/* Connecting line (desktop) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-100 z-0" style={{ width: 'calc(100% - 2rem)', left: '2.5rem' }} />
                )}

                <div className="relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-sky-100 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${step.iconBg || 'bg-sky-100 text-sky-600'}`}
                      style={{ background: step.color.includes('sky') ? undefined : undefined }}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        i === 0 ? 'bg-sky-100 text-sky-600' :
                        i === 1 ? 'bg-blue-100 text-blue-600' :
                        i === 2 ? 'bg-indigo-100 text-indigo-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        <Icon name={step.icon} size={20} strokeWidth={1.75} />
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${step.color}`}>
                      {step.duration}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-200 tracking-tight mb-1">{step.number}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tech Stack ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <p className="text-sky-600 font-semibold text-xs uppercase tracking-widest mb-2">Technologie</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">Die Plattformen hinter unseren Lösungen</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">Enterprise-grade Tools – nahtlos integriert in Ihre bestehende IT-Landschaft.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack.map((cat, i) => (
              <motion.div
                key={cat.category}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className={`rounded-2xl border p-6 ${cat.bg}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${cat.iconBg}`}>
                    <Icon name={cat.icon} size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 tracking-tight">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map(tool => (
                    <span key={tool} className="px-2.5 py-1 bg-white/80 border border-white rounded-lg text-xs font-semibold text-gray-700 shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-sm text-gray-400 mt-8"
          >
            Ihr System nicht dabei? Wir integrieren nahezu jede moderne Plattform. <Link to="/contact" className="text-sky-600 hover:underline font-medium">Sprechen Sie uns an.</Link>
          </motion.p>
        </div>
      </section>

      {/* ─── Featured PoC ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full mb-4">
              {fp.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">{fp.headline}</h2>
            <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full">{fp.industry}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <BeforeAfterSlider before={fp.before} after={fp.after} />

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {fp.highlights.map((h, i) => (
                <div key={i} className="text-center px-8 py-4 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[130px]">
                  <div className="text-3xl font-bold text-sky-600 tracking-tight">{h.value}</div>
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
                <Icon name="ArrowRight" size={16} strokeWidth={2} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Industries ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <p className="text-sky-600 font-semibold text-xs uppercase tracking-widest mb-2">Zielgruppen</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Spezialisiert auf Ihre Branche</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.industries.items.map((ind, i) => (
              <motion.div
                key={ind.title} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-sky-100 hover:shadow-lg hover:shadow-sky-50/60 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                  <Icon name={ind.icon} size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">{ind.title}</h3>
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
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          >
            Bereit, Ihre Prozesse zu transformieren?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-sky-100 text-base mb-8 max-w-xl mx-auto"
          >
            Kostenlose Erstberatung – unverbindlich, individuell, auf Ihr Unternehmen zugeschnitten.
          </motion.p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-700 font-bold rounded-xl hover:bg-sky-50 transition-colors shadow-lg text-base"
          >
            {t.hero.cta}
            <Icon name="ArrowRight" size={18} strokeWidth={2} />
          </Link>
        </div>
      </section>
    </main>
  )
}

function HeroDashboardCard() {
  const tasks = [
    { name: 'Rechnungseingang',     count: '247 / 247',    done: true },
    { name: 'Auftragsbestätigung',  count: '89 versendet', done: true },
    { name: 'Lieferantenanfragen',  count: '12 beantw.',   done: true },
    { name: 'DATEV-Lohnexport',     count: 'läuft...',     done: false },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl shadow-2xl shadow-sky-900/30 overflow-hidden border border-white/60"
    >
      {/* Window chrome */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-gray-500 font-medium">VAMIT Automation Hub</span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs text-green-700 font-semibold bg-green-100 px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          Live
        </span>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-3.5">
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Heute aktiv</span>
          <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full">8 Prozesse</span>
        </div>

        <div className="space-y-2">
          {tasks.map((task, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  task.done ? 'bg-green-100' : 'bg-sky-100'
                }`}>
                  {task.done ? (
                    <Icon name="Check" size={11} className="text-green-600" strokeWidth={2.5} />
                  ) : (
                    <div className="w-2.5 h-2.5 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" />
                  )}
                </div>
                <span className="text-sm font-medium text-gray-700">{task.name}</span>
              </div>
              <span className={`text-xs font-semibold tabular-nums ${task.done ? 'text-gray-400' : 'text-sky-600'}`}>
                {task.count}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Savings footer */}
      <div className="border-t border-gray-100 bg-gray-50/50 px-5 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 font-medium">Zeitersparnis heute</span>
          <span className="text-sm font-bold text-sky-700 tabular-nums">18,4 Stunden</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '92%' }}
            transition={{ delay: 1.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[10px] text-gray-400">0 Std</span>
          <span className="text-[10px] text-sky-600 font-bold">92% Zielerreichung</span>
        </div>
      </div>
    </motion.div>
  )
}
