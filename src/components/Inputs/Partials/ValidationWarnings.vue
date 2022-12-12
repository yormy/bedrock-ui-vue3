<template>
    <div v-for="warning in warnings" :key="warning.message">
        <small :id="fieldId + '-warning'" class="p-warning">{{ warning.message }}</small>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    attributeName: {
        type: String,
        default: '',
    },
    warnings: {
        type: Object,
        default() {
            return {};
        },
    },
});
</script>
