<template>
    <div class="assignment">
        <h2>Events in action</h2>
        <!--        show alert-->
        <p>
            <button @click="showAlert">Show alert</button>
        </p>
        <input type="text" @input="firstInput = $event.target.value">
        <p>{{ firstInput }}</p>
        <input type="text" @keyup.enter="secondInput = $event.target.value">
        <p>{{ secondInput }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstInput: '',
            secondInput: ''
        }
    },
    methods: {
        showAlert() {
            alert('show alert')
        }
    }
}
</script>

<style scoped>
.assignment {
    margin: 280px auto;
    max-width: 600px;
    text-align: center;
}
section {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
}
h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #970076;
    margin: 0 0 1rem 0;
}
p {
    font-size: 1.25rem;
    font-weight: bold;
    background-color: #970076;
    padding: 0.5rem;
    color: white;
    border-radius: 25px;
}
input {
    font: inherit;
    border: 1px solid #ccc;
}
input:focus {
    outline: none;
    border-color: #1b995e;
    background-color: #d7fdeb;
}
button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #f07;
    background-color: #f07;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
button:hover,
button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
