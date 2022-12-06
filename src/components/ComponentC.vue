<template>
    <div class="y-test">ccccccc {{ msg }}</div>
</template>

<script setup lang="ts">
defineProps({
    msg: {
        type: String,
        default: '',
    },
});
</script>
