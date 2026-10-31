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

export const SIMULATORS_CATALOG: Simulator[] = [
  // ELECTRÓNICA - EMBEBIDO (PhET)
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
  // ELECTRÓNICA AVANZADA - EMBEBIDO (Falstad)
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
  // FÍSICA - NATIVO
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
  // QUÍMICA - NATIVO
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
  // BIOLOGÍA - NATIVO
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
  // ELECTROMECÁNICA - NATIVO
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
