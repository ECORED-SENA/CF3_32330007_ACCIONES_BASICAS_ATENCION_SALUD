export default {
  global: {
    componenteFormativo:
      'Atención básica al lesionado: protocolos y acciones iniciales',
    descripcionCurso:
      'Este componente formativo ofrece guías prácticas para la atención básica de personas lesionadas, siguiendo protocolos de primeros auxilios. Incluye fundamentos de anatomía, técnicas de valoración primaria, soporte vital básico en adultos y manejo de signos vitales. Diseñado para primeros respondientes, proporciona conocimientos esenciales para evaluar y estabilizar pacientes en situaciones de emergencia antes de la llegada de ayuda médica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos básicos de anatomía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Introducción a las posturas anatómicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ubicación de los órganos abdominales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'El esqueleto humano',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Funciones principales del sistema óseo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cartílagos, tendones y ligamentos',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Signos vitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Frecuencia Cardiaca (FC)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Frecuencia respiratoria (FR)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Presión arterial (PA)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Temperatura',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Valoración primaria',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Soporte Vital Básico en el adulto',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/32330007_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Frecuencia Cardiaca (FC)',
      referencia:
        'Revista del consumidor (PROFECO). (2013). <em>Resultados de laboratorio: Pulsómetros.</em>',
      tipo: 'Artículo',
      link:
        'https://www.gob.mx/cms/uploads/attachment/file/100443/RC440_Laboratorio_Profeco_Pulsometros.pdf',
    },
    {
      tema: 'Frecuencia respiratoria (FR)',
      referencia:
        'VITAL SUPPORT SAS. (2021). ¿CÓMO TOMAR LA FRECUENCIA RESPIRATORIA?. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/w1Z8CXwhm4o?feature=shared',
    },
    {
      tema: 'Presión arterial (PA)',
      referencia:
        'DW Español (2023). ¿Cómo bajar la presión arterial de forma natural?. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/8SYSq051ej4?feature=shared',
    },
  ],
  glosario: [
    {
      termino: 'Bradicardia',
      significado: 'frecuencia cardiaca por debajo de los valores normales.',
    },
    {
      termino: 'Edema',
      significado:
        'acumulación anormal de líquido en los espacios intersticiales de los tejidos.',
    },
    {
      termino: 'Endoscopio',
      significado:
        'instrumento utilizado para visualizar el interior de órganos y cavidades corporales.',
    },
    {
      termino: 'Flexión',
      significado:
        'movimiento de algunas articulaciones que disminuye el ángulo entre huesos articulados.',
    },
    {
      termino: 'Fractura',
      significado:
        'rotura de un hueso ocasionada por la aplicación de una fuerza violenta sobre el cuerpo; interrupción de la continuidad del tejido óseo.',
    },
    {
      termino: 'Hematoma',
      significado:
        'acumulación de sangre que está atrapada en los tejidos de la piel o de un órgano.',
    },
    {
      termino: 'Insuflar',
      significado:
        'introducir a soplos un gas, un líquido o una sustancia pulverizada en un órgano o en una cavidad.',
    },
    {
      termino: 'Plano frontal',
      significado:
        'línea vertical que atraviesa el cuerpo de lado a lado y que lo divide en una parte anterior y otra posterior.',
    },
    {
      termino: 'Taquicardia',
      significado: 'frecuencia cardiaca por encima de los valores normales.',
    },
    {
      termino: 'SVB',
      significado: '<span class="text-capitalize">Soporte<span> Vital Básico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anatomía diccionario referencia visual. (2016). Columna vertebral.',
      link: '',
    },
    {
      referencia: 'Anatomia humana. (2016). Posición anatómica.',
      link:
        'http://unefaanatomia.blogspot.com.co/2008/04/anatoma-humana-generalidades.html',
    },
    {
      referencia: 'Anatomia Humana. (2016). Sistema circulatorio.',
      link: 'https://vimeo.com/48093179',
    },
    {
      referencia:
        'Carmona Romera, A. B. & Rivas Hidalgo, A. M. (2022). Soporte Vital Básico. SANT0208: (1 ed.). IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/225084',
    },
    {
      referencia: 'Guías de la AHA (2016). Aspectos destacados.',
      link: '',
    },
    {
      referencia:
        'Hernández Padilla, J. M. Márquez Hernández, V. V. & Antequera Raynal, L. H. (2016). Soporte vital básico y avanzado: basado en las recomendaciones ERC-2015: ( ed.). Editorial Universidad de Almería.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/44563',
    },
    {
      referencia: 'Junta de Andalucia. (2016). Circulatorio.',
      link: '',
    },
    {
      referencia:
        'Prehospital Trauma life support committee of the national association of emergency medical technicians. (2012) The committee on trauma of the american college of surgeons. Soporte vital básico y avanzado en el trauma prehospitalario PHTLS. 7 Ed. Elsevier, España.',
      link: '',
    },
    {
      referencia:
        'Urgencias y emergencias médicas tanto para el personal paramédico y médico. (2016). Evaluación de la escena por un primer respondiente.',
      link:
        'http://urgenciasyemergenciasmedicas.blogspot.com.co/2013/01/3-evaluacion-de-la-escena-por-un-primer.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz María Cardona Correa',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'José Eduardo Solano Rivero',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
