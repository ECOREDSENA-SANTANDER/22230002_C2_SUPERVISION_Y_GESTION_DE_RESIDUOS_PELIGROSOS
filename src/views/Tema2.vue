<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Control y seguimiento

 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Definición

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-sm-9.col-8.py-2.col-12
        img(src='@/assets/curso/temas/tema2/img01.png', alt='')
      .col-lg-6.p-4.bg12
        h5 Herramientas para clarificar y definir, de forma más precisa, objetivos e impactos (...) son medidas verificables de cambio o resultado (...) diseñadas para contar con un estándar contra el cual evaluar, estimar o demostrar el progreso (...) con respecto a metas establecidas, facilitan el reparto de insumos, produciendo (...) productos y alcanzando objetivos. 
        p - Organización de las Naciones Unidas (ONU).

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-12.col-md-12.col-12
        .tarjeta--container.row
          .col-lg-6.md.tarjeta.color-primario.p-4.bgimg3
            .row.align-items-center.justify-content-center
              .col-lg-3.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema2/ico1.svg', alt='')
              .col-lg-5
                h3 Indicador de Gestión
              .col-lg-12.py-4
                ul.lista-ul--color.line
                  li
                    i.fas.fa-biohazard
                    | Los indicadores de gestión se entienden como la expresión cuantitativa del comportamiento de las variables que reflejan el desempeño de toda una organización o una de sus partes, que permiten analizar el resultado de la gestión y el cumplimiento de las metas, respecto al objetivo trazado por la organización.
                  li
                    i.fas.fa-biohazard  
                    | “La medición debe tener una referencia de cuya comparación se puede establecer una desviación o acierto, sobre las cuales se determinarán acciones correctivas, preventivas o de mantenimiento.” (Iriarte, 2011).
         
          .col-lg-6.md.tarjeta.color-acento-contenido.p-4.bgimg3
            .row.align-items-center.justify-content-center
              .col-lg-3.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema2/ico2.svg', alt='')
              .col-lg-5
                h3 Indicador ambiental
              .col-lg-12.py-4
                ul.lista-ul--color.line
                  li
                    i.fas.fa-biohazard
                    | Relación entre las variables con respecto a la norma del punto crítico de control.
                  li
                    i.fas.fa-biohazard
                    | “Los indicadores ambientales corresponden a aquellos que se ocupan de describir y mostrar los estados y las principales dinámicas ambientales, por ejemplo: calidad del agua.” (Quiroga, 2009).
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
          h3.bg13.py-2.w-card-text Premisas
        .py-2  
        h5.bg121.p-2.text-white Lo que no se puede medir no se puede cambiar. 
        h5.bg122.p-2.text-white Lo que no se puede medir no existe.
        h5.bg123.p-2 Los indicadores son un medio y no un fin.
      .col-sm-6.col-lg-5.bg123.p-4
        h5 Ejemplo:
        p La comparación que conforma un indicador:
        p Peso en Kg = IMC
        p Estatura

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Diferencias entre registro e identificación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.align-items-center.justify-content-center.mb-4
            .col-lg-12.col-md-12.col-12
              .tarjeta--container.row 
                .col-md.tarjeta.color-adicional.p-0
                  .row.align-items-center.mb-2.p-4
                    .col-lg-12
                      h5 Variables de registro en su carro:
                      ul.lista-ul--color
                        li
                          i.fas.fa-biohazard
                          | Indicador de gasolina: lleno o vacío
                        li
                          i.fas.fa-biohazard
                          | Carga de batería: baja o alta
                        li
                          i.fas.fa-biohazard
                          | Temperatura: normal o sobrecalentado
                      h5 Ejemplo de indicador de su carro:
                      ul.lista-ul--color
                        li
                          i.fas.fa-biohazard
                          | Indicador Velocidad: No. de Kilómetro /Hora
                .col-md.tarjeta.color-acento-contenido.d-none.d-lg-block.col-lg-4
                  .row.justify-content-center.align-items-center
                    .col-12
                      figure
                        img.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img2.svg', alt='tema1')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
          h3.bg13.py-2.w-card-text Características o atributos de los indicadores


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-5.mb-md-0.col-sm-12
        LineaTiempoD
          p.text-small(numero="a" titulo="Relevante para el ítem de medición") El indicador debe medir el problema o condición real.

              
          p.text-small(numero="b" titulo="Entendible para sus usuarios") El propósito del indicador debe ser claro e interpretado sólo de una manera.

              
          p.text-small(numero="c" titulo="Basado en información confiable") Los usuarios deben confiar en lo que muestra el indicador.

              
          p.text-small(numero="d" titulo="Transparente") Terceras partes deben estar en capacidad de verificar el origen del valor del indicador.

      
          p.text-small(numero="e" titulo="Basado en información específica con relación al lugar y el tiempo")  El indicador debe reflejar condiciones específicas claras que permitan reaccionar de manera adecuada a los resultados que arrojan.
              
          p.text-small(numero="f" titulo="Que se pueda influir") Posibilidad de intervención. (Universidad Icesi, 2010)

      .col-lg-4.col-sm-8.col-8
        img(src='@/assets/curso/temas/tema2/img3.png', alt='tema1')
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
          h3.bg13.py-2.w-card-text Establecimiento de indicadores
      .py-2
      p Con relación a los objetivos. Se refiere a la meta numérica que se desea alcanzar, Ejemplo: disminuir en un 10%

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-sm-7.py-2
        img.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img4.png', alt='tema1')
      .col-lg-9.col-sm-9.col-10
          SlyderF.mb-5(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in-left")
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema2/ico1.png')
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Eficacia
                .py-2
                  p.text-center Capacidad de alcanzar los objetivos y metas.
                  p.text-center Kg de RESPEL generados / Número de Unidades producidas.

            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-5.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema2/ico2.png')
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Eficiencia
                .py-2
                  p.text-center Implica alcanzar los objetivos y metas, utilizando en lo posible, la menor cantidad de recursos, manteniendo un alto nivel de calidad y sin afectar el entorno. 
                  h5.text-center Costo de disposición de RESPEL / Kilo de RESPEL Generados 

            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-5.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema2/ico3.png')
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Efectividad
                .py-2
                  p.text-center Relación entre la eficiencia y la eficacia, es la relación entre los resultados logrados y los resultados propuestos, nos permite medir el grado de cumplimiento de los objetivos planificados. Supone hacer lo correcto con gran exactitud y sin ningún desperdicio de tiempo y dinero.” (Téllez, s.f.) 
              
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center
                .col-sm-5.col-lg-6.my-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema2/ico4.png')
              .row.justify-content-center
                .col-lg-8.bg13.p-1
                  h4.text-center Productividad del trabajo

                .py-2
                  p.text-center Kg de RESPEL Generados / Número de trabadores de la empresa.

</template>
