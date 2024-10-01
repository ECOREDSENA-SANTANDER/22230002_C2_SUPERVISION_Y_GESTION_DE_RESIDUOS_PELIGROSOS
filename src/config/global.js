export default {
  global: {
    componenteFormativo: 'Manejo externo RESPEL, control y seguimiento',
    descripcionCurso:
      'En este componente se describen detalladamente las actividades que son obligaciones de las empresas generadoras de residuos peligrosos y las empresas gestoras y sus transportadores, resaltando la importancia de realizarlas de manera responsable. Adicionalmente, se describen los procesos de control y seguimiento para garantizar la efectividad del plan de manejo integral de residuos peligrosos.',
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
        download: 'downloads/CF2_22230002_DU.zip',
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
        'Centro Coordinador del Convenio de Basilea para América Latina y el Caribe. (2005). Guía para la Gestión Integral de Residuos Peligrosos. Fundamentos Tomo I. Consultado en: ',
      link:
        'https://cempre.org.uy/docs/biblioteca/guia_para_la_gestion_integral_residuos/gestion_respel01_fundamentos.pdf ',
    },
    {
      referencia:
        ' Goncalves, A. (2013). ¿Qué es un relleno de seguridad? Consultado en: ',
      link: 'https://www.youtube.com/watch?v=V4p7JrPk7bo ',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2005). Lineamientos para la elaboración de planes de gestión integral de residuos o desechos peligrosos a cargo de generadores. Consultado el 03 de agosto de 2014, en:',
      link:
        'http://ambientebogota.gov.co/documents/10157/220914/Lineamientos_Planes_de_Gestion.pdf  ',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (s.f.) Transporte por carretera de sustancias químicas nocivas y residuos peligrosos. Bogotá: Ministerio de Ambiente, Vivienda y Desarrollo Territorial. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. Decreto 4741de 2005. Por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral.Consultado el 03 de agosto de 2014, en:',
      link:
        'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=18718  ',
    },
    {
      referencia:
        'Ministerio de transporte. Decreto 1609 de 2002. Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera. Consultado el 03 de agosto de 2014, en:',
      link:
        'https://www.google.com.co/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CBoQFjAA&url=https%3A%2F%2Fwww.mintransporte.gov.co%2Fdescargar.php%3Fid%3D2914&ei=MhLfU8zcLbLNsQTj-oKgCg&usg=AFQjCNHDuZj4XJW0PJ4ZMrGqhEPSk36Mxw&sig2=n7WmLuXfcne7pOj_rSfDiQ&bvm=bv.72197243,d.aWw&cad=rja',
    },
  ],
  glosario: [
    {
      termino: 'Celda de seguridad',
      significado:
        'Depósito de Seguridad diseñado para contener sustancias potencialmente peligrosas para la salud humana y el ambiente. ',
    },
    {
      termino: 'Control ',
      significado: 'Comprobación, inspección, fiscalización, intervención. ',
    },
    {
      termino: 'EPP ',
      significado: 'Elementos de protección personal. ',
    },
    {
      termino: 'Gasificación ',
      significado:
        'Transformación de una sustancia sólida o líquida en una mezcla gaseosa mediante oxidación parcial con aplicación de calor. ',
    },
    {
      termino: 'Hoja de seguridad ',
      significado:
        'Documento que proporciona información básica sobre un material o sustancia química determinada. ',
    },
    {
      termino: 'Pirólisis ',
      significado:
        'Degradación térmica de una sustancia en ausencia de oxígeno o con una cantidad limitada del mismo. ',
    },
    {
      termino: 'Plan de Acción ',
      significado:
        'Establece los procedimientos que se deben llevar a cabo en caso de una emergencia. ',
    },
    {
      termino: 'Relleno sanitario ',
      significado: 'Método diseñado para la disposición final de la basura. ',
    },
    {
      termino: 'RESPEL ',
      significado: 'Residuos peligrosos. ',
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
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernando Enrique Bohórquez Ariza ',
          cargo: 'Experto temático ',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital ',
        },
        {
          nombre: 'Gissela Alvis Norma Buenaventura ',
          cargo: 'Asesoras pedagógicas ',
          centro: 'Centro de Industria y la Construcción ',
        },
        {
          nombre: 'Diana Rocío Possos  ',
          cargo: 'Líder ',
          centro: 'Centro de Industria y de la Construcción ',
        },
        {
          nombre: 'Carmen Fernández Sandra Rodríguez',
          cargo: 'Editoras de contenido ',
          centro: 'Centro de Industria y la Construcción  ',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
