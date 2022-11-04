<script setup lang="ts">
defineProps({
    msg: {
        type: String,
        default: '',
    },
});
</script>

<template>
    hello {{ msg }}
</template>
