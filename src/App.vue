<template>
    <div id="app">
        <header>
            <h1>FriendList</h1>
        </header>
        <add-contact @add-contact="addContact"></add-contact>
        <ul>
            <friend-contact
                v-for="friend in friends"
                :key="friend.id"
                :id="friend.id"
                :name="friend.name"
                :phone="friend.phone"
                :email="friend.email"
                :is-favorite="friend.isFavorite"
                @toggle-favorite="toggleFavoriteFriend"
                @delete="deleteContact"
            />
        </ul>
    </div>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend';

export default {
    data() {
        return {
            viewDetailsFlag: false,
            friends: [
                {
                    id: 1,
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                    isFavorite: true
                },
                {
                    id: 2,
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                    isFavorite: false
                },
            ]
        }
    },
    methods: {
        toggleFavoriteFriend(friendId) {
            const friendIdentifire = this.friends.find(item => {
                return item.id === friendId
            })

            friendIdentifire.isFavorite = !friendIdentifire.isFavorite
        },
        addContact(name, phone, email) {
            const newContact = {
                id: +Date.now(),
                name: name,
                phone: phone,
                email: email,
                isFavorite: false
            }
            this.friends.push(newContact)
        },
        deleteContact(friendId) {
            // this.friends = this.friends.filter(item => item.id !== friendId)
            this.friends = this.friends.splice(friendId, 1)
        }
    },
    components: {
        friendContact: FriendContact,
        addContact: NewFriend
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
#app form,
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
