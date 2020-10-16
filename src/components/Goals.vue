<template>
  <div>
    <h2>{{ courseGoal }}</h2>
    <p>Vue js
      <a target="_blank" :href="vueLink">link</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseGoal: "Finish the course and learn Vue",
      vueLink: 'http://vuejs.org'
    }
  },
}
</script>

<style scoped>

</style>
