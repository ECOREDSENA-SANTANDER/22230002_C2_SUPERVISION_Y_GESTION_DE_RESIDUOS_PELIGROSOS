<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    p.mb-5 Las obligaciones de las empresas generadoras de residuos peligrosos y las empresas gestoras y sus transportadores, deben ser conocidas en su totalidad para que sean cumplidas y efectuadas a cabalidad por ambas empresas y poder realizar una gestión integral de los residuos peligrosos. Adicionalmente, el control y seguimiento de los procesos propuestos son herramientas necesarias para garantizar la efectividad de estos. En el siguiente cuadro se resumen los conceptos principales del componente: 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="el diagrama menciona los temas trabajados dentro del componente: manejo externo de residuos peligrosos, control y seguimiento. En cada tema se enuncian los principales conceptos trabajados en el componente.")
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
