<template>
  <div>
    <div>DEx</div>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </div>
</template>

<script>
export default {
  name: "PokedexLanding",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
