<template>
    <prime-dialog header="Header" v-model:visible="display" >
        <slot></slot>
    </prime-dialog>
</template>

<script setup lang="ts">
import PrimeDialog from 'primevue/dialog';
import { defineProps, ref, onMounted, watch } from 'vue';
const display = ref(false);

</script>
