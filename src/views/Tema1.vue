<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Prevención y minimización

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1¿Qué es un residuo peligroso?

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-1.col-4.py-2.col-sm-3
        img(src='@/assets/curso/temas/tema1/img01.svg', alt='')
      .col-lg-11 
        p Según la Universidad Pedagógica Nacional un residuo peligroso es aquel que por sus características intrínsecas puede causar daño a la salud humana o al ambiente. Algunas características que otorgan a un residuo el rango de peligroso son:

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span
            | Características de los residuos peligrosos

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-12
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/infografia.svg', alt='en el diagrama se enuncian las siguientes características: tóxico, corrosivo, infeccioso, explosivo, inflamable, ecotóxico, reactivo.')
    
          .tarjeta.color-primario.p-3(x="52%" y="27%" numero="+")
            .h5.mb-2.text-center Explosivo

          .tarjeta.color-primario.p-3(x="37%" y="43%" numero="+")
            .h5.mb-2.text-center Corrosivo

          .tarjeta.color-primario.p-3(x="34%" y="73%" numero="+")
            .h5.mb-2.text-center Ecotóxico

          .tarjeta.color-primario.p-3(x="44%" y="95%" numero="+")
            .h5.mb-2.text-center Reactivo   

          .tarjeta.color-primario.p-3(x="59%" y="95%" numero="+")
            .h5.mb-2.text-center Inflamable     

          .tarjeta.color-primario.p-3(x="69%" y="73%" numero="+")
            .h5.mb-2.text-center Tóxico  

          .tarjeta.color-primario.p-3(x="67%" y="43%" numero="+")
            .h5.mb-2.text-center Infeccioso     
            
      separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.2 ¿Qué es un plan de gestión integral de residuos peligrosos? 
      
      .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-lg-5.py-2.col-sm-12
          img(src='@/assets/curso/temas/tema1/img02.png', alt='')
        .col-lg-1.col-4.py-2.col-sm-2
          img(src='@/assets/curso/temas/tema1/img01.svg', alt='')
        .col-lg-6
          p De acuerdo con la normatividad ambiental vigente (Decreto 4741 de 2005) los generadores de residuos peligrosos deben elaborar un plan de gestión integral de los residuos peligrosos. 
          .cajon.color-primario.p-4.mb-4
            p •  Tendiente a prevenir y minimizar la generación de residuos peligrosos (RESPEL).
            p •  Se debe documentar: 
            ul.lista-ul--color
              li.text-center
                i.fas.fa-biohazard
                | Las características de peligrosidad. 
              li.text-center
                i.fas.fa-biohazard
                | Las características de peligrosidad. 
              li.text-center
                i.fas.fa-biohazard
                | Las características de peligrosidad. 
      p.mb-5 De acuerdo con los lineamientos para elaborar un Plan de Gestión Integral de Residuos Peligrosos (PGIRESPEL) #[b (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2005)], estos planes deben contemplar los siguientes componentes: 

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9
          .row.align-items-center.justify-content-center.mb-4
            .col-lg-12.col-md-12.col-12
              .tarjeta--container.row
                .col-md.tarjeta.color-acento-contenido.d-none.d-lg-block
                  .row.justify-content-center
                    .col-12
                      figure
                        img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img03.png', alt='tema1')
                .col-md.tarjeta.color-adicional.p-0
                  .row.align-items-center.mb-5.p-4
                    .col-lg-12
                      ol.lista-ol--cuadro
                        li
                        .lista-ol--cuadro__vineta
                          span 1
                        | Prevención y minimización. 
                        li
                        .lista-ol--cuadro__vineta
                          span 2
                        | Manejo interno ambientalmente seguro. 
                        li
                        .lista-ol--cuadro__vineta
                          span 3
                        | Manejo externo ambientalmente seguro. 
                        li
                        .lista-ol--cuadro__vineta
                          span 4
                        | Ejecución, seguimiento y evaluación del plan. 
                      .cajon.verde-trans
                        p.p-2 La organización debe generar todos los lineamientos, instructivos, programas o medidas tendientes para cumplir con estos cuatro componentes.
        .col-lg-3.col-8
          img(src='@/assets/curso/temas/tema1/img04.png', alt='tema1')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
            h3.bg13.py-2.w-card-text Objetivos y metas 
        .py-3
        .col-sm-12.col-lg-7
          .d-flex
            h3.bg131.py-2.w-card-text1 Objetivos
      
      .row.mb-5(data-aos="zoom-in-left")
        .col-lg-12
          p Son los propósitos que se quieren cumplir con el PGIRESPEL y deben estar orientados a todos los componentes de este. 
        .col-lg-5
          h4 Características de los objetivos:
        .py-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.py-2.col-sm-8
            img(src="@/assets/curso/temas/tema1/img05.png")
          .col-lg-5
            .row.bg2
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span 1
                | Viables
            .py-2
            .row.bg2
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span 2
                | Coherentes con la organización
            .py-2
            .row.bg2
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span 3
                | Reales
            .py-2
            .row.bg2
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span 4
                | Que se puedan cumplir     
      .row.justify-content-start.mb-4
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            h3.bg131.py-2.w-card-text Metas 
      
      p.mb-5 Son los medios para alcanzar los objetivos y deben estar en términos de cantidad y tiempo.
      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span
              | Características de las metas
        .col-lg-12
          img(src="@/assets/curso/temas/tema1/img06.svg", alt='En el diagrama se mencionan las siguientes características de las metas: -Se pueden implementar -No deben ser superficiales -Reales -Medibles -Deben tener tiempo de cumplimiento -No deben ser muy ambiciosas')
          .py-3
          p.mb-5 Teniendo en cuentas las características de los objetivos y las metas se pueden tomar como ejemplo las siguientes relaciones:
        
      
      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8
          img(src="@/assets/curso/temas/tema1/img07.svg")


      separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.3 Identificación de fuentes de generación 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          p.mb-5 Una fuente es el lugar donde se genera el residuo peligroso y los diferentes tipos de fuentes dependen del origen de generación, teniendo en cuenta esto el Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2007 nos presenta los siguientes tipos de fuentes: 
        
        .col-lg-7
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            span
              | Fuentes generadoras
          img(src="@/assets/curso/temas/tema1/img08.svg", alt="En la imagen se presentan 4 imágenes que ejemplifican fuentes generadoras de RESPEL: actividades productivas, actividades del sector servicios, consumo de productos con características peligrosas y hogares. ")
        
        .col-lg-12
          p.mb-5 Para identificar fuentes generadoras de RESPEL y etapas donde podrian encontrarse, es importante revisar todo el proceso productivo y las áreas de soporte siguiendo cada uno de los siguientes pasos:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          .cajon.bg3.p-4.mb-4
            .bg4.p-3
              ul.lista-ul--color
                li
                  i.fas.fa-biohazard
                  | Analizar paso a paso de todos los procesos que se den en la compañía. 
                li
                  i.fas.fa-biohazard
                  | Las características de peligrosidad. 
                li
                  i.fas.fa-biohazard
                  | Identificar procesos y sitios de generación de residuos peligrosos. 
                li
                  i.fas.fa-biohazard
                  | Identificar las materias primas y productos que tienen relación o inciden en la generación de residuos peligros.
                li
                  i.fas.fa-biohazard
                  | Revisar las áreas de soporte.
                li
                  i.fas.fa-biohazard
                  | Relacionar la generación de residuos con la producción de bienes y/o servicios. 
                li
                  i.fas.fa-biohazard
                  | Cuantificar los residuos generados y los productos, bienes y/o servicio.
        .col-lg-3.col-8
          img(src="@/assets/curso/temas/tema1/img09.png")

      p.mb-3
        A continuación se presentan ejemplos sobre la manera de realizar el análisis de las fuentes generadoras de RESPEL:

      h5.text-red.mb-5 Ejemplo 1. 

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span
            | Proceso productivo empresa del sector alimentario
        img(src="@/assets/curso/temas/tema1/img10.svg", alt="en la figura se presenta un diagrama del proceso productivo de una empresa de alimentos, donde por medio de varios iconos se enuncian diferentes características de cada etapa. Dentro de esas características se encuentra:  -Produce ruido. -Produce olores -Produce residuos. -Emite gases -Produce vapor. -Se utiliza agua -Se utiliza energía.")
        figcaption #[b Fuente:] Instituto Tecnológico agroalimentario, s.f.
      .py-3
      p.mb-5 Al diagramar el proceso productivo es posible Identificar etapas de generación de residuos peligrosos, se debe garantizar que se contemplan todas las actividades de la organización.
      h5.text-red.mb-5 Ejemplo 2. 
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 5.  
            span
              | Identificación de materias primas y productos. Cervecería
          img(src="@/assets/curso/temas/tema1/img11.svg", alt="Texto alternativo: El diagrama de flujo describe el proceso de elaboración y empacado de cerveza, señalando con rectángulos azules las etapas que tienen que ver con las materias primas y en un rectángulo verde el producto terminado.")
          figcaption Fuente: Tomado de Quintero, (2009).

      .py-3
      p.mb-5 Al diagramar el proceso productivo es posible identificar las materias primas y productos que tienen relación o inciden en la generación de residuos peligros.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.  
            span
              |  Actividades  y residuos generados. Mecánica automotriz
          .tabla-a.color-acento-contenido.mb-5
            table
              caption Fuente: Tomado de Gonzáles y Gómez,  (2010)
              thead
                tr.text-center
                  th Actividades de mantenimiento
                  th Residuos generados
              tbody.text-center
                tr.gris
                  td Cambio de aceites y filtros.	
                  td Aceite quemado, filtros usados, trapos y estopas
                tr
                  td Lubricación
                  td Lubricantes usados, trapos y estopas
                tr.gris
                  td Cambio de frenos
                  td Pastas, bandas, trapos y estopas
                tr
                  td Sincronización
                  td No hay generación de RESPEL

                tr.gris
                  td Suspensión y dirección
                  td Trapos y estopas, grasa

                tr
                  td Cambio de llantas
                  td Llantas usadas, trapos y estopas

      p.mb-5 Al tomar cada actividad realizada por separado, se pueden analizar más eficazmente los residuos generados en cada una de ellas.
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 6. 
            span
              |  Plano físico de la empresa. Sector salud
          img(src="@/assets/curso/temas/tema1/img12.svg", alt="En el plano se organizan los diferentes lugares del hospital y se señalan con rojos aquellos donde se generan residuos según la actividad que se realice.")
          figcaption Fuente: Tomado de CCB - SDA (2006)
      .py-3
      m.b-3 Al realizar un plano de la organización se pueden identificar los puntos donde se generan los residuos peligrosos.

      separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.4 Clasificación e identificación de características de peligrosidad

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-3.col-sm-5.col-6.my-2
          img(src="@/assets/curso/temas/tema1/img13.png")
        .col-lg-9.col-sm-6.col-9
          SlyderF.mb-5(columnas="col-lg-5 col-xl-5")(data-aos="zoom-in-left")
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/ico1.png')
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Corrosivo
                .py-2
                  p.text-center Son sustancias y preparados que, en contacto con tejidos vivos pueden ejercer una acción destructiva de los mismos.
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-5.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/ico2.png')
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Explosivo
                .py-2
                  p.text-center Las sustancias y preparados que, incluso en ausencia de oxígeno del aire, puedan reaccionar de forma exotérmica.
              
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-5.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/ico3.png')
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Inflamable
                .py-2
                  p.text-center Son aquellas sustancia o productos que tienen la capacidad de entrar en combustión, es decir de arder.
              
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-5.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/ico4.png')
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Comburente
                .py-2
                  p.text-center Son sustancias y preparados que, en contacto con otras sustancias, en especial con sustancias inflamables, produzcan una reacción fuertemente exotérmica.
              
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-5.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/ico5.png')
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Irritante
                .py-2
                  p.text-center Son aquellas sustancias o preparados no corrosivos que, por contacto inmediato, prolongado o repetido con la piel o mucosas, pueden provocar una reacción inflamatoria.
              
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-5.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/ico6.png')
                
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Tóxico
                .py-2
                  p.text-center Las sustancias y preparados que, por inhalación' ingestión o penetración cutánea en pequeñas cantidades puedan provocar efectos agudos o crónicos e incluso la muerte.
              
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-5.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/ico7.png')
                
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Cancerigenos, mutágenos y teratógenos

                .py-2
                  p.text-center Las sustancias y preparados que, por inhalación, ingestión o penetración cutánea, puedan producir cáncer o aumentar su frecuencia.
              
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-5.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/ico8.png')
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Peligrosos para el medio ambiente

                .py-2
                  p.text-center El contacto de esa sustancia con el medio ambiente puede provocar daños al ecosistema a corto o largo plazo. 
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 7. 
            span
              |   Clasificación e identificación de características de peligrosidad
          img(src="@/assets/curso/temas/tema1/img14.svg", alt="en el diagrama se presentan las herramientas de apoyo para identificar características de peligrosidad: Listas de residuos, balance de masa, hojas de seguridad y caracterización analítica.")
      .py-3  
      .color-primario.p-4
        .row.justify-content-center.align-items-center.p-3
          .col-lg-12.col-12
           .bgimg2.p-4
              SlyderA(tipo="b").p-3
                .row.justify-content-center.p-1
                  .col-lg-7.col-12
                    h5.mb-3 Listas de residuos
                    p Las listas de residuos son una herramienta valiosa para identificar si un residuo es peligroso o no. En el Anexo I y II del Decreto 4741 de 2005 se encuentran los listados de los residuos peligroso con su respectivo código. 
                    p Ejemplo: en una fábrica de pintura se generan envases con trazas de barniz, de acuerdo con el Anexo 1 estaría clasificado como: 
                    p Y12 Desechos resultantes de la producción, preparación y utilización de tintas, colorantes, pigmentos, pinturas, lacas o barnices.
                  .col-lg-5
                    img(src="@/assets/curso/temas/tema1/img14.png")

                .row.justify-content-center.p-1
                  .col-lg-12
                    h5.mb-3 Balance de masa
                    p Teniendo como principio que las entradas en un proceso me van a generar unos productos y residuos, si se identifica en un balance de masas que residuos se tienen, se pueden consultar las listas de residuos peligrosos y verificar la peligrosidad de estos.
                  .col-lg-7
                    .titulo-sexto.color-acento-contenido
                      h5 Figura 8.
                      span
                        |  Ingresos para un balance de masa
                    img(src="@/assets/curso/temas/tema1/img15.png", alt="en el diagrama se presentan las entradas (materias primas, reactivos químicos, agua, aire y otros insumos) y las salidas (residuos sólidos o semi-sólidos, aguas residuales, emisiones gaseosas, no identificados, productos y subproductos) en una planta, proceso u operación.")
                    figcaption Fuente: Estrucplan, 2006

                .row.justify-content-center.p-1
                  .col-lg-7
                    h5.mb-3 Hojas de seguridad
                    p Las hojas de seguridad identifican que característica de peligrosidad contiene la sustancia y de esta forma la podemos identificar y clasificar.
                  .col-lg-5
                    img(src="@/assets/curso/temas/tema1/img16.png")

                .row.justify-content-center.p-1
                  .col-lg-7
                    h5.mb-3 Caracterización analítica 
                    p La caracterización analítica ayuda a determinar las características de peligrosidad de una sustancia. 
                  .col-lg-5
                    img(src="@/assets/curso/temas/tema1/img17.png")
      .py-2             
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          .cajon.color-primario1.p-4.mb-4
            .h5  Resolución 0063 de 2024 
            p Por la cual se adoptan los métodos de muestreo y ensayo para determinar las caracteristicas de peligrosidad en los residuos, se establecen otras disposiciones. 
      
      separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.5 Cuantificación de la generación
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
            h3.bg13.py-2.w-card-text Cuantificar los residuos generados en kilogramos

      p.mb-5 Para realizar este proceso, se debe escoger el instrumento de preferencia, lo importante es garantizar que siempre este calibrado, cabe resaltar que para manipular los residuos peligrosos se deben utilizar los elementos de protección personal, los cuales se especifican en las hojas de seguridad y son suministrados juntos con las instrucciones del área de seguridad y salud en el trabajo. 
    
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span
            | Proceso de cuantificación
        img(src="@/assets/curso/temas/tema1/img18.png")
      .py-4
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
            h3.bg13.py-2.w-card-text Llevar registros mensuales sobre la cantidad generada 

      .py-3
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Tabla 2.  
            span
              |  Categoría de generadores de RESPEL
          .tabla-a.color-acento-contenido.mb-5
            table
              thead
                tr.text-center
                  th Categoría
                  th Generación de residuos o derechos peligrosos*
              tbody.text-center
                tr.gris
                  td Gran generador
                  td ≥ 1000 kg/mes RESPEL generados
                tr
                  td Mediano generador
                  td ≥ 100 kg/mes RESPEL generados < 1000 kg/mes
                tr.gris
                  td Pequeño generador
                  td ≥ 10 kg/mes RESPEL generados < 100 kg/mes
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9
          .row.align-items-center.justify-content-center.mb-4
            .col-lg-12.col-md-12.col-12
              .tarjeta--container.row
                .col-md.tarjeta.color-acento-contenido.d-none.d-lg-block
                  .row.justify-content-center.align-items-center
                    .col-11
                      figure
                        img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img19.png', alt='tema1')
                .col-md.tarjeta.color-adicional.p-0
                  .row.align-items-center.mb-2.p-4
                    .col-lg-12
                      ul.lista-ul--color
                        li
                          i.fas.fa-biohazard
                          | Promedio ponderado y media móvil de los últimos seis meses de las cantidades pesadas. 
                        li
                          i.fas.fa-biohazard
                          | Facilita al generador clasificarse en las categorías establecidas por el Decreto 4741 de 2005.
                        li
                          i.fas.fa-biohazard
                          | Ayuda a monitorear el cumplimiento de los objetivos y metas. 
        .col-lg-3.col-8
          img(src='@/assets/curso/temas/tema1/img20.png', alt='tema1')     
      
      .row.justify-content-start.mb-4
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            h3.bg131.py-2.w-card-text Cálculo del promedio y media móvil

      .py-3
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 3.
            span
              |  Categoría de generadores de RESPEL
          .tabla-a.color-acento-contenido.mb-5
            table
              thead
                tr.text-center
                  th Mes 
                  th Envases con barniz (kg/mes)
                  th Aceite usado (kg/mes)
                  th Total RESPEL (kg/mes)

              tbody.text-center
                tr.gris
                  td Enero
                  td 120
                  td 560
                  td 680
                tr
                  td Febrero
                  td 115
                  td 320
                  td 435
                tr.gris
                  td Marzo
                  td 105
                  td 415
                  td 520
                tr
                  td Abril
                  td 125
                  td 261
                  td 386
                tr.gris
                  td Mayo
                  td 210
                  td 604
                  td 814
                tr
                  td Junio
                  td 120
                  td 560
                  td 680
                tr.gris
                  td Julio
                  td 125
                  td 452
                  td 577
                tr
                  td Agosto
                  td 120
                  td 560
                  td 680
                tr.gris
                  td Septiembre
                  td 108
                  td 694
                  td 802
                tr
                  td Octubre
                  td 215
                  td 613
                  td 828
                tr.gris
                  td Noviembre
                  td 204
                  td 471
                  td 675
                tr
                  td Diciembre
                  td 136
                  td 521
                  td 657
            figcaption caption Total RESPEL generados en el año 7514 kg

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
         img(src='@/assets/curso/temas/tema1/img21.svg', alt='tema1') 
    
      .py-3
      .row.justify-content-center.align-items-center
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Tabla 4.  
            span
              |  Cuantificación RESPEL
          .tabla-a.color-acento-contenido.mb-5
            table
              thead
                tr.text-center
                  th Mes 
                  th Total RESPEL (kg/mes)
                  th Media móvil (kg/mes)
              tbody.text-center
                tr.gris
                  td Enero
                  td 680
                  td -
                tr
                  td Febrero
                  td 435
                  td -
                tr.gris
                  td Marzo
                  td 520
                  td -
                tr
                  td Abril
                  td 386
                  td -
                tr.gris
                  td Mayo
                  td 814
                  td -
                tr
                  td Junio
                  td 577
                  td -
                tr.gris
                  td Julio
                  td 438
                  td 528,83
                tr
                  td Agosto
                  td 802
                  td 589,50
                tr.gris
                  td Septiembre
                  td 702
                  td 619,83
                tr
                  td Octubre
                  td 828
                  td 693,50
                tr.gris
                  td Noviembre
                  td 675
                  td 670,33
                tr
                  td Diciembre
                  td 657
                  td 683,66    
      
      .row.justify-content-center.align-items-center
        .col-lg-6
          img(src='@/assets/curso/temas/tema1/img22.svg', alt='tema1') 
                

      separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.6 Alternativas de prevención y minimización.

      p.mb-5 Prevenir es tratar de evitar la generación de residuos peligrosos, a través de alternativas como la sustitución de las materias primas y una producción más limpia. Por su parte, minimizar es disminuir la generación de residuos a través de prácticas como reducir, recuperar, reusar, reciclar. En la siguiente figura se diagraman ambas definiciones: 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 10. 
            span
              |  Alternativas.
          img(src='@/assets/curso/temas/tema1/img23.svg', alt='El diagrama consta de dos líneas de flujo donde se definen las palabras prevenir y Minimizar: Prevenir es tratar de evitar la generación de residuos peligrosos, a través de alternativas como la sustitución de materias primas peligrosas y una producción más limpia. Minimizar es disminuir la generación de residuos a través de practicas como reducir, recuperar, reusar y reciclar.') 
          .py-2
          p.mb-5 Al realizar algunas modificaciones en diferentes etapas del proceso productivo, es posible prevenir y minimizar el riesgo de los residuos peligrosos sobre la salud y el medio ambiente. A continuación se ejemplifican varias modificaciones:


      .row.mb-5
        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario11(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img25.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                h4.text-center.bg13.p-2 Equipos
                p.text-center Cambio a equipos más eficientes. 
                p.text-center Mejoramiento de la eficiencia de equipos a través de revisiones o con la ayuda de accesorios o equipos auxiliares.
 

        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario11(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img26.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                h4.text-center.bg13.p-2 Materias primas
                p.text-center Cambio a materias primas e insumos menos peligrosos. 
                p.text-center Estudiar alternativas de rehusó y ahorro de materias primas. 

        .col-sm-6.col-xl-4.mb-4.mb-sm-0
          .tarjeta.tarjeta-flip.color-primario11(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img24.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                h4.text-center.bg13.p-2 Procesos
                p.text-center Mejorar las prácticas operacionales. 
                p.text-center Modificación de procesos para recuperación de materiales.

</template>
