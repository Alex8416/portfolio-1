import { Link } from 'react-router-dom'
import { t } from '../lib/translations'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-xl text-white">VAMIT</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">{t.footer.tagline}</p>
            <div className="mt-4 space-y-1">
              <p className="text-sm">
                <a href={`mailto:${t.contact.info.email}`} className="hover:text-sky-400 transition-colors">
                  {t.contact.info.email}
                </a>
              </p>
              <p className="text-sm">
                <a href={`tel:${t.contact.info.phone}`} className="hover:text-sky-400 transition-colors">
                  {t.contact.info.phone}
                </a>
              </p>
              <p className="text-sm text-gray-400">{t.contact.info.location}</p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.solutions}</h4>
            <ul className="space-y-2">
              {t.nav.solutionsItems.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2">
              {t.footer.companyLinks.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          {t.footer.legal}
        </div>
      </div>
    </footer>
  )
}
