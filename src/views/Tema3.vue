<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 3
      h1 Soporte Vital Básico en el adulto
    
    .fondo-personalizado-1.bottom-1.f3
      .fondo-personalizado-1__contenido.pt-5
        p.mb-5 El Soporte Vital Básico (SVB) son aquellas acciones que se realizan ante una persona con paro cardio-respiratorio, con el fin de mantener esas funciones hasta la llegada del personal de salud.

        .row.justify-content-center.mb-5
          .col-lg-10
            .fondo-color-sistema-i.p-4.p-lg-5.borde-8
              .row.align-items-center 
                .col-lg-5
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/44.png",style="max-width: 400px;")
                .col-lg-7
                  p.fw-bold Cadena de supervivencia en el adulto se compone de 4 eslabones:
                  ul.lista-ul.lista-p-1
                    li
                      div.me-2.pt-1
                        img(src="@/assets/curso/temas/28.svg",style="max-width: 16px;")
                      span Alerta precoz: Llamar a los sistemas de emergencia.
                    li
                      div.me-2.pt-1
                        img(src="@/assets/curso/temas/28.svg",style="max-width: 16px;")
                      span SVB precoz: Iniciar las técnicas de SVB lo antes posible.
                    li
                      div.me-2.pt-1
                        img(src="@/assets/curso/temas/28.svg",style="max-width: 16px;")
                      span Desfibrilación eléctrica precoz.
                    li
                      div.me-2.pt-1
                        img(src="@/assets/curso/temas/28.svg",style="max-width: 16px;")
                      span Soporte vital avanzado precoz.
        
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/45.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los pacientes que sufren un paro cardiaco fuera de un centro de salud dependen de los primeros auxilios que les preste la comunidad en el sitio. Cuando la comunidad detecta lo que está ocurriendo, pide ayuda, inicia la Reanimación Cardio Pulmonar (RCP) hasta que la ayuda llegue al sitio y traslade al paciente a un servicio de urgencias de un centro hospitalario de tercer nivel para la atención adecuada. En caso de un paro respiratorio o un paro cardíaco, el tiempo de atención es de cuatro minutos; después de este tiempo, el cerebro empieza a presentar lesiones irreversibles.

    .titulo-decorativo.my-5
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Iniciar RCCP básica
    
    .fondo-personalizado-1.f5.mb-4
      .fondo-personalizado-1__contenido.py-4
        .row.align-items-center 
          .col-lg-3
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 295px;")
          .col-lg-9
            SlyderF.slider-personalizado-2(columnas="col-lg-4 col-md-6")
              .borde-8.p-4.fondo-color-sistema-j.text-center.h-100
                .d-inline-flex.rounded-circle.fondo-color-sistema-o.align-items-center.justify-content-center.mb-4(style="height: 53px;width: 53px;")
                  h2.c-color-acento-contenido.mb-0 1
                p.mb-0.text-start Coloque el talón de la mano dominante en el centro del pecho, entre las tetillas, dos dedos por encima del esternón y la otra mano encima de ella con los dedos entrelazados.
              .borde-8.p-4.fondo-color-sistema-j.text-center.h-100
                .d-inline-flex.rounded-circle.fondo-color-sistema-o.align-items-center.justify-content-center.mb-4(style="height: 53px;width: 53px;")
                  h2.c-color-acento-contenido.mb-0 2
                p.mb-0.text-start Inicie las compresiones del tórax o masaje cardíaco a razón de 100 a 120 por minuto.
              .borde-8.p-4.fondo-color-sistema-j.text-center.h-100
                .d-inline-flex.rounded-circle.fondo-color-sistema-o.align-items-center.justify-content-center.mb-4(style="height: 53px;width: 53px;")
                  h2.c-color-acento-contenido.mb-0 3
                p.mb-0.text-start Haga 30 compresiones por cada 2 ventilaciones boca a boca o con dispositivo de barrera durante 2 minutos.
              .borde-8.p-4.fondo-color-sistema-j.text-center.h-100
                .d-inline-flex.rounded-circle.fondo-color-sistema-o.align-items-center.justify-content-center.mb-4(style="height: 53px;width: 53px;")
                  h2.c-color-acento-contenido.mb-0 4
                p.mb-0.text-start Utilice el peso del cuerpo para hacer la compresión, manteniendo los brazos rectos, verticales y la espalda recta de tal manera que toda la presión se transmita al talón de la mano que mantiene sobre el esternón.
              .borde-8.p-4.fondo-color-sistema-j.text-center.h-100
                .d-inline-flex.rounded-circle.fondo-color-sistema-o.align-items-center.justify-content-center.mb-4(style="height: 53px;width: 53px;")
                  h2.c-color-acento-contenido.mb-0 5
                p.mb-0.text-start No flexione los brazos para hacer las compresiones porque se cansará muy rápido y no es efectivo.
              .borde-8.p-4.fondo-color-sistema-j.text-center.h-100
                .d-inline-flex.rounded-circle.fondo-color-sistema-o.align-items-center.justify-content-center.mb-4(style="height: 53px;width: 53px;")
                  h2.c-color-acento-contenido.mb-0 6
                p.mb-0.text-start Cada dos minutos verifique la respiración y el pulso. Siempre termine los ciclos con las 2 ventilaciones.
    
    p.mb-4 Continúe las maniobras hasta cuándo:

    .row.justify-content-center 
      .col-lg-4.col-md-6.mb-4
        .fondo-color-sistema-q.p-4.p-lg-5.borde-8.h-100
          figure.mb-3
            img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 264px;")
          p.text-center.fw-bold La persona se recupere.
      .col-lg-4.col-md-6.mb-4
        .fondo-color-sistema-q.p-4.p-lg-5.borde-8.h-100
          figure.mb-3
            img.mx-auto(src="@/assets/curso/temas/48.svg",style="max-width: 261px;")
          p.text-center.fw-bold Llegue la ayuda médica.
      .col-lg-4.col-md-6.mb-4
        .fondo-color-sistema-q.p-4.p-lg-5.borde-8.h-100
          figure.mb-3
            img.mx-auto(src="@/assets/curso/temas/49.svg",style="max-width: 254px;")
          p.text-center.fw-bold Esté usted cansado y sienta que ya no está en capacidad para continuar las maniobras.

    p.mb-0 Si las maniobras de reanimación han sido realizadas de manera correcta, pueden mantenerse los órganos vitales por tiempo suficiente hasta que llegue la ayuda.










</template>

<script>
export default {
  name: 'Tema3',
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
