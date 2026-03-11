import React, { useEffect, useState } from 'react'
import Reveal from './Reveal'

const roles = [
  'Desarrollador Full Stack',
  'Backend Developer',
  'Frontend Developer',
  'Node.js & FastAPI',
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/YonnierDev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/573138754025',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:yonnierleon@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let t: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
      } else {
        t = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 38)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(t)
  }, [displayed, typing, roleIndex])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <div className="section flex min-h-[90vh] items-center relative">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute top-1/4 -left-24 w-96 h-96 bg-primary-400/10 dark:bg-primary-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-24 w-80 h-80 bg-violet-400/10 dark:bg-violet-500/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-3xl text-center relative z-10 w-full">
        <Reveal delay={0}>
          <div className="mx-auto mb-8 flex justify-center">
            <div className="float-anim glow-ring aspect-[16/9] w-56 sm:w-72 md:w-96 lg:w-[28rem] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/logodev.jpeg"
                alt="Logo Yonnier Leon"
                className="h-full w-full object-contain bg-transparent"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Hola, soy <span className="gradient-text">Yonnier Leon</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-200 mb-6 min-h-[2rem] cursor-blink">
            {displayed || '\u00A0'}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Tecnólogo en ADSO con experiencia en desarrollo full stack, APIs REST, JWT, bases de datos (MySQL/PostgreSQL), microservicios con IA y despliegues en la nube. Construyo soluciones con Node.js, Express, React y FastAPI.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a href="#proyectos" onClick={scrollTo('proyectos')} className="btn btn-primary w-full sm:w-auto px-6 py-2.5 text-base">
              Ver proyectos
            </a>
            <a href="#contacto" onClick={scrollTo('contacto')} className="btn btn-outline w-full sm:w-auto px-6 py-2.5 text-base">
              Contactarme
            </a>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <div className="flex items-center justify-center gap-3 mb-12">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                aria-label={s.label}
                className="h-10 w-10 grid place-items-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-110 hover:shadow-md transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={460}>
          <button
            onClick={scrollTo('sobre-mi')}
            aria-label="Ir a Sobre mí"
            className="scroll-bounce mx-auto flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors bg-transparent border-0 cursor-pointer"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </Reveal>
      </div>
    </div>
  )
}

export default Hero
