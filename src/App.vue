<template>
    <div id="app">
        <div>
            <the-header></the-header>
            <badge-list></badge-list>
            <user-info
                :full-name="activeUser.name"
                :info-text="activeUser.description"
                :role="activeUser.role"
            ></user-info>
        </div>
    </div>
</template>

<script>
import BadgeList from "@/components/BadgeList"
import TheHeader from "@/components/TheHeader"
import UserInfo from "@/components/UserInfo";

export default {
    data() {
        return {
            activeUser: {
                name: 'Maximilian Schwarzmüller',
                description: 'Site owner and admin',
                role: 'admin',
            },
        }
    },
    components: {
        badgeList: BadgeList,
        theHeader: TheHeader,
        userInfo: UserInfo,
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
