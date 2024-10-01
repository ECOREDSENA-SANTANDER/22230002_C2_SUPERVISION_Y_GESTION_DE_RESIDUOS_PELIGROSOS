<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 En el siguiente video se realiza una introducción al componente, donde se expone de manera didáctica y práctica los conceptos tratados en este #[b componente.]
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/RVNZUqwia_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Manejo externo RESPEL, control y seguimiento
    
   
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
