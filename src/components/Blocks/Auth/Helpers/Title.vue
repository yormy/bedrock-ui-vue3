<template>
    <div class="text-center">
            <h1 class="y-auth-title">{{ title }}</h1>
            <h3 class="y-auth-subtitle">{{ subtitle }}</h3>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    subtitle: {
        type: String,
        default: '',
    },
});

</script>

