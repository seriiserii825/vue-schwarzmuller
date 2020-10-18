<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ viewDetailsFlag ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="viewDetailsFlag">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ['friend'],
    data() {
        return {
            viewDetailsFlag: false
        }
    },
    methods: {
        toggleDetails() {
            this.viewDetailsFlag = !this.viewDetailsFlag
        }
    }
}
</script>

<style scoped>

</style>
