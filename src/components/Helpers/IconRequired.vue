<template>
    <span v-if="required" class="p-error">
        <small>*</small>
    </span>
</template>

<script setup lang="ts">
const props = defineProps({
    required: {
        type: Boolean,
        default: false,
    },
});
</script>
