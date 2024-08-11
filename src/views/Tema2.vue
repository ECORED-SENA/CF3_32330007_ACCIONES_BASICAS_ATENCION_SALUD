<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Signos vitales
    
    .fondo-personalizado-1.f3
      .fondo-personalizado-1__contenido.py-5
        p.mb-5.fw-bold(data-aos="fade") Los signos vitales son indicadores de las funciones esenciales del cuerpo. Estos son:

        .row 
          .col-md-6.col-lg-3.mb-4(data-aos="fade-right")
            .fondo-color-secundario.p-3.text-center.h-100
              .bg-white.rounded-circle.d-inline-flex.cont_2_1.align-items-center.justify-content-center.mb-4
                img(src="@/assets/curso/temas/17.svg",style="max-width: 65px;")
              p.fw-bold.mb-0 Frecuencia cardiaca
          .col-md-6.col-lg-3.mb-4(data-aos="fade-up")
            .fondo-color-secundario.p-3.text-center.h-100
              .bg-white.rounded-circle.d-inline-flex.cont_2_1.align-items-center.justify-content-center.mb-4
                img(src="@/assets/curso/temas/18.svg",style="max-width: 62px;")
              p.fw-bold.mb-0 Frecuencia respiratoria
          .col-md-6.col-lg-3.mb-4(data-aos="fade-down")
            .fondo-color-secundario.p-3.text-center.h-100
              .bg-white.rounded-circle.d-inline-flex.cont_2_1.align-items-center.justify-content-center.mb-4
                img(src="@/assets/curso/temas/19.svg",style="max-width: 46px;")
              p.fw-bold.mb-0 Presión arterial
          .col-md-6.col-lg-3.mb-4(data-aos="fade-left")
            .fondo-color-secundario.p-3.text-center.h-100
              .bg-white.rounded-circle.d-inline-flex.cont_2_1.align-items-center.justify-content-center.mb-4
                img(src="@/assets/curso/temas/20.svg",style="max-width: 47px;")
              p.fw-bold.mb-0 Temperatura corporal

        Separador.pt-3

        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Frecuencia Cardiaca (FC)
        
        p.mb-0(data-aos="fade-left") Es la percepción táctil del número de veces que el corazón late o bombea sangre por minuto, variando según el sexo, la edad, los medicamentos, la actividad física, entre otros.

        .titulo-decorativo.my-4(data-aos="zoom-in-out")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Técnica para tomar pulso:
        
        p.mb-4(data-aos="fade-right") Palpar una arteria con los dedos índice y medio, sentir el movimiento o bombeo y contar el número de veces en un minuto.

        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1.] Valores normales de la FC
        
        .row 
          .col-lg-7(data-aos="fade-right")
            .tabla-a.tabla-per-1.color-acento-contenido
              table(style="min-width: 350px;")
                thead
                  tr
                    th Edad
                    th Frecuencia Cardiaca (FC) Normal
                tbody
                  tr
                    td.text-center Recién nacido
                    td.text-center 120 a 180
                  tr
                    td.text-center 6 meses a 2 años
                    td.text-center 100 a 130
                  tr
                    td.text-center 2 años a 6 años
                    td.text-center 90 a 120
                  tr
                    td.text-center 6 años a 14 años
                    td.text-center 80 a 110
                  tr
                    td.text-center Mayor a 14 años
                    td.text-center 60 a 100
          .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/21.png",style="max-width: 504px;")
        
        .titulo-decorativo.my-5(data-aos="fade-right")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Alteraciones del ritmo cardíaco
        
        p.mb-4(data-aos="fade-right") El ritmo cardíaco es un indicador crucial de la salud cardiovascular. Alteraciones en la frecuencia cardíaca, como la taquicardia y la bradicardia, pueden señalar problemas subyacentes que requieren atención médica. Comprender estas condiciones es fundamental para identificar y tratar posibles irregularidades en el funcionamiento del corazón.

        .row.align-items-center(data-aos="fade-right")
          .col-lg-6
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 610px;",alt="Imagen que muestra los cuatro cuadrantes del abdomen: cuadrante superior derecho, cuadrante superior izquierdo, cuadrante inferior derecho y cuadrante inferior izquierdo, con una representación del sistema digestivo.")
          .col-lg-6
            AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
              .div(titulo="Taquicardia")
                .ps-md-5.ms-md-3
                  p Frecuencia cardíaca que se encuentra por encima de los valores normales. Esta condición puede ser causada por diversos factores, incluyendo estrés, ejercicio intenso, fiebre o enfermedades cardíacas.
              .div(titulo="Bradicardia")
                .ps-md-5.ms-md-3
                  p Frecuencia cardíaca que se encuentra por debajo de los valores normales. Esta alteración puede deberse a factores como el envejecimiento, la práctica de ejercicio físico regular en atletas, o problemas cardíacos subyacentes.
    
    Separador.py-5

    #t_2_2.titulo-segundo.color-acento-contenido.pt-4.mb-0(data-aos="fade")
      h2 2.2 Frecuencia respiratoria (FR)
    
    .fondo-personalizado-1.bottom-1.f3
      .fondo-personalizado-1__contenido.pt-5
        p.mb-4(data-aos="fade") Consta de dos periodos: un periodo de inspiración y un periodo de espiración. Varía según el sexo, la edad, las enfermedades, los traumas, los medicamentos, la actividad física, entre otros.

        p.fw-bold.mb-4(data-aos="fade") Los tipos de respiración son:

        .row.justify-content-center.mb-1(data-aos="fade")
          .col-lg-4.mb-4
            .fondo-color-sistema-l.p-4.p-md-5.h-100
              p.fw-bold.text-center.mb-3 Torácica (Costal)
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/23.svg",style="max-width: 129px;")
              p.mb-0 Predomina en mujeres, se da por expansión y esfuerzo de los músculos costales.
          .col-lg-4.mb-4
            .fondo-color-sistema-i.p-4.p-md-5.h-100
              p.fw-bold.text-center.mb-3 Abdominal (Diafragmática)
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/24.svg",style="max-width: 123px;")
              p.mb-0 Predomina en hombres, se da por movimiento principalmente del músculo del diafragma.

        .titulo-sexto.color-acento-contenido(data-aos="fade-up")
          p.mb-0 #[b Tabla 2.] Valores normales de la FR
        
        .row.mb-5(data-aos="fade-up")
          .col-lg-7
            .tabla-a.tabla-per-1.color-acento-contenido
              table(style="min-width: 350px;")
                thead
                  tr
                    th Edad
                    th Frecuencia Respiratoria (RPM) Normal
                tbody
                  tr
                    td.text-center Recién nacido
                    td.text-center 30 a 40
                  tr
                    td.text-center Niños mayores
                    td.text-center 18 a 24
                  tr
                    td.text-center Adulto
                    td.text-center 16 a 20
                  tr
                    td.text-center Anciano
                    td.text-center 12 a 16
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/25.png",style="max-width: 504px;")
        
        .row.justify-content-center(data-aos="fade-up")
          .col-lg-10
            .fondo-color-sistema-i.p-4.p-md-5.borde-8
              .row.align-items-center.justify-content-center
                .col-lg-6
                  .fondo-color-secundario.borde-8.px-4.px-lg-5.pt-4.pt-lg-5
                    figure.mb-4.mb-lg-0
                      img.mx-auto(src="@/assets/curso/temas/26.svg",style="max-width: 293px;")
                .col-lg-5
                  p.fw-bold.mb-4 Técnica para tomar respiración
                  p.mb-0 Se hace por observación. Cuando el tórax o abdomen se expande y se contrae, es una respiración. Se toma el número de veces por minuto.
        
        .titulo-decorativo.my-5(data-aos="fade-up")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Introducción a las alteraciones de la frecuencia respiratoria
        
        p.mb-4(data-aos="fade-right") Las alteraciones en la frecuencia y el patrón respiratorio son indicadores importantes de la salud pulmonar y cardiovascular. Comprender estas alteraciones, como la taquipnea, bradipnea, apnea y disnea, es esencial para la detección y tratamiento oportunos de condiciones que afectan la respiración y, en consecuencia, la oxigenación del cuerpo.

        .fondo-personalizado-1.f2.mb-3(data-aos="flip-up")
          .fondo-personalizado-1__contenido.py-5
            .bg-white.borde-20.p-4
              PasosB.pasos-personalizado-1
                .row.justify-content-center.pt-lg-4(titulo="Taquipnea")
                  .col-lg-6.mb-4.mb-lg-0
                    p.mb-4.fw-bold Taquipnea
                    p.mb-0.me-lg-5.pe-lg-5 Frecuencia respiratoria que se encuentra por encima de los valores normales. Esta condición puede ser causada por diversos factores, incluyendo ejercicio intenso, fiebre, ansiedad o enfermedades pulmonares.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/53.png",style="max-width: 399px;")
                .row.justify-content-center.pt-lg-4(titulo="Bradipnea")
                  .col-lg-6.mb-4.mb-lg-0
                    p.mb-4.fw-bold Bradipnea
                    p.mb-0.me-lg-5.pe-lg-5 Frecuencia respiratoria que se encuentra por debajo de los valores normales. Esta alteración puede deberse a factores como el uso de ciertos medicamentos, trastornos neurológicos, o enfermedades metabólicas.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/54.png",style="max-width: 399px;")
                .row.justify-content-center.pt-lg-4(titulo="Apnea")
                  .col-lg-6.mb-4.mb-lg-0
                    p.mb-4.fw-bold Apnea
                    p.mb-0.me-lg-5.pe-lg-5 Ocurre cuando el paciente deja de respirar temporalmente o presenta respiraciones muy espaciadas en el tiempo. Esta condición puede ser resultado de obstrucciones en las vías respiratorias, trastornos del sueño, o problemas neurológicos.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/55.png",style="max-width: 399px;")
                .row.justify-content-center.pt-lg-4(titulo="Disnea")
                  .col-lg-6.mb-4.mb-lg-0
                    p.mb-4.fw-bold Disnea
                    p.mb-0.me-lg-5.pe-lg-5 El paciente experimenta dificultad para respirar. Puede ser causada por diversas condiciones, incluyendo enfermedades pulmonares, insuficiencia cardíaca, anemia, o ansiedad.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/56.png",style="max-width: 399px;")

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido.mb-0(data-aos="fade-left")
      h2 2.3 Presión arterial (PA)

    .fondo-personalizado-1.bottom-1.f3
      .fondo-personalizado-1__contenido.pt-5
        p.mb-4(data-aos="fade-left") Es la fuerza que ejerce la sangre contra las paredes de las arterias durante la contracción (sístole) y la dilatación (diástole) del corazón.

        .row.justify-content-center(data-aos="fade-left")
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 3.] Valores de referencia presión arterial
            .tabla-a.color-acento-contenido
              table(style="min-width: 350px;")
                thead
                  tr
                    th Tipo de Presión Arterial
                    th Valores Normales (mm Hg)
                tbody
                  tr
                    td.text-center Sistólica
                    td.text-center 90 a 129
                  tr
                    td.text-center Diastólica
                    td.text-center 60 a 89
        
        .titulo-decorativo.my-5(data-aos="fade-left")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Técnica para tomar presión arterial
        
        p.mb-4(data-aos="fade-left") La medición precisa de la presión arterial es una habilidad esencial en la práctica médica, ya que proporciona información crucial sobre la salud cardiovascular del paciente. Seguir una técnica adecuada asegura resultados fiables y ayuda en la detección y manejo de hipertensión y otras condiciones relacionadas.

        .row.align-items-center.mb-5 
          .col-lg-7
            .fondo-color-sistema-k.p-4.borde-8.pb-lg-5
              .row.align-items-center 
                .col-md-6
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/58.svg",style="max-width: 270px;")
                .col-md-6
                  p.fw-bold.mb-2(style="font-size: 20px;") ¿Sabías qué?
                  p.mb-3 Lo invitamos a escuchar el siguiente Pódcast:
                  TarjetaAudioPersonalizada.color-primario.tarjeta-audio-p-1.mb-3(
                    texto="Presión arterial (PA)"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  )

          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/57.png",style="max-width: 505px;")

        p.mb-4(data-aos="fade") Se presentan alteraciones de la presión, tales como:

        .row(data-aos="flip-up")
          .col-lg-2
          .col-lg-3.pe-lg-0
            .fondo-color-secundario.py-3.pe-3.h-100.align-content-center
              figure
                img.me-auto(src="@/assets/curso/temas/27.svg",style="max-width: 298px;")
          .col-lg-4.ps-lg-0
            .fondo-color-sistema-j.p-4.h-100.align-content-center

              .d-flex.align-items-center.mb-2
                .d-inline-flex.me-2
                  img(src="@/assets/curso/temas/28.svg",style="max-width: 16px;")
                .d-inline-flex
                  span.fw-bold Hipotensión
              p.mb-3.ps-4 Presión arterial por debajo de los valores normales.

              div.mb-3.fondo-color-sistema-n(style="height: 1px;")

              .d-flex.align-items-center.mb-2
                .d-inline-flex.me-2
                  img(src="@/assets/curso/temas/28.svg",style="max-width: 16px;")
                .d-inline-flex
                  span.fw-bold Hipertensión
              p.mb-0.ps-4 Presión arterial por encima de los valores normales.
    
    Separador

    #t_2_4.titulo-segundo.color-acento-contenido.mb-0(data-aos="fade-right")
      h2 2.4 Temperatura
    
    .fondo-personalizado-1.bottom-1.f3
      .fondo-personalizado-1__contenido.pt-5
        .row.mb-5 
          .col-lg-7
            p.mb-0(data-aos="fade-up") Es la manifestación calórica de los procesos metabólicos del organismo. Es el resultado de un equilibrio entre la generación y la pérdida de calor. La temperatura normal es de 36 º a 37 ºC.

            .titulo-decorativo.my-4(data-aos="fade")
              .cont-figura
                img(src="@/assets/curso/temas/img-tit-dec.svg")
              .cont-text 
                h3 Técnica para tomar la temperatura

            p.mb-0(data-aos="fade-down") Medir la temperatura corporal es un procedimiento esencial para evaluar el estado de salud de una persona. Una técnica adecuada garantiza la obtención de resultados precisos, ayudando en la detección de fiebre y otras condiciones médicas.
          .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 505px;")
        
        .fondo-color-sistema-i.p-4.p-lg-5.borde-8.mb-5
          .row.justify-content-center.align-items-center(data-aos="flip-up")
            .col-lg-3.mb-4.mb-lg-0
              .fondo-color-secundario.p-3.borde-8
                figure
                  img.mx-auto(src="@/assets/curso/temas/30.svg",style="max-width: 220px;")
            .col-lg-7
              ul.lista-ul.lista-p-1
                li
                  div.me-2.pt-1
                    img(src="@/assets/curso/temas/28.svg",style="max-width: 16px;")
                  span Saque el termómetro del estuche.
                li
                  div.me-2.pt-1
                    img(src="@/assets/curso/temas/28.svg",style="max-width: 16px;")
                  span Limpie la punta del termómetro usando agua tibia y jabón o alcohol, luego enjuáguelo con agua fría.
                li
                  div.me-2.pt-1
                    img(src="@/assets/curso/temas/28.svg",style="max-width: 16px;")
                  span Introduzca el extremo cubierto debajo del brazo, dentro de la axila.
                li
                  div.me-2.pt-1
                    img(src="@/assets/curso/temas/28.svg",style="max-width: 16px;")
                  span Mantenga el termómetro debajo del brazo o axila por 5 minutos.
                li
                  div.me-2.pt-1
                    img(src="@/assets/curso/temas/28.svg",style="max-width: 16px;")
                  span Retire el termómetro y mire hasta donde subió la columna de mercurio. Si es digital, lea el número que aparece en el recuadro.
        
        p.mb-4.fw-bold.pt-4(data-aos="fade-left") Se presentan alteraciones de la temperatura, tales como:

        .row.justify-content-center.mb-1
          .col-lg-4.mb-4(data-aos="fade-right")
            .fondo-color-sistema-l.p-4.p-md-5.h-100
              p.fw-bold.text-center.mb-3 Hipotermia
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/31.svg",style="max-width: 183px;")
              p.mb-0.text-center Temperatura por debajo de los valores normales.
          .col-lg-4.mb-4(data-aos="fade-left")
            .fondo-color-sistema-i.p-4.p-md-5.h-100
              p.fw-bold.text-center.mb-3 Hipertermia
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/32.svg",style="max-width: 157px;")
              p.mb-0.text-center Temperatura por encima de los valores normales.
    
    Separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.5 Valoración primaria
    
    p.mb-4(data-aos="flip-up") Es la evaluación inicial que ayuda a identificar las lesiones o condiciones que pueden poner en peligro la vida del paciente. Esta debe ser rápida y eficaz. Para realizar la evaluación se utiliza la nemotecnia ABCDE:

    .fondo-personalizado-1.f5
      .fondo-personalizado-1__contenido.py-3
        .row.align-items-center 
          .col-lg-3
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/34.png",style="max-width: 295px;")
          .col-lg-9
            SlyderF.slider-personalizado-2(columnas="col-lg-4 col-md-6",data-aos="flip-up")
              .borde-8.p-4.fondo-color-secundario.text-center.h-100
                .d-inline-flex.rounded-circle.fondo-color-sistema-o.align-items-center.justify-content-center.mb-5(style="height: 53px;width: 53px;")
                  h2.c-color-secundario.mb-0 A
                p.mb-0 Abrir vía aérea y control de columna cervical.
              .borde-8.p-4.fondo-color-secundario.text-center.h-100
                .d-inline-flex.rounded-circle.fondo-color-sistema-o.align-items-center.justify-content-center.mb-5(style="height: 53px;width: 53px;")
                  h2.c-color-secundario.mb-0 B
                p.mb-0 Ventilación.
              .borde-8.p-4.fondo-color-secundario.text-center.h-100
                .d-inline-flex.rounded-circle.fondo-color-sistema-o.align-items-center.justify-content-center.mb-5(style="height: 53px;width: 53px;")
                  h2.c-color-secundario.mb-0 C
                p.mb-0 Circulación y control de hemorragias.
              .borde-8.p-4.fondo-color-secundario.text-center.h-100
                .d-inline-flex.rounded-circle.fondo-color-sistema-o.align-items-center.justify-content-center.mb-5(style="height: 53px;width: 53px;")
                  h2.c-color-secundario.mb-0 D
                p.mb-0 Se determina estado de conciencia ubicándolo con método ADVI.
              .borde-8.p-4.fondo-color-secundario.text-center.h-100
                .d-inline-flex.rounded-circle.fondo-color-sistema-o.align-items-center.justify-content-center.mb-5(style="height: 53px;width: 53px;")
                  h2.c-color-secundario.mb-0 E
                p.mb-0 Exposición con el control de la hipotermia.
    
    .titulo-decorativo.my-5(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 A. Evaluación de la permeabilidad de la vía aérea
    
    p.mb-4(data-aos="fade") Para permeabilizar la vía aérea se debe mantener la cabeza en posición neutra.

    .row.justify-content-center.mb-3(data-aos="fade-right")
      .col-lg-3.pe-lg-0
        .fondo-color-sistema-i.p-2.align-content-center.h-100
          figure
            img.mx-auto(src="@/assets/curso/temas/35.svg",style="max-width: 167px;")
      .col-lg-7.ps-lg-0
        .fondo-color-acento-contenido.p-4.align-content-center
          h4.mb-4 Paciente consciente
          p.mb-0 Hacer hablar al paciente, realizarle cualquier pregunta y escuchar las características de la voz al responder. Si hay dificultad para hablar o se emiten solo sonidos, puede ser que algo esté obstruyendo el paso normal del aire por la vía aérea. Si la voz es normal, su vía aérea probablemente está permeable.

    .row.justify-content-center.mb-4
      .col-lg-3.pe-lg-0(data-aos="flip-up")
        .fondo-color-sistema-i.p-2.align-content-center.h-100
          figure
            img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 256px;")
      .col-lg-7.ps-lg-0(data-aos="flip-up")
        .fondo-color-acento-contenido.p-4.align-content-center
          h4.mb-4 Paciente inconsciente
          p.mb-0 Si no hay respuesta verbal, es necesario abrir la boca de la víctima para buscar obstrucciones por cuerpos extraños. Recuerde siempre mantener alineada la columna cervical durante la evaluación.
    
    p.mb-0(data-aos="fade-up") Las causas más frecuentes de obstrucción de la vía aérea son: la lengua, que se desplaza hacia atrás por la pérdida del tono muscular, las secreciones orales y la sangre.

    .titulo-decorativo.my-5.mb-0(data-aos="flip-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 B. Evaluación de la ventilación
    
    .fondo-personalizado-1.f3
      .fondo-personalizado-1__contenido.py-5.pb-3
        p.mb-4(data-aos="fade") En este caso se puede contar el número de movimientos durante medio minuto y luego multiplicar por dos. Se cuentan las inspiraciones o las espiraciones, pero no los dos movimientos. Se utiliza la nemotecnia:

        .row.mb-4
          .col-lg-11
            .fondo-color-sistema-m.p-4.px-lg-5
              .row.justify-content-center
                .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
                  .fondo-color-sistema-k.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/37.png")
                    .p-4.p-lg-5.position-relative
                      h3.mb-0.fondo-color-secundario.titulo-dec-1.mx-4.mx-lg-5.p-2.p-lg-3 Ver
                      p.mb-0 El pecho del paciente (si sube y baja).
                .col-lg-4.col-md-6.mb-4(data-aos="fade-up")
                  .fondo-color-sistema-k.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/38.png")
                    .p-4.p-lg-5.text-center.position-relative
                      h3.mb-0.fondo-color-secundario.titulo-dec-1.mx-4.mx-lg-5.p-2.p-lg-3 Escuchar
                      p.mb-0 La respiración.
                .col-lg-4.col-md-6.mb-4(data-aos="fade-left")
                  .fondo-color-sistema-k.h-100
                    figure
                      img.mx-auto(src="@/assets/curso/temas/39.png")
                    .p-4.p-lg-5.text-center.position-relative
                      h3.mb-0.fondo-color-secundario.titulo-dec-1.mx-4.mx-lg-5.p-2.p-lg-3 Sentir
                      p.mb-0 El aire que sale por la boca o nariz.

        .row.justify-content-center(data-aos="fade-down")
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 4.] Valores normales de la respiración
            
            .row.mb-5 
              .col-lg-7
                .tabla-a.tabla-per-1.color-acento-contenido
                  table(style="min-width: 350px;")
                    thead
                      tr
                        th Edad
                        th Respiraciones por minuto
                    tbody
                      tr
                        td.text-center Recién nacido
                        td.text-center 30 a 40 RPM
                      tr
                        td.text-center Niños mayores
                        td.text-center 18 a 24 RPM
                      tr
                        td.text-center Adulto
                        td.text-center 16 a 20 RPM
                      tr
                        td.text-center Anciano
                        td.text-center 12 a 16 RPM
              .col-lg-5.order-first.order-lg-last
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 400px;")

    .titulo-decorativo.my-5.mb-0(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 C. Presencia de signos de circulación
    
    .fondo-personalizado-1.bottom-1.f3
      .fondo-personalizado-1__contenido.pt-5
        p.mb-4(data-aos="fade") El pulso puede palparse en cualquier parte del cuerpo, generalmente donde una arteria va firme sobre un hueso. El pulso normal se palpa como una onda fuerte, indicando la frecuencia cardiaca. Se debe tener en cuenta que al paciente consciente se le toma el pulso radial ubicado en la parte interna de la muñeca. Presione firmemente con los dedos extendidos hasta que sienta el pulso.

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/41.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0(data-aos="fade") Si no se percibe el pulso, coloque los dedos índice y medio y deslice en el cuello presionando firmemente hasta que localice el pulso carotideo. Cuando llega donde un paciente y no responde al llamado ni a ningún estímulo, se le toma el pulso carotideo, pensando en la posibilidad de que esté en paro cardiaco.
        
        .row.justify-content-center(data-aos="fade")
          .col-lg-10
            .fondo-color-sistema-p.p-4.p-lg-5
              .row.align-items-center 
                .col-lg-10.col-md-9
                  p.mb-4 En caso de hemorragia externa, la aplicación de presión directa a la lesión con apósitos, elevando el miembro y haciendo presión a la arteria más cercana a la lesión va a poder controlar la mayoría o la totalidad de la hemorragia hasta que el paciente pueda ser movilizado a un centro hospitalario.
                  p.mb-0.fw-bold Los valores del pulso en los niños oscilan entre 90 y 120 latidos por minuto y en los adultos entre 60 y 100 latidos por minuto.
                .col-lg-2.col-md-3.order-first.order-md-last
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 105px;")

    .fondo-personalizado-1.f3.mt-5
      .fondo-personalizado-1__contenido.pb-2
        .titulo-decorativo.mb-5(data-aos="fade")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 D. Estado de conciencia (Método ADVI)
        
        p.mb-4(data-aos="flip-up") El nivel de conciencia del paciente puede ser evaluado correctamente mediante la aplicación de un estímulo y describiendo la respuesta del paciente mediante el uso del AVDI:

        .row.justify-content-center.mb-2(data-aos="flip-up")
          .col-lg-2.pe-lg-0
            .fondo-color-primario.h-100.text-center.align-content-center
              span.fw-bold.text-white(style="font-size: 43px;") A
          .col-lg-6.ps-lg-0
            .fondo-color-sistema-j.p-5
              p.mb-0 La persona se encuentra alerta, habla y está pendiente de lo que sucede en torno suyo.

        .row.justify-content-center.mb-2(data-aos="flip-up")
          .col-lg-2.pe-lg-0
            .fondo-color-primario.h-100.text-center.align-content-center
              span.fw-bold.text-white(style="font-size: 43px;") D
          .col-lg-6.ps-lg-0
            .fondo-color-sistema-j.p-5
              p.mb-0 La persona presenta respuesta solamente a la aplicación de algún estímulo doloroso.

        .row.justify-content-center.mb-2(data-aos="flip-up")
          .col-lg-2.pe-lg-0
            .fondo-color-primario.h-100.text-center.align-content-center
              span.fw-bold.text-white(style="font-size: 43px;") V
          .col-lg-6.ps-lg-0
            .fondo-color-sistema-j.p-5
              p.mb-0 La persona presenta respuesta verbal, aunque no está alerta puede responder coherentemente a las preguntas que se le realicen.

        .row.justify-content-center.mb-2(data-aos="flip-up")
          .col-lg-2.pe-lg-0
            .fondo-color-primario.h-100.text-center.align-content-center
              span.fw-bold.text-white(style="font-size: 43px;") I
          .col-lg-6.ps-lg-0
            .fondo-color-sistema-j.p-5
              p.mb-0 La persona no presenta ninguna de las respuestas anteriores, está inconsciente.

        
        .titulo-decorativo.my-5(data-aos="fade-right")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 E. Exposición con control de la hipotermia
        
        p.mb-4(data-aos="fade-left") Se realiza la exposición del paciente buscando lesiones que no son evidentes a simple vista en el primer contacto y que pueden estar por debajo de la ropa. El paciente debe protegerse de la hipotermia para evitar mayores complicaciones, cubriéndolo con una manta o recurso disponible.

        figure(data-aos="fade-left")
          img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 1030px;")








</template>

<script>
import TarjetaAudioPersonalizada from '@/components/TarjetaAudioPersonalizada.vue'
export default {
  name: 'Tema2',
  components: {
    TarjetaAudioPersonalizada,
  },
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

<style lang="sass">
.titulo-dec-1
  position: absolute
  left: 0
  right: 0
  top: 0
  transform: translateY(-60%)
  text-align: center
</style>
