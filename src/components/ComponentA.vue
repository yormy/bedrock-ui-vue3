<template>
    <div>hello {{ msg }}</div>
</template>

<script setup lang="ts">
defineProps({
    msg: {
        type: String,
        default: '',
    },
});
</script>
