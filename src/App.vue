<template>
  <div id="app">
    <LandingHome msg="autochanges"/>
  </div>
</template>

<script>
import HomeLanding from './views/LandingHome.vue'

export default {
  name: 'App',
  components: {
    LandingHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
