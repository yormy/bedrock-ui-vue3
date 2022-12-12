<template>
    <div v-for="success in successes" :key="success.message">
        <small :id="fieldId + '-success'" class="p-success">{{ success.message }}</small>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    successes: {
        type: Object,
        default() {
            return {};
        },
    },

    fieldId: {
        type: String,
        default: '',
    },
});
</script>
