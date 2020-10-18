<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>
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
    // props: ['name', 'phone', 'email', 'isFavorite'],
    props: {
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
            type: String,
            required: false,
            default: '0',
            validator: (value) => {
                return value === '0' || value === '1'
            }
        }
    },
    data() {
        return {
            viewDetailsFlag: false,
            friendIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleDetails() {
            this.viewDetailsFlag = !this.viewDetailsFlag
        },
        toggleIsFavorite() {
            if (this.friendIsFavorite === '0') {
                this.friendIsFavorite = '1'
            } else {
                this.friendIsFavorite = '0'
            }
        }
    }
}
</script>

<style scoped>

</style>
