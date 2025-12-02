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

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition shadow-sm ${scrolled ? 'backdrop-blur bg-white/70 dark:bg-slate-950/60' : 'bg-transparent'}`}>
      <nav className="section flex h-16 items-center justify-between">
        <a href="#inicio" onClick={handleScroll('inicio')} className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {logoOk ? (
            <img
              src="/logo.svg"
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
            <a key={s.id} href={`#${s.id}`} onClick={handleScroll(s.id)} className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">{s.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={() => setDark(v => !v)} className="h-9 w-9 grid place-items-center rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            {dark ? (
              <span className="i">🌙</span>
            ) : (
              <span className="i">☀️</span>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
