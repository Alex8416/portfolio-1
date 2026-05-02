import { motion } from 'framer-motion'
import Icon from './Icon'

export default function BeforeAfterSlider({ before, after }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      {/* Before panel */}
      <div className="bg-red-50/60 p-6 md:p-8 border-b md:border-b-0 md:border-r border-red-100">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full mb-5">
          <Icon name="TrendingDown" size={12} strokeWidth={2.5} />
          {before.label}
        </div>
        <div className="space-y-4">
          {before.metrics.map((m, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mt-0.5">
                <Icon name="X" size={12} strokeWidth={2.5} />
              </span>
              <div>
                <div className="text-xl font-bold text-red-600 tracking-tight">{m.value}</div>
                <div className="text-sm text-gray-500">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* After panel */}
      <div className="bg-green-50/60 p-6 md:p-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full mb-5">
          <Icon name="TrendingUp" size={12} strokeWidth={2.5} />
          {after.label}
        </div>
        <div className="space-y-4">
          {after.metrics.map((m, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">
                <Icon name="Check" size={12} strokeWidth={2.5} />
              </span>
              <div>
                <div className="text-xl font-bold text-green-600 tracking-tight">{m.value}</div>
                <div className="text-sm text-gray-500">{m.label}</div>
              </div>
            </div>
          ))}
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
        <div className="bg-red-50/60 p-6 border-b md:border-b-0 md:border-r border-red-100">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full mb-4">
            <Icon name="X" size={11} strokeWidth={2.5} />
            Vorher
          </div>
          <div className="space-y-3 mb-4">
            <Stat label="Zeit" value={poc.before.time} bad />
            <Stat label="Fehlerquote" value={poc.before.errorRate} bad />
            <Stat label="Kosten" value={poc.before.cost} bad />
          </div>
          <ul className="space-y-1.5">
            {poc.before.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <Icon name="X" size={12} strokeWidth={2.5} className="text-red-400 shrink-0 mt-0.5" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="bg-green-50/60 p-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full mb-4">
            <Icon name="Check" size={11} strokeWidth={2.5} />
            Nachher
          </div>
          <div className="space-y-3 mb-4">
            <Stat label="Zeit" value={poc.after.time} />
            <Stat label="Fehlerquote" value={poc.after.errorRate} />
            <Stat label="Kosten" value={poc.after.cost} />
          </div>
          <ul className="space-y-1.5">
            {poc.after.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <Icon name="Check" size={12} strokeWidth={2.5} className="text-green-500 shrink-0 mt-0.5" />
                {d}
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
              <div className="text-2xl font-bold tracking-tight">{s.value}</div>
              <div className="text-xs text-sky-100 mt-0.5">{s.label}</div>
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
