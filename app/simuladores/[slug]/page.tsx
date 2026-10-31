import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ExternalLink, Languages, ShieldCheck } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getProvider, getSimulator, getSubjects, simulators } from '@/lib/catalog'
import { SiteHeader } from '@/components/catalog-browser'
import { SimulatorViewer } from '@/components/simulator-viewer'

export function generateStaticParams() { return simulators.map((simulator) => ({ slug: simulator.slug })) }

export default async function SimulatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const simulator = getSimulator(slug)
  if (!simulator) notFound()
  const provider = getProvider(simulator.providerId)
  const subjectList = getSubjects(simulator.subjectIds)
  return <><SiteHeader /><main className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><Link href="/#explorar" className="inline-flex items-center gap-2 text-sm font-semibold text-[#637269] hover:text-[#174D3A]"><ArrowLeft className="size-4" /> Volver al catálogo</Link><div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start"><div><div className="flex flex-wrap gap-2">{subjectList.map((item) => <span key={item.id} className="rounded-full bg-[#e4f3e9] px-3 py-1 text-xs font-bold text-[#246343]">{item.label}</span>)}<span className="rounded-full bg-[#f5f0df] px-3 py-1 text-xs font-bold text-[#785f18]">{simulator.language}</span></div><h1 className="mt-5 font-serif text-5xl leading-tight text-[#174D3A] md:text-6xl">{simulator.title}</h1><p className="mt-5 text-base leading-8 text-[#637269]">{simulator.description}</p><div className="mt-7 flex flex-wrap gap-2">{simulator.topics.map((topic) => <span key={topic} className="rounded-lg border border-[#dbe4de] px-3 py-1.5 text-xs text-[#637269]">{topic}</span>)}</div><div className="mt-8 rounded-2xl border border-[#dbe4de] bg-[#f4f6f5] p-5"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#87948b]">Proveedor original</p><a href={provider?.url} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-serif text-xl text-[#174D3A] hover:text-[#287653]">{provider?.name} <ExternalLink className="size-4" /></a><p className="mt-2 text-sm leading-6 text-[#637269]">{provider?.note}</p></div></div><SimulatorViewer simulator={simulator} /></div><section className="mt-14 grid gap-5 border-t border-[#dbe4de] pt-10 md:grid-cols-3"><Info title="Acceso e idioma" icon={<Languages className="size-5" />}><p>{simulator.accessRequirements}</p><p className="mt-2">Idiomas verificados: {simulator.availableLanguages.join(', ')}.</p></Info><Info title="Uso responsable" icon={<ShieldCheck className="size-5" />}><p>{simulator.licenseName}. Consultá las condiciones antes de redistribuir o modificar el recurso.</p><a href={simulator.licenseUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#287653]">Ver condiciones <ExternalLink className="size-3" /></a></Info><Info title="Verificación del catálogo" icon={<CheckCircle2 className="size-5" />}><p>Última revisión: {simulator.lastVerifiedAt}.</p><p className="mt-2 text-xs text-[#87948b]">{simulator.verificationNotes}</p></Info></section></main></>
}

function Info({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) { return <div className="rounded-2xl border border-[#dbe4de] bg-white p-5"><div className="flex items-center gap-2 font-semibold text-[#174D3A]">{icon}{title}</div><div className="mt-3 text-sm leading-6 text-[#637269]">{children}</div></div> }
