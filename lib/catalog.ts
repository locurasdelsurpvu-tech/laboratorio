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
  // ================= QUÍMICA (7 SIMULADORES) =================
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
    id: 'phet-acid-base-solutions',
    slug: 'phet-acid-base-solutions',
    title: 'Soluciones Ácido-Base & Fuerza Relativa (PhET)',
    category: 'Química',
    subject: 'Química',
    topic: 'Equilibrio Químico & pH',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_all.html?loc=es',
    description: 'Compara la disociación molecular de ácidos y bases fuertes vs. débiles empleando indicadores de conductividad y pH-metros.',
    theory: 'Los ácidos fuertes se disocian completamente en agua produciendo concentraciones elevadas de $H_3O^+$, mientras que los ácidos débiles establecen un equilibrio químico parcial ($K_a$).',
    objectives: [
      'Diferenciar entre fuerza ácida/básica y concentración molar.',
      'Medir la conductividad eléctrica de electrolitos fuertes y débiles.',
      'Relacionar la constante de disociación Ka con la concentración de iones.'
    ],
    tags: ['acido', 'base', 'ph', 'disociacion', 'equilbrio', 'electrolito']
  },
  {
    id: 'phet-molecule-shapes',
    slug: 'phet-molecule-shapes',
    title: 'Geometría Molecular & Teoría VSEPR (PhET)',
    category: 'Química',
    subject: 'Química',
    topic: 'Enlace Químico & Estructura 3D',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_all.html?loc=es',
    description: 'Construye moléculas en 3D explorando cómo los pares libres y enlazantes determinan la geometría tridimensional.',
    theory: 'La teoría de Repulsión de Pares de Electrones de la Capa de Valencia (VSEPR) predice que los electrones se disponen para minimizar la repulsión electrostática.',
    objectives: [
      'Predecir geometrías lineales, tetraédricas, octaédricas y trigonales.',
      'Calcular ángulos de enlace reales considerando la repulsión de pares solitarios.',
      'Diferenciar entre geometría de electrones y geometría molecular.'
    ],
    tags: ['vsepr', 'geometria molecular', 'enlace', 'angulos', 'electrones']
  },
  {
    id: 'phet-molarity',
    slug: 'phet-molarity',
    title: 'Molaridad & Concentración de Soluciones (PhET)',
    category: 'Química',
    subject: 'Química',
    topic: 'Soluciones Químicas & Concentración',
    difficulty: 'Básico',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/molarity/latest/molarity_all.html?loc=es',
    description: 'Modifica la cantidad de soluto y el volumen de solución para medir cambios de Molaridad (M) y punto de saturación.',
    theory: 'La molaridad representa el número de moles de soluto disueltos por litro de solución ($M = n / V$). Superado el límite de solubilidad, precipita el soluto en exceso.',
    objectives: [
      'Calcular cuantitativamente la concentración molar.',
      'Observar el viraje de intensidad de color al diluir o evaporar solución.',
      'Identificar la concentración de saturación de varias sales.'
    ],
    tags: ['molaridad', 'concentracion', 'soluto', 'solucion', 'saturacion']
  },
  {
    id: 'phet-gas-properties',
    slug: 'phet-gas-properties',
    title: 'Propiedades de los Gases & Leyes Ideales (PhET)',
    category: 'Química',
    subject: 'Química',
    topic: 'Físico-Química & Gases Ideales',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_all.html?loc=es',
    description: 'Bombea moléculas de gas dentro de un recipiente expansible. Ajusta volumen, temperatura y gravedad para validar PV = nRT.',
    theory: 'La ecuación de estado del gas ideal establece que la presión es directamente proporcional a la temperatura e inversamente proporcional al volumen ocupado.',
    objectives: [
      'Comprobar experimentalmente las Leyes de Boyle, Charles y Gay-Lussac.',
      'Relacionar la energía cinética media molecular con la temperatura en Kelvin.',
      'Analizar las colisiones contra las paredes del recipiente.'
    ],
    tags: ['gases', 'presion', 'volumen', 'temperatura', 'boyle', 'charles']
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

  // ================= FÍSICA (8 SIMULADORES) =================
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
    id: 'phet-projectile-motion',
    slug: 'phet-projectile-motion',
    title: 'Movimiento de Proyectiles & Balística (PhET)',
    category: 'Física',
    subject: 'Física',
    topic: 'Cinemática 2D',
    difficulty: 'Básico',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_all.html?loc=es',
    description: 'Dispara proyectiles modificando ángulo de tiro, velocidad inicial, masa y resistencia del aire.',
    theory: 'El movimiento parabólico se descompone en un MRU horizontal y un MRUA vertical bajo aceleración gravitatoria constante.',
    objectives: [
      'Calcular el alcance máximo horizontal $R = (v_0^2 \\sin 2\\theta)/g$.',
      'Determinar la altura máxima y tiempo de vuelo.',
      'Analizar la fuerza de arrastre aerodinámico.'
    ],
    tags: ['proyectiles', 'parabola', 'cinematica', 'gravedad', 'angulo']
  },
  {
    id: 'phet-energy-forms-changes',
    slug: 'phet-energy-forms-changes',
    title: 'Transformaciones de Energía & Calor (PhET)',
    category: 'Física',
    subject: 'Física',
    topic: 'Termodinámica & Conservación',
    difficulty: 'Básico',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html?loc=es',
    description: 'Explora cómo la energía mecánica, solar, térmica y química se transforma en energía eléctrica y luz.',
    theory: 'El principio de conservación de la energía establece que la energía no se crea ni se destruye, solo se transforma entre sus distintas manifestaciones.',
    objectives: [
      'Identificar los flujos de calor por conducción y radiación.',
      'Evaluar la eficiencia de paneles solares y generadores hidráulicos.',
      'Construir cadenas de transferencia energética.'
    ],
    tags: ['energia', 'calor', 'conservacion', 'panel solar', 'generador']
  },
  {
    id: 'phet-wave-interference',
    slug: 'phet-wave-interference',
    title: 'Interferencia & Difracción de Ondas (PhET)',
    category: 'Física',
    subject: 'Física',
    topic: 'Ondas & Acústica',
    difficulty: 'Avanzado',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_all.html?loc=es',
    description: 'Simula patrones de interferencia con fuentes de agua, ondas sonoras y láser a través de rendijas de Young.',
    theory: 'Cuando dos ondas coherentes se superponen, sus amplitudes se suman destructiva o constructivamente dependiendo de su diferencia de fase.',
    objectives: [
      'Visualizar la difracción de ondas a través de una apertura fina.',
      'Determinar la longitud de onda $\\lambda$ a partir de franjas de interferencia.',
      'Analizar el efecto de doble rendija de Young.'
    ],
    tags: ['ondas', 'sonido', 'luz', 'interferencia', 'difraccion', 'rendija']
  },
  {
    id: 'phet-forces-and-motion-basics',
    slug: 'phet-forces-and-motion-basics',
    title: 'Fuerzas, Rozamiento & Leyes de Newton (PhET)',
    category: 'Física',
    subject: 'Física',
    topic: 'Dinámica Clásica',
    difficulty: 'Básico',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html?loc=es',
    description: 'Aplica fuerzas sobre cajas y personas para calcular la aceleración nulta o neta considerando fricción estática y cinética.',
    theory: 'La segunda Ley de Newton ($F_{neta} = m \\cdot a$) relaciona la fuerza resultante aplicada sobre un cuerpo con su cambio de velocidad en el tiempo.',
    objectives: [
      'Calcular la fuerza de fricción estática $\\mu_s N$ y cinética $\\mu_k N$.',
      'Interpretar diagramas de cuerpo libre (DCL).',
      'Demostrar la primera Ley de Newton (Inercia).'
    ],
    tags: ['fuerza', 'friccion', 'newton', 'aceleracion', 'dinamica']
  },
  {
    id: 'phet-pendulum-lab',
    slug: 'phet-pendulum-lab',
    title: 'Laboratorio de Péndulo Simple (PhET)',
    category: 'Física',
    subject: 'Física',
    topic: 'Movimiento Oscilatorio',
    difficulty: 'Básico',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_all.html?loc=es',
    description: 'Compara dos péndulos en simultáneo variando la longitud del hilo, la masa suspendida y la gravedad de la Tierra, Luna o Júpiter.',
    theory: 'El período de un péndulo simple para pequeñas amplitudes depende exclusivamente de la longitud del hilo L y de la aceleración de la gravedad g ($T = 2\\pi \\sqrt{L/g}$).',
    objectives: [
      'Verificar que el período T es independiente de la masa.',
      'Calcular experimentalmente la gravedad $g$ local.',
      'Analizar la conservación de energía entre puntos de retorno.'
    ],
    tags: ['pendulo', 'gravedad', 'periodo', 'longitud', 'oscilacion']
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

  // ================= BIOLOGÍA (6 SIMULADORES) =================
  {
    id: 'phet-natural-selection',
    slug: 'phet-natural-selection',
    title: 'Selección Natural & Genética de Conejos (PhET)',
    category: 'Biología',
    subject: 'Biología',
    topic: 'Evolución & Genética de Poblaciones',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_all.html?loc=es',
    description: 'Introduce mutaciones génicas (pelaje blanco/marrón, orejas caídas) en poblaciones de conejos expuestas a depredadores (lobos) y alimentos.',
    theory: 'La selección natural favorece a aquellos individuos con variantes fenotípicas adaptativas que aumentan su supervivencia y éxito reproductivo en un entorno específico.',
    objectives: [
      'Simular alelos dominantes y recesivos en varias generaciones.',
      'Analizar la presión selectiva ejercida por factores bióticos y abióticos.',
      'Graficar el crecimiento poblacional en función de mutaciones.'
    ],
    tags: ['evolucion', 'seleccion natural', 'genetica', 'adn', 'poblacion']
  },
  {
    id: 'phet-gene-expression-essentials',
    slug: 'phet-gene-expression-essentials',
    title: 'Expresión Génica & Transcripción de ADN (PhET)',
    category: 'Biología',
    subject: 'Biología',
    topic: 'Biología Molecular & Genética',
    difficulty: 'Avanzado',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_all.html?loc=es',
    description: 'Sintetiza proteínas agregando factores de transcripción y ARN polimerasa a las cadenas molde de ADN.',
    theory: 'El dogma central de la biología molecular dicta que el ADN se transcribe en ARN mensajero (ARNm), el cual es traducido por los ribosomas para ensamblar secuencias de aminoácidos.',
    objectives: [
      'Identificar los elementos de un gen (Promotor, Región Codificante).',
      'Evaluar la tasa de degradación del ARNm y acumulación proteica.',
      'Analizar el efecto de factores de regulación transcripcional.'
    ],
    tags: ['adn', 'arn', 'proteinas', 'transcripcion', 'genetica', 'ribosoma']
  },
  {
    id: 'phet-neuron',
    slug: 'phet-neuron',
    title: 'Potencial de Acción & Canales Iónicos en Neuronas (PhET)',
    category: 'Biología',
    subject: 'Biología',
    topic: 'Neurobiología & Fisiología',
    difficulty: 'Avanzado',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/neuron/latest/neuron_all.html?loc=es',
    description: 'Estimula la membrana neuronal y observa el flujo de iones de Sodio ($Na^+$) y Potasio ($K^+$) a través de canales dependientes de voltaje.',
    theory: 'Un potencial de acción ocurre cuando la despolarización de la membrana supera el umbral crítico, abriendo canales de sodio de disparo rápido.',
    objectives: [
      'Medir el potencial de reposo en milivoltios (-70 mV).',
      'Describir las fases de despolarización, repolarización y periodo refractario.',
      'Graficar el potencial eléctrico celular vs. tiempo.'
    ],
    tags: ['neurona', 'potencial de accion', 'sodio', 'potasio', 'impulso nervioso']
  },
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
  {
    id: 'bio-enzyme-kinetics',
    slug: 'bio-enzyme-kinetics',
    title: 'Cinética Enzimática & Catálisis Bioquímica',
    category: 'Biología',
    subject: 'Biología',
    topic: 'Bioquímica & Enzimas',
    difficulty: 'Intermedio',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Analiza la velocidad de reacción sustrato-enzima variando temperatura, pH e inhibidores competitivos.',
    theory: 'El modelo de Michaelis-Menten describe la tasa de velocidad de catálisis enzimática en función de la concentración de sustrato [S] y la velocidad máxima $V_{max}$.',
    objectives: [
      'Determinar la constante de Michaelis $K_m$.',
      'Evaluar la desnaturalización térmica de enzimas.',
      'Diferenciar entre inhibición competitiva y no competitiva.'
    ],
    defaultParams: { substrateConc: 10, enzymeConc: 5, temp: 37, pH: 7.4 },
    tags: ['enzimas', 'bioquimica', 'catalisis', 'sustrato', 'michaelis']
  },
  {
    id: 'bio-photosynthesis-lab',
    slug: 'bio-photosynthesis-lab',
    title: 'Fotosíntesis Virtual & Producción de Oxígeno',
    category: 'Biología',
    subject: 'Biología',
    topic: 'Fisiología Vegetal',
    difficulty: 'Básico',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Mide la tasa fotosintética en hojas de Elodea modificando la intensidad de luz solar y concentración de $CO_2$.',
    theory: 'La fotosíntesis transforma energía lumínica, agua y $CO_2$ en glucosa y $O_2$ dentro de los cloroplastos ($6CO_2 + 6H_2O \\xrightarrow{luz} C_6H_{12}O_6 + 6O_2$).',
    objectives: [
      'Contar el número de burbujas de oxígeno liberadas por minuto.',
      'Graficar la tasa de fotosíntesis vs. distancia a la fuente de luz.',
      'Evaluar la fijación de carbono en la fase oscura (Ciclo de Calvin).'
    ],
    defaultParams: { lightIntensity: 80, co2Conc: 0.04, wavelength: 650 },
    tags: ['fotosintesis', 'plantas', 'cloroplastos', 'oxigeno', 'luz']
  },

  // ================= ELECTRÓNICA (6 SIMULADORES) =================
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
    id: 'phet-circuit-ac',
    slug: 'phet-circuit-ac',
    title: 'Kit de Construcción de Circuitos AC & Capacitores (PhET)',
    category: 'Electrónica',
    subject: 'Electrónica',
    topic: 'Corriente Alterna & Capacitancia',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html?loc=es',
    description: 'Diseña circuitos de corriente alterna con bobinas, capacitores, fuentes armónicas y transformadores.',
    theory: 'En circuitos de corriente alterna, inductores y condensadores generan reactancia ($X_L$ y $X_C$), produciendo desfasajes temporales entre el voltaje y la corriente.',
    objectives: [
      'Medir reactancias capacitivas e inductivas.',
      'Observar la carga y descarga de un capacitor en el tiempo.',
      'Construir un circuito resonante RLC alimentado con CA.'
    ],
    tags: ['ac', 'corriente alterna', 'capacitor', 'inductor', 'circuito']
  },
  {
    id: 'phet-capacitor-lab-basics',
    slug: 'phet-capacitor-lab-basics',
    title: 'Capacitadores & Dielectricos de Placas (PhET)',
    category: 'Electrónica',
    subject: 'Electrónica',
    topic: 'Electrostática & Almacenamiento de Carga',
    difficulty: 'Intermedio',
    type: 'iframe',
    integrationType: 'embed',
    provider: 'PhET Interactive Simulations',
    embedUrl: 'https://phet.colorado.edu/sims/html/capacitor-lab-basics/latest/capacitor-lab-basics_all.html?loc=es',
    description: 'Modifica el área de placas paralelas y la separación dieléctrica para medir la capacidad (F) y la energía almacenada.',
    theory: 'La capacitancia $C = \\epsilon_0 A / d$ depende del área de las placas, la distancia entre ellas y la constante dieléctrica del material intermedio.',
    objectives: [
      'Calcular la energía almacenada $E = \\frac{1}{2} C V^2$.',
      'Analizar el impacto de insertar materiales dieléctricos.',
      'Medir la densidad de carga superficial.'
    ],
    tags: ['capacitor', 'dieléctrico', 'voltaje', 'carga', 'capacitancia']
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
  {
    id: 'elec-semiconductor-diode',
    slug: 'elec-semiconductor-diode',
    title: 'Diodos Semiconductores & Rectificación',
    category: 'Electrónica',
    subject: 'Electrónica',
    topic: 'Semiconductores & Fuentes DC',
    difficulty: 'Intermedio',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Analiza la curva característica I-V de diodos PN y rectificadores de media onda y onda completa.',
    theory: 'Un diodo de unión PN permite el paso de corriente únicamente en polarización directa, bloqueando el flujo en polarización inversa.',
    objectives: [
      'Visualizar la barrera de potencial del silicio (0.7V).',
      'Construir un puente rectificador de Graetz con capacitor de rizado.',
      'Medir la tensión de ruptura Zener.'
    ],
    defaultParams: { voltageAC: 12, freq: 50, filterCap: 470 },
    tags: ['diodo', 'rectificador', 'silicio', 'zener', 'semiconductor']
  },
  {
    id: 'elec-logic-gates',
    slug: 'elec-logic-gates',
    title: 'Compuertas Lógicas & Álgebra de Boole',
    category: 'Electrónica',
    subject: 'Electrónica',
    topic: 'Electrónica Digital',
    difficulty: 'Básico',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Interconecta compuertas AND, OR, NOT, NAND y XOR para validar tablas de verdad digitales.',
    theory: 'Los circuitos lógicos procesan señales binarias (0 y 1) regidas por leyes del álgebra booleana para realizar operaciones aritméticas y de control.',
    objectives: [
      'Construir tablas de verdad en tiempo real.',
      'Simplificar expresiones mediante Mapas de Karnaugh.',
      'Ensamblar un sumador binario completo de 2 bits.'
    ],
    defaultParams: { inputA: 1, inputB: 0, gateType: 'AND' },
    tags: ['logica', 'boole', 'and', 'or', 'xor', 'digital']
  },

  // ================= ELECTROMECÁNICA (5 SIMULADORES) =================
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
  },
  {
    id: 'electromech-pulleys-levers',
    slug: 'electromech-pulleys-levers',
    title: 'Polipastos, Poleas & Ventaja Mecánica',
    category: 'Electromecánica',
    subject: 'Electromecánica',
    topic: 'Mecanismos & Transmisión de Fuerza',
    difficulty: 'Básico',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Calcula el esfuerzo requerido para elevar cargas pesadas combinando poleas fijas, móviles y aparejos factoriales.',
    theory: 'La ventaja mecánica teórica ($VM = F_{salida} / F_{entrada}$) en polipastos es proporcional al número de segmentos de cuerda que sostienen la carga móvil.',
    objectives: [
      'Determinar la fuerza ejercida en aparejos potenciales y factoriales.',
      'Evaluar el rendimiento mecánico considerando el rozamiento de los ejes.',
      'Calcular la distancia de tiro de cuerda requerida.'
    ],
    defaultParams: { loadWeight: 200, pulleyCount: 4, frictionFactor: 0.05 },
    tags: ['poleas', 'polipasto', 'ventaja mecanica', 'fuerza', 'cables']
  },
  {
    id: 'electromech-transformer-power',
    slug: 'electromech-transformer-power',
    title: 'Transformador Trifásico de Potencia & Pérdidas',
    category: 'Electromecánica',
    subject: 'Electromecánica',
    topic: 'Transformadores & Redes Eléctricas',
    difficulty: 'Avanzado',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Simula la relación de transformación de tensión ($V_1/V_2 = N_1/N_2$) y las pérdidas en el núcleo de hierro.',
    theory: 'Un transformador funciona mediante inducción mutua acoplando dos devanados. Las pérdidas incluyen corrientes parásitas de Foucault y pérdidas por histéresis.',
    objectives: [
      'Medir la tensión de secundario a vacío y bajo carga.',
      'Evaluar el ensayo de cortocircuito y circuito abierto.',
      'Determinar la eficiencia del transformador.'
    ],
    defaultParams: { primaryTurns: 1000, secondaryTurns: 100, vPrimary: 220, loadRes: 50 },
    tags: ['transformador', 'bobinado', 'potencia', 'foucault', 'voltaje']
  },
  {
    id: 'electromech-frequency-inverter',
    slug: 'electromech-frequency-inverter',
    title: 'Variador de Frecuencia (VFD) & Control V/f',
    category: 'Electromecánica',
    subject: 'Electromecánica',
    topic: 'Accionamientos Eléctricos & Control',
    difficulty: 'Avanzado',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Controla la velocidad angular y torque de un motor asíncrono modulando frecuencia (Hz) y voltaje mediante PWM.',
    theory: 'La velocidad síncrona de un motor de inducción ($n_s = 120 f / P$) varía linealmente con la frecuencia aplicada manteniendo constante la relación Voltaje/Frecuencia.',
    objectives: [
      'Ajustar rampas de aceleración y desaceleración del motor.',
      'Analizar la compensación de torque a bajas frecuencias.',
      'Simular el frenado dinámico por inyección de corriente continua.'
    ],
    defaultParams: { setpointFreq: 50, rampTime: 3, motorPoles: 4 },
    tags: ['vfd', 'variador', 'frecuencia', 'pwm', 'motor', 'torque']
  },
  {
    id: 'electromech-pneumatic-actuator',
    slug: 'electromech-pneumatic-actuator',
    title: 'Electroneumática & Cilindro de Doble Efecto',
    category: 'Electromecánica',
    subject: 'Electromecánica',
    topic: 'Automatización Neumática & Solenoides',
    difficulty: 'Intermedio',
    type: 'native',
    integrationType: 'native',
    provider: 'Nativo LabVirtual',
    description: 'Diseña secuencias de avance y retroceso neumático mediante electroválvulas 5/2 biestables y sensores magnéticos.',
    theory: 'La presión del aire comprimido actuando sobre el émbolo produce una fuerza mecánica lineal ($F = P \\cdot A$) regulada mediante caudales de aire.',
    objectives: [
      'Construir un circuito de autorretención con reles electromagnéticos.',
      'Ajustar reguladores de caudal para controlar la velocidad del vástago.',
      'Programar secuencias neumáticas continuas A+ B+ A- B-.'
    ],
    defaultParams: { pressure: 6, cylinderBore: 40, valveType: '5/2 Biestable' },
    tags: ['neumatica', 'cilindro', 'solenoide', 'aire', 'electroneumatica']
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
