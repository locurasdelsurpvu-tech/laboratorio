export type IntegrationType = 'embed' | 'native' | 'iframe';

export interface Simulator {
  id: string;
  slug?: string;
  title: string;
  category: 'Física' | 'Química' | 'Biología' | 'Electrónica' | 'Electromecánica';
  subject?: string;
  topic: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  type: IntegrationType;
  integrationType?: IntegrationType;
  embedUrl?: string;
  provider?: string;
  description: string;
  theory: string;
  objectives: string[];
  defaultParams?: Record<string, any>;
}

export const SIMULATORS_CATALOG: Simulator[] = [
  {
    id: 'phet-circuit-dc',
    slug: 'phet-circuit-dc',
    title: 'Kit de Construcción de Circuitos DC (PhET)',
    category: 'Electrónica',
    subject: 'Electrónica',
    topic: 'Circuitos Eléctricos & Ley de Ohm',
    difficulty: 'Básico',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html?loc=es',
    description: 'Experimenta con resistencias, condensadores, bombillas e interruptores en tiempo real.',
    theory: 'La Ley de Ohm (V = I · R) establece la relación proporcional entre el voltaje aplicado y la corriente eléctrica que circula por un conductor.',
    objectives: [
      'Construir circuitos en serie y paralelo.',
      'Utilizar el voltímetro y amperímetro digital para realizar mediciones.'
    ]
  },
  {
    id: 'phet-build-atom',
    slug: 'phet-build-atom',
    title: 'Construye un Átomo (PhET)',
    category: 'Química',
    subject: 'Química',
    topic: 'Estructura Atómica & Tabla Periódica',
    difficulty: 'Básico',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_all.html?loc=es',
    description: 'Construye átomos agregando protones, neutrones y electrones. Observa la masa, carga e isótopos.',
    theory: 'El número atómico (Z) define el elemento químico mediante sus protones, mientras que la diferencia de neutrones genera isótopos.',
    objectives: [
      'Identificar la relación entre protones, neutrones y electrones.',
      'Determinar si un átomo es neutro o un ión (anión/catión).'
    ]
  },
  {
    id: 'phet-states-matter',
    slug: 'phet-states-matter',
    title: 'Estados de la Materia (PhET)',
    category: 'Física',
    subject: 'Física',
    topic: 'Termodinámica & Fase de los Gases',
    difficulty: 'Básico',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_all.html?loc=es',
    description: 'Calienta, enfría y comprime átomos y moléculas para observar las fases sólida, líquida y gaseosa.',
    theory: 'El comportamiento cinético molecular explica que la temperatura corresponde al promedio de energía cinética de las partículas.',
    objectives: [
      'Relacionar la presión, temperatura y volumen en una fase dada.',
      'Observar las variaciones de atracción intermolecular entre sólidos, líquidos y gases.'
    ]
  },
  {
    id: 'phet-natural-selection',
    slug: 'phet-natural-selection',
    title: 'Selección Natural y Genética (PhET)',
    category: 'Biología',
    subject: 'Biología',
    topic: 'Evolución & Genética de Poblaciones',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_all.html?loc=es',
    description: 'Explora cómo los factores ambientales impulsan la adaptación y mutación en especies.',
    theory: 'La selección natural favorece la reproducción de individuos cuyas mutaciones genéticas les otorgan ventajas adaptativas ante depredadores o clima.',
    objectives: [
      'Analizar el impacto de mutaciones dominantes y recesivas.',
      'Simular presiones de selección como depredadores y disponibilidad de alimento.'
    ]
  },
  {
    id: 'phet-energy-forms',
    slug: 'phet-energy-forms',
    title: 'Formas y Cambios de Energía (PhET)',
    category: 'Electromecánica',
    subject: 'Electromecánica',
    topic: 'Conversión de Energía & Eficiencia Termodinámica',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html?loc=es',
    description: 'Combina sistemas mecánicos, térmicos, hidráulicos y fotovoltaicos para generar y transformar energía.',
    theory: 'El Principio de Conservación de la Energía establece que la energía no se crea ni se destruye, solo se transforma.',
    objectives: [
      'Identificar las pérdidas térmicas y disipación por fricción en sistemas mecánicos.',
      'Analizar la eficiencia de conversión entre energía hidráulica, solar y eléctrica.'
    ]
  },
  {
    id: 'phet-periodic-table-trends',
    slug: 'phet-periodic-table-trends',
    title: 'Tabla Periódica Interactiva & Tendencias Atómicas',
    category: 'Química',
    subject: 'Química',
    topic: 'Química Inorgánica & Propiedades Periódicas',
    difficulty: 'Básico',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_all.html?loc=es',
    description: 'Explora la tabla periódica, configuraciones electrónicas y tendencia de electronegatividad y radio atómico.',
    theory: 'Las propiedades periódicas varían periódicamente en la tabla según la carga nuclear efectiva y la distribución de electrones.',
    objectives: [
      'Relacionar la posición del elemento con su masa y número atómico.',
      'Comprender la formación de iones estables (octeto completo).'
    ]
  },
  {
    id: 'phet-bending-light',
    slug: 'phet-bending-light',
    title: 'Experimento de Refracción y Reflexión de la Luz (Óptica)',
    category: 'Física',
    subject: 'Física',
    topic: 'Óptica Geométrica & Ley de Snell',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_all.html?loc=es',
    description: 'Apunta un láser a través de prismas y medios de distinto índice de refracción (agua, vidrio, aire).',
    theory: 'La Ley de Snell ($n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2$) describe cómo se desvía la luz al cambiar de medio de propagación.',
    objectives: [
      'Calcular el índice de refracción $n$ de materiales desconocidos.',
      'Observar el fenómeno de reflexión interna total y el ángulo crítico.'
    ]
  },
  {
    id: 'phet-faraday-law',
    slug: 'phet-faraday-law',
    title: 'Experimento de Inducción de Faraday & Electromagnetismo',
    category: 'Electromecánica',
    subject: 'Electromecánica',
    topic: 'Electromagnetismo & Generación Eléctrica',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_all.html?loc=es',
    description: 'Mueve un imán a través de bobinas electromagnéticas para generar fuerza electromotriz e iluminar una bombilla.',
    theory: 'La Ley de Inducción de Faraday establece que un campo magnético variable en el tiempo induce una corriente eléctrica en un conductor.',
    objectives: [
      'Relacionar la velocidad de movimiento del imán con el voltaje inducido.',
      'Comprender el principio de funcionamiento fundamental de generadores y motores.'
    ]
  },
  {
    id: 'falstad-circuit-js',
    slug: 'falstad-circuit-js',
    title: 'Simulador RLC & Electrónica (Falstad)',
    category: 'Electrónica',
    subject: 'Electrónica',
    topic: 'Electrónica Analógica & AC',
    difficulty: 'Avanzado',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'Falstad Lab',
    embedUrl: 'https://www.falstad.com/circuit/circuitjs.html',
    description: 'Laboratorio profesional de circuitos analógicos y digitales con osciloscopio gráfico.',
    theory: 'Permite simular respuestas de corriente alterna, filtros de frecuencia, transistores y amplificadores.',
    objectives: [
      'Visualizar la forma de onda de corriente y voltaje en el osciloscopio.',
      'Analizar respuestas en frecuencia de filtros paso bajo y paso alto.'
    ]
  },
  {
    id: 'phys-spring-pendulum',
    slug: 'phys-spring-pendulum',
    title: 'Oscilador Masa-Resorte y Péndulo',
    category: 'Física',
    subject: 'Física',
    topic: 'Mecánica Clásica',
    difficulty: 'Intermedio',
    type: 'native',
    integrationType: 'native',
    provider: 'Laboratorio Virtual',
    description: 'Estudio cinemático y energético de un sistema oscilatorio armónico y amortiguado.',
    theory: 'La Ley de Hooke (F = -kx) y la segunda Ley de Newton determinan el movimiento armónico simple.',
    objectives: [
      'Determinar el período de oscilación T en función de la masa m y constante k.',
      'Analizar la conservación de energía.'
    ],
    defaultParams: { mass: 2.0, k: 30, gravity: 9.8, damping: 0.2, length: 150 }
  },
  {
    id: 'chem-acid-base',
    slug: 'chem-acid-base',
    title: 'Titulación Ácido-Base y pH-metría',
    category: 'Química',
    subject: 'Química',
    topic: 'Química Analítica & pH',
    difficulty: 'Básico',
    type: 'native',
    integrationType: 'native',
    provider: 'Laboratorio Virtual',
    description: 'Simulador de volumetría de neutralización con indicación cromática de fenolftaleína.',
    theory: 'La titulación determina la concentración de un ácido disuelto mediante la adición controlada de una base.',
    objectives: [
      'Identificar el punto de viraje de pH empleando indicación óptica.',
      'Construir la curva de titulación pH vs. Volumen de NaOH agregado.'
    ],
    defaultParams: { acidConc: 0.1, baseConc: 0.1, baseAdded: 0, acidVol: 25 }
  },
  {
    id: 'bio-microscope-cell',
    slug: 'bio-microscope-cell',
    title: 'Microscopio Virtual & División Celular',
    category: 'Biología',
    subject: 'Biología',
    topic: 'Biología Celular & Mitosis',
    difficulty: 'Básico',
    type: 'native',
    integrationType: 'native',
    provider: 'Laboratorio Virtual',
    description: 'Exploración de la estructura celular vegetal y observación en tiempo real de fases mitóticas.',
    theory: 'La mitosis es el proceso celular mediante el cual una célula madre se divide originando dos células hijas.',
    objectives: [
      'Aprender a calibrar el enfoque de un microscopio óptico.',
      'Reconocer los cromosomas organizados en la placa ecuatorial.'
    ],
    defaultParams: { zoom: 100, focus: 50, phase: 'Metafase' }
  },
  {
    id: 'electromech-star-delta',
    slug: 'electromech-star-delta',
    title: 'Motor Trifásico & Arranque Estrella-Triángulo',
    category: 'Electromecánica',
    subject: 'Electromecánica',
    topic: 'Maquinaria & Automatización',
    difficulty: 'Avanzado',
    type: 'native',
    integrationType: 'native',
    provider: 'Laboratorio Virtual',
    description: 'Maniobra de conmutación electromagnética para reducir pico de corriente en el arranque.',
    theory: 'El arranque λ - Δ reduce el voltaje aplicado a las bobinas del motor trifásico a 1/√3 en la fase inicial.',
    objectives: [
      'Analizar los diagramas de potencia y control electromecánico.',
      'Monitorear la rampa de velocidad (RPM) y la curva de corriente absorbida.'
    ],
    defaultParams: { timerDelay: 4 }
  }
];

// Named exports requeridos por app/simuladores/[slug]/page.tsx y components/catalog-browser.tsx
export const simulators = SIMULATORS_CATALOG;

export const providers = Array.from(
  new Set(SIMULATORS_CATALOG.map((s) => s.provider).filter((p): p is string => Boolean(p)))
);

export const subjects = Array.from(
  new Set(SIMULATORS_CATALOG.map((s) => s.subject || s.category))
);

export function getSimulator(slug: string): Simulator | undefined {
  return SIMULATORS_CATALOG.find((s) => s.slug === slug || s.id === slug);
}

export function getProvider(slug: string): string | undefined {
  return getSimulator(slug)?.provider;
}

export function getSubjects(slug: string): string[] {
  const sim = getSimulator(slug);
  if (!sim) return [];
  return [sim.subject || sim.category];
}
