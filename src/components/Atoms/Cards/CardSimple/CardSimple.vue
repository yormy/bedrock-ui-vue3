<template>
    <div class="y-card">
        <div class="card--title">{{ title }}</div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
});
</script>
