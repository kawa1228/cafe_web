<template>
  <div class="about">
    <div class="about__text">
      <p>イタリアンを中心に、お料理・お酒等をリーズナブルなお値段でご提供しています。</p>
      <p>本業はプロカメラマンのため、写真の仕事があるときはお休みになります。</p>
      <p>いつやっているかわからないようなカフェですが、もしよかったら足をのばしてみてください。</p>
    </div>
    <div class="about__map">
      <iframe class="about__map__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560.0148341656708!2d138.01663924115505!3d34.77540776617764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601af999c28ea8e5%3A0x92129273165cea45!2sCreek&#39;s+Caf%C3%A9!5e0!3m2!1sja!2sjp!4v1564480007835!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <dl class="about__main">
      <div class="about__main__list">
        <dt class="about__main__list__term">住所</dt>
        <div class="about__main__list__description">
          <dd>〒436-0079　静岡県掛川市掛川1070-12</dd>
          <dd>JR東海道本線「掛川駅」より徒歩10分</dd>
        </div>
      </div>
      <div class="about__main__list">
        <dt class="about__main__list__term">営業時間</dt>
        <div class="about__main__list__description">
          <dd><a href="https://www.facebook.com/creekscafe">facebookページ</a>をご確認ください。</dd>
          <dd>※通常は(水)～(土)、夕方6時からの営業です。</dd>
        </div>
      </div>
      <div class="about__main__list">
        <dt class="about__main__list__term">ご予約・お問い合わせ</dt>
        <div class="about__main__list__description">
          <dd><a href="https://www.facebook.com/messages/t/creekscafe">facebookページ</a>からご連絡ください。</dd>
        </div>
      </div>
      <ul class="about__main__supplement">
        <li>写真講座を開催しています。</li>
        <li>日中は貸しスペースとしてもご利用いただけます。</li>
      </ul>
    </dl>
  </div>
</template>

<script>
export default {
  mounted() {
    const spWidth = 600
    if (window.innerWidth <= spWidth ) {
      // spのmap幅を変更
      const map = document.querySelector('.about__map__iframe')
      // TODO: set width window.innnerWidthができないので確認
      // とりあえずSE幅に合わせる
      map.setAttribute('width', '320')
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
