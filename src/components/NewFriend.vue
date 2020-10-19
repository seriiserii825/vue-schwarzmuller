<template>
    <form @submit.prevent="addContact">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="enteredName">
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="tel" id="phone" v-model="enteredPhone">
        </div>
        <div>
            <label for="email">E-mail</label>
            <input type="email" id="email" v-model="enteredEmail">
        </div>
        <div>
            <button>Add contact</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
        }
    },
    methods: {
        addContact(){
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
            this.enteredName = ''
            this.enteredPhone = ''
            this.enteredEmail = ''
        }
    }
}
</script>

<style scoped>
#app input {
    font: inherit;
    padding: 0.15rem;
}
#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}
#app form div {
    margin: 1rem 0;
}
</style>
