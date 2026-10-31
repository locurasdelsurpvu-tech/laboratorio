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
      'Utilizar el voltímetro y amperímetro digital para realizar mediciones.'
    ]
  },
  {
    id: 'phet-build-atom',
    title: 'Construye un Átomo (PhET)',
    category: 'Química',
    topic: 'Estructura Atómica & Tabla Periódica',
    difficulty: 'Básico',
    type: 'iframe',
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
    title: 'Estados de la Materia (PhET)',
    category: 'Física',
    topic: 'Termodinámica & Fase de los Gases',
    difficulty: 'Básico',
    type: 'iframe',
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
    title: 'Selección Natural y Genética (PhET)',
    category: 'Biología',
    topic: 'Evolución & Genética de Poblaciones',
    difficulty: 'Intermedio',
    type: 'iframe',
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
    title: 'Formas y Cambios de Energía (PhET)',
    category: 'Electromecánica',
    topic: 'Conversión de Energía & Eficiencia Termodinámica',
    difficulty: 'Intermedio',
    type: 'iframe',
    embedUrl: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html?loc=es',
    description: 'Combina sistemas mecánicos, térmicos, hidráulicos y fotovoltaicos para generar y transformar energía.',
    theory: 'El Principio de Conservación de la Energía establece que la energía no se crea ni se destruye, solo se transforma entre formas mecánica, eléctrica, térmica y lumínica.',
    objectives: [
      'Identificar las pérdidas térmicas y disipación por fricción en sistemas mecánicos.',
      'Analizar la eficiencia de conversión entre energía hidráulica, solar y eléctrica.'
    ]
  }
];
