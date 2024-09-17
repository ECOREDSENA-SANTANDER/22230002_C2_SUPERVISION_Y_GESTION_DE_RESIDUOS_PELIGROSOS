export default {
  global: {
    componenteFormativo: 'Manejo externo RESPEL, control y seguimiento',
    descripcionCurso: 'No tiene el texto aun',
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
        titulo: 'Manejo externo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivos y metas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              ' Responsabilidades para los generadores y el transportador',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Alternativas de manejo y disposición final de RESPEL',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Control y seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Definición',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diferencias entre registro e identificación',
            hash: 't_2_2',
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
        download: 'downloads/prueba.pdf',
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
  referencias: [
    {
      referencia:
        'de Los Desechos Peligrosos Y Su Eliminación, S. E. L. C. D. E. L. M. T. (s/f). CONVENIO DE BASILEA. Basel.int. Recuperado el 2 de septiembre de 2024, de',
      link:
        'https://www.basel.int/Portals/4/Basel%20Convention/docs/text/BaselConventionText-s.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007). Gestión Integral de Residuos o Desechos Peligrosos. Bogotá, Colombia: Ministerio de Ambiente, Vivienda y Desarrollo Territorial. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. Decreto 4741 de 2005. Por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Consultado el 03 de agosto de 2014, en',
      link: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=18718',
    },
  ],
  glosario: [
    {
      termino: 'Acondicionamiento ',
      significado: 'NO PERMITE DILIGENCIAR LOS TEXTOS DEL DI SON MUY LARGOS',
    },
    {
      termino: 'Comburente',
      significado: '',
    },
    {
      termino: 'Contingencia ',
      significado: '',
    },
    {
      termino: 'EPP ',
      significado: '',
    },
    {
      termino: 'Irritante  ',
      significado: '',
    },
    {
      termino: 'Peligrosidad ',
      significado: '',
    },
    {
      termino: 'PMIRESPEL ',
      significado: '',
    },
    {
      termino: 'Plan de Acción ',
      significado: '',
    },
    {
      termino: 'RESPEL ',
      significado: '',
    },
    {
      termino: 'Tóxico',
      significado: '',
    },
  ],
  complementario: [
    {
      tema: 'Guía para la gestión integral de residuos peligrosos.',
      referencia:
        '(S/f). Edu.co. Recuperado de https://www.uptc.edu.co/export/sites/default/sig/doc/2018/guia_residuos.pdf ',
      tipo: 'Guía',
      link:
        'https://www.uptc.edu.co/export/sites/default/sig/doc/2018/guia_residuos.pdf',
    },
    {
      tema: 'Etiquetado de materiales peligrosos',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/1vGRTvAgqso ',
      tipo: 'Video',
      link: 'https://youtu.be/1vGRTvAgqso',
    },
    {
      tema: 'Manejo de residuos peligrosos ',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/AbUirfP7h1Y ',
      tipo: 'Video',
      link: 'https://youtu.be/AbUirfP7h1Y ',
    },
    {
      tema: 'Manejo y transporte seguro de residuos peligrosos',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/uDJRkt3khpU',
      tipo: 'Video',
      link: 'https://youtu.be/uDJRkt3khpU ',
    },
    {
      tema: 'Materiales peligrosos ',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/79b8q3UCjDc ',
      tipo: 'Video',
      link: 'https://youtu.be/79b8q3UCjDc',
    },
    {
      tema: 'Manejo de residuos peligrosos',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de  https://youtu.be/t-V8qzBoBU0',
      tipo: 'Video',
      link: 'https://youtu.be/t-V8qzBoBU0',
    },
    {
      tema: 'Manual de uso de productos químicos ',
      referencia: '(S/f-b). Edu.co. Recuperado de Zajuna',
      tipo: 'Manual',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Manuel Augusto Arias López',
          cargo: 'Instructor - Experto temático ',
          centro: 'Regional Quindío - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Correctora de Estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria y la Comunicación Gráfica',
        },
        {
          nombre: 'Martha Isabel Martínez Vargas',
          cargo: 'Productora audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
