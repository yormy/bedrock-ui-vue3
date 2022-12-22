<template>
    <prime-message-base
        :severity="severity"
        :close-icon="closeIcon"
        :icon="mainIcon"
        v-bind="$attrs"
    >
        <slot></slot>
    </prime-message-base>
</template>

<script setup lang="ts">
import PrimeMessageBase from 'primevue/message';
import { computed } from "vue";

const props = defineProps({
    type: {
        type: String,
        validator(value: string) {
            return [
                'info',
                'success',
                'warning',
                'danger',
            ].includes(value)
        }
    },
});

const severity = computed(() => {
    if (props.type === 'danger') {
        return 'error';
    }
    if (props.type === 'warning') {
        return 'warn';
    }
    return props.type;
})

const mainIcon = computed(() => {
    let iconize = 'y-icon icon ';
    if (props.type === 'info') {
        return iconize + 'icon-info';
    }
    if (props.type === 'success') {
        return iconize + 'icon-success';
    }
    if (props.type === 'warning') {
        return iconize + 'icon-warning';
    }
    if (props.type === 'danger') {
        return iconize + 'icon-danger';
    }
})

const closeIcon = 'y-icon icon icon-close';
</script>
