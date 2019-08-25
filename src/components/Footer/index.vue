<template>
  <footer class="footer">
    <p class="footer__text">〒436-0079 静岡県掛川市掛川1070-12</p>
    <a target="_blank" href="https://www.facebook.com/creekscafe">
      <FaceBookLogo class="footer__logo"/>
    </a>
  </footer>
</template>

<script>
import FaceBookLogo from '~/assets/svg/FaceBookLogo.svg'

export default {
  components: {
    FaceBookLogo
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
