<template>
    <div class="y-button-row flex flex-row-reverse ">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps({
    msg: {
        type: String,
        default: '',
    },
});
</script>
