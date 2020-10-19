<template>
    <div>
        <h3>User: {{ name }}</h3>
        <h2>Age: {{ age }}</h2>
    </div>
</template>

<script>
export default {
    props: ['name', 'age']
}
</script>

<style scoped>

</style>
