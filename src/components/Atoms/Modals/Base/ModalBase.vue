<template>
    <span :class="typeClass">
        <prime-dialog v-model:visible="display" append-to="self" :modal="true" close-icon="y-icon icon icon-close icon-large" v-bind="$attrs">
            <slot></slot>
        </prime-dialog>
    </span>
</template>

<script setup lang="ts">
import PrimeDialog from 'primevue/dialog';
import { ref, computed } from 'vue';

const display = ref(false);

const props = defineProps({
    type: {
        type: String,
        required: false,
        default: 'info',
        validator(value: string) {
            return ['info', 'success', 'warning', 'danger'].includes(value);
        },
    },
});

const typeClass = computed(() => {
    if (props.type !== undefined) {
        return `y-modal-${props.type}`;
    }

    return '';
});
</script>

<style lang="scss"></style>
