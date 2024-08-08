<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pb-5
        p.mb-4(data-aos="fade") La evaluación del paciente inicia con una valoración rápida, identificando lesiones o signos que puedan poner en riesgo su vida. Durante el contacto directo con la persona, es crucial aplicar normas de bioseguridad para minimizar el riesgo biológico. Esta guía proporciona los conocimientos necesarios para realizar una valoración inicial eficaz y segura, destacando la importancia de una intervención rápida y adecuada.
        
        .row.mb-4 
          .col-lg-4(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 399px;")
          .col-lg-8
            .fondo-color-sistema-i.p-4.h-100.align-content-center(data-aos="fade-left")
              p.mb-0 Comprender conceptos básicos de anatomía y el funcionamiento del organismo es esencial para cualquier primer respondiente. Este conocimiento no solo facilita una valoración precisa, sino que también destaca la necesidad de una pronta comunicación con los servicios de emergencia. Llamar a una línea de emergencia de manera oportuna puede marcar la diferencia en la supervivencia del paciente, asegurando su traslado a un centro hospitalario con el recurso humano adecuado.
        
        .row(data-aos="fade-down") 
          .col-lg-10.col-md-9
            .bg-white.p-4
              p.mb-0 Este componente formativo está diseñado para equipar a los primeros respondientes con las habilidades y conocimientos necesarios para atender eficazmente a personas lesionadas. Desde la apertura de vías aéreas hasta la evaluación de signos vitales, cada sección de esta guía está estructurada para proporcionar instrucciones claras y prácticas. La correcta aplicación de estos protocolos puede salvar vidas, brindando soporte vital básico hasta la llegada de profesionales médicos.
          .col-lg-2.col-md-3.order-first.order-md-last
            .fondo-color-acento-contenido.p-4.borde-8
              figure
                img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 81px;")


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
