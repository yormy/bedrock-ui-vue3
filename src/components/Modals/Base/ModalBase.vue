<template>
    <prime-dialog v-model:visible="display" :modal="true" close-icon="y-icon icon icon-modal-close">
        <slot></slot>
    </prime-dialog>
</template>

<script setup lang="ts">
import PrimeDialog from 'primevue/dialog';
import { defineProps, ref, onMounted, watch } from 'vue';

const display = ref(false);
</script>
