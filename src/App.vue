<template>
  <div id="app">
    <app-goals></app-goals>
  </div>
</template>

<script>
import Goals from './components/Goals.vue';

export default {
  name: 'App',
  components: {
    appGoals: Goals
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
