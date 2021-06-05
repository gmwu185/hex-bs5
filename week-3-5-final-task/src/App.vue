<script>
// import Home from './components/HelloWorld.vue';
export default {
  data() {
    return {
      text: 'Jimmy 由 webpack 所建立的 vue.js 環境',
    };
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <h1>{{ text }}</h1>
      <div class="u-text-center">
        <router-link to="/">home</router-link>
        |
        <router-link to="hello">hello</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  // display: flex;
}
.container {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.u-text-center {
  text-align: center;
}
</style>
