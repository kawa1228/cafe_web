<template>
  <div class="contents">
    <div class="contents__facebook">
      <iframe class="contents__facebook__iframe" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fm.facebook.com%2Fcreekscafe&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="184" height="275" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    </div>
    <section class="contents__main">
      <div class="contents__main__img">
        <img src="/img/CafeAppearance.jpg" alt="カフェ外観">
      </div>
      <div class="contents__main__text">
        <p>掛川城や図書館の近く、街中なのに木々に囲まれ、</p>
        <p>森の中にいるような雰囲気のカフェです。</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    const tabletWidth = 995
    if (window.innerWidth < tabletWidth ) {
      // タブレット以下でfacebookの幅を変更
      const facebook = document.querySelector('.contents__facebook__iframe')
      facebook.setAttribute('width', "500")
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
