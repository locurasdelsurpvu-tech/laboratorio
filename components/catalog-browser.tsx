'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowRight, Check, ExternalLink, FlaskConical, Languages, Search, SlidersHorizontal, Sparkles, X } from 'lucide-react'
import { simulators, providers, subjects, type IntegrationType } from '@/lib/catalog'

const integrationLabels: Record<IntegrationType, string> = { embed: 'Se ejecuta aquí', external: 'Sitio externo', 'auth-required': 'Requiere acceso' }
const integrationStyles: Record<IntegrationType, string> = { embed: 'bg-[#e4f3e9] text-[#246343]', external: 'bg-[#f5f0df] text-[#785f18]', 'auth-required': 'bg-[#f4e7e5] text-[#8c4037]' }

function Logo() {
  return <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-RpeN3tkznJwUIOMJENaiW5sxCA5ELz.png" alt="Escudo de la E.E.S.T. N.º 6" className="h-14 w-14 object-contain" />
}

export function SiteHeader() {
  return <header className="border-b border-[#dbe4de] bg-white/90 backdrop-blur sticky top-0 z-20">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
      <Link href="/" className="flex items-center gap-3">
        <Logo />
        <div className="leading-tight"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#287653]">E.E.S.T. N.º 6</p><p className="font-serif text-lg font-semibold text-[#174D3A]">Laboratorio Virtual</p></div>
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-medium text-[#52635a] md:flex"><a href="#explorar" className="hover:text-[#174D3A]">Explorar</a><a href="#materias" className="hover:text-[#174D3A]">Materias</a><a href="#recursos" className="hover:text-[#174D3A]">Recursos docentes</a></nav>
      <Link href="#explorar" className="hidden rounded-full bg-[#174D3A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#287653] sm:block">Explorar simuladores</Link>
    </div>
  </header>
}

function SimulatorCard({ simulator }: { simulator: typeof simulators[number] }) {
  const provider = providers.find((item) => item.id === simulator.providerId)
  const subject = subjects.find((item) => item.id === simulator.subjectIds[0])
  return <article className="group flex flex-col rounded-2xl border border-[#dbe4de] bg-white p-5 shadow-[0_8px_30px_rgba(23,77,58,0.05)] transition hover:-translate-y-1 hover:border-[#9bc9ae] hover:shadow-[0_16px_35px_rgba(23,77,58,0.12)]">
    <div className="mb-5 flex items-start justify-between gap-3"><span className="rounded-full bg-[#f2f6f3] px-3 py-1 text-xs font-semibold text-[#287653]">{subject?.shortLabel}</span><span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${integrationStyles[simulator.integrationType]}`}>{integrationLabels[simulator.integrationType]}</span></div>
    <div className="flex-1"><h3 className="font-serif text-2xl leading-tight text-[#174D3A]">{simulator.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-[#637269]">{simulator.description}</p></div>
    <div className="mt-5 flex items-center justify-between border-t border-[#edf1ee] pt-4"><span className="text-xs text-[#87948b]">{provider?.name ?? simulator.attribution}</span><Link href={`/simuladores/${simulator.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-[#287653] hover:text-[#174D3A]">Ver ficha <ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></div>
  </article>
}

export function CatalogBrowser() {
  const [query, setQuery] = useState('')
  const [subject, setSubject] = useState('Todas')
  const [provider, setProvider] = useState('Todos')
  const [mode, setMode] = useState<'all' | IntegrationType>('embed')
  const [spanishOnly, setSpanishOnly] = useState(false)
  const filtered = useMemo(() => simulators.filter((item) => {
    const haystack = `${item.title} ${item.description} ${item.topics.join(' ')} ${providers.find((p) => p.id === item.providerId)?.name}`.toLowerCase()
    return (!query || haystack.includes(query.toLowerCase())) && (subject === 'Todas' || item.subjectIds.includes(subject)) && (provider === 'Todos' || item.providerId === provider) && (mode === 'all' || item.integrationType === mode) && (!spanishOnly || item.isSpanishVerified)
  }), [query, subject, provider, mode, spanishOnly])

  function clearFilters() { setQuery(''); setSubject('Todas'); setProvider('Todos'); setMode('embed'); setSpanishOnly(false) }
  return <section id="explorar" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d29f20]">Colección curada</p><h2 className="font-serif text-4xl text-[#174D3A] md:text-5xl">Elegí tu próxima experiencia</h2></div><p className="max-w-sm text-sm leading-6 text-[#637269]">Recursos con su modalidad de acceso explicitada: integrados, externos o pendientes de autorización.</p></div>
    <div className="rounded-2xl border border-[#dbe4de] bg-[#f4f6f5] p-4 md:p-5"><div className="flex flex-col gap-3 lg:flex-row"><label className="relative flex-1"><span className="sr-only">Buscar simuladores</span><Search className="absolute left-4 top-3.5 size-5 text-[#7f9387]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscá por nombre, tema o proveedor..." className="h-12 w-full rounded-xl border border-[#dbe4de] bg-white pl-12 pr-4 text-sm outline-none ring-[#287653] transition placeholder:text-[#9ba8a0] focus:ring-2" /></label><select aria-label="Filtrar por materia" value={subject} onChange={(event) => setSubject(event.target.value)} className="h-12 rounded-xl border border-[#dbe4de] bg-white px-4 text-sm text-[#52635a] outline-none focus:ring-2 focus:ring-[#287653]"><option>Todas</option>{subjects.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select><select aria-label="Filtrar por proveedor" value={provider} onChange={(event) => setProvider(event.target.value)} className="h-12 rounded-xl border border-[#dbe4de] bg-white px-4 text-sm text-[#52635a] outline-none focus:ring-2 focus:ring-[#287653]"><option>Todos</option>{providers.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></div><div className="mt-4 flex flex-wrap items-center gap-2"><SlidersHorizontal className="mr-1 size-4 text-[#7f9387]" />{(['embed', 'external', 'all'] as const).map((item) => <button key={item} onClick={() => setMode(item)} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${mode === item ? 'bg-[#174D3A] text-white' : 'bg-white text-[#637269] hover:bg-[#e4f3e9]'}`}>{item === 'all' ? 'Todos' : integrationLabels[item]}</button>)}<button onClick={() => setSpanishOnly(!spanishOnly)} className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition ${spanishOnly ? 'bg-[#d9ecd9] text-[#174D3A]' : 'bg-white text-[#637269]'}`}><Languages className="size-3.5" /> Solo español</button>{(query || subject !== 'Todas' || provider !== 'Todos' || mode !== 'all' || spanishOnly) && <button onClick={clearFilters} className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-[#8c4037] hover:underline"><X className="size-3.5" /> Limpiar</button>}</div></div>
    <div className="mt-8 flex items-center justify-between"><p className="text-sm text-[#637269]"><strong className="text-[#174D3A]">{filtered.length}</strong> experiencias en el catálogo</p><p className="hidden text-xs text-[#87948b] md:block">Actualizado: 25 de octubre de 2026</p></div>
    {filtered.length ? <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <SimulatorCard key={item.id} simulator={item} />)}</div> : <div className="mt-5 rounded-2xl border border-dashed border-[#b7c9bc] bg-[#f4f6f5] px-6 py-16 text-center"><FlaskConical className="mx-auto size-10 text-[#9bb6a4]" /><h3 className="mt-4 font-serif text-2xl text-[#174D3A]">No encontramos experiencias</h3><p className="mt-2 text-sm text-[#637269]">Probá con otra búsqueda o limpiá los filtros para ver todo el catálogo.</p></div>}
  </section>
}

export function HomePage() {
  return <><SiteHeader /><main><section className="relative overflow-hidden bg-[#174D3A] text-white"><div className="absolute -right-24 -top-28 size-96 rounded-full border-[42px] border-[#287653]/50" /><div className="absolute -bottom-40 left-1/3 size-96 rounded-full border-[54px] border-[#287653]/30" /><div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_.9fr] md:items-center md:py-28 lg:px-8"><div><p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f2c94c]"><Sparkles className="size-3.5" /> Ciencias, experimentación y tecnología</p><h1 className="max-w-3xl font-serif text-6xl leading-[.95] tracking-tight md:text-8xl">Explorá.<br /><span className="text-[#f2c94c]">Experimentá.</span><br />Descubrí.</h1><p className="mt-7 max-w-xl text-base leading-7 text-[#d6e5db] md:text-lg">Un laboratorio virtual para aprender ciencias y tecnología en la Técnica N.º 6.</p><a href="#explorar" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#f2c94c] px-5 py-3 text-sm font-bold text-[#174D3A] transition hover:bg-[#ffe187]">Empezar a explorar <ArrowRight className="size-4" /></a></div><div className="relative hidden md:block"><div className="mx-auto flex aspect-square max-w-[390px] items-center justify-center rounded-full border border-white/15 bg-white/[.04]"><div className="flex aspect-square w-[72%] items-center justify-center rounded-full border border-[#f2c94c]/50 bg-[#287653]/50"><div className="text-center"><FlaskConical className="mx-auto size-16 text-[#f2c94c]" strokeWidth={1.2} /><p className="mt-5 font-serif text-2xl">Aprender haciendo</p><p className="mt-2 text-xs uppercase tracking-[.2em] text-[#c0d9c8]">Banfield · Lomas de Zamora</p></div></div></div></div></div></section><section id="materias" className="mx-auto grid max-w-7xl gap-4 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">{subjects.slice(0, 4).map((item) => <a href="#explorar" key={item.id} onClick={() => undefined} className="group rounded-xl border border-[#dbe4de] bg-white p-4 transition hover:border-[#9bc9ae] hover:bg-[#f4f6f5]"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#87948b]">Materia</p><p className="mt-2 font-serif text-xl text-[#174D3A]">{item.label}</p><span className="mt-5 flex items-center gap-1 text-xs font-bold text-[#287653]">Explorar <ArrowRight className="size-3 transition group-hover:translate-x-1" /></span></a>)}</section><CatalogBrowser /><section id="recursos" className="border-t border-[#dbe4de] bg-[#f4f6f5]"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d29f20]">Para acompañar la clase</p><h2 className="mt-2 font-serif text-3xl text-[#174D3A]">Recursos docentes</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#637269]">Ideas para formular hipótesis, observar variables y cerrar una experiencia de laboratorio con preguntas propias.</p></div><div className="flex flex-wrap gap-2"><span className="rounded-full bg-white px-4 py-2 text-sm text-[#52635a]">Guías de uso</span><span className="rounded-full bg-white px-4 py-2 text-sm text-[#52635a]">Preguntas para investigar</span><span className="rounded-full bg-white px-4 py-2 text-sm text-[#52635a]">Actividades de cierre</span></div></div></section></main><footer className="bg-[#103a2c] text-[#c0d9c8]"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs md:flex-row md:items-center md:justify-between lg:px-8"><p>Laboratorio Virtual · E.E.S.T. N.º 6 “Ing. Juan V. Passalacqua”</p><p>Los recursos pertenecen a sus proveedores originales.</p></div></footer></>
}
