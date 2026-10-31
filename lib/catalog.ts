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
  tags?: string[];
}

export const SIMULATORS_CATALOG: Simulator[] = [
  // ================= QUÍMICA =================
  {
    id: 'phet-build-an-atom',
    slug: 'phet-build-an-atom',
    title: 'Construye un Átomo & Tabla Periódica (PhET)',
    category: 'Química',
    subject: 'Química',
    topic: 'Estructura Atómica & Isótopos',
    difficulty: 'Básico',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_all.html?loc=es',
    description: 'Construye átomos agregando protones, neutrones y electrones. Identifica elementos en la tabla periódica y su número atómico.',
    theory: 'El número de protones determina la identidad del elemento en la tabla periódica. Los electrones determinan la carga nula o iónica, y los neutrones diferencian isótopos.',
    objectives: [
      'Relacionar la cantidad de protones con la posición en la Tabla Periódica.',
      'Determinar el número de masa (A) y número atómico (Z).',
      'Distinguir entre átomos neutros, iones positivos (cationes) y negativos (aniones).'
    ],
    tags: ['atomo', 'tabla periodica', 'protones', 'electrones', 'neutrones', 'quimica']
  },
  {
    id: 'phet-states-of-matter',
    slug: 'phet-states-of-matter',
    title: 'Estados de la Materia & Cambios de Fase (PhET)',
    category: 'Química',
    subject: 'Química',
    topic: 'Termodinámica & Estados Físicos',
    difficulty: 'Básico',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_all.html?loc=es',
    description: 'Observa la interacción molecular en sólidos, líquidos y gases al calentar o enfriar átomos de Neón, Argón, Oxígeno y Agua.',
    theory: 'La energía térmica modifica la energía cinética molecular. Al aumentar la temperatura, las fuerzas intermoleculares ceden pasando de sólido a líquido y gas.',
    objectives: [
      'Describir el comportamiento molecular en sólido, líquido y gas.',
      'Analizar diagramas de fase Temperatura vs. Presión.',
      'Comprender el efecto anómalo del agua y puentes de hidrógeno.'
    ],
    tags: ['estados', 'solido', 'liquido', 'gas', 'temperatura', 'presion']
  },
  {
    id: 'chem-acid-base',
    slug: 'chem-acid-base',
    title: 'Titulación Ácido-Base & Medidor de pH',
    category: 'Química',
    subject: 'Química',
    topic: 'Química Analítica & Volumetría',
    difficulty: 'Básico',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Simulador de volumetría de neutralización con indicación cromática de fenolftaleína y gráfica de pH.',
    theory: 'La titulación determina la concentración de un ácido disuelto mediante la adición controlada de una base de concentración conocida hasta alcanzar el punto de equivalencia.',
    objectives: [
      'Identificar el punto de viraje de pH empleando indicación óptica.',
      'Construir la curva de titulación pH vs. Volumen de NaOH agregado.',
      'Calcular la molaridad del ácido desconocido.'
    ],
    defaultParams: { acidConc: 0.1, baseConc: 0.1, baseAdded: 0, acidVol: 25 },
    tags: ['ph', 'acido', 'base', 'titulacion', 'quimica']
  },

  // ================= FÍSICA =================
  {
    id: 'phet-bending-light',
    slug: 'phet-bending-light',
    title: 'Refracción de Luz & Ley de Snell (PhET)',
    category: 'Física',
    subject: 'Física',
    topic: 'Óptica Geométrica & Ondas',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_all.html?loc=es',
    description: 'Experimenta con rayos láser al atravesar agua, vidrio y aire. Mide ángulos de refracción y reflexión interna total.',
    theory: 'La Ley de Snell ($n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$) describe el cambio de dirección del rayo de luz al cambiar de medio de propagación.',
    objectives: [
      'Medir índices de refracción de diferentes materiales.',
      'Observar el ángulo crítico y la reflexión interna total.',
      'Analizar la dispersión cromática de la luz blanca mediante prismas.'
    ],
    tags: ['luz', 'optica', 'refraccion', 'snell', 'laser', 'prismas']
  },
  {
    id: 'phet-faradays-law',
    slug: 'phet-faradays-law',
    title: 'Ley de Inducción de Faraday (PhET)',
    category: 'Física',
    subject: 'Física',
    topic: 'Electromagnetismo',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_all.html?loc=es',
    description: 'Mueve un imán dentro de una bobina y observa cómo se induce una corriente eléctrica que enciende una bombilla.',
    theory: 'La ley de Faraday establece que el voltaje inducido en un circuito cerrado es directamente proporcional a la rapidez con que cambia el flujo magnético.',
    objectives: [
      'Demostrar la relación entre movimiento magnético y fuerza electromotriz (FEM).',
      'Analizar el efecto de la polaridad del imán (Ley de Lenz).',
      'Evaluar el impacto de la cantidad de espiras en la bobina.'
    ],
    tags: ['iman', 'faraday', 'induccion', 'bobina', 'electromagnetismo']
  },
  {
    id: 'phys-spring-pendulum',
    slug: 'phys-spring-pendulum',
    title: 'Oscilador Masa-Resorte y Péndulo Armónico',
    category: 'Física',
    subject: 'Física',
    topic: 'Mecánica Clásica & MAS',
    difficulty: 'Intermedio',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Estudio cinemático y energético de un sistema oscilatorio armónico y amortiguado.',
    theory: 'La Ley de Hooke (F = -kx) y la segunda Ley de Newton determinan el movimiento armónico simple. El amortiguamiento reduce progresivamente la amplitud de oscilación.',
    objectives: [
      'Determinar el período de oscilación T en función de la masa m y constante k.',
      'Analizar la conservación de energía (Potencial Elástica vs. Cinética).',
      'Observar el efecto del coeficiente de fricción/amortiguamiento.'
    ],
    defaultParams: { mass: 2.0, k: 30, damping: 0.2 },
    tags: ['resorte', 'oscilacion', 'fuerza', 'newton', 'fisica']
  },

  // ================= BIOLOGÍA =================
  {
    id: 'bio-microscope-cell',
    slug: 'bio-microscope-cell',
    title: 'Microscopio Virtual & División Celular (Mitosis)',
    category: 'Biología',
    subject: 'Biología',
    topic: 'Biología Celular & Mitosis',
    difficulty: 'Básico',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Exploración de la estructura celular vegetal y observación en tiempo real de fases mitóticas.',
    theory: 'La mitosis es el proceso celular mediante el cual una célula madre se divide originando dos células hijas genéticamente idénticas (Profase, Metafase, Anafase, Telofase).',
    objectives: [
      'Aprender a calibrar el enfoque de un microscopio óptico (Micrométrico/Macrométrico).',
      'Reconocer los cromosomas organizados en la placa ecuatorial durante la metafase.',
      'Aplicar tinción histológica digital para resaltar el núcleo celular.'
    ],
    defaultParams: { zoom: 100, focus: 50, phase: 'Metafase' },
    tags: ['celula', 'mitosis', 'microscopio', 'adn', 'biologia']
  },

  // ================= ELECTRÓNICA =================
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
      'Utilizar el voltímetro y amperímetro digital para realizar mediciones.',
      'Analizar el comportamiento de la corriente al modificar la resistencia de los componentes.'
    ],
    tags: ['circuito', 'corriente', 'resistencia', 'ohm', 'electronica']
  },
  {
    id: 'falstad-circuit-js',
    slug: 'falstad-circuit-js',
    title: 'Simulador RLC & Electrónica Analógica (Falstad)',
    category: 'Electrónica',
    subject: 'Electrónica',
    topic: 'Filtros AC, Osciloscopio & Transistores',
    difficulty: 'Avanzado',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'Falstad',
    embedUrl: 'https://www.falstad.com/circuit/circuitjs.html',
    description: 'Laboratorio profesional de circuitos analógicos y digitales con osciloscopio gráfico en tiempo real.',
    theory: 'Permite simular respuestas de corriente alterna, filtros de frecuencia, transistores, amplificadores operacionales y compuertas lógicas.',
    objectives: [
      'Visualizar la forma de onda de corriente y voltaje en el osciloscopio.',
      'Analizar respuestas en frecuencia de filtros paso bajo y paso alto.',
      'Construir esquemas de potencia y amplificación.'
    ],
    tags: ['rlc', 'osciloscopio', 'frecuencia', 'ac', 'electronica']
  },

  // ================= ELECTROMECÁNICA =================
  {
    id: 'electromech-star-delta',
    slug: 'electromech-star-delta',
    title: 'Motor Trifásico & Arranque Estrella-Triángulo (λ-Δ)',
    category: 'Electromecánica',
    subject: 'Electromecánica',
    topic: 'Maquinaria & Automatismos Industriales',
    difficulty: 'Avanzado',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Maniobra de conmutación electromagnética con contactores para reducir pico de corriente de arranque.',
    theory: 'El arranque λ - Δ reduce el voltaje aplicado a las bobinas del motor trifásico a 1/√3 en la fase inicial, atenuando el pico de corriente de arranque brusco.',
    objectives: [
      'Analizar los diagramas de potencia y control electromecánico.',
      'Monitorear la rampa de velocidad (RPM) y la curva de corriente absorbida.',
      'Simular conmutación por temporización industrial.'
    ],
    defaultParams: { timerDelay: 4 },
    tags: ['motor', 'trifasico', 'estrella', 'triangulo', 'contactor', 'electromecanica']
  }
];

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
  return getSimulator(slug)?.provider ?? 'Nativo';
}

export function getSubjects(slug: string): string[] {
  const sim = getSimulator(slug);
  if (!sim) return [];
  return [sim.subject || sim.category];
}
