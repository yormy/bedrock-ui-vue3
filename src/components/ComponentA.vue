<script setup lang="ts">
defineProps({
    msg: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div>hello {{ msg }}</div>
</template>
