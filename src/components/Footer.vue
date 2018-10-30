<template>
  <div class="Footer">
    <div :class="['FooterInner', deviceType]">
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
        <div>
          <p>新しいエピソードの配信を購読できます。</p>
          <p><a href="https://itunes.apple.com/jp/podcast/facast/id1440324892?mt=2" target="_blank">iTunesで購読</a></p>
          <p><a href="https://facast.net/feed.xml" target="_blank">RSSで購読</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Footer',
  computed: {
    ...mapGetters([
      'config'
    ]),
    ...mapState([
      'deviceType'
    ])
  }
}
</script>

<style scoped lang="stylus">
.Footer
  padding: 30px 0
  background: #fafafa

.FooterInner
  max-width: 800px
  display: flex
  flex-direction: row
  margin:  0 auto

  &.SP
    flex-direction: column


.FooterContent
  box-sizing: border-box
  padding: 0 10px

  h3
    font-size: 1.6rem

</style>
