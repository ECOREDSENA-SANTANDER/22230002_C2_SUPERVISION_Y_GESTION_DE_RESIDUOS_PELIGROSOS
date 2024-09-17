<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo interno de los residuos sólidos peligrosos

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-1.col-4.py-2.col-sm-3
        img(src='@/assets/curso/temas/tema2/barril.png', alt='')
      .col-lg-11 
        p El manejo interno de residuos sólidos peligrosos se refiere a las prácticas y procedimientos implementados dentro de una organización para gestionar adecuadamente estos residuos desde su generación hasta su disposición final. Es recomendable que se documenten todos los procedimientos relacionados con el manejo interno de los Residuos peligrosos teniendo en cuenta la normatividad vigente.

      separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 2.1 Procedimiento

      .row.justify-content-center.align-items-center.mb-2
        .col-lg-5
          .titulo-sexto.color-acento-contenido
            h5 Figura 11. 
            span
              | Procedimiento manejo interno residuos peligrosos

      .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
        .col-lg-12
          ImagenInfografica
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/infografia.svg', alt='')

            .tarjeta.color-primario.p-3(x="38%" y="52%" numero="+")
              .h5.mb-2.text-center Medidas de entrega al transportador

            .tarjeta.color-primario.p-3(x="44%" y="72%" numero="+")
              .h5.mb-2.text-center Almacenamiento

            .tarjeta.color-primario.p-3(x="55%" y="71%" numero="+")
              .h5.mb-2.text-center Acondicionamiento de los residuos  

            .tarjeta.color-primario.p-3(x="61%" y="51%" numero="+")
              .h5.mb-2.text-center Movilización interna

            .tarjeta.color-primario.p-3(x="55%" y="28%" numero="+")
              .h5.mb-2.text-center Recolección en el punto de generación
              
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
            h3.bg13.py-2.w-card-text Objetivos y metas 

      p.mb-5 Los objetivos y metas deben estar orientados a:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.py-2
          img(src="@/assets/curso/temas/tema2/img01.png")
        .col-lg-6
          .row.bg5.p-2
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span 1
              | Mejorar condiciones de almacenamiento de los residuos.
          
          .row.bg6.p-2
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span 2
              | Reducir costos por fugas o derrames de residuos.

          .row.bg7.p-2
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span 3
              | Cumplir con la normatividad en salud ocupacional y seguridad industrial.

          .row.bg8.p-2.my-2
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span 4
              | Disminuir riesgos de exposición de los trabajadores que manejan residuos.
      
      separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 2.2 Aspectos para tener en cuenta

      p.mb-5 Para el adecuado manejo interno de los residuos peligros se pueden considerar varios aspectos para tener en cuenta: 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 12. 
            span
              |  Manejo interno de residuos peligrosos. Aspectos 
          img(src="@/assets/curso/temas/tema2/img02.svg",alt="en la figuran se presentan los siguientes aspectos: Acondicionamiento, rotulado y etiquetado, movilización interna, almacenamiento.")

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
            h3.bg13.py-2.w-card-text Acondicionamiento

      p.mb-5 Para realizar el envasado, embalado o alistamiento de los residuos peligrosos debe hacerse una correcta y segura manipulación de estos. A continuación, se revisarán condiciones de manipulación:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.bg9.p-4
          ul.lista-ul--color
            li
              i.fas.fa-biohazard
              | Se debe conocer y manejar la información de las hojas de seguridad relacionada con las condiciones de manipulación, almacenamiento y disposición. Esta información debe relacionarse con las características químicas de los residuos.

            li
              i.fas.fa-biohazard
              | En la manipulación de residuos peligrosos se debe mantener de manera constante el uso de elementos de protección personal por parte del personal encargado. Esto incluye pesaje, manipulación, transvasado, embalado, carga y transporte dentro y fuera del lugar de almacenamiento.

            li
              i.fas.fa-biohazard
              | Entre los elementos de protección personal se debe contar con: protección ocular, guantes resistentes a químicos, botas o cubiertas resistentes a químicos, máscaras con purificadores, traje de protección.
 
            li
              i.fas.fa-biohazard
              | Se debe mantener continuamente capacitado el personal para que realice una operación segura y correcta de los residuos peligrosos.
        .col-lg-3.col-8
          img(src="@/assets/curso/temas/tema2/img03.png")

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.col-8
          img(src="@/assets/curso/temas/tema2/img04.png")
        .col-lg-8.bg9.p-4
          ul.lista-ul--color
            li
              i.fas.fa-biohazard
              | Las personas que manipulen residuos peligrosos deben lavarse y cambiarse de indumentaria antes de ingerir alimentos.
            li
              i.fas.fa-biohazard
              | El personal debe ser capaz de identificar los riesgos relacionados con la manipulación, almacenamiento y transporte de los residuos.
            li
              i.fas.fa-biohazard
              | Se debe mantener etiquetados los residuos peligrosos en el almacén.
            li
              i.fas.fa-biohazard
              | Los contenedores a los que aplique deben permanecer herméticamente cerrados.
            li
              i.fas.fa-biohazard
              | Los contenedores de los residuos peligrosos deben ser continuamente inspeccionados para verificar el límite de su capacidad.
            li
              i.fas.fa-biohazard
              | En caso de sucederse un derrame de residuos peligrosos se debe airear el áreay contener la expansión del derrame a través de la construcción manual de un dique.
            li
              i.fas.fa-biohazard    
              | En caso de derrames pequeños o goteos se debe colocar recipientes para recolectar el residuo.

      .py-3
        .col-sm-12.col-lg-7
          .d-flex
            h3.bg131.py-2.w-card-text1 Envasado de los residuos peligrosos
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-11
          .row.align-items-center.justify-content-center.mb-4
            .col-lg-12.col-md-12.col-12
              .tarjeta--container.row
                .col-md.tarjeta.color-acento-contenido.d-none.d-lg-block.col-lg-4
                  .row.justify-content-center.align-items-center
                    .col-11
                      figure
                        img.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img05.png', alt='tema1')
                .col-md.tarjeta.color-adicional.p-0
                  .row.align-items-center.mb-2.p-4
                    .col-lg-12
                      p.mb-5 Los residuos peligrosos deben depositarse en contenedores apropiados según el estado físico, características de peligrosidad, el volumen generado y compatibilidad con otros residuos, estos envases deben cumplir con:
                      ul.lista-ul--color
                        li
                          i.fas.fa-biohazard
                          | El material del contenedor debe ser compatible con el residuo, para conocerlo debe revisarse con cuidado la hoja de seguridad. 
                        li
                          i.fas.fa-biohazard
                          | Debe tener durabilidad, resistencia a golpes y a manipulación.
                        li
                          i.fas.fa-biohazard
                          | Los contenedores no deben originar pérdidas al ser manipulados.
                        li
                          i.fas.fa-biohazard
                          | El espesor del material del contenedor debe soportar la manipulación, el traslado y no representar riesgo de filtraciones.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
            h3.bg13.py-2.w-card-text Acondicionamiento

      p.mb-5 Según el #[b Decreto 1609 de 2002], los envases y embalajes deben estar rotulados y etiquetados según la#[b Norma Técnica Colombiana NTC 1692]. Los residuos no se deben identificar en el momento en que el gestor hace el retiro de ellos.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .cajon.bg3.p-4.mb-4
            .bg4.p-4
              ul.lista-ul--color
                li
                  i.fas.fa-biohazard
                  | Se deben utilizar etiquetas de riesgo en envases y embalajes: identificación del residuo, datos del generador, código de identificación del residuo y riesgos que representa el residuo.
                li
                  i.fas.fa-biohazard
                  | Tamaño de la etiqueta 10 x 10 cm y estar fijada sobre el envase o el contenedor.

                li
                  i.fas.fa-biohazard
                  | Los envases y embalajes deben estar rotulados y etiquetados de forma clara, legible e indeleble.

                li
                  i.fas.fa-biohazard
                  | El etiquetado debe identificar el residuo, tipo de peligro, alertar el manejo, transporte, las medidas de precaución y prohibiciones.
        .col-lg-4.col-8
          img(src="@/assets/curso/temas/tema2/img06.png")
      p.mb-5 El Ministerio de Transporte adoptó el documento #[b “Recomendaciones relativas al Transporte de Mercancías Peligrosas”] de la ONU para el transporte de mercancías y residuos peligrosos. Allí se presenta un listado con la clasificación de riesgos dividida en 9 grupos y los modelos de símbolos o pictogramas de las etiquetas de riesgo con las que se identifican los envases.


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
            h3.bg13.py-2.w-card-text Movilización interna
      p.mb-3 Como lo indica la Universidad Pontificia Bolivariana (2008) se deben tener en cuenta las siguientes recomendaciones:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.py-2.col-sm-8
          img(src="@/assets/curso/temas/tema2/img07.png")
        .col-lg-7.p-4
          .row.bg2.p-4
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span 1
              | Se deben diseñar rutas de recolección interna de los residuos según distribución de los puntos de generación y cubrir la totalidad de la organización.
              li
              .lista-ol--cuadro__vineta
                span 2
              | Las rutas se deben establecer haciendo uso de los planos de la edificación.
              li
              .lista-ol--cuadro__vineta
                span 3
              | Se deben establecer zonas de desplazamiento para permitir la recolección de los residuos peligrosos bien sea de forma manual, con transpaletas o con montacargas.
              li
              .lista-ol--cuadro__vineta
                span 4
              | La frecuencia de recolección interna dependerá de la capacidad del almacenamiento, el tipo de residuo generado y la frecuencia de recolección de la empresa gestora contratada.
              li
              .lista-ol--cuadro__vineta
                span 5
              | Se deben establecer horarios y frecuencias de recolección en donde se pueda identificar en cada punto el número y capacidad de los recipientes donde se ubiquen los residuos y el tipo de residuo generado según el rótulo de los contenedores.
              li
              .lista-ol--cuadro__vineta
                span 6
              | Se debe emplear siempre elementos de protección personal (EPP) para la recolección de los residuos peligrosos, estos deben ser de uso exclusivo para este fin.





      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido
              h5 Figura 13.
              span
                |  Mapa de rutas internas de recolección de residuos
          img(src="@/assets/curso/temas/tema2/img08.png", alt="Texto alternativo: en la imagen se presenta un plano de una planta, donde se enumeran los espacios y se señalan las rutas de recolección de diferentes residuos. ")
          figcaption Fuente: Tomado de Universidad Pontificia Bolivariana (2008)

          
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .color-adicional1
        .col-lg-12
          .row.align-items-center.justify-content-center
            .col-lg-12.col-md-12.col-12
              .tarjeta--container.row
                .col-md.tarjeta.d-none.d-lg-block.col-lg-5
                  .row.justify-content-center.align-items-center
                    .col-12
                      figure
                        img.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img09.png', alt='tema1')
                .col-md.tarjeta.color-adicional1
                  .row.align-items-center.p-4
                    .col-lg-12
                      p La movilización está relacionada con el traslado de los residuos desde el punto de generación al lugar de almacenamiento temporal antes de entregarse a la entidad externas para su manejo. 
                      p En el plan se deben describir las actividades a realizarse para transportar dentro de la organización los residuos, incluyendo:
                      ul.lista-ul--color
                        li
                          i.fas.fa-biohazard
                          | Frecuencias y horarios de recolección.
                        li
                          i.fas.fa-biohazard
                          | Rutas de circulación.
                        li
                          i.fas.fa-biohazard
                          | Medios o equipos de carga y movilización.
      .py-3
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
            h3.bg13.py-2.w-card-text Almacenamiento
      p.mb-3 Para almacenar temporalmente los residuos peligrosos, la organización debe realizar un acondicionamiento. El acondicionamiento es la preparación de un área de la organización para almacenar temporalmente los residuos peligrosos generados dentro de ella, antes de ser entregado al gestor externo. El lugar acondicionado debe cumplir con condiciones que garanticen seguridad y disminuyan el riesgo durante el almacenamiento.

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-3
          .tarjeta.bgimg3.p-4
            .row.justify-content-center
              .col-sm-.col-lg-6.my-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema2/img10.png')
              .row.justify-content-center
                .col-lg-12.p-1
                  p.text-center Toda organización que genere residuos peligrosos debe disponer de un sitio de almacenamiento temporal para los mismos.
          .py-2
        .col-lg-3  
          .tarjeta.bgimg3.p-4
            .row.justify-content-center
              .col-sm-.col-lg-6.my-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema2/img11.png')
              .row.justify-content-center
                .col-lg-12.p-1
                  p.text-center Toda organización que genere residuos peligrosos debe disponer de un sitio de almacenamiento temporal para los mismos.
          .py-2
        .col-lg-3
          .tarjeta.bgimg3.p-4
            .row.justify-content-center
              .col-sm-.col-lg-6.my-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema2/img12.png')
              .row.justify-content-center
                .col-lg-12.p-1
                  p.text-center Toda organización que genere residuos peligrosos debe disponer de un sitio de almacenamiento temporal para los mismos.
                .py-2
          .py-2
        .col-lg-3 
          .tarjeta.bgimg3.p-4
            .row.justify-content-center
              .col-sm-.col-lg-6.my-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema2/img13.png')
              .row.justify-content-center
                .col-lg-12.p-1
                  p.text-center Toda organización que genere residuos peligrosos debe disponer de un sitio de almacenamiento temporal para los mismos.                                    
      
      h5.mb-5 Según Álvarez (s.f.) el almacén debe: 
    
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/temas/tema2/img14.png')
        .col-lg-7
          ul.lista-ul--color
            li
              i.fas.fa-biohazard
              | Tener tantos espacios delimitados como fuera necesario para cada tipo de residuo. 
            li
              i.fas.fa-biohazard
              | Los espacios delimitados deben estar identificados claramente.              
            li
              i.fas.fa-biohazard
              | La delimitación de los espacios se podrá realizar a través de demarcaciones simples en el suelo del almacén o depósito. 
            li
              i.fas.fa-biohazard
              | En el caso de paredes divisorias, estas deberán ser removibles y de material resistente, liso, impermeable y fácil de limpiar. 
            li
              i.fas.fa-biohazard
              | La colocación de los divisores no puede interferir ni con el drenaje del agua del lavado del piso ni con la iluminación natural. 
      
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 14.
            span
              |  Almacenamiento
          img(src='@/assets/curso/temas/tema2/img15.png', alt="En la figura se detallan todos los elementos que deben existir en una zona de almacenamiento de residuos peligrosos, se señalan elementos como puertas, iluminación, puntos de agua, ventilación, área de higienización, entre otras. ")

      .py-3
        .col-sm-12.col-lg-7
          .d-flex
            h3.bg131.py-2.w-card-text1 Envasado de los residuos peligrosos

      p.mb-5 Para el Ministerio de Ambiente, Vivienda y Desarrollo Territorial (s.f.) el almacén para el depósito de los residuos peligrosos debe contar con:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9.bg10.p-4
          ul.lista-ul--color
            li
              i.fas.fa-biohazard
              | Debe estar ubicado en un lugar de fácil acceso para facilitar el transporte de los residuos peligrosos.

            li
              i.fas.fa-biohazard
              | El piso debe ser libre de grietas y resistente a los residuos que se almacenen.

            li
              i.fas.fa-biohazard
              | Debe tener un dique o muro de contención para proteger en caso de derrames.

            li
              i.fas.fa-biohazard
              | Debe poseer señalización de acuerdo con los residuos almacenados.

            li
              i.fas.fa-biohazard
              | El lugar debe mantenerse limpio y organizado.
            li
              i.fas.fa-biohazard
              | Debe tener accesible la matriz de compatibilidad de residuos peligrosos para poder ubicarlos de forma segura.
            li
              i.fas.fa-biohazard
              | Los residuos se deben ubicar cuidadosamente para evitar roturas, derrames e incidentes según características de peligrosidad y compatibilidad.
            li
              i.fas.fa-biohazard
              | Los residuos almacenados se debe agrupar según riesgos comunes y mantener alejados los incompatibles.
            li
              i.fas.fa-biohazard
              | Se deben aislar los residuos con características especiales como los que son tóxicos, cancerígenos o explosivos.
            li
              i.fas.fa-biohazard
              | Se debe registrar la entrada al depósito en una planilla de ingreso (fecha, peso, nombre, etc.)
            li
              i.fas.fa-biohazard
              | Debe ubicarse un extintor cerca del depósito.

        .col-lg-3.col-8
          img(src='@/assets/curso/temas/tema2/img16.png')

      .mb-5 El depósito de residuos peligrosos debe incluir Ecomapa junto con las rutas de recolección de los residuos. Estas rutas deben definirse, demarcarse, socializarse y saberse interpretar.

      .row.justify-content-center.align-items-center.mb-2
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 15. 
            span
              | Ecomapa
          img(src='@/assets/curso/temas/tema2/img17.png', alt="En el plano se presentan las diferentes áreas de una empresa, y algunas de ellas señaladas por ser lugares donde se producen residuos sólidos, adicionalmente se señalan las rutas y puntos de almacenamiento.")
          figcaption Fuente: Tomado de Bipotet (2009)

      .py-2
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-12
          .row.align-items-center.justify-content-center.mb-4
            .col-lg-12.col-md-12.col-12
              .tarjeta--container.row
                .col-md.tarjeta.color-acento-contenido.d-none.d-lg-block.col-lg-4
                  .row.justify-content-center.align-items-center
                    .col-11
                      figure
                        img.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img18.png', alt='tema1')
                .col-md.tarjeta.color-adicional.p-0
                  .row.align-items-center.mb-2.p-4
                    .col-lg-12
                      h5.bg13.p-3 Qué documentar sobre el manejo interno de los residuos peligrosos:
                      ul.lista-ul--color
                        li
                          i.fas.fa-biohazard
                          | Las condiciones técnicas y de manipulación en el sitio de almacenamiento de los residuos peligrosos.
                        li
                          i.fas.fa-biohazard
                          | El tipo de residuos y cantidades que se generan y se encuentran almacenados.
                        li
                          i.fas.fa-biohazard
                          | Fecha de ingreso y egreso al sitio de almacenamiento de cada tipo de residuo peligroso.
                        li
                          i.fas.fa-biohazard
                          | Las medidas ambientales que se deben mantener para llevar a cabo el almacenamiento de los residuos peligrosos.

                        li
                          i.fas.fa-biohazard
                          | Los responsables y las funciones relacionadas con el manejo de los residuos peligrosos.

                        li
                          i.fas.fa-biohazard
                          | Detalle de las actividades relacionadas con el manejo de los residuos peligrosos en cada uno de los cargos. 


      separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 2.3 Contingencias en manejo de residuos peligrosos

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/temas/tema2/img19.png', alt='tema1')
        .col-lg-7
          p Como definición de contingencia se tienen que es un acontecimiento que no está previsto, pero tiene posibilidad de ocurrencia. Teniendo claro este concepto, se puede decir que el Plan de contingencia en el manejo de RESPEL es un plan preventivo que permite mitigar, controlar y responder ante posibles situaciones originadas por el manejo de los residuos peligrosos.
          .cajon.bg6.p-4.mb-4
            p A través del plan de contingencia se proponen procedimientos o alternativas cuando las funciones usuales de una organización se pueden ver perjudicada por una contingencia interna o externa.

      .row.justify-content-center.align-items-center.mb-2
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 16.
            span
              |  Plan de contingencia
          img(src='@/assets/curso/temas/tema2/img20.png', alt='en el diagrama se mencionan procedimientos en un ciclo: Análisis de riesgos, estrategias de recuperación, desarrollo de estrategias, desarrollo de procedimientos, pruebas y entrenamiento y plan de mantenimiento.')
          figcaption Fuente: Tomado de Pereira (2006)

      .py-2
      p.mb-5 Para elaborar el Plan de Contingencia deben seguirse los lineamientos del Decreto 1868 de 2021, por el cual se adopta el Plan Nacional de Contingencia frente a pérdidas de contención de hidrocarburos y otras sustancias peligrosas.

      h5 El plan de contingencia debe contemplarse a través de dos ejes: 
      
      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Plan estratégico")
          .row.justify-content-center.align-items-center
            .col-md-5.p-4.col-8
              figure
                img(src='@/assets/curso/temas/tema2/img21.png', alt='tema1')
            .col-md-6.mb-4.mb-md-0
              p Debe determinar la estructura, los recursos y las estrategias preventivas propuestas por la organización para la atención de una emergencia relacionada con los residuos peligrosos. Su claridad definirá el alcance del plan. 
          
            
    
        .py-3.py-md-4(titulo="El plan de acción")
          .row.justify-content-center.align-items-center
            .col-md-10.mb-4.mb-md-0
              p establece los procedimientos que se deben llevar a cabo en caso de una emergencia.
              .titulo-sexto.color-acento-contenido
                h5 Figura 11. 
                span
                  | Procedimiento manejo interno residuos peligrosos
              img(src='@/assets/curso/temas/tema2/img22.png', alt='En el diagrama se detallan los elementos de un plan de acción: -Estrategias operativas: plantea acciones a aplicar en caso de ocurrir una contingencia por manipulación, movilización o almacenamiento de residuos peligrosos. -Análisis de riesgos: identifica y evalúa cuáles son los eventos o condiciones que pueden ocasionar una emergencia. -Identificación de peligros y amenazas: el peligro es una situación con potencial de daño, enfermedad, lesiones, daños en edificaciones, ambientes de trabajo y medio ambiente.  la amenaza es la probabilidad de que un fenómeno natural o humano pueda causar daño y generar perdidas.')
  
      .py-4
      .row.justify-content-center
        .col-lg-12
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img23.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 En el plan de acción la organización puede hacer uso de una herramienta informática para realizar el análisis correspondiente y establecerlo a través de una matriz de análisis. Los aspectos que se pueden tener en cuenta son:
              p.mb-0 Derrame de residuos peligrosos, incendios, explosiones, sismos, interrupción de servicios de agua y energía, aumento o acumulación de residuos, incompatibilidad en el almacenamiento de los residuos, separación inadecuada, no recolección de los residuos por parte de la empresa gestora, dificultades en el tratamiento térmico de los residuos, accidentes laborales, etc. 
        .col-lg-8
          
          .cajon.bg6.p-4.mb-4
            h5 Los derrames de residuos peligrosos un evento de incidencia
            p En caso de presentarse un derrame de residuos peligrosos, el plan de contingencia que se plantee debe seguir los lineamientos establecidos en el Decreto 321 de 1999 por el que se adopta el Plan Nacional de Contingencia contra Derrames de Hidrocarburos, Derivados y Sustancias Nocivas.
      
      .py-3
        .col-sm-12.col-lg-7
          .d-flex
            h3.bg131.py-2.w-card-text1 Medidas en caso de derrames de residuos peligrosos



      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9.bg11.p-4
          ul.lista-ul--color
            li
              i.fas.fa-biohazard
              | Comunicar al encargado del plan de contingencias informando localización y otros detalles que se soliciten para tomar acciones oportunas.


            li
              i.fas.fa-biohazard
              | El piso debe ser libre de grietas y resistente a los residuos que se almacenen.

            li
              i.fas.fa-biohazard
              | Revisar las hojas de seguridad para tomar las medidas establecidas en ellas y disminuir los riesgos.

            li
              i.fas.fa-biohazard
              | Si es un derrame con potencial de incendio o explosión suspender actividades en el área de riesgo. 


            li
              i.fas.fa-biohazard
              | Señalar y demarcar el área donde ocurrió el incidente. 
            li
              i.fas.fa-biohazard
              | Si es posible construir manualmente un dique para rodear la zona del derrame. 
            li
              i.fas.fa-biohazard
              | Aislar y controlar la fuente del derrame y proteger los desagües. 
            li
              i.fas.fa-biohazard
              | Contener y cubrir con material absorbente apropiado, usar kit antiderrame, equipos, o maquinarias especializadas. 

            li
              i.fas.fa-biohazard
              | Asegurar la disponibilidad, estado y correcto uso de EPP como respirador multipropósito, gafas de seguridad, traje de protección y guantes de nitrilo. 

            li
              i.fas.fa-biohazard
              | Se debe registrar la entrada al depósito en una planilla de ingreso (fecha, peso, nombre, etc.)
            li
              i.fas.fa-biohazard
              | Contar con un sistema de lavado de ropa contaminada. 

            li
              i.fas.fa-biohazard
              | Solicitar apoyo externo en caso de no poder manejarse. 

        .col-lg-3.col-8.col-sm-6
          img(src='@/assets/curso/temas/tema2/img24.png')


</template>
