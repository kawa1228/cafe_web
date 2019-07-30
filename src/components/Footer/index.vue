<template>
  <footer class="footer">
    <p class="footer__text">〒436-0079 静岡県掛川市掛川1070-12</p>
    <FaceBookLogo class="footer__logo"/>
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

<style lang="scss" scoped>
.footer {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #000;

  &__text {
    font-family: $default-jp-font-family;
    color: #fff;
    font-size: 12px;
  }

  &__logo {
    width: 100%;
    margin-top: 9px;
  }
}
</style>
