<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Primeros auxilios',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar el conocimiento de los estudiantes sobre los conceptos básicos de primeros auxilios, incluyendo la valoración inicial del paciente.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la posición anatómica de un paciente en decúbito supino?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Boca abajo.', esCorrecta: false },
            { id: 'b', texto: 'Boca arriba.', esCorrecta: true },
            {
              id: 'c',
              texto: 'De lado.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Sentado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué indica la frecuencia cardíaca por debajo de los valores normales?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Taquicardia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bradicardia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Taquipnea.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hipertensión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es el valor normal de la temperatura corporal?',
          imagen: require('@/assets/componentes/pregunta_3.svg'),
          opciones: [
            { id: 'a', texto: '34 º a 35 ºC.', esCorrecta: false },
            { id: 'b', texto: '37 º a 38 ºC.', esCorrecta: false },
            { id: 'c', texto: '36 º a 37 ºC.', esCorrecta: true },
            { id: 'd', texto: '39 º a 40 ºC.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué letra del método ABCDE se refiere a la apertura de la vía aérea y control de columna cervical?',
          imagen: require('@/assets/componentes/pregunta_4.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'A.', esCorrecta: true },
            { id: 'b', texto: 'B.', esCorrecta: false },
            { id: 'c', texto: 'C.', esCorrecta: false },
            { id: 'd', texto: 'D.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es la técnica correcta para tomar el pulso?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          opciones: [
            { id: 'a', texto: 'Usar el dedo pulgar.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Palpar una arteria con los dedos índice y medio.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Usar el dorso de la mano.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Colocar la mano sobre el pecho.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué significa la posición anatómica lateral de seguridad?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Paciente sobre cualquiera de sus laterales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Paciente boca abajo.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Paciente boca arriba.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Paciente sentado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es la frecuencia respiratoria normal para un adulto?',
          imagen: require('@/assets/componentes/pregunta_3.svg'),
          opciones: [
            {
              id: 'a',
              texto: '8 a 12 respiraciones por minuto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '20 a 24 respiraciones por minuto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '16 a 20 respiraciones por minuto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '10 a 14 respiraciones por minuto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué función principal cumple el sistema óseo?',
          imagen: require('@/assets/componentes/pregunta_4.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Producción de hormonas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Soporte y protección del cuerpo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Regulación de la temperatura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transporte de nutrientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué hacer si un paciente no responde a estímulos durante la evaluación primaria?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Iniciar RCP.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Esperar a que recupere la conciencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administrar medicamentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elevar las piernas del paciente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es la técnica para medir la presión arterial?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Usar únicamente el estetoscopio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Colocar el brazalete dos dedos arriba del pliegue del codo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tomar la presión en la pierna.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contar los latidos del corazón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
