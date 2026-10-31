export type IntegrationType = 'embed' | 'external' | 'auth-required'

export type OwnSimulatorKind = 'ohm' | 'forces' | 'genetics'

export type Subject = {
  id: string
  label: string
  shortLabel: string
  color: string
}

export type Provider = {
  id: string
  name: string
  url: string
  note: string
}

export type Simulator = {
  id: string
  slug: string
  title: string
  description: string
  providerId: string
  sourceUrl: string
  subjectIds: string[]
  topics: string[]
  level: string[]
  language: string
  availableLanguages: string[]
  integrationType: IntegrationType
  embedUrl?: string
  licenseName: string
  licenseUrl: string
  attribution: string
  accessRequirements: string
  isFreeVerified: boolean
  isSpanishVerified: boolean
  isEmbedVerified: boolean
  lastVerifiedAt: string
  verificationNotes: string
  ownSimulator?: OwnSimulatorKind
}

export const subjects: Subject[] = [
  { id: 'fisica', label: 'Física', shortLabel: 'Física', color: 'sage' },
  { id: 'quimica', label: 'Química', shortLabel: 'Química', color: 'amber' },
  { id: 'matematica', label: 'Matemática y estadística', shortLabel: 'Matemática', color: 'blue' },
  { id: 'biologia', label: 'Biología', shortLabel: 'Biología', color: 'rose' },
  { id: 'tierra', label: 'Ciencias de la Tierra', shortLabel: 'Tierra', color: 'teal' },
  { id: 'astronomia', label: 'Astronomía y espacio', shortLabel: 'Espacio', color: 'indigo' },
  { id: 'tecnologia', label: 'Tecnología e ingeniería', shortLabel: 'Tecnología', color: 'orange' },
  { id: 'construcciones', label: 'Construcciones', shortLabel: 'Construcciones', color: 'stone' },
  { id: 'electromecanica', label: 'Electromecánica', shortLabel: 'Electromecánica', color: 'green' },
]

export const providers: Provider[] = [
  { id: 'phet', name: 'PhET Interactive Simulations', url: 'https://phet.colorado.edu/es/', note: 'Simulaciones educativas abiertas, con catálogo HTML5 y versiones en español.' },
  { id: 'nasa', name: 'NASA', url: 'https://www.nasa.gov/stem/', note: 'Recurso externo oficial. La integración depende de las condiciones del recurso original.' },
  { id: 'geogebra', name: 'GeoGebra', url: 'https://www.geogebra.org/', note: 'Herramientas matemáticas interactivas. La ficha conserva el enlace al creador original.' },
  { id: 'nobook', name: 'NOBOOK Chemistry', url: 'https://chemistry-en.nobook.com/console/coursewares', note: 'Catálogo en revisión: algunos materiales requieren cuenta o autorización.' },
  { id: 'eest6', name: 'Laboratorio Virtual E.E.S.T. N.º 6', url: 'https://www.eest6.edu.ar/', note: 'Experiencias didácticas propias desarrolladas para este portal.' },
]

export const simulators: Simulator[] = [
  {
    id: 'phet-movimiento-proyectil', slug: 'movimiento-de-proyectil', title: 'Movimiento de un proyectil',
    description: 'Explorá cómo el ángulo, la velocidad inicial y la resistencia del aire modifican la trayectoria de un proyectil.', providerId: 'phet', sourceUrl: 'https://phet.colorado.edu/es/simulations/projectile-motion', subjectIds: ['fisica', 'matematica'], topics: ['Movimiento', 'Vectores', 'Gráficos'], level: ['Ciclo básico', 'Secundaria'], language: 'Español', availableLanguages: ['Español', 'Inglés', 'Portugués'], integrationType: 'embed', embedUrl: 'https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_es.html', licenseName: 'Licencia PhET', licenseUrl: 'https://phet.colorado.edu/en/licensing', attribution: 'PhET Interactive Simulations, University of Colorado Boulder', accessRequirements: 'Navegador moderno; no requiere cuenta.', isFreeVerified: true, isSpanishVerified: true, isEmbedVerified: true, lastVerifiedAt: '2026-10-25', verificationNotes: 'URL HTML5 oficial de PhET. Integración sujeta a las condiciones de licencia del proveedor.'
  },
  {
    id: 'phet-construye-un-circuito', slug: 'construye-un-circuito', title: 'Construye un circuito',
    description: 'Armá circuitos con pilas, interruptores, lámparas y cables para observar el flujo de corriente.', providerId: 'phet', sourceUrl: 'https://phet.colorado.edu/es/simulations/circuit-construction-kit-dc', subjectIds: ['fisica', 'tecnologia'], topics: ['Electricidad', 'Circuitos', 'Medición'], level: ['Ciclo básico', 'Electromecánica'], language: 'Español', availableLanguages: ['Español', 'Inglés'], integrationType: 'embed', embedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_es.html', licenseName: 'Licencia PhET', licenseUrl: 'https://phet.colorado.edu/en/licensing', attribution: 'PhET Interactive Simulations, University of Colorado Boulder', accessRequirements: 'Navegador moderno; no requiere cuenta.', isFreeVerified: true, isSpanishVerified: true, isEmbedVerified: true, lastVerifiedAt: '2026-10-25', verificationNotes: 'Simulación HTML5 oficial, seleccionada por su relación con Electromecánica.'
  },
  {
    id: 'phet-balanza-reacciones', slug: 'balanceo-de-ecuaciones-quimicas', title: 'Balanceo de ecuaciones químicas',
    description: 'Ajustá coeficientes y comprobá la conservación de átomos en distintas reacciones químicas.', providerId: 'phet', sourceUrl: 'https://phet.colorado.edu/es/simulations/balancing-chemical-equations', subjectIds: ['quimica'], topics: ['Reacciones', 'Estequiometría', 'Conservación'], level: ['Ciclo básico', 'Secundaria'], language: 'Español', availableLanguages: ['Español', 'Inglés'], integrationType: 'embed', embedUrl: 'https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_es.html', licenseName: 'Licencia PhET', licenseUrl: 'https://phet.colorado.edu/en/licensing', attribution: 'PhET Interactive Simulations, University of Colorado Boulder', accessRequirements: 'Navegador moderno; no requiere cuenta.', isFreeVerified: true, isSpanishVerified: true, isEmbedVerified: true, lastVerifiedAt: '2026-10-25', verificationNotes: 'Ficha basada en la página oficial de PhET; revisar disponibilidad de idioma al actualizar la versión.'
  },
  {
    id: 'phet-fracciones', slug: 'introduccion-a-las-fracciones', title: 'Introducción a las fracciones',
    description: 'Representá fracciones con modelos visuales y conectá distintas formas de expresar una misma cantidad.', providerId: 'phet', sourceUrl: 'https://phet.colorado.edu/es/simulations/fractions-intro', subjectIds: ['matematica'], topics: ['Fracciones', 'Representación', 'Proporcionalidad'], level: ['Ciclo básico', 'Primaria'], language: 'Español', availableLanguages: ['Español', 'Inglés'], integrationType: 'embed', embedUrl: 'https://phet.colorado.edu/sims/html/fractions-intro/latest/fractions-intro_es.html', licenseName: 'Licencia PhET', licenseUrl: 'https://phet.colorado.edu/en/licensing', attribution: 'PhET Interactive Simulations, University of Colorado Boulder', accessRequirements: 'Navegador moderno; no requiere cuenta.', isFreeVerified: true, isSpanishVerified: true, isEmbedVerified: true, lastVerifiedAt: '2026-10-25', verificationNotes: 'Recurso oficial HTML5.'
  },
  {
    id: 'phet-seleccion-natural', slug: 'seleccion-natural', title: 'Selección natural',
    description: 'Investigá cómo las variaciones, el ambiente y la selección natural cambian una población con el tiempo.', providerId: 'phet', sourceUrl: 'https://phet.colorado.edu/es/simulations/natural-selection', subjectIds: ['biologia'], topics: ['Evolución', 'Poblaciones', 'Ambiente'], level: ['Secundaria'], language: 'Español', availableLanguages: ['Español', 'Inglés'], integrationType: 'embed', embedUrl: 'https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_es.html', licenseName: 'Licencia PhET', licenseUrl: 'https://phet.colorado.edu/en/licensing', attribution: 'PhET Interactive Simulations, University of Colorado Boulder', accessRequirements: 'Navegador moderno; no requiere cuenta.', isFreeVerified: true, isSpanishVerified: true, isEmbedVerified: true, lastVerifiedAt: '2026-10-25', verificationNotes: 'Recurso oficial HTML5.'
  },
  {
    id: 'geogebra-funciones', slug: 'funciones-y-graficas', title: 'Funciones y gráficas',
    description: 'Explorá relaciones entre expresiones algebraicas y sus representaciones gráficas.', providerId: 'geogebra', sourceUrl: 'https://www.geogebra.org/m/j2jC2nXh', subjectIds: ['matematica'], topics: ['Funciones', 'Gráficos', 'Álgebra'], level: ['Ciclo básico', 'Secundaria'], language: 'Español', availableLanguages: ['Español'], integrationType: 'external', licenseName: 'Condiciones de GeoGebra', licenseUrl: 'https://www.geogebra.org/license', attribution: 'GeoGebra y autor del recurso original', accessRequirements: 'Se abre en GeoGebra; puede requerir aceptar sus condiciones.', isFreeVerified: true, isSpanishVerified: true, isEmbedVerified: false, lastVerifiedAt: '2026-10-25', verificationNotes: 'Recurso externo: no se presenta como integrado hasta verificar permisos de inserción del material específico.'
  },
  {
    id: 'nasa-sistema-solar', slug: 'explorador-del-sistema-solar', title: 'Explorador del sistema solar',
    description: 'Recorré cuerpos del sistema solar y consultá información científica producida por NASA.', providerId: 'nasa', sourceUrl: 'https://eyes.nasa.gov/apps/solar-system/', subjectIds: ['astronomia', 'tierra'], topics: ['Planetas', 'Órbitas', 'Espacio'], level: ['Ciclo básico', 'Secundaria'], language: 'Inglés', availableLanguages: ['Inglés'], integrationType: 'external', licenseName: 'NASA Media Usage Guidelines', licenseUrl: 'https://www.nasa.gov/nasa-brand-center/images-and-media/', attribution: 'NASA Eyes on the Solar System', accessRequirements: 'Recurso externo; disponible en inglés.', isFreeVerified: true, isSpanishVerified: false, isEmbedVerified: false, lastVerifiedAt: '2026-10-25', verificationNotes: 'Se mantiene como enlace externo por idioma y condiciones de integración no confirmadas.'
  },
  {
    id: 'nobook-laboratorio', slug: 'laboratorio-de-quimica-nobook', title: 'Laboratorio virtual de química',
    description: 'Catálogo de experiencias de laboratorio virtual para explorar materiales, técnicas y reacciones.', providerId: 'nobook', sourceUrl: 'https://chemistry-en.nobook.com/console/coursewares', subjectIds: ['quimica', 'tecnologia'], topics: ['Laboratorio', 'Materiales', 'Reacciones'], level: ['Secundaria', 'Técnico'], language: 'Inglés', availableLanguages: ['Inglés'], integrationType: 'auth-required', licenseName: 'Condiciones de uso de NOBOOK', licenseUrl: 'https://www.nobook.com/', attribution: 'NOBOOK Education', accessRequirements: 'Puede requerir cuenta, autorización o suscripción del proveedor.', isFreeVerified: false, isSpanishVerified: false, isEmbedVerified: false, lastVerifiedAt: '2026-10-25', verificationNotes: 'Catálogo pendiente de revisión individual. No se elude autenticación ni se simula una integración.'
  },
]

const reviewedExternalResources: Simulator[] = [
  ['atomency-estructura-celular', 'Estructura celular y molecular', 'Atomency', 'https://atomency.com/', ['biologia'], ['Célula', 'Moléculas'], 'Inglés'],
  ['atomency-reacciones', 'Reacciones químicas', 'Atomency', 'https://atomency.com/', ['quimica'], ['Reacciones', 'pH'], 'Inglés'],
  ['scisim-genetica', 'Genética y mutaciones', 'SciSim', 'https://scisim.org/', ['biologia'], ['ADN', 'Genética', 'Mutaciones'], 'Inglés'],
  ['scisim-electricidad', 'Electricidad, luz y ondas', 'SciSim', 'https://scisim.org/', ['fisica', 'electromecanica'], ['Electricidad', 'Ondas'], 'Inglés'],
  ['peebedu-sintesis-proteinas', 'Síntesis de proteínas', 'PeeB Edu', 'https://peebedu.com/', ['biologia'], ['ADN', 'ARN', 'Proteínas'], 'Inglés'],
  ['cellscape-fotosintesis', 'Fotosíntesis', 'Cellscape', 'https://www.cellscape.app/', ['biologia'], ['Fotosíntesis', 'Células'], 'Inglés'],
  ['ciencia-simulaciones-ingenieria', 'Colección de ingeniería y tecnología', 'Ciencia y Simulaciones', 'https://sciencesimulations.com/es/', ['tecnologia'], ['Ingeniería', 'Tecnología'], 'Español'],
  ['biointeractive-evolucion', 'Evolución y selección natural', 'HHMI BioInteractive', 'https://www.biointeractive.org/es', ['biologia'], ['Evolución', 'Ecología'], 'Español'],
  ['learnerkits-ambiental', 'Laboratorios de ciencias ambientales', 'LearnerKits', 'https://www.learnerkits.com/es', ['tierra', 'quimica'], ['Ambiente', 'Laboratorio'], 'Español'],
  ['simulic-matematica', 'Simulaciones de matemática', 'Simulic', 'https://simulic.com/es/', ['matematica'], ['Matemática', 'Modelización'], 'Español'],
  ['edubeam-estructuras', 'EduBeam', 'EduBeam', 'https://www.edubeam.app/', ['construcciones'], ['Vigas', 'Estructuras', 'Estática'], 'Inglés'],
  ['structure-bench', 'Structure Bench', 'Structure Bench', 'https://structurebench.com/', ['construcciones'], ['Estructuras', 'Resistencia'], 'Inglés'],
  ['openanstruk', 'OpenAnstruk', 'OpenAnstruk', 'https://www.openanstruk.org/', ['construcciones'], ['Estructuras', 'Análisis'], 'Inglés'],
  ['structurecalcs', 'StructureCalcs', 'StructureCalcs', 'https://structurecalcs.com/', ['construcciones'], ['Vigas', 'Columnas', 'Cálculo'], 'Inglés'],
  ['staticssim', 'StaticsSim', 'Profsims', 'https://profsims.com/staticssim/', ['fisica', 'construcciones'], ['Estática', 'Fuerzas'], 'Inglés'],
  ['freecircuitsim', 'FreeCircuitSim', 'FreeCircuitSim', 'https://freecircuitsim.com/', ['electromecanica'], ['Circuitos', 'Electrónica'], 'Inglés'],
  ['velxio-electronics', 'Electronics Simulator', 'Velxio', 'https://velxio.dev/electronics-simulator/', ['electromecanica'], ['Circuitos', 'Componentes'], 'Inglés'],
  ['engsim', 'EngSim', 'EngSim', 'https://engsimapp.com/index.html', ['electromecanica'], ['Ingeniería', 'Simulación'], 'Inglés'],
  ['falstad-circuit', 'CircuitJS / Falstad', 'Falstad', 'https://www.falstad.com/circuit/', ['fisica', 'electromecanica'], ['Circuitos', 'AC', 'DC'], 'Inglés'],
].map(([id, title, providerName, sourceUrl, subjectIds, topics, language]) => ({
  id, slug: id, title, description: `Recurso externo de ${providerName} para explorar ${topics.slice(0, 2).join(' y ').toLowerCase()}.`, providerId: providerName.toLowerCase().replaceAll(' ', '-'), sourceUrl, subjectIds, topics, level: ['Secundaria', 'Técnico'], language, availableLanguages: [language], integrationType: 'external', licenseName: 'Condiciones del proveedor', licenseUrl: sourceUrl, attribution: providerName, accessRequirements: 'Abrir en otra pestaña. El estado de acceso e integración requiere verificación individual.', isFreeVerified: false, isSpanishVerified: language === 'Español', isEmbedVerified: false, lastVerifiedAt: '2026-10-25', verificationNotes: 'Descubierto en el catálogo solicitado. No se presenta como integrado ni se afirma ausencia de registro sin una comprobación específica.'
} as Simulator))

simulators.push(...reviewedExternalResources)

simulators.push(
  {
    id: 'eest6-ley-de-ohm', slug: 'ley-de-ohm', title: 'Ley de Ohm',
    description: 'Modificá la tensión y la resistencia para observar cómo cambia la corriente en un circuito simple.', providerId: 'eest6', sourceUrl: 'https://www.eest6.edu.ar/', subjectIds: ['fisica', 'electromecanica'], topics: ['Electricidad', 'Ley de Ohm', 'Medición'], level: ['Ciclo básico', 'Electromecánica'], language: 'Español', availableLanguages: ['Español'], integrationType: 'embed', licenseName: 'Experiencia propia de la E.E.S.T. N.º 6', licenseUrl: 'https://www.eest6.edu.ar/', attribution: 'Laboratorio Virtual · E.E.S.T. N.º 6', accessRequirements: 'Funciona dentro del portal; no requiere cuenta.', isFreeVerified: true, isSpanishVerified: true, isEmbedVerified: true, lastVerifiedAt: '2026-10-25', verificationNotes: 'Modelo didáctico propio: I = V / R.', ownSimulator: 'ohm'
  },
  {
    id: 'eest6-equilibrio-fuerzas', slug: 'equilibrio-de-fuerzas', title: 'Equilibrio de fuerzas',
    description: 'Desplazá la carga y ajustá las reacciones en los apoyos para estudiar el equilibrio de una viga.', providerId: 'eest6', sourceUrl: 'https://www.eest6.edu.ar/', subjectIds: ['fisica', 'construcciones'], topics: ['Estática', 'Vigas', 'Reacciones'], level: ['Ciclo superior', 'Construcciones'], language: 'Español', availableLanguages: ['Español'], integrationType: 'embed', licenseName: 'Experiencia propia de la E.E.S.T. N.º 6', licenseUrl: 'https://www.eest6.edu.ar/', attribution: 'Laboratorio Virtual · E.E.S.T. N.º 6', accessRequirements: 'Funciona dentro del portal; no requiere cuenta.', isFreeVerified: true, isSpanishVerified: true, isEmbedVerified: true, lastVerifiedAt: '2026-10-25', verificationNotes: 'Modelo didáctico simplificado de equilibrio estático.', ownSimulator: 'forces'
  },
  {
    id: 'eest6-genetica-mendeliana', slug: 'genetica-mendeliana', title: 'Genética mendeliana',
    description: 'Elegí los alelos de dos progenitores y observá las proporciones esperadas en la descendencia.', providerId: 'eest6', sourceUrl: 'https://www.eest6.edu.ar/', subjectIds: ['biologia'], topics: ['Genética', 'Herencia', 'Cuadro de Punnett'], level: ['Ciclo básico', 'Ciclo superior'], language: 'Español', availableLanguages: ['Español'], integrationType: 'embed', licenseName: 'Experiencia propia de la E.E.S.T. N.º 6', licenseUrl: 'https://www.eest6.edu.ar/', attribution: 'Laboratorio Virtual · E.E.S.T. N.º 6', accessRequirements: 'Funciona dentro del portal; no requiere cuenta.', isFreeVerified: true, isSpanishVerified: true, isEmbedVerified: true, lastVerifiedAt: '2026-10-25', verificationNotes: 'Modelo didáctico de herencia monohíbrida.', ownSimulator: 'genetics'
  },
)

export function getSimulator(slug: string) { return simulators.find((simulator) => simulator.slug === slug) }
export function getProvider(id: string) { return providers.find((provider) => provider.id === id) }
export function getSubjects(ids: string[]) { return subjects.filter((subject) => ids.includes(subject.id)) }
