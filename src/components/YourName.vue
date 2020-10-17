<template>
    <div class="assignment">
        <header>
            <h1>Vue Course Goals</h1>
        </header>
        <section id="user-goals">
            <h2>My course goals</h2>
            <input type="text" v-model="enteredValue"/>
            <button @click="addTask">Add task</button>
            <ul v-if="showList">
                <li
                    :key="i"
                    v-for="(task, i) in tasks"
                >{{ task }}
                </li>
            </ul>
            <div>
                <button @click="toggleList">{{ toggleListButtonText }}</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: [],
            enteredValue: '',
            showList: true,
            toggleListButtonText: 'Hide / Show list'
        }
    },
    methods: {
        addTask() {
            if (this.enteredValue !== '') {
                this.tasks.push(this.enteredValue)
            }
        },
        toggleList() {
            this.showList = !this.showList
        }
    },
    watch: {
        showList() {
            if (this.showList) {
                this.toggleListButtonText = 'Hide'
            } else {
                this.toggleListButtonText = 'Show'
            }
        }
    }
}
</script>

<style scoped>
header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    background-color: #1b995e;
    color: white;
    text-align: center;
}
#user-goals {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
}
#user-goals h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #1b995e;
    margin: 0 0 1rem 0;
}
#user-goals ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}
#user-goals li {
    margin: 1rem 0;
    font-size: 1.25rem;
    font-weight: bold;
    background-color: #8ddba4;
    padding: 0.5rem;
    color: #1f1f1f;
    border-radius: 25px;
}
#user-goals input {
    font: inherit;
    border: 1px solid #ccc;
}
#user-goals input:focus {
    outline: none;
    border-color: #1b995e;
    background-color: #d7fdeb;
}
#user-goals button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #f07;
    background-color: #f07;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#user-goals button:hover,
#user-goals button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
li {
    cursor: pointer;
}

</style>
