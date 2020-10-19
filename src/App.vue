<template>
    <div id="app">
        <div>
            <header>
                <h1>Component Practice</h1>
            </header>
            <active-user
                :name="name"
                :age="age"
            />
            <user-data
                @add-data="addData"
            />
        </div>
    </div>
</template>

<script>
// Task 1:
// Add two components to the app:
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component

import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

export default {
    data() {
        return {
            name: 'Serii',
            age: 44
        }
    },
    methods: {
      addData(data){
          this.name = data.name
          this.age = data.age
      }
    },
    components: {
        activeUser: ActiveUser,
        userData: UserData
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
</style>
