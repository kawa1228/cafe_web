<template>
  <div class="photo">
    <p>オーナーの写真作品です。</p>
    <p>写真講座も開催しています。</p>
    <section class="photo__architecture">
      <div class="photo__architecture__title">
        <h2>Architecture</h2>
      </div>
      <Carousel v-if="isSp" :images="architectureImages"/>
      <Previewer v-else :previewItems="architectureItems"/>
    </section>
    <section class="photo__portrait">
      <div class="photo__portrait__title">
        <h2>Portrait</h2>
      </div>
      <Carousel v-if="isSp" :images="portraitImages"/>
      <Previewer v-else :previewItems="portraitItems"/>
    </section>
    <section class="photo__auther">
      <h2 class="photo__auther__name">小川博彦（おがわ ひろひこ）</h2>
      <div class="photo__auther__introduction">
        <p>1957年富士市生まれ。</p>
        <p>プロカメラマンとして39年。撮影は、商品、人物、風景写真など多岐にわたる。</p>
        <p>「掛川市市勢要覧2009」「新幹線掛川駅開業20周年記念誌」など、掛川近郊での撮影も多い。</p>
        <p>掛川市生涯学習講座「はじめてのフォトレッスン」、掛川ライフスタイルデザインカレッジ「ネイチャーフォトグラフィー」講師。『サイトフィッシングの戦術（つり人社刊）』の著者・撮影者でもある。</p>
        <p>2008年より掛川市倉真の古民家に居を構え、2014年より掛川市のまちなかにスタジオ兼のカフェを開業する。</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped>
</style>

<script>
import Carousel from '~/components/Carousel'
import Previewer from '~/components/Previewer'

export default {
  components: {
    Carousel,
    Previewer
  },
  data() {
    return {
      isSp: false,
      // sp用
      architectureImages: [
        { src: '/img/Architecture01.jpg', alt: '' },
        { src: '/img/Architecture02.jpg', alt: '' },
        { src: '/img/Architecture03.jpg', alt: '' }
      ],
      portraitImages: [
        { src: '/img/Portrait01.jpg', alt: '' },
        { src: '/img/Portrait02.jpg', alt: '' },
        { src: '/img/Portrait03.jpg', alt: '' }
      ],
      // pc用
      architectureItems: [
        { images: [{src: '/img/Architecture01.jpg'}], options: {defaultWidth: '375px', defaultHeight: '251px'} },
        { images: [{src: '/img/Architecture02.jpg'}], options: {defaultWidth: '167px', defaultHeight: '251px'} },
        { images: [{src: '/img/Architecture03.jpg'}], options: {defaultWidth: '167px', defaultHeight: '251px'} }
      ],
      portraitItems: [
        { images: [{src: '/img/Portrait01.jpg'}], options: {defaultWidth: '168px', defaultHeight: '251px'} },
        { images: [{src: '/img/Portrait02.jpg'}], options: {defaultWidth: '376px', defaultHeight: '251px'} },
        { images: [{src: '/img/Portrait03.jpg'}], options: {defaultWidth: '167px', defaultHeight: '251px'} }
      ]
    }
  },
  mounted() {
    this.checkIsSpDevice()
  },
  methods: {
    checkIsSpDevice() {
     const spWidth = 600
     this.isSp = window.innerWidth <= spWidth
    }
  }
}
</script>
