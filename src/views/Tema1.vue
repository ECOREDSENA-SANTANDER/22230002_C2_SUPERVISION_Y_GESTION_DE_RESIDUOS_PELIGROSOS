<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Prevención y minimización

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-5.py-2.col-sm-12
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

    .row.justify-content-start.mb-4
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          h3.bg131.py-2.w-card-text Transportadores de residuos peligrosos


    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-5.py-2.col-sm-12
        img(src='@/assets/curso/temas/tema1/img05.png', alt='')
      .col-lg-7
        .col-lg-2.col-4.py-4.col-sm-2
          img(src='@/assets/curso/temas/tema1/img06.svg', alt='')
        .col-lg-12
          p Según el Ministerio de Ambiente, Vivienda y Desarrollo Territorial (s.f.) para garantizar un transporte seguro de los residuos peligrosos, los vehículos deben cumplir con identificación y condiciones técnicas específicas. Quienes intervengan en la cadena de transporte de los residuos peligrosos tienen la responsabilidad conjunta de asegurar que estos requisitos se cumplan.
          p Para asegurarse que estas recomendaciones se cumplan es recomendable establecer y documentar un procedimiento de verificación del desempeño de según lo establecido en la normatividad. Esto permitirá reconocer el estado de los vehículos y el cumplimiento de todos los requisitos establecidos.

    .row.justify-content-start.mb-4
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          h3.bg131.py-2.w-card-text Condiciones que debe cumplir el transportador
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.bg1.p-4(titulo="Rótulos de identificación")
            h4 Rótulos de identificación
            p Que permitan identificar que se transporta residuos peligrosos. Los rótulos deben ser conforme al sistema internacional de la ONU.
          .tarjeta.bg1.p-4(titulo="Placa de identificación de la ONU")
            h4 Placa de identificación de la ONU
            p Cuando se transporta más de una sustancia peligrosa en un mismo transporte, se debe fijar el Número correspondiente a la sustancia peligrosa que presente mayor peligrosidad.
          .tarjeta.bg1.p-4(titulo="Equipos de carretera")
            h4 Equipos de carretera
            p Según lo dispuesto en el artículo 30 del Código Nacional de Tránsito Terrestre: gato, cruceta, triángulos, lámparas de señal, botiquín de primeros auxilios, dos extintores, tacos, caja de herramientas, llanta de repuesto, linterna.
          .tarjeta.bg1.p-4(titulo="Equipo de protección personal")
            h4 Equipo de protección personal para atención a emergencias
            p Que debe estar disponible para casos de contacto o inhalación de sustancias provenientes de residuos peligrosos. El personal debe estar capacitado y entrenado en su uso.
          .tarjeta.bg1.p-4(titulo="Equipo para la recolección")
            h4 Equipo para la recolección y limpieza de derrames
            p Según el tipo de residuo peligroso transportado y debe estar disponible en caso de un derrame accidental. 

      .col-lg-3
        img(src='@/assets/curso/temas/tema1/img07.svg', alt='')


    .row.justify-content-start.mb-4
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          h3.bg131.py-2.w-card-text Documentación de manejo para el personal del vehículo

    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-5
        ImagenInfografica
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/infografia.svg', alt='')
    
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
                        | Contar con la autorización para el trasporte del tipo residuos peligrosos.

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
                      
                      p El transportador debe cumplir con el decreto 1609 de 2002 “Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera”, y el remitente de los RESPEL para garantizar ese cumplimiento debe realizar una verificación.
                      p La herramienta más usada para verificar el cumplimiento del Decreto 1609 de 2002 es una lista de chequeo que relaciones los ítems que se deben cumplir, el remitente puede escoger la herramienta de su preferencia siempre y cuando se deje evidencia de la verificación.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Alternativas de manejo y disposición final de RESPEL

</template>
