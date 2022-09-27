<template>
  <div class="main-container">
    <the-header title="Study App"></the-header>
    <the-cards></the-cards>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheCards from "./components/learning-data/TheCards.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheCards,
  },
  data() {
    return {};
  },
  // provide() {
  //   return {
  //     storedDataP: this.storedData,
  //   };
  // },
};
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
