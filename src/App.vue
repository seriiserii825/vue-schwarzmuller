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
}
* {
    box-sizing: border-box;
}
body {
    height: 100vh;
    background: linear-gradient(#1d3131, #131f1f);
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
