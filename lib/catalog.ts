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
    id: 'phet-charges-and-fields',
    slug: 'phet-charges-and-fields',
    title: 'Cargas y Campos Eléctricos (PhET)',
    category: 'Física',
    subject: 'Física',
    topic: 'Electromagnetismo & Campo Eléctrico',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_all.html?loc=es',
    description: 'Coloca cargas positivas y negativas en el espacio y observa las líneas de campo eléctrico, superficies equipotenciales y voltaje.',
    theory: 'La fuerza y el campo eléctrico generado por una distribución de cargas sigue la Ley de Coulomb ($E = k \\cdot q / r^2$).',
    objectives: [
      'Visualizar la intensidad y dirección del campo eléctrico alrededor de un dipolo.',
      'Trazar líneas de potencial de igual valor (equipotenciales).'
    ]
  },
  {
    id: 'phet-gas-properties',
    slug: 'phet-gas-properties',
    title: 'Propiedades e Introducción a los Gases (PhET)',
    category: 'Física',
    subject: 'Física',
    topic: 'Termodinámica & Leyes de los Gases',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/gases-intro/latest/gases-intro_all.html?loc=es',
    description: 'Inyecta moléculas de gas en un contenedor sellado y varia la temperatura, presión y volumen.',
    theory: 'La ley ideal de los gases ($P \\cdot V = n \\cdot R \\cdot T$) relaciona las variables termodinámicas de un sistema cerrado.',
    objectives: [
      'Analizar la relación entre la temperatura y la velocidad media molecular.',
      'Evaluar cómo cambia la presión al variar el volumen del recipiente.'
    ]
  },
  {
    id: 'phet-acid-base-solutions',
    slug: 'phet-acid-base-solutions',
    title: 'Soluciones Ácido-Base Fuerte y Débil (PhET)',
    category: 'Química',
    subject: 'Química',
    topic: 'Química Analítica & Disociación',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_all.html?loc=es',
    description: 'Compara la disociación molecular de ácidos y bases fuertes frente a débiles a nivel microscópico.',
    theory: 'Los ácidos fuertes se disocian completamente en agua, mientras que los débiles alcanzan un equilibrio químico ($K_a$).',
    objectives: [
      'Relacionar la conductividad eléctrica de la solución con el grado de disociación.',
      'Medir la concentración de $H_3O^+$ y $OH^-$ con tiras indicadoras de pH.'
    ]
  },
  {
    id: 'phet-gene-expression',
    slug: 'phet-gene-expression',
    title: 'Expresión Génica y Síntesis de Proteínas (PhET)',
    category: 'Biología',
    subject: 'Biología',
    topic: 'Genética Molecular & ADN',
    difficulty: 'Avanzado',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_all.html?loc=es',
    description: 'Simula el proceso de transcripción de ADN a ARN mensajero y traducción en el ribosoma para sintetizar proteínas.',
    theory: 'El dogma central de la biología molecular explica la transferencia de información genómica desde el ADN hasta las proteínas funcionales.',
    objectives: [
      'Identificar el rol de los factores de transcripción en la regulación génica.',
      'Observar la interacción entre ARN polimerasa y el ribosoma.'
    ]
  },
  {
    id: 'phet-capacitor-lab',
    slug: 'phet-capacitor-lab',
    title: 'Laboratorio de Condensadores y Dieléctricos (PhET)',
    category: 'Electrónica',
    subject: 'Electrónica',
    topic: 'Capacitancia & Almacenamiento de Energía',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/capacitor-lab-basics/latest/capacitor-lab-basics_all.html?loc=es',
    description: 'Modifica el área de placas paralelas y la separación entre ellas para almacenar carga eléctrica.',
    theory: 'La capacitancia ($C = \\epsilon \\cdot A / d$) depende directamente de la geometría de las placas y de la constante dieléctrica del material entre ellas.',
    objectives: [
      'Medir el voltaje acumulado y el campo eléctrico en el capacitor.',
      'Calcular la energía almacenada en el campo eléctrico ($E = \\frac{1}{2} C V^2$).'
    ]
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
