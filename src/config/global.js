export default {
  global: {
    Name:
      'Fundamentos de datos, estadística descriptiva y seguridad de la información',
    Description:
      'Este componente está diseñado para desarrollar habilidades técnicas en el reconocimiento de fuentes y tipos de datos. Asimismo, fortalece las capacidades de los aprendices en un entorno digital en constante evolución, con fundamentos estadísticos. Además, permite adquirir competencias en el análisis, validación y preparación de datos para modelos de Inteligencia Artificial (IA).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo: 'Tipo de datos',
        desarrolloContenidos: true,
        subMenu: [
          // {
          //   numero: '1.1',
          //   titulo: 'Concepto del ciberespacio',
          //   hash: 't_1_1',
          // },
          {
            numero: '1.1',
            titulo: 'Datos estructurados',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Datos no estructurados',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Datos semiestructurados',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Calidad de los datos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estadística descriptiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Niveles de medición',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Variables categóricas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Variables numéricas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Medidas de tendencia central y dispersión',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Visualización de datos y análisis exploratorio',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gobernanza y seguridad de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Políticas y normativas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Gobernanza de datos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Seguridad de los datos',
            hash: 't_3_3',
          },
        ],
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
        download: 'downloads/dist.pdf',
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
      tema: '1. Tipo de datos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Recursos y herramientas para el análisis efectivo de datos: introducción [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BP8OeszBSCc',
    },
    {
      tema: '1. Tipo de datos',
      referencia:
        '1. Tipo de datos	Ecosistema de Recursos Educativos SENA. (2022). Modelo de análisis de datos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KMRGyi1ZB9k',
    },
    {
      tema: '2.5. Visualización de datos y análisis exploratorio',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Etapas del procesamiento de datos y métodos estadísticos Introducción [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ndzj15PQEVw',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'conjunto finito y ordenado de instrucciones, reglas o pasos bien definidos que se siguen para realizar una tarea específica o resolver un problema.',
    },
    {
      termino: 'Aprendizaje automático <em>(Machine Learning - ML)</em>',
      significado:
        'subcampo de la inteligencia artificial que se centra en el desarrollo de algoritmos que permiten a los sistemas informáticos aprender de los datos y mejorar su rendimiento en una tarea específica sin ser programados explícitamente para ello.',
    },
    {
      termino: 'Aprendizaje profundo (<em>Deep Learning</em> - DL)',
      significado:
        'subcampo especializado del aprendizaje automático que utiliza redes neuronales artificiales con múltiples capas (profundas) para analizar y aprender representaciones complejas directamente de grandes volúmenes de datos (como imágenes, sonido o texto).',
    },
    {
      termino: 'Datos (<em>Data</em>)',
      significado:
        'información cruda, hechos, cifras, observaciones o señales que se recopilan y registran.',
    },
    {
      termino: 'Entrenamiento (<em>Training</em>):',
      significado:
        'proceso mediante el cual un algoritmo de aprendizaje automático ajusta los parámetros internos de un modelo utilizando un conjunto de datos específico (datos de entrenamiento). El objetivo es que el modelo aprenda a identificar patrones o realizar la tarea deseada con precisión.',
    },
    {
      termino: 'Modelo (de IA/ML):',
      significado:
        'representación matemática o computacional que simula un proceso o tarea, creada a partir de datos mediante algoritmos de inteligencia artificial o aprendizaje automático.',
    },
    {
      termino:
        'Red neuronal artificial (<em>Artificial Neural Network</em> - ANN)',
      significado:
        'modelo computacional inspirado en la estructura y funcionamiento de las redes neuronales biológicas del cerebro. Consiste en nodos interconectados (“neuronas”) organizados en capas, que procesan información y aprenden a reconocer patrones complejos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Almeida, F., & Calistru, C. (2013). The main challenges and issues of big data management. International Journal of Research Studies in Computing, 2(1), 11–20.',
      link: '',
    },
    {
      referencia:
        'Aroca, P. R., García, C. L., & López, J. J. G. (2009). Estadística descriptiva e inferencial. Revista El Auge de la Estadística en el Siglo XX, 22, 165–176.',
      link: '',
    },
    {
      referencia:
        'Capa, L., García, M., Crespo, E., Palmero, D., López, R., Crespo, T., ... & Fadul, J. (2017). Análisis exploratorio de datos con SPSS. Editorial Universo Sur, Res, 3(15), 315.',
      link: '',
    },
    {
      referencia:
        'CEPAL. (2023). Análisis de los modelos de gobernanza de datos en el sector público: una mirada desde Bogotá, Buenos Aires, Ciudad de México y São Paulo. Documentos de Proyectos (LC/TS.2023/71). Santiago: Comisión Económica para América Latina y el Caribe (CEPAL).',
      link: '',
    },
    {
      referencia:
        'Chen, M., Mao, S., & Liu, Y. (2014). Big data: una encuesta. Redes y Aplicaciones Móviles, 19(2), 171–209.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial No. 48.587.',
      link: '',
    },
    {
      referencia:
        'Del Pino, S. B. (2008). Estadística descriptiva e inferencial. Innovación y Experiencias Educativas, 2–10.',
      link: '',
    },
    {
      referencia:
        'Elgendy, N., & Elragal, A. (2014). Big data analytics: A literature review paper. En Advances in Data Mining. Applications and Theoretical Aspects: 14th Industrial Conference, ICDM 2014, St. Petersburg, Russia, July 16–20, 2014. Proceedings (pp. 214–227). Springer International Publishing.',
      link: '',
    },
    {
      referencia:
        'España. (2018). Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales. Boletín Oficial del Estado, núm. 294, de 6 de diciembre de 2018. ',
      link: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2018-16673',
    },
    {
      referencia:
        'Hair, J. F., Black, W. C., Babin, B. J., & Anderson, R. E. (2019). Multivariate data analysis. (8.ª ed.).',
      link: '',
    },
    {
      referencia:
        'Fang, R., Pouyanfar, S., Yang, Y., Chen, S. C., & Iyengar, S. S. (2016). Informática computacional de la salud en la era de los grandes datos: una encuesta. ACM Surveys on Computing (CSUR), 49(1), 12.',
      link: '',
    },
    {
      referencia:
        'FreeCodeCamp.org. (2024). Data Analyst Bootcamp for Beginners (SQL, Tableau, Power BI, Python, Excel, Pandas, Projects, more). [Curso en línea].',
      link: '',
    },
    {
      referencia:
        'Gehani, A., & Tariq, D. (2012). SPADE: Support for Provenance Auditing in Distributed Environments (pp. 101–120). Springer Berlin Heidelberg. ',
      link: 'https://doi.org/10.1007/978-3-642-35170-9_6',
    },
    {
      referencia:
        'Maltby, D. (2011, October). Big data analytics. En 74th Annual Meeting of the Association for Information Science and Technology (ASIST) (pp. 1–6).',
      link: '',
    },
    {
      referencia:
        'Mesa Guerrero, J. A., & Caicedo Zambrano, S. J. (2020). Introducción a la estadística descriptiva.',
      link: '',
    },
    {
      referencia:
        'Pyle, D. (1999). Data preparation for data mining. Morgan Kaufmann.',
      link: '',
    },
    {
      referencia:
        'Rahm, E., & Do, H. H. (2000). Data cleaning: Problems and current approaches. IEEE Data Engineering Bulletin, 23(4), 3–13.',
      link: '',
    },
    {
      referencia:
        'Sahoo, K., Samal, A. K., Pramanik, J., & Pani, S. K. (2019). Exploratory data analysis using Python. International Journal of Innovative Technology and Exploring Engineering, 8(12), 4727–4735.',
      link: '',
    },
    {
      referencia:
        'Stevens, S. S. (1946). On the Theory of Scales of Measurement. Science, 103(2684), 677–680. ',
      link: 'https://doi.org/10.1126/science.103.2684.677',
    },
    {
      referencia:
        'Tsai, C. W., Lai, C. F., Chao, H. C., & Vasilakos, A. V. (2015). Big data analytics: A survey. Journal of Big Data, 2, 1–32.',
      link: '',
    },
    {
      referencia:
        'Unión Europea. (2016). Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos. Diario Oficial de la Unión Europea, L 119/1. ',
      link:
        'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679',
    },
    {
      referencia:
        'Viedma, C. D. L. P. (2018). Estadística descriptiva e inferencial. Madrid: Ediciones IDT.',
      link: '',
    },
    {
      referencia:
        'Wang, L. (2017). Heterogeneous Data and Big Data Analytics. Automatic Control and Information Sciences, 3(1), 8–15. ',
      link: 'https://doi.org/10.12691/acis-3-1-3',
    },
    {
      referencia:
        'Zakir, J., Seymour, T., & Berg, K. (2015). Big data analytics. Issues in Information Systems, 16(2).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Juan Carlos Camargo Solano',
          cargo: 'Experta temática',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
