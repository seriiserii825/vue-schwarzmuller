<template>
  <div>
    <h2>{{ vueTitle }}</h2>
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
      vueTitle: 'Vue Course Goals',
      courseGoalA: "Finish the course and learn Vue",
      courseGoalB: "Master and create amazing apps",
      vueLink: 'http://vuejs.org'
    }
  },
  methods: {
    outputGoals() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    }
  }
}
</script>

<style scoped>

</style>
