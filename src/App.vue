<template>
    <div id="app">
        <app-monster-slayer/>
    </div>
</template>

<script>
import MonsterSlayer from './components/MonsterSlayer';

export default {
    name: 'App',
    components: {
        appMonsterSlayer: MonsterSlayer
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
