# CLAUDE.md

## Proyecto

Portafolio personal de **Yonnier Leon** — SPA en React 18 + Vite + TypeScript + Tailwind CSS.

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Build:** Vite 5 (`@vitejs/plugin-react-swc`)
- **Styling:** Tailwind CSS + clases custom en `src/index.css`
- **Runtime:** Node.js `>=18`

## Comandos

```bash
npm run dev          # servidor de desarrollo
npm run build        # build de producción
npm run preview      # previsualizar el build
npm run vercel-build # build usado en Vercel
```

## Estructura

```
src/
  App.tsx            # composición principal, layout de secciones
  main.tsx           # entry point de React
  index.css          # capas Tailwind + clases custom + keyframes
  components/
    Navbar.tsx        # nav fija, dark mode, scroll suave, sección activa
    Hero.tsx          # sección landing (typing effect, gradiente, social links)
    About.tsx         # perfil y datos rápidos
    Skills.tsx        # tarjetas de habilidades con iconos y badge pills
    Projects.tsx      # proyectos destacados con badges de stack
    Contact.tsx       # tarjetas de contacto con iconos SVG
    Footer.tsx        # footer
    Reveal.tsx        # wrapper IntersectionObserver (props: delay, direction)
public/
  favicon.png
  logo.png
  logodev.jpeg
```

## Convenciones de código

- Componentes en PascalCase, archivos `.tsx`
- **No importar React** en los componentes (React 17+ JSX transform — el compilador lo maneja)
- Excepción: importar `React` solo si se usa explícitamente (e.g. `React.MouseEvent`, `useState`)
- Los componentes no usan hooks de librerías externas; todo es vanilla React + Web APIs
- Scroll suave: interceptar el `onClick` del anchor, calcular `getBoundingClientRect().top + window.scrollY - 72` y llamar `window.scrollTo`

## Animaciones y clases CSS custom (`src/index.css`)

| Clase | Uso |
|---|---|
| `.gradient-text` | Texto con gradiente azul→violeta→cyan animado |
| `.float-anim` | Levitación suave (avatar en Hero) |
| `.glow-ring` | Halo pulsante (avatar en Hero) |
| `.cursor-blink` | Cursor parpadeante para typing effect |
| `.scroll-bounce` | Indicador de scroll con bounce |
| `.reveal` | Fade-in + slide desde abajo (default) |
| `.reveal-left` | Fade-in + slide desde la izquierda |
| `.reveal-right` | Fade-in + slide desde la derecha |
| `.badge` | Pill para tecnologías/tags |
| `.card` | Tarjeta con blur, borde y hover elevado |
| `.btn-primary` / `.btn-outline` | Botones principales |
| `.bg-animated` | Fondo con gradiente radial (animado en dark mode) |

## Componente Reveal

```tsx
<Reveal delay={100} direction="left">
  {children}
</Reveal>
```

- `delay` — ms de `transitionDelay` (por defecto sin delay)
- `direction` — `'up'` (default) | `'left'` | `'right'`
- Usa `IntersectionObserver` con `threshold: 0.15`, se dispara una sola vez

## Dark Mode

- Toggle en `Navbar.tsx` — añade/quita clase `dark` en `document.documentElement`
- Persiste en `localStorage` con clave `'theme'`
- Respeta `prefers-color-scheme` en la primera visita

## Navbar — sección activa

- `IntersectionObserver` con `rootMargin: '-40% 0px -55% 0px'` trackea la sección visible
- El link activo recibe un subrayado animado con `span` absoluto

## Tailwind config

- `primary` color scale mapeado a azul (`#3b82f6` = primary-500)
- `darkMode: 'class'`

## Despliegue

- Output estático en `dist/`
- Desplegado en **Vercel** (comando `vercel-build`)
- Compatible con Netlify, Railway, Nginx estático

## Próximos pasos sugeridos

1. Externalizar contenido del portafolio a un archivo de configuración (`src/data/portfolio.ts`)
2. Añadir ESLint + typescript-eslint
3. SEO: Open Graph, Twitter cards, canonical URL en `index.html`
4. Menú hamburguesa para mobile en Navbar
5. Sección de timeline/experiencia
