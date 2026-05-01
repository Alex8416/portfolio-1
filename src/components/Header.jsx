import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { t } from '../lib/translations'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'}`

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-600 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-xl text-gray-900">VAMIT</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={navLinkClass}>{t.nav.home}</NavLink>

            {/* Solutions dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(p => !p)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-sky-600 transition-colors"
              >
                {t.nav.solutions}
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2"
                  >
                    {t.nav.solutionsItems.map(item => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : 'text-gray-700 hover:bg-gray-50 hover:text-sky-600'}`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/poc" className={navLinkClass}>{t.nav.poc}</NavLink>
            <NavLink to="/about" className={navLinkClass}>{t.nav.about}</NavLink>
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-500 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
            >
              {t.nav.contact}
            </Link>
            <button
              className="md:hidden p-2 text-gray-700 hover:text-sky-600"
              onClick={() => setMobileOpen(p => !p)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              <NavLink to="/" end onClick={() => setMobileOpen(false)} className={navLinkClass + ' py-2'}>
                {t.nav.home}
              </NavLink>
              <div className="py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider pt-3">{t.nav.solutions}</div>
              {t.nav.solutionsItems.map(item => (
                <NavLink key={item.href} to={item.href} onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-2 pl-3 text-sm ${isActive ? 'text-sky-600' : 'text-gray-600 hover:text-sky-600'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/poc" onClick={() => setMobileOpen(false)} className={navLinkClass + ' py-2'}>{t.nav.poc}</NavLink>
              <NavLink to="/about" onClick={() => setMobileOpen(false)} className={navLinkClass + ' py-2'}>{t.nav.about}</NavLink>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-500 rounded-lg text-center"
              >
                {t.nav.contact}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
