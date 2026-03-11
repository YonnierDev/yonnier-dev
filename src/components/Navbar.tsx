import React, { useEffect, useState } from 'react'

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'skills', label: 'Skills' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]

function Navbar() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [scrolled, setScrolled] = useState(false)
  const [logoOk, setLogoOk] = useState(true)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur bg-white/80 dark:bg-slate-950/70 shadow-sm border-b border-slate-200/60 dark:border-slate-800/60' : 'bg-transparent'}`}>
      <nav className="section flex h-16 items-center justify-between">
        <a href="#inicio" onClick={handleScroll('inicio')} className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {logoOk ? (
            <img
              src="/logo.png"
              alt="Yonnier Leon logo"
              className="h-6 w-6 rounded-md object-contain"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary-600 text-white text-xs">{'</>'}</span>
          )}
          <span>Yonnier Leon</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={handleScroll(s.id)}
              className={`relative pb-0.5 transition-colors ${
                activeSection === s.id
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {s.label}
              {activeSection === s.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Cambiar tema"
            aria-pressed={dark}
            title="Cambiar tema"
            onClick={() => setDark(v => !v)}
            className="h-9 w-9 grid place-items-center rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
