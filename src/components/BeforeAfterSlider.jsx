import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }, [])

  const onMouseDown = (e) => {
    e.preventDefault()
    dragging.current = true
    const onMove = (e) => { if (dragging.current) updatePos(e.clientX) }
    const onUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp, { once: true })
    window._baCleanup = () => window.removeEventListener('mousemove', onMove)
  }

  const onTouchMove = (e) => updatePos(e.touches[0].clientX)

  return (
    <div
      ref={containerRef}
      className="relative select-none rounded-xl overflow-hidden bg-gray-100 cursor-ew-resize"
      style={{ touchAction: 'none' }}
      onTouchMove={onTouchMove}
    >
      {/* Before panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="bg-red-50 p-6 md:p-8 border-r-2 border-dashed border-gray-300">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-700 rounded-full">{before.label}</span>
          </div>
          <div className="space-y-4">
            {before.metrics.map((m, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">✗</span>
                <div>
                  <div className="text-lg font-bold text-red-600">{m.value}</div>
                  <div className="text-sm text-gray-600">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* After panel */}
        <div className="bg-green-50 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-700 rounded-full">{after.label}</span>
          </div>
          <div className="space-y-4">
            {after.metrics.map((m, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">✓</span>
                <div>
                  <div className="text-lg font-bold text-green-600">{m.value}</div>
                  <div className="text-sm text-gray-600">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function BeforeAfterFull({ poc }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Before */}
        <div className="bg-red-50 p-6 border-b md:border-b-0 md:border-r border-red-100">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full mb-4">
            ✗ Vorher
          </div>
          <div className="space-y-3 mb-4">
            <Stat label="Zeit" value={poc.before.time} bad />
            <Stat label="Fehlerquote" value={poc.before.errorRate} bad />
            <Stat label="Kosten" value={poc.before.cost} bad />
          </div>
          <ul className="space-y-1.5">
            {poc.before.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-red-400 shrink-0">•</span> {d}
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="bg-green-50 p-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full mb-4">
            ✓ Nachher
          </div>
          <div className="space-y-3 mb-4">
            <Stat label="Zeit" value={poc.after.time} />
            <Stat label="Fehlerquote" value={poc.after.errorRate} />
            <Stat label="Kosten" value={poc.after.cost} />
          </div>
          <ul className="space-y-1.5">
            {poc.after.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-green-500 shrink-0">•</span> {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Savings bar */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-500 p-4">
        <div className="flex flex-wrap justify-center gap-8">
          {poc.savings.map((s, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-sky-100">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, bad }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-gray-500">{label}</span>
      <span className={`text-sm font-bold ${bad ? 'text-red-600' : 'text-green-600'}`}>{value}</span>
    </div>
  )
}
