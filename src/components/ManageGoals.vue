<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" v-model="inputValue">
        <button @click="sendMessage">Send message</button>

        <error-alert v-if="inputIsInvalid">
            <h2>Have an error</h2>
            <p>Input don't must to be empty!!!!</p>
            <button @click="changeInputIsInvalid">Ok</button>
        </error-alert>
    </div>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert";

export default {
    data() {
        return {
            inputIsInvalid: false,
            inputValue: ''
        }
    },
    methods: {
        sendMessage() {
            if (this.inputValue === '') {
                this.showAlert()
            }
        },
        showAlert() {
            this.inputIsInvalid = true
        },
        changeInputIsInvalid() {
            this.inputIsInvalid = false
        }
    },
    components: {
        ErrorAlert
    }
}
</script>

<style scoped>

</style>
