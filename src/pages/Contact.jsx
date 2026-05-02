import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { t } from '../lib/translations'
import Icon from '../components/Icon'

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'

const initialData = { company: '', email: '', size: '', industry: '', message: '', preference: '' }

export default function Contact() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initialData)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const ct = t.contact

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const handleSubmit = async () => {
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSubmitted(true)
      else setError('Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.')
    } catch {
      setError('Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-700 to-blue-600 text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{ct.headline}</h1>
            <p className="text-sky-100 text-base max-w-xl mx-auto leading-relaxed">{ct.subline}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                {submitted ? (
                  <SuccessView ct={ct} />
                ) : (
                  <>
                    <StepIndicator steps={ct.steps} current={step} />
                    <AnimatePresence mode="wait">
                      {step === 0 && (
                        <StepPanel key="s0">
                          <FormField label={ct.fields.company} required>
                            <input type="text" value={form.company} onChange={e => set('company', e.target.value)} placeholder="Muster GmbH" className="input" />
                          </FormField>
                          <FormField label={ct.fields.email} required>
                            <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="info@firma.de" className="input" />
                          </FormField>
                          <FormField label={ct.fields.size} required>
                            <select value={form.size} onChange={e => set('size', e.target.value)} className="input">
                              <option value="">Bitte wählen</option>
                              {ct.fields.sizeOptions.map(o => <option key={o}>{o}</option>)}
                            </select>
                          </FormField>
                          <NavButtons onNext={() => setStep(1)} nextDisabled={!form.company || !form.email || !form.size} ct={ct} />
                        </StepPanel>
                      )}
                      {step === 1 && (
                        <StepPanel key="s1">
                          <FormField label={ct.fields.industry} required>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {ct.fields.industryOptions.map(opt => (
                                <label key={opt} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${form.industry === opt ? 'border-sky-500 bg-sky-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                  <input type="radio" name="industry" value={opt} checked={form.industry === opt} onChange={e => set('industry', e.target.value)} className="accent-sky-600" />
                                  <span className="text-sm font-medium text-gray-700">{opt}</span>
                                </label>
                              ))}
                            </div>
                          </FormField>
                          <NavButtons onBack={() => setStep(0)} onNext={() => setStep(2)} nextDisabled={!form.industry} ct={ct} />
                        </StepPanel>
                      )}
                      {step === 2 && (
                        <StepPanel key="s2">
                          <FormField label={ct.fields.message} required>
                            <textarea value={form.message} onChange={e => set('message', e.target.value)} rows={5} placeholder="Beschreiben Sie kurz Ihren aktuellen Prozess und wo Sie sich Verbesserungen wünschen..." className="input resize-none" />
                          </FormField>
                          <FormField label={ct.fields.preference}>
                            <div className="flex flex-wrap gap-2">
                              {ct.fields.preferenceOptions.map(opt => (
                                <label key={opt} className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer text-sm font-medium transition-all ${form.preference === opt ? 'border-sky-500 bg-sky-50 text-sky-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                                  <input type="radio" name="preference" value={opt} checked={form.preference === opt} onChange={e => set('preference', e.target.value)} className="accent-sky-600" />
                                  {opt}
                                </label>
                              ))}
                            </div>
                          </FormField>
                          {error && (
                            <div className="flex items-start gap-2.5 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                              <Icon name="AlertCircle" size={16} className="mt-0.5 shrink-0" />
                              {error}
                            </div>
                          )}
                          <NavButtons onBack={() => setStep(1)} onSubmit={handleSubmit} nextDisabled={!form.message} submitting={submitting} isLast ct={ct} />
                        </StepPanel>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <ContactInfoCard />
              <WhyCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function StepIndicator({ steps, current }) {
  return (
    <div className="flex items-center mb-8">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center flex-1 last:flex-none">
          <div className={`flex flex-col items-center ${i < steps.length - 1 ? 'flex-1' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 ${
              i < current ? 'bg-sky-600 text-white' : i === current ? 'bg-sky-600 text-white ring-4 ring-sky-100' : 'bg-gray-100 text-gray-400'
            }`}>
              {i < current ? <Icon name="Check" size={14} /> : i + 1}
            </div>
            <span className={`mt-1 text-xs hidden sm:block font-medium ${i === current ? 'text-sky-600' : 'text-gray-400'}`}>{s}</span>
          </div>
          {i < steps.length - 1 && (
            <div className={`h-0.5 flex-1 mx-2 transition-colors duration-300 ${i < current ? 'bg-sky-600' : 'bg-gray-200'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

function StepPanel({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="space-y-5"
    >
      {children}
    </motion.div>
  )
}

function FormField({ label, required, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

function NavButtons({ onBack, onNext, onSubmit, nextDisabled, submitting, isLast, ct }) {
  return (
    <div className="flex gap-3 pt-2">
      {onBack && (
        <button onClick={onBack} className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm">
          ← {ct.back}
        </button>
      )}
      <button
        onClick={isLast ? onSubmit : onNext}
        disabled={nextDisabled || submitting}
        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:opacity-80 transition-opacity text-sm"
      >
        {submitting ? 'Wird gesendet…' : isLast ? ct.submit : `${ct.next} →`}
      </button>
    </div>
  )
}

function SuccessView({ ct }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
      <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
        <Icon name="Check" size={36} className="text-green-600" strokeWidth={2.5} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{ct.success}</h2>
      <p className="text-gray-500">{ct.successSub}</p>
    </motion.div>
  )
}

function ContactInfoCard() {
  const ci = t.contact.info
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h3 className="text-base font-bold text-gray-900 mb-4">Kontaktdaten</h3>
      <div className="space-y-4">
        {[
          { icon: 'Mail', label: 'E-Mail', value: ci.email, href: `mailto:${ci.email}` },
          { icon: 'Phone', label: 'Telefon', value: ci.phone, href: `tel:${ci.phone}` },
          { icon: 'MapPin', label: 'Standort', value: ci.location, href: null },
        ].map(item => (
          <div key={item.label} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <Icon name={item.icon} size={16} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
              {item.href
                ? <a href={item.href} className="text-sm font-medium text-sky-600 hover:underline">{item.value}</a>
                : <p className="text-sm font-medium text-gray-700">{item.value}</p>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function WhyCard() {
  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl border border-sky-100 p-6">
      <h3 className="text-base font-bold text-gray-900 mb-4">Warum VAMIT?</h3>
      <ul className="space-y-3">
        {t.contact.whyItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
              <Icon name={item.icon} size={14} strokeWidth={2} />
            </div>
            <p className="text-sm text-gray-600 leading-snug">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
