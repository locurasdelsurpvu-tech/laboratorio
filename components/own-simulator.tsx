'use client'

import { useMemo, useState } from 'react'
import type { OwnSimulatorKind } from '@/lib/catalog'

export function OwnSimulator({ kind }: { kind: OwnSimulatorKind }) {
  if (kind === 'ohm') return <OhmSimulator />
  if (kind === 'forces') return <ForcesSimulator />
  return <GeneticsSimulator />
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="rounded-2xl border border-[#dbe4de] bg-white p-5"><h3 className="font-semibold text-[#174D3A]">{title}</h3><div className="mt-4">{children}</div></div>
}

function OhmSimulator() {
  const [voltage, setVoltage] = useState(12)
  const [resistance, setResistance] = useState(100)
  const current = voltage / resistance
  return <div className="grid gap-5 md:grid-cols-[.8fr_1.2fr]"><Panel title="Controles"><label className="block text-sm text-[#52635a]">Tensión: <b>{voltage} V</b><input type="range" min="1" max="24" value={voltage} onChange={(e) => setVoltage(Number(e.target.value))} className="mt-2 w-full accent-[#287653]" /></label><label className="mt-5 block text-sm text-[#52635a]">Resistencia: <b>{resistance} Ω</b><input type="range" min="10" max="500" step="10" value={resistance} onChange={(e) => setResistance(Number(e.target.value))} className="mt-2 w-full accent-[#287653]" /></label></Panel><Panel title="Resultado"><div className="flex min-h-40 flex-col items-center justify-center rounded-xl bg-[#174D3A] text-center text-white"><span className="text-sm text-[#c0d9c8]">Corriente calculada</span><strong className="mt-2 font-serif text-6xl text-[#f2c94c]">{current.toFixed(3)} A</strong><span className="mt-2 text-xs text-[#c0d9c8]">I = V / R</span></div></Panel></div>
}

function ForcesSimulator() {
  const [position, setPosition] = useState(50)
  const left = 100 - position
  const right = position
  return <div className="grid gap-5 md:grid-cols-[.8fr_1.2fr]"><Panel title="Ubicación de la carga"><label className="block text-sm text-[#52635a]">Distancia desde el apoyo izquierdo: <b>{position}%</b><input type="range" min="10" max="90" value={position} onChange={(e) => setPosition(Number(e.target.value))} className="mt-2 w-full accent-[#287653]" /></label><p className="mt-4 text-xs leading-5 text-[#87948b]">Modelo simplificado: viga simplemente apoyada con una carga puntual centrada en el tablero.</p></Panel><Panel title="Reacciones en los apoyos"><div className="relative mt-5 h-32"><div className="absolute left-0 right-0 top-12 h-2 rounded-full bg-[#174D3A]" /><div className="absolute top-14 size-0 border-x-[18px] border-t-[28px] border-x-transparent border-t-[#f2c94c]" /><div className="absolute right-0 top-14 size-0 border-x-[18px] border-t-[28px] border-x-transparent border-t-[#f2c94c]" /><div className="absolute top-0 -translate-x-1/2 text-center text-xs font-semibold text-[#174D3A]" style={{ left: `${position}%` }}>↓ carga</div></div><div className="grid grid-cols-2 gap-3 text-center text-sm"><div className="rounded-xl bg-[#e4f3e9] p-3 text-[#246343]">R₁ <b className="block text-xl">{left.toFixed(0)}%</b></div><div className="rounded-xl bg-[#fff4d6] p-3 text-[#785f18]">R₂ <b className="block text-xl">{right.toFixed(0)}%</b></div></div></Panel></div>
}

function GeneticsSimulator() {
  const [father, setFather] = useState('Aa')
  const [mother, setMother] = useState('Aa')
  const cells = useMemo(() => [father[0] + mother[0], father[0] + mother[1], father[1] + mother[0], father[1] + mother[1]], [father, mother])
  const dominant = cells.filter((cell) => cell.includes('A')).length
  return <div className="grid gap-5 md:grid-cols-[.8fr_1.2fr]"><Panel title="Elegí los genotipos"><label className="block text-sm text-[#52635a]">Progenitor 1<select value={father} onChange={(e) => setFather(e.target.value)} className="mt-2 h-11 w-full rounded-lg border border-[#dbe4de] px-3"><option value="AA">AA</option><option value="Aa">Aa</option><option value="aa">aa</option></select></label><label className="mt-4 block text-sm text-[#52635a]">Progenitor 2<select value={mother} onChange={(e) => setMother(e.target.value)} className="mt-2 h-11 w-full rounded-lg border border-[#dbe4de] px-3"><option value="AA">AA</option><option value="Aa">Aa</option><option value="aa">aa</option></select></label></Panel><Panel title="Cuadro de Punnett"><div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{cells.map((cell, index) => <div key={`${cell}-${index}`} className="rounded-xl bg-[#e4f3e9] p-5 text-center font-serif text-2xl text-[#174D3A]">{cell}</div>)}</div><p className="mt-5 text-sm text-[#52635a]">Fenotipo dominante esperado: <b>{Math.round((dominant / 4) * 100)}%</b></p></Panel></div>
}
