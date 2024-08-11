<template lang="pug">
  .tarjeta-audio.pe-4
    .row.align-items-center.mb-4
      .col
        .tarjeta-audio__texto.h5.mb-0(v-html="texto")
      .col-auto.ps-0
        .audio.position-relative(@mouseover.once="$emit('audio-hover')")
          slot
          .spinner-border.spinner-border-sm(v-if="!audioCanPlay" role="status")
            span.visually-hidden Loading..
          button.audio__btn(v-else-if="state ==='pause'"  @click="play")
            img(src="@/assets/template/audio.svg")
          button.audio__btn(v-else @click="pause")
            img(src="@/assets/template/pause.svg")
    .row
      .col-12
        .tarjeta-audio__input.mt-2(v-if="!noBarra")
          input(
            v-model="sliderVal",
            ref="sliderElement",
            type="range" max="100", 
            :style="{'background-size': `${this.sliderVal}% 100%`}",
            @input="onSliderMove"
          )
          .d-flex.justify-content-between.pt-1
            span {{ audioRepFormat }}
            span {{ audioDurationFormat }}
  
  </template>

<script>
import audioMixins from '../mixins/audioMixins2'
export default {
  name: 'TarjetaAudioPersonalizada',
  mixins: [audioMixins],
  props: {
    texto: {
      type: String,
      required: true,
    },
    noBarra: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    sliderVal: 0,
    audioRepFormat: '0:00',
    audioDurationFormat: '0:00',
  }),
  mounted() {
    if (!this.noBarra) {
      this.audioElement.ontimeupdate = () => {
        const currentTime = this.audioElement.currentTime
        const minutes = Math.floor(currentTime / 60)
        const seconds = Math.floor(currentTime % 60)
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds
        const formattedCurrentTime = `${minutes}:${formattedSeconds}`
        this.audioRepFormat = formattedCurrentTime

        this.sliderVal =
          (this.audioElement.currentTime / this.audioDuration) * 100
      }
      this.audioElement.onloadedmetadata = () => {
        const duration = this.audioDuration
        const minutos = Math.floor(duration / 60)
        const segundos = Math.floor(duration % 60)
        const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos
        const formattedDuration = `${minutos}:${formatoSegundos}`
        this.audioDurationFormat = formattedDuration
      }
    }
  },
  methods: {
    onSliderMove() {
      this.audioElement.currentTime =
        (this.sliderVal / 100) * this.audioDuration
    },
  },
}
</script>

<style lang="sass"></style>
