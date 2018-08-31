<template>
  <div class="Top">
    <div class="description">
      <p>{{config.description}}</p>
    </div>

    <h2>エピソード</h2>
    <ul class="episodeList">
      <li v-for="({uid, link, title, description}, key) in episodeList" :key="key">
        <router-link :to="link">
          <div>
            <h3>{{`${uid}: ${title}`}}</h3>
            <p>{{description}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Top',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'episodeList',
      'config'
    ])
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 0.7rem;
  font-size: 1.3rem;
}

.episodeList {
  padding-left: 0;
}
.episodeList > li {
  border-bottom: solid 1px #ccc;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  list-style: none;
}
.episodeList > li:last-child {
  border-bottom: none;
}

.episodeList h3,
.episodeList p {
  color: #333333;
}
.episodeList a {
  padding: 1rem 0.5rem 1rem 0.5rem;
  display: block;
  transition: background-color 0.4s;
}
.episodeList a:hover {
  background: #f5f5f5;
  text-decoration: none;
}
</style>
