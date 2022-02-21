
<script>
// import { RouterLink } from "vue-router";

export default {
  name: "LandingHome",
  props: {
    msg: String,
  },
};
</script>

<template>
  <div>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/pokedex">Go to About</router-link>x
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
