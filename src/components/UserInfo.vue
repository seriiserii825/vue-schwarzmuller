<template>
    <badge-card>
        <div class="badge-card__header">
            <h3>{{ fullName }}</h3>
            <base-badge :type="role" :caption="role.toUpperCase()"/>
        </div>
        <p>{{ infoText }}</p>
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
