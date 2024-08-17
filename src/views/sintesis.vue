<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.borde-20.p-4
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis sobre  atención básica al lesionado que incluye valoración inicial del paciente, fundamentos de anatomía, signos vitales, valoración primaria (ABCDE) y soporte vital básico en el adulto. Se desglosan elementos como normas de bioseguridad, posiciones anatómicas, técnicas de medición de signos vitales y pasos para la reanimación cardiopulmonar (RCP).")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
