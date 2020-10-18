<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">{{ viewDetailsFlag ? 'Hide' : 'Show' }} Details</button>
        <button @click="toggleIsFavorite">Toggle is favorite</button>
        <ul v-if="viewDetailsFlag">
            <li><strong>Phone:</strong> {{ phone }}</li>
            <li><strong>Email:</strong> {{ email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            viewDetailsFlag: false,
        }
    },
    methods: {
        toggleDetails() {
            this.viewDetailsFlag = !this.viewDetailsFlag
        },
        toggleIsFavorite() {
            this.$emit('toggle-favorite', this.id)
        }
    }
}
</script>

<style scoped>

</style>
