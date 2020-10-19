<template>
    <badge-card>
        <template v-slot:header>
            <h3>{{ fullName }}</h3>
            <base-badge :type="role" :caption="role.toUpperCase()"/>
        </template>
        <template v-slot:default>
            <p>{{ infoText }}</p>
        </template>
    </badge-card>
</template>

<script>
import BaseBadge from "@/components/BaseBadge";

export default {
    props: ['fullName', 'infoText', 'role'],
    components: {
        BaseBadge
    }
};
</script>

<style scoped>
section div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
