<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src="@/assets/curso/titulo.svg", alt="alt")
        .py-3
        p.mb-5 Identificar correctamente las fuentes de generación de residuos peligrosos y plantearse objetivos y metas para su minimización le permite reducir costos a las organizaciones, y contribuye a la preservación del medio ambiente. Por su parte, el buen manejo interno de los residuos peligrosos permite mantener seguros a los empleados, visitantes y clientes. En el siguiente cuadro, se presentan los conceptos claves trabajados dentro de este componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
