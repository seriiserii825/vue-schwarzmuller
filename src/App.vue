<template>
    <div id="app">
        <app-your-name></app-your-name>
    </div>
</template>

<script>
import YourName from './components/YourName';

export default {
    name: 'App',
    components: {
        appYourName: YourName
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
    color: white;
    height: 100vh;
    background: #00523f;
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
