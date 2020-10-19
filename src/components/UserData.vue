<template>
    <div>
        <form @submit.prevent="addData">
            <input type="text" placeholder="Name" v-model="name">
            <input type="text" placeholder="Age" v-model="age">
            <button>Add data</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: ''
        }
    },
    methods: {
        addData() {
            this.$emit('add-data', {name: this.name, age: this.age})
        }
    }
}
</script>

<style scoped>

</style>
