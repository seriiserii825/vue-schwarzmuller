<template>
    <div class="error-alert">
        <slot></slot>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.error-alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    width: 300px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .4);
    background-color: white;
}
</style>
