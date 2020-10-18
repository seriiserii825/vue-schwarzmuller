<template>
    <div id="app">
        <header>
            <h1>FriendList</h1>
        </header>
        <ul>
            <friend-contact
                v-for="friend in friends"
                :key="friend.id"
                :friend="friend"
            />
        </ul>
    </div>
</template>

<script>
import FriendContact from './components/FriendContact.vue';

export default {
    data() {
        return {
            viewDetailsFlag: false,
            friends: [
                {id: 1, name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com'},
                {id: 2, name: 'Julie Jones', phone: '09876 543 221', email: 'julie@localhost.com'},
            ]
        }
    },
    components: {
        friendContact: FriendContact
    }
}
</script>

<style>
#app {
    min-height: 900px;
    margin: 0 auto;
    max-width: 600px;
}
* {
    box-sizing: border-box;
}
body {
    color: #333;
    height: 100vh;
    background: #f1f1f1;
}
img {
    max-width: 100%;
}
ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}
#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
#app li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}
#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
}
#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #f07;
    background-color: #f07;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
