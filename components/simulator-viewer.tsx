"use client";

import React, { useState, useEffect, useRef } from "react";

// Definición local del tipo Simulator para evitar problemas de alias (@/lib/catalog)
export interface Simulator {
  id: string;
  title: string;
  category: 'Física' | 'Química' | 'Biología' | 'Electrónica' | 'Electromecánica';
  topic: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  type: 'native' | 'iframe';
  embedUrl?: string;
  description: string;
  theory: string;
  objectives: string[];
  defaultParams?: Record<string, any>;
}

// Catálogo embebido localmente
export const SIMULATORS_CATALOG: Simulator[] = [
  {
    id: 'phet-circuit-dc',
    title: 'Kit de Construcción de Circuitos DC (PhET)',
    category: 'Electrónica',
    topic: 'Circuitos Eléctricos & Ley de Ohm',
    difficulty: 'Básico',
    type: 'iframe',
    embedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html?loc=es',
    description: 'Experimenta con resistencias, condensadores, bombillas e interruptores en tiempo real.',
    theory: 'La Ley de Ohm (V = I · R) establece la relación proporcional entre el voltaje aplicado y la corriente eléctrica que circula por un conductor.',
    objectives: [
      'Construir circuitos en serie y paralelo.',
      'Utilizar el voltímetro y amperímetro digital para realizar mediciones.',
      'Analizar el comportamiento de la corriente al modificar la resistencia de los componentes.'
    ]
  },
  {
    id: 'falstad-circuit-js',
    title: 'Simulador RLC & Electrónica Analógica (Falstad)',
    category: 'Electrónica',
    topic: 'Filtros AC, Osciloscopio & Transistores',
    difficulty: 'Avanzado',
    type: 'iframe',
    embedUrl: 'https://www.falstad.com/circuit/circuitjs.html',
    description: 'Laboratorio profesional de circuitos analógicos y digitales con osciloscopio gráfico en tiempo real.',
    theory: 'Permite simular respuestas de corriente alterna, filtros de frecuencia, transistores, amplificadores operacionales y compuertas lógicas.',
    objectives: [
      'Visualizar la forma de onda de corriente y voltaje en el osciloscopio.',
      'Analizar respuestas en frecuencia de filtros paso bajo y paso alto.',
      'Construir esquemas de potencia y amplificación.'
    ]
  },
  {
    id: 'phys-spring-pendulum',
    title: 'Oscilador Masa-Resorte y Péndulo Armónico',
    category: 'Física',
    topic: 'Mecánica Clásica & MAS',
    difficulty: 'Intermedio',
    type: 'native',
    description: 'Estudio cinemático y energético de un sistema oscilatorio armónico y amortiguado.',
    theory: 'La Ley de Hooke (F = -kx) y la segunda Ley de Newton determinan el movimiento armónico simple. El amortiguamiento reduce progresivamente la amplitud de oscilación.',
    objectives: [
      'Determinar el período de oscilación T en función de la masa m y constante k.',
      'Analizar la conservación de energía (Potencial Elástica vs. Cinética).',
      'Observar el efecto del coeficiente de fricción/amortiguamiento.'
    ],
    defaultParams: { mass: 2.0, k: 30, damping: 0.2 }
  },
  {
    id: 'chem-acid-base',
    title: 'Titulación Ácido-Base & Medidor de pH',
    category: 'Química',
    topic: 'Química Analítica',
    difficulty: 'Básico',
    type: 'native',
    description: 'Simulador de volumetría de neutralización con indicación cromática de fenolftaleína y gráfica de pH.',
    theory: 'La titulación determina la concentración de un ácido disuelto mediante la adición controlada de una base de concentración conocida hasta alcanzar el punto de equivalencia.',
    objectives: [
      'Identificar el punto de viraje de pH empleando indicación óptica.',
      'Construir la curva de titulación pH vs. Volumen de NaOH agregado.',
      'Calcular la molaridad del ácido desconocido.'
    ],
    defaultParams: { acidConc: 0.1, baseConc: 0.1, baseAdded: 0, acidVol: 25 }
  },
  {
    id: 'bio-microscope-cell',
    title: 'Microscopio Virtual & División Celular (Mitosis)',
    category: 'Biología',
    topic: 'Biología Celular & Mitosis',
    difficulty: 'Básico',
    type: 'native',
    description: 'Exploración de la estructura celular vegetal y observación en tiempo real de fases mitóticas.',
    theory: 'La mitosis es el proceso celular mediante el cual una célula madre se divide originando dos células hijas genéticamente idénticas (Profase, Metafase, Anafase, Telofase).',
    objectives: [
      'Aprender a calibrar el enfoque de un microscopio óptico (Micrométrico/Macrométrico).',
      'Reconocer los cromosomas organizados en la placa ecuatorial durante la metafase.',
      'Aplicar tinción histológica digital para resaltar el núcleo celular.'
    ],
    defaultParams: { zoom: 100, focus: 50, phase: 'Metafase' }
  },
  {
    id: 'electromech-star-delta',
    title: 'Motor Trifásico & Arranque Estrella-Triángulo (λ-Δ)',
    category: 'Electromecánica',
    topic: 'Maquinaria & Automatismos Industriales',
    difficulty: 'Avanzado',
    type: 'native',
    description: 'Maniobra de conmutación electromagnética con contactores para reducir pico de corriente de arranque.',
    theory: 'El arranque λ - Δ reduce el voltaje aplicado a las bobinas del motor trifásico a 1/√3 en la fase inicial, atenuando el pico de corriente de arranque brusco.',
    objectives: [
      'Analizar los diagramas de potencia y control electromecánico.',
      'Monitorear la rampa de velocidad (RPM) y la curva de corriente absorbida.',
      'Simular conmutación por temporización industrial.'
    ],
    defaultParams: { timerDelay: 4 }
  }
];

export default function App() {
  const [selectedSimulator, setSelectedSimulator] = useState<Simulator>(SIMULATORS_CATALOG[2]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["Todos", "Física", "Química", "Biología", "Electrónica", "Electromecánica"];

  const filteredSimulators = SIMULATORS_CATALOG.filter((sim) => {
    const matchesCategory = selectedCategory === "Todos" || sim.category === selectedCategory;
    const matchesSearch =
      sim.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sim.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg">
              🔬
            </div>
            <div>
              <h1 className="font-extrabold text-base text-white">Laboratorio Virtual STEM</h1>
              <p className="text-[11px] text-slate-400">Plataforma Multidisciplinaria Interactiva</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-3">
          <input
            type="text"
            placeholder="Buscar simulador..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />

          <div className="space-y-2 max-h-[75vh] overflow-y-auto pr-1">
            {filteredSimulators.map((sim) => (
              <div
                key={sim.id}
                onClick={() => setSelectedSimulator(sim)}
                className={`p-3 rounded-xl border text-xs cursor-pointer transition ${
                  selectedSimulator.id === sim.id
                    ? "bg-indigo-950/40 border-indigo-500/80 text-white"
                    : "bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] uppercase font-bold text-indigo-400">{sim.category}</span>
                  <span className="text-[10px] text-slate-500">{sim.type === "iframe" ? "iFrame" : "Canvas"}</span>
                </div>
                <h4 className="font-semibold text-slate-100">{sim.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{sim.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <SimulatorViewer simulator={selectedSimulator} />
        </div>
      </main>
    </div>
  );
}

export function SimulatorViewer({ simulator }: { simulator: Simulator }) {
  const [params, setParams] = useState<Record<string, any>>(simulator.defaultParams || {});
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    setParams(simulator.defaultParams || {});
    setIsRunning(true);
  }, [simulator]);

  return (
    <div className="w-full space-y-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex justify-between items-center">
        <div>
          <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            {simulator.category}
          </span>
          <h2 className="text-lg font-bold text-white mt-1">{simulator.title}</h2>
          <p className="text-xs text-slate-400">{simulator.topic}</p>
        </div>
        {simulator.type === "native" && (
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-3 py-1.5 rounded text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
          >
            {isRunning ? "Pausar" : "Reanudar"}
          </button>
        )}
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-5">
        <div className="flex-1 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 min-h-[450px] flex items-center justify-center">
          {simulator.type === "iframe" && simulator.embedUrl ? (
            <iframe
              src={simulator.embedUrl}
              title={simulator.title}
              className="w-full h-[550px] border-0 rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full p-4 flex items-center justify-center">
              {simulator.id === "phys-spring-pendulum" && <PhysicsCanvas params={params} isRunning={isRunning} />}
              {simulator.id === "chem-acid-base" && <ChemistryCanvas params={params} />}
              {simulator.id === "bio-microscope-cell" && <BiologyCanvas params={params} />}
              {simulator.id === "electromech-star-delta" && <ElectromechanicsCanvas />}
            </div>
          )}
        </div>

        {simulator.type === "native" && (
          <div className="w-full lg:w-72 bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-4">
            <h3 className="font-bold text-xs text-slate-300 border-b border-slate-800 pb-2">Parámetros del Sistema</h3>

            {simulator.id === "phys-spring-pendulum" && (
              <>
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Masa (kg):</span>
                    <span className="font-mono text-cyan-400">{params.mass}</span>
                  </div>
                  <input
                    type="range" min="0.5" max="5.0" step="0.1"
                    value={params.mass || 2.0}
                    onChange={(e) => setParams({ ...params, mass: parseFloat(e.target.value) })}
                    className="w-full accent-indigo-500 bg-slate-950"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Constante k (N/m):</span>
                    <span className="font-mono text-cyan-400">{params.k}</span>
                  </div>
                  <input
                    type="range" min="10" max="100" step="5"
                    value={params.k || 30}
                    onChange={(e) => setParams({ ...params, k: parseFloat(e.target.value) })}
                    className="w-full accent-indigo-500 bg-slate-950"
                  />
                </div>
              </>
            )}

            {simulator.id === "chem-acid-base" && (
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>NaOH Agregado:</span>
                  <span className="font-mono text-emerald-400">{params.baseAdded || 0} mL</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setParams({ ...params, baseAdded: Math.min(50, (params.baseAdded || 0) + 1) })}
                    className="flex-1 py-1.5 bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 rounded text-xs"
                  >
                    +1 mL NaOH
                  </button>
                  <button
                    onClick={() => setParams({ ...params, baseAdded: 0 })}
                    className="py-1.5 px-3 bg-slate-800 text-slate-300 rounded text-xs"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}

            {simulator.id === "bio-microscope-cell" && (
              <>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Etapa de Mitosis:</label>
                  <select
                    value={params.phase || "Metafase"}
                    onChange={(e) => setParams({ ...params, phase: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded text-xs text-slate-200 p-2"
                  >
                    <option value="Interfase">Interfase</option>
                    <option value="Profase">Profase</option>
                    <option value="Metafase">Metafase</option>
                    <option value="Anafase">Anafase</option>
                  </select>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Enfoque:</span>
                    <span className="font-mono text-pink-400">{params.focus}%</span>
                  </div>
                  <input
                    type="range" min="0" max="100" step="1"
                    value={params.focus || 50}
                    onChange={(e) => setParams({ ...params, focus: parseInt(e.target.value) })}
                    className="w-full accent-pink-500 bg-slate-950"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 space-y-2">
        <h4 className="font-bold text-white">Fundamento Teórico</h4>
        <p>{simulator.theory}</p>
      </div>
    </div>
  );
}

function PhysicsCanvas({ params, isRunning }: { params: any; isRunning: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({ posY: 180, velY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    const render = () => {
      if (isRunning) {
        const dt = 0.016;
        const springForce = -(params.k || 30) * (stateRef.current.posY - 180);
        const dampingForce = -(params.damping || 0.2) * stateRef.current.velY * 10;
        const totalForce = springForce + dampingForce + (params.mass || 2) * 9.8;
        const accelY = totalForce / (params.mass || 2);

        stateRef.current.velY += accelY * dt;
        stateRef.current.posY += stateRef.current.velY * dt;
      }

      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#334155";
      ctx.fillRect(150, 20, 100, 10);

      ctx.beginPath();
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 3;
      const startX = 200;
      const startY = 30;
      const endY = stateRef.current.posY;
      const coils = 12;
      const coilHeight = (endY - startY) / coils;

      ctx.moveTo(startX, startY);
      for (let i = 0; i < coils; i++) {
        const xOffset = i % 2 === 0 ? 15 : -15;
        ctx.lineTo(startX + (i === coils - 1 ? 0 : xOffset), startY + (i + 1) * coilHeight);
      }
      ctx.stroke();

      ctx.fillStyle = "#6366f1";
      ctx.beginPath();
      ctx.arc(startX, endY, 15 + (params.mass || 2) * 3, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [params, isRunning]);

  return <canvas ref={canvasRef} width={400} height={350} className="w-full max-w-[400px] h-[350px]" />;
}

function ChemistryCanvas({ params }: { params: any }) {
  const baseAdded = params.baseAdded || 0;
  const ph = Math.min(14, 1 + baseAdded * 0.25);
  const color = ph < 7 ? "rgba(239, 68, 68, 0.2)" : `rgba(236, 72, 153, ${Math.min(1, (ph - 7) / 5)})`;

  return (
    <div className="flex flex-col items-center gap-4 text-slate-200">
      <div
        className="w-32 h-36 border-2 border-slate-500 rounded-b-3xl relative overflow-hidden flex items-end justify-center"
        style={{ backgroundColor: color }}
      >
        <span className="text-xs font-mono mb-2 bg-slate-900/80 px-2 py-0.5 rounded">Vol: {baseAdded} mL</span>
      </div>
      <div className="text-center font-mono">
        <span className="text-2xl font-bold text-emerald-400">pH: {ph.toFixed(2)}</span>
      </div>
    </div>
  );
}

function BiologyCanvas({ params }: { params: any }) {
  const blur = Math.abs((params.focus || 50) - 50) / 5;
  return (
    <div className="w-64 h-64 rounded-full border-4 border-slate-800 bg-slate-900 flex items-center justify-center overflow-hidden">
      <div style={{ filter: `blur(${blur}px)` }} className="text-center">
        <div className="w-20 h-20 rounded-full border-2 border-pink-500/50 flex items-center justify-center bg-pink-500/10">
          <span className="text-xs font-bold text-pink-300">{params.phase || "Metafase"}</span>
        </div>
      </div>
    </div>
  );
}

function ElectromechanicsCanvas() {
  const [running, setRunning] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`w-28 h-28 rounded-full border-4 ${
          running ? "border-emerald-500 animate-spin" : "border-slate-700"
        } flex items-center justify-center bg-slate-900`}
      >
        <div className="w-16 h-4 bg-indigo-500 rounded"></div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => setRunning(true)} className="px-4 py-2 bg-emerald-600 rounded text-xs font-bold text-white">
          MARCHA
        </button>
        <button onClick={() => setRunning(false)} className="px-4 py-2 bg-red-600 rounded text-xs font-bold text-white">
          PARO
        </button>
      </div>
    </div>
  );
}
