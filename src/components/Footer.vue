<template>
  <div class="Footer">
    <div class="FooterInner">
      <div class="FooterContent">
        <h3>{{config.name}}とは？</h3>
        <p>{{config.name}}は、フロントエンド、車などの雑談を中心に、いま現在フリーランスで仕事をする人達が話す、暇をつぶすためのためのラジオです。</p>
      </div>
      <div class="FooterContent">
        <h3>
          <a
            target="_blank"
            :href="`https://twitter.com/search?src=typd&q=%23${config.hashtag}`">
            {{config.hashtagSharp}}
          </a>
        </h3>

        <p>{{config.name}} への感想や質問などは、Twitterでハッシュタグ
          <a
            target="_blank"
            :href="`https://twitter.com/search?src=typd&q=%23${config.hashtag}`">
            {{config.hashtagSharp}}
          </a>をご利用ください。
        </p>
      </div>
      <div class="FooterContent">
        <h3>購読</h3>
        <p>
          新しいエピソードの配信を購読できます。
          iTunesで購読
          Androidで購読
          Pushdogで購読
          RSSで購読
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Footer',
  computed: {
    ...mapGetters([
      'config'
    ])
  }
}
</script>

<style scoped>
.Footer {
  padding: 30px 0;
  background: #fafafa;
}
.FooterInner {
  max-width: 800px;
  display: flex;
  flex-direction: row;
  margin:  0 auto;
}
.FooterContent {
  box-sizing: border-box;
  padding: 0 10px;
}

.FooterContent h3 {
  font-size: 1.6rem;
}
</style>
