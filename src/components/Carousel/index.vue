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
      <slide>
        <img class="carousel__slide__img" src='/img/Architecture01.jpg' alt="">
      </slide>
      <slide>
        <img class="carousel__slide__img" src='/img/Architecture02.jpg' alt="">
      </slide>
      <slide>
        <img class="carousel__slide__img" src='/img/Architecture03.jpg' alt="">
      </slide>
    </carousel>
  </no-ssr>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
