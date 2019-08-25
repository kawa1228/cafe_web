<template>
  <div class="photo">
    <p>オーナーの写真作品です。</p>
    <p>写真講座も開催しています。</p>
    <section class="photo__architecture">
      <div class="photo__architecture__title">
        <h2>Architecture</h2>
      </div>
      <!-- TODO: コンポーネントに分ける -->
      <no-ssr v-if="isSp">
        <carousel
          class="photo__architecture__carousel"
          :per-page="1"
          :navigation-enabled="true"
          navigation-prev-label="〈"
          navigation-next-label="〉"
          :pagination-enabled="true"
        >
          <slide>
            <img class="photo__architecture__carousel__slide__img" src='/img/Architecture01.jpg' alt="">
          </slide>
          <slide>
            <img class="photo__architecture__carousel__slide__img" src='/img/Architecture02.jpg' alt="">
          </slide>
          <slide>
            <img class="photo__architecture__carousel__slide__img" src='/img/Architecture03.jpg' alt="">
          </slide>
        </carousel>
      </no-ssr>
      <div v-else class="photo__architecture__contents">
        <no-ssr placeholder="Loading...">
          <vue-previewer v-for="(item, i) in ArchitectureImg" :images="item.images" mode="image" :options="item.options" :key="`architecture__img--key-${i}`"/>
        </no-ssr>
      </div>
    </section>
    <section class="photo__portrait">
      <div class="photo__portrait__title">
        <h2>Portrait</h2>
      </div>
      <no-ssr v-if="isSp">
        <carousel
          class="photo__architecture__carousel"
          :per-page="1"
          :navigation-enabled="true"
          navigation-prev-label="〈"
          navigation-next-label="〉"
          :pagination-enabled="true"
        >
          <slide>
            <img class="photo__architecture__carousel__slide__img" src='/img/Portrait01.jpg' alt="">
          </slide>
          <slide>
            <img class="photo__architecture__carousel__slide__img" src='/img/Portrait02.jpg' alt="">
          </slide>
          <slide>
            <img class="photo__architecture__carousel__slide__img" src='/img/Portrait03.jpg' alt="">
          </slide>
        </carousel>
      </no-ssr>
      <div v-else class="photo__portrait__contents">
        <no-ssr placeholder="Loading...">
          <vue-previewer v-for="(item, i) in PortraitImg" :images="item.images" mode="image" :options="item.options" :key="`portrait__img--key-${i}`"/>
        </no-ssr>
      </div>
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
export default {
  data() {
    return {
      isSp: false
    }
  },
  mounted() {
    const spWidth = 600
    this.isSp = window.innerWidth <= spWidth
  },
  computed: {
    ArchitectureImg() {
      return [
        { images: [{src: '/img/Architecture01.jpg'}], options: {defaultWidth: '375px', defaultHeight: '251px'} },
        { images: [{src: '/img/Architecture02.jpg'}], options: {defaultWidth: '167px', defaultHeight: '251px'} },
        { images: [{src: '/img/Architecture03.jpg'}], options: {defaultWidth: '167px', defaultHeight: '251px'} }
      ]
    },
    PortraitImg() {
      return [
        { images: [{src: '/img/Portrait01.jpg'}], options: {defaultWidth: '168px', defaultHeight: '251px'} },
        { images: [{src: '/img/Portrait02.jpg'}], options: {defaultWidth: '376px', defaultHeight: '251px'} },
        { images: [{src: '/img/Portrait03.jpg'}], options: {defaultWidth: '167px', defaultHeight: '251px'} }
      ]
    }
  }
}
</script>
