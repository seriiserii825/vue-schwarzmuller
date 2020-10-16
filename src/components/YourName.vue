<template>
    <div class="assignment">
        <header>
            <h1>Vue Dynamic Styling</h1>
        </header>
        <section id="styling">
            <div class="demo"></div>
            <div class="demo"></div>
            <div class="demo"></div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            demos: [
                {id: 1, title: "demo1"},
                {id: 2, title: "demo2"},
                {id: 3, title: "demo3"}
            ]
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
    background-color: #4fc08d;
    color: white;
    text-align: center;
}
#styling {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
}
.demo {
    width: calc(100% - 32px);
    height: 100px;
    margin: 16px;
    border: 2px dashed #ccc;
}
</style>
