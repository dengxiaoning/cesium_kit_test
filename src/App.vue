<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/postProcessStages.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  background-color: #f8f8f8;
  font-size: 14px;
  overflow: hidden;
  position: relative;
}
</style>
