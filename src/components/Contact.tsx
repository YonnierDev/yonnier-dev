import React from 'react'

function Contact() {
  return (
    <div className="section">
      <h2 className="section-title">Contacto</h2>
      <p className="text-slate-700 dark:text-slate-300 mb-6">¿Tienes una oportunidad laboral, proyecto o colaboración? Hablemos.</p>

      <ul className="space-y-2 mb-10">
        <li><a className="text-primary-600 hover:underline" href="https://wa.me/573138754025" target="_blank" rel="noreferrer">WhatsApp: 313 875 4025</a></li>
        <li><a className="text-primary-600 hover:underline" href="mailto:yonnierleon@gmail.com">Email: yonnierleon@gmail.com</a></li>
        <li><a className="text-primary-600 hover:underline" href="https://github.com/YonnierDev" target="_blank" rel="noreferrer">GitHub: YonnierDev</a></li>
      </ul>

      <div className="card p-5">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-600 dark:text-slate-300">Nombre</label>
            <input className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" placeholder="Tu nombre" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
            <input type="email" className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" placeholder="tu@email.com" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-1">
            <label className="text-sm text-slate-600 dark:text-slate-300">Mensaje</label>
            <textarea rows={4} className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" placeholder="Cuéntame sobre tu proyecto" />
          </div>
          <div className="md:col-span-2">
            <button type="button" className="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
