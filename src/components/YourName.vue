<template>
    <div class="assignment">
        <h2>Events in action</h2>
        <button @click="changeCounter(5)">Add 5</button>
        <button @click="changeCounter(1)">Add 1</button>
        <p>Result: {{ result }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
            result: 0
        }
    },
    methods: {
        changeCounter(value) {
            this.counter += value
        }
    },
    watch: {
        counter() {
            const result = this.counter

            setTimeout(() => {
                if (result === this.counter) {
                    this.counter = 0
                }
            }, 5000)

            if (this.counter < 37) {
                this.result = 'Not there yet'
            } else {
                this.result = 'Too much'
            }
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
