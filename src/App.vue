<template>
  <div id="app">
    <Header />
    <div class="contents">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view class="child-view"></router-view>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
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
  max-width: 800px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
