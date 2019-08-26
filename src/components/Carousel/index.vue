<template>
  <no-ssr>
    <carousel
      class="carousel"
      :per-page="1"
      :navigation-enabled="true"
      navigation-prev-label="〈"
      navigation-next-label="〉"
      :pagination-enabled="true"
    >
      <slide v-for="(img, i) in images" :key="`carousel__key-${i}`">
        <img class="carousel__slide__img" :src="img.src" :alt="img.alt">
      </slide>
    </carousel>
  </no-ssr>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
