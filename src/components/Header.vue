<template>
  <div class="Header">
    <div class="HeaderInner">
      <div class="HeaderLink">
        <h1>
          <router-link :to="{name: 'Top'}" v-text="'FAcast'" />
        </h1>
        <transition
          name="fade"
          mode="out-in"
        >
          <p v-if="!isTopPage"><router-link :to="{name: 'Top'}" v-text="'< 一覧へ戻る'" /></p>
        </transition>
      </div>
      <div class="rss">
        <div class="rssButton"
          @click="copyRss">RSSを購読</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Header',
  computed: {
    isTopPage () {
      return this.$route.name === 'Top'
    },
    ...mapGetters([
      'config'
    ])
  },
  methods: {
    copyRss: function () {
      const rss = this.config.rss
      const temp = document.createElement('div')
      temp.appendChild(document.createElement('pre')).textContent = rss

      temp.style.position = 'fixed'
      temp.style.left = '-100%'

      document.body.appendChild(temp)
      document.getSelection().selectAllChildren(temp)

      const result = document.execCommand('copy')

      document.body.removeChild(temp)

      if (result) {
        alert('コピーしました')
      }
    }
  }
}
</script>

<style scoped>
.Header {
  box-sizing: border-box;
  padding: 0 0 0 10px;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #f5f5f5;
  background: #fafafa;
}

.HeaderInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.HeaderLink {
  display: flex;
  align-items: baseline;
}

h1, p {
  margin-bottom: 0;
}

h1 a {
  color: black;
  text-decoration: none;
}
p {
  margin-left: 1rem;
  font-size: 1rem;
}

.rss {
  padding: 10px;
}
.rssButton {
  padding: 1px 10px;
  border: solid 1px #555555;
  border-radius: 10px;
  transition: background 0.3s;
  cursor: pointer;
}
.rssButton:hover {
  background: #dddddd;
}
</style>
