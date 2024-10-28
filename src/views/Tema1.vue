<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manejo externo

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-5.py-2.col-sm-11
        img(src='@/assets/curso/temas/tema1/img01.png', alt='')
      .col-lg-1.col-4.py-2.col-sm-2
        img(src='@/assets/curso/temas/tema1/img02.svg', alt='')
      .col-lg-6
        p El manejo externo de los residuos sólidos incluye todas las actividades que se realizan cuando éstos salen de la organización. 
        p Se debe identificar y describir en el Manejo Integral de Residuos la información de la empresa contratada y el tipo de manejo que reciben los residuos al exterior de la organización, en qué tipo de vehículo se recolectan, con qué frecuencia se hace, entre otra información asociada a esta actividad. 
        .cajon.color-primario.p-4.mb-4
          p Todos los generadores de residuos peligrosos deben conservar, hasta por un tiempo de cinco (5) años, las certificaciones de almacenamiento, aprovechamiento, valorización, tratamiento o disposición final de sus residuos, emitidos por los respectivos receptores.
       
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Objetivos y metas

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9
          .row.align-items-center.justify-content-center.mb-4
            .col-lg-12.col-md-12.col-12
              .tarjeta--container.row
                .col-md.tarjeta.color-acento-contenido.d-none.d-lg-block.col-lg-6
                  .row.justify-content-center.align-items-center
                    .col-11
                      figure
                        img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img03.svg', alt='tema1')
                .col-md.tarjeta.color-adicional.p-0
                  .row.align-items-center.mb-2.p-4
                    .col-lg-12
                      p Los objetivos y las metas en la gestión externa de RESPEL deben estar orientados a:
                      ul.lista-ul--color
                        li
                          i.fas.fa-biohazard
                          | Gestionar los RESPEL de forma ambientalmente segura, tendiendo como marco la normatividad ambiental vigente.

                        li
                          i.fas.fa-biohazard
                          | Garantizar que los gestores externos autorizados que disponen los RESPEL los hacen de acuerdo a la normatividad vigente. 
        .col-lg-3.col-8
          img(src='@/assets/curso/temas/tema1/img04.png', alt='tema1')     

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
          h3.bg13.py-2.w-card-text Transportadores de residuos peligrosos
          


    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-5.py-2.col-sm-12
        img(src='@/assets/curso/temas/tema1/img05.png', alt='')
      .col-lg-7
        .col-lg-2.col-4.py-4.col-sm-2
          img(src='@/assets/curso/temas/tema1/img06.svg', alt='')
        .col-lg-12
          p Según el Ministerio de Ambiente, Vivienda y Desarrollo Territorial (s.f.) para garantizar un transporte seguro de los residuos peligrosos, los vehículos deben cumplir con identificación y condiciones técnicas específicas. Quienes intervengan en la cadena de transporte de los residuos peligrosos tienen la responsabilidad conjunta de asegurar que estos requisitos se cumplan.
          p Para asegurarse que estas condiciones se cumplan es recomendable establecer y documentar un procedimiento de verificación del desempeño según lo establecido en la normatividad. Esto permitirá reconocer el estado de los vehículos y el cumplimiento de todos los requisitos establecidos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
          h3.bg13.py-2.w-card-text Condiciones que debe cumplir el transportador
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-sm-12
        TabsA.color-acento-botones
          .tarjeta.bg1.p-4(titulo="Rótulos de identificación")
            h4 Rótulos de identificación
            p Que permitan identificar que se transporta residuos peligrosos. Los rótulos deben ser conforme al sistema internacional de la ONU.
          .tarjeta.bg1.p-4(titulo="Placa de identificación de la ONU")
            h4 Placa de identificación de la ONU
            p Cuando se transporta más de una sustancia peligrosa en un mismo transporte, se debe fijar el número correspondiente a la sustancia peligrosa que presente mayor peligrosidad.
          .tarjeta.bg1.p-4(titulo="Equipos de carretera")
            h4 Equipos de carretera
            p Según lo dispuesto en el artículo 30 del Código Nacional de Tránsito Terrestre: gato, cruceta, triángulos, lámparas de señal, botiquín de primeros auxilios, dos extintores, tacos, caja de herramientas, llanta de repuesto, linterna.
          .tarjeta.bg1.p-4(titulo="Equipo de protección personal")
            h4 Equipo de protección personal para atención a emergencias
            p Que debe estar disponible para casos de contacto o inhalación de sustancias provenientes de residuos peligrosos. El personal debe estar capacitado y entrenado en su uso.
          .tarjeta.bg1.p-4(titulo="Equipo para la recolección y limpieza de derrames")
            h4 Equipo para la recolección y limpieza de derrames
            p Según el tipo de residuo peligroso transportado y debe estar disponible en caso de un derrame accidental. 

      .col-lg-3.col-sm-6.py-2.col-8
        img(src='@/assets/curso/temas/tema1/img07.svg', alt='')

    .py-3
    p Dentro de las obligaciones de los operarios de los vehículos transportadores de residuos peligrosos, se encuentra el manejo de ciertos documentos, los cuales se mencionan en la siguiente figura: 
    .row.justify-content-center.mb-4
      .col-sm-12.col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          span Documentación de manejo para el personal del vehículo
        
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-5
        ImagenInfografica
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/infografia.svg', alt=' En la imagen se presenta un vehículo etiquetado con pictogramas de residuos peligrosos y en el fondo un globo terráqueo, además se enuncian los diferentes documentos que deben manejar  los operadores del vehículo transportador.')
    
          .tarjeta.color-primario.p-3(x="10%" y="41%" numero="+")
            p.mb-2.text-center Instrucciones de operación segura de los equipos de protección personal.

          .tarjeta.color-primario.p-3(x="40%" y="26%" numero="+")
            p.mb-2.text-center Hojas de Seguridad para todos los residuos peligrosos.

          .tarjeta.color-primario.p-3(x="67%" y="30%" numero="+")
            p.mb-2.text-center Instrucciones y procedimientos de higiene, seguridad y medio ambiente.

          .tarjeta.color-primario.p-3(x="86%" y="51%" numero="+")
            p.mb-2.text-center Instrucciones y procedimientos sobre emergencias. 
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Responsabilidades para los generadores y el transportador

    .py-3  
      .color-primario.p-4
        .row.justify-content-center.align-items-center.p-3
          .col-lg-12.col-12
           .bgimg2.p-4
              SlyderA(tipo="b").p-3
                .row.justify-content-center.p-1
                  .col-lg-8.col-12
                    h5.mb-3 Según el Centro Coordinador del Convenio de Basilea para América Latina y el Caribe (2005) las responsabilidades para los transportadores son:
                    ul.lista-ul--color.line
                      li
                        i.fas.fa-biohazard
                        | Contar con la autorización para el transporte del tipo residuos peligrosos.

                      li
                        i.fas.fa-biohazard
                        | Identificación de los datos de la empresa (razón social, dirección y teléfono).

                      li
                        i.fas.fa-biohazard
                        | Rombos de peligro de acuerdo a las características de los residuos transportados.

                      li
                        i.fas.fa-biohazard
                        | Transportar sólo los residuos correctamente acondicionados, etiquetados y documentados.

                      li
                        i.fas.fa-biohazard
                        | Proteger la carga durante el transporte para minimizar riesgos.

                      li
                        i.fas.fa-biohazard
                        | Capacitar conductores.

                      li
                        i.fas.fa-biohazard
                        | Someter los vehículos a inspecciones técnicas periódicas.

                      li
                        i.fas.fa-biohazard
                        | Contar con equipo de comunicaciones.

                      li
                        i.fas.fa-biohazard
                        | Garantizar que las maniobras de carga y descarga se realicen por personal capacitado, con el equipo de protección personal adecuado y siguiendo protocolos establecidos.

                      li
                        i.fas.fa-biohazard
                        | Conocer los planes a seguir en caso de emergencias y contar con los elementos necesarios para su implementación.

                      li
                        i.fas.fa-biohazard
                        | Mantener estadísticas de accidentes e incidentes tanto de las unidades como del personal e implementar medidas de mejora continua.

                  .col-lg-4
                    img(src="@/assets/curso/temas/tema1/img08.png")
                
                .row.justify-content-center.p-1
                  .col-lg-8.col-12
                    h5.mb-3 Según el Centro Coordinador del Convenio de Basilea para América Latina y el Caribe (2005) las responsabilidades para los generadores son:
                    ul.lista-ul--color.line
                      li
                        i.fas.fa-biohazard
                        | Contratar un gestor autorizado por la autoridad ambiental competente.

                      li
                        i.fas.fa-biohazard
                        | Verificar que la empresa transportadora y gestora están debidamente autorizadas.

                      li
                        i.fas.fa-biohazard
                        | Acondicionar correctamente los residuos en contenedores adecuados, debidamente etiquetados, atendiendo los requerimientos de la hoja de seguridad, el transportador y del gestor.

                      li
                        i.fas.fa-biohazard
                        | Emitir la documentación con la información de los residuos a ser transportados. 

                      li
                        i.fas.fa-biohazard
                        | Proporcionar al transportista las hojas de seguridad de sus residuos peligrosos.

                      li
                        i.fas.fa-biohazard
                        | Verificar que la unidad de transporte cumpla con las especificaciones dispuestas en el Decreto 1609.

                      li
                        i.fas.fa-biohazard
                        | Verificar que la operación de carga sea realizada por operarios capacitados, provistos de equipamiento de protección personal.


                  .col-lg-4
                    img(src="@/assets/curso/temas/tema1/img09.png")
    .py-4
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
                        img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img10.png', alt='tema1')
                .col-md.tarjeta.color-adicional1
                  .row.align-items-center.p-4
                    .col-lg-12
                      .col-lg-4
                        h5.bg13.p-2.mb-4 Entrega al transportador 
                      
                      p El transportador debe cumplir con el decreto 1609 de 2002 “Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera”, y el remitente de los RESPEL, para garantizar ese cumplimiento, debe realizar una verificación.
                      p La herramienta más usada para verificar el cumplimiento del Decreto 1609 de 2002, es una lista de chequeo que relaciones los ítems que se deben cumplir, el remitente puede escoger la herramienta de su preferencia siempre y cuando se deje evidencia de la verificación.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Alternativas de manejo y disposición final de RESPEL

    p Algunos RESPEL pueden ser usados por otros procesos como materia prima o se puede aprovechar parcialmente algunas de sus partes, veamos algunos ejemplos:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-primario")
          .row(titulo="El aceite usado")
            .col-md-12.mb-4.mb-md-0
              p El aceite usado puede ser aprovechado como combustible industrial, se puede utilizar para hacer nuevas bases lubricantes o en el proceso de combustibles alternativos.

          div(titulo="Las baterías de plomo")
            .col-md-12.mb-4.mb-md-0
              p Las baterías de plomo ácido son desensambladas para recuperar el plomo y utilizarlo en la producción de nuevas baterías.
          
          div(titulo="Los tubos fluorescentes")
            .col-md-12.mb-4.mb-md-0
              p Los tubos fluorescentes usados son ingresados a un proceso industrial para recuperar el mercurio y reciclar sus partes.
          
          div(titulo="Los solventes")
            .col-md-12.mb-4.mb-md-0
              p Los solventes usados son ingresados a un proceso industrial para su recuperación. 
      .col-lg-3.col-sm-8.col-8
        img(src='@/assets/curso/temas/tema1/img11.png', alt='tema1')

    p En el siguiente recurso se presentan algunos de los tratamientos más usados:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Tratamiento térmico" :icono="require('@/assets/curso/temas/tema1/ico1.svg')")
            .row
              .col-md-4.mb-4.mb-md-0.col-9
                img(src='@/assets/curso/temas/tema1/img12.png', alt='tema1')
              .col-md-8
                h5 Tratamiento térmico
                p Las técnicas de tratamiento térmico de residuos se dividen en dos grandes categorías:
                ol.lista-ol--cuadro
                  li
                  .lista-ol--cuadro__vineta
                    span 1
                  | Los residuos se queman en presencia de oxígeno mediante la técnica de incineración.
                  li
                  .lista-ol--cuadro__vineta
                    span 2
                  | Los residuos se someten a altas temperaturas en ausencia o presencia mínima de oxígeno, de modo que no haya combustión directa. Para esto se utiliza la pirólisis (a veces denominada termólisis) y la gasificación.
                p La pirólisis se define como la degradación térmica de una sustancia en ausencia de oxígeno o con una cantidad limitada del mismo. Como resultado, se producirá durante la pirólisis cierta oxidación y se formarán, por tanto, dioxinas y otros productos relacionados con una combustión incompleta. La gasificación, se define como la transformación de una sustancia sólida o líquida en una mezcla gaseosa mediante oxidación parcial con aplicación de calor. La oxidación parcial se consigue normalmente restringiendo el nivel de oxígeno (o aire) en la cámara de postcombustión (pirólisis). El proceso se optimiza para generar la máxima cantidad de productos gaseosos de descomposición, normalmente monóxido de carbono, hidrógeno, metano, agua, nitrógeno y pequeñas cantidades de hidrocarburos superiores. Aunque la gasificación es un proceso pirolítico optimizado para la mayor obtención de gases, genera subproductos líquidos y sólidos que pueden contener altos niveles de contaminantes tóxicos. El grado de contaminación dependerá de la cantidad y el tipo de residuos tratados, de la técnica y de cómo se lleve a cabo. 
          
          .py-4.py-md-5(titulo="Tratamiento fisicoquímico" :icono="require('@/assets/curso/temas/tema1/ico2.svg')")
            .row
              .col-md-4.mb-4.mb-md-0.col-9
                img(src='@/assets/curso/temas/tema1/img13.png', alt='tema1')
              .col-md-8
                h5 Tratamiento fisicoquímico
                p Neutralización de residuos alcalinos exentos de cianuro.
                ul.lista-ul--color
                  li
                    i.fas.fa-biohazard
                    | Reducción de residuos que contienen cromo VI a cromo III.
                  li
                    i.fas.fa-biohazard
                    | Oxidación química de residuos que contienen cianuro inorgánico usando hipoclorito.
                  li
                    i.fas.fa-biohazard
                    | Tratamiento de taladrinas.
                  li
                    i.fas.fa-biohazard
                    | Precipitación de metales de efluentes del resto de procesos.
                  li
                    i.fas.fa-biohazard
                    | Separación de fases de residuos acuosos contaminados con hidrocarburos mediante tratamiento físico.


          .py-4.py-md-5(titulo="Relleno sanitario" :icono="require('@/assets/curso/temas/tema1/ico3.svg')")
            .row
              .col-md-4.mb-4.mb-md-0.col-9
                img(src='@/assets/curso/temas/tema1/img14.png', alt='tema1')
              .col-md-8
                h5 Relleno sanitario
                p Es una técnica de disposición final de residuos sólidos que consiste en el enterramiento de residuos en capas, más otra capa de tierra o material de cobertura, ambas son compactadas sobre un suelo previamente impermeabilizado, de tal manera que se evite la contaminación del suelo y las agua subterráneas.
                p En los rellenos sanitarios se generan lixiviados que son los líquidos producto de la descomposición de los residuos orgánicos y la inclusión de las aguas lluvias. Estos deben ser recolectados mediante filtros y transportados a plantas de tratamiento antes de ser vertidos en el suelo o en aguas superficiales. Los gases son otros productos generados por la descomposición de los residuos; éstos se recogen mediante filtros y se sacan a la atmósfera por chimeneas, en las que a su salida se queman, con el fin de disminuir su grado de contaminación. En algunos casos se utilizan estos gases para generar energía.
            
          .py-4.py-md-5(titulo="Disposición final" :icono="require('@/assets/curso/temas/tema1/ico4.svg')")
            .row
              .col-md-4.mb-4.mb-md-0.col-9
                img(src='@/assets/curso/temas/tema1/img15.png', alt='tema1')
              .col-md-8
                h5 Celda de seguridad 
                p Cuando los residuos peligrosos no pueden tener un tratamiento por sus características de peligrosidad, son llevados a una celda de seguridad que es un sistema tecnificado para poder disponer de forma controlada y ambientalmente seguro los residuos peligrosos.
            .py-2
            figcaption Fuente. Universidad Pontificia Bolivariana (2008)
             
  
</template>
