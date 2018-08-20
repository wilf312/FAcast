<template>
  <div id="app">
    <Header />
    <div class="contents">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.contents {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
