<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 1
      h1 Fundamentos básicos de anatomía
    
    .fondo-personalizado-1.f3.mb-3
      .fondo-personalizado-1__contenido.py-5
        .row.mb-4 
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 La anatomía y la fisiología son esenciales en el estudio del cuerpo humano, ya que nos permiten entender tanto su estructura como su funcionamiento. Estos conocimientos son vitales para los profesionales de la salud, facilitando una correcta identificación y tratamiento de diversas condiciones médicas. La posición anatómica es una referencia estándar crucial para describir y localizar estructuras corporales con precisión.
          .col-lg-4
            figure
              img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 400px;")
        
        .fondo-personalizado-1.f2.mb-4(data-aos="flip-up")
          .fondo-personalizado-1__contenido.py-5
            .bg-white.borde-20.p-4
              SlyderA.slider-personalizado-1.pt-lg-2(tipo="b")
                .row.justify-content-center.pt-lg-4
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Anatomía
                    p.mb-0 La anatomía es la ciencia que estudia la división, las partes y las formas del organismo, dividiendo el cuerpo en sistemas compuestos por órganos que juntos cumplen con una función específica.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/5.png",style="max-width: 399px;")
                .row.justify-content-center.pt-lg-4
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Fisiología
                    p.mb-0 Esta rama de la medicina estudia el funcionamiento de cada parte, órgano o sistema del cuerpo humano.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/6.png",style="max-width: 399px;")
                .row.justify-content-center.pt-lg-4
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Posición anatómica
                    p.mb-0 Es importante identificarla ya que es la base para reportar las lesiones, además de seguir el trayecto de los vasos sanguíneos y las partes óseas.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/7.png",style="max-width: 399px;")
    
    .fondo-personalizado-1.f4
      .fondo-personalizado-1__contenido.py-4
        #t_1_1.titulo-segundo.color-acento-contenido
          h2 1.1 Introducción a las posturas anatómicas

        p.mb-4 Las posturas anatómicas son fundamentales en la medicina, ya que permiten una evaluación y tratamiento adecuados del paciente en diversas situaciones clínicas. Comprender estas posiciones es crucial para realizar procedimientos médicos, evaluar lesiones y garantizar la seguridad del paciente durante el cuidado.

        .row.justify-content-center
          .col-lg-3
            .fondo-color-sistema-i.borde-8.p-3.h-100
              p.mb-4.text-center.fw-bold Posición decúbito supino o decúbito dorsal
              .bg-white.borde-8.mb-4.p-4.py-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 177px;")
              p.mb-3 Paciente en posición boca arriba.
          .col-lg-3
            .fondo-color-sistema-i.borde-8.p-3.h-100
              p.mb-4.text-center.fw-bold Posición decúbito prono o decúbito ventral
              .bg-white.borde-8.mb-4.p-4.py-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 177px;")
              p.mb-3 Paciente boca abajo o con su cara y su parte anterior contra el piso.
          .col-lg-3
            .fondo-color-sistema-i.borde-8.p-3.h-100
              p.mb-4.text-center.fw-bold Posición lateral de seguridad derecha o izquierda
              .bg-white.borde-8.mb-4.p-4.py-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/10.svg",style="max-width: 177px;")
              p.mb-3 Paciente sobre cualquiera de sus laterales, utilizada para evitar que el paciente se ahogue con sus secreciones.
    
    Separador.pb-2

    .fondo-personalizado-1.f4
      .fondo-personalizado-1__contenido.py-5
        #t_1_2.titulo-segundo.color-acento-contenido
          h2 1.2 Ubicación de los órganos abdominales
        
        p.mb-4 Los primeros respondientes deben conocer la posición de los órganos ubicados en cada cuadrante o región del abdomen, lo que facilita sospechar sobre una posible lesión.

        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 1.] Posición de los órganos en los cuadrantes

        .row.align-items-center 
          .col-lg-6
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/11.svg",style="max-width: 610px;",alt="Imagen que muestra los cuatro cuadrantes del abdomen: cuadrante superior derecho, cuadrante superior izquierdo, cuadrante inferior derecho y cuadrante inferior izquierdo, con una representación del sistema digestivo.")
          .col-lg-6
            AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
              .div(titulo="Cuadrante superior derecho")
                .ps-md-5.ms-md-3
                  p Hígado y vesícula biliar, cabeza del páncreas, parte del riñón derecho, glándula suprarrenal derecha, partes del tubo digestivo (ángulo hepático del colon). 
              .div(titulo="Cuadrante superior izquierdo")
                .ps-md-5.ms-md-3
                  p Bazo, lóbulo izquierdo del hígado, cuerpo y cola del páncreas, parte del riñón izquierdo, glándula suprarrenal izquierda, partes del tubo digestivo (ángulo esplénico del colon).
              .div(titulo="Cuadrante inferior derecho")
                .ps-md-5.ms-md-3
                  p Ciego y apéndice, ovario y trompa derecha, polo inferior del riñón y uréter derecho, otras partes del tubo digestivo (colon ascendente), canal inguinal.
              .div(titulo="Cuadrante inferior izquierdo")
                .ps-md-5.ms-md-3
                  p Colon sigmoides y parte del colon descendente, ovario y trompa izquierda, polo inferior del riñón y uréter izquierdo, canal inguinal.
    
    Separador

    .fondo-personalizado-1.f4
      .fondo-personalizado-1__contenido.pb-5
        #t_1_3.titulo-segundo.color-acento-contenido
          h2 1.3 El esqueleto humano
        
        p.mb-4 El cuerpo humano contiene aproximadamente 206 huesos que se clasifican en largos, cortos y planos según su forma.

        .row.align-items-center.mb-4
          .col-lg-7
            .row.mb-2
              .col-md-auto.pe-md-0
                .fondo-color-sistema-l.h-100.align-content-center
                  figure
                    img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 190px;")
              .col.ps-md-0
                .fondo-color-sistema-k.h-100.align-content-center.p-4.px-md-5
                  p.mb-2.fw-bold Huesos largos 
                  p Tienen una longitud mayor que la anchura, como el fémur, el húmero y el radio.
            .row.mb-2 
              .col-md-auto.pe-md-0
                .fondo-color-sistema-l.h-100.align-content-center
                  figure
                    img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 190px;")
              .col.ps-md-0
                .fondo-color-sistema-k.h-100.align-content-center.p-4.px-md-5
                  p.mb-2.fw-bold Huesos cortos
                  p Tienen una anchura casi igual que su longitud, como los metacarpianos y metatarsianos.

            .row 
              .col-md-auto.pe-md-0
                .fondo-color-sistema-l.h-100.align-content-center
                  figure
                    img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 190px;")
              .col.ps-md-0
                .fondo-color-sistema-k.h-100.align-content-center.p-4.px-md-5
                  p.mb-2.fw-bold Huesos planos
                  p Suelen ser delgados y compactos, como el esternón, el iliaco, las costillas y la escápula.

          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 505px;")
        
        .fondo-color-sistema-i.p-4.p-lg-5
          p.mb-0 Estos huesos se unen unos con otros en las articulaciones por medio de los ligamentos, todo este sistema óseo y de uniones está recubierto por músculos que se insertan en los huesos por medio de los tendones.
    
    Separador

    #t_1_4.titulo-segundo.color-acento-contenido.mb-4
      h2 1.4 Funciones principales del sistema óseo

    p.mb-4 El sistema óseo es una parte esencial del cuerpo humano, desempeñando roles cruciales que van más allá de proporcionar soporte y estructura. Comprender sus funciones principales nos ayuda a apreciar su importancia en el mantenimiento de la salud y la protección de órganos vitales.

    p(style="color: red;") Falta slide CF03_1.4_Funciones principales del sistema óseo

    Separador

    .fondo-personalizado-1.f4.mb-5
      .fondo-personalizado-1__contenido.pt-4.pb-5
        #t_1_5.titulo-segundo.color-acento-contenido
          h2 1.5 Cartílagos, tendones y ligamentos

        p.mb-4 El sistema musculoesquelético incluye diversas estructuras que desempeñan funciones esenciales en el movimiento y la estabilidad del cuerpo. Entre ellas, los cartílagos, tendones y ligamentos son fundamentales para el correcto funcionamiento de las articulaciones y la protección de los huesos.

        .row
          .col-lg-6
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 610px;")
          .col-lg-6
            AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
              .div(titulo="Cartílagos")
                .ps-md-5.ms-md-3
                  p El cartílago es un tipo de tejido elástico que carece de vasos sanguíneos. Su función principal es actuar como un amortiguador, uniendo los huesos y previniendo el desgaste por rozamiento. Además, proporciona soporte y forma a ciertas partes del cuerpo, como el cartílago nasal.
              .div(titulo="Tendones")
                .ps-md-5.ms-md-3
                  p Los tendones son tejidos fibrosos que conectan los músculos a los huesos, así como los músculos a otras estructuras. Son esenciales para la transmisión de la fuerza generada por los músculos, permitiendo el movimiento y la conexión entre diferentes huesos o grupos de huesos.
              .div(titulo="Ligamentos")
                .ps-md-5.ms-md-3
                  p Los ligamentos son bandas o lazos compuestos por fibras resistentes que unen los huesos entre sí. Proporcionan estabilidad a las articulaciones, siendo fundamentales para el movimiento y la coordinación ósea, asegurando que los huesos se mantengan en su lugar durante la actividad física. 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
