<template>
  <div>
    <h2>{{ courseGoal }}</h2>
    <p>{{ outputGoals() }}</p>
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
  methods: {
    outputGoals() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return 'Learn Vue!'
      } else {
        return 'Master Vue'
      }
    }
  }
}
</script>

<style scoped>

</style>
