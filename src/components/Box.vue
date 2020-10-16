<template>
    <div
        @click="selectBox"
        :class="['demo' ,{'active' : boxSelected}]"
    >{{ boxName.title }}
    </div>
</template>

<script>
export default {
    props: ['boxName'],
    data() {
        return {
            boxSelected: false
        }
    },
    methods: {
        selectBox() {
            console.log('clicked');
            this.boxSelected = !this.boxSelected
        }
    },
}
</script>

<style scoped>

</style>
