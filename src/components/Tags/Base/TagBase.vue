<template>
    <span class="y-tag-chip" :class="labelClass">
        <span v-if="icon" :class="icon"></span>{{ label }}
    </span>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
    label: {
        type: String,
        default: 'dsfdsfds',
    },

    icon: {
        type: String,
        default: '',
    },

    shape: {
        type: String,
        validator(value: string) {
            return [
                'rounded',
                'square',
            ].includes(value)
        }
    },

    size: {
        type: String,
        validator(value: string) {
            return [
                'tiny',
                'small',
                'normal',
                'large',
                'extra-large',
            ].includes(value)
        }
    },

    type: {
        type: String,
        default: 'is-info-open',
        validator(value: string) {
            return [
                'is-info-open',
                'is-info-closed',
                'is-success-open',
                'is-success-closed',
                'is-warning-open',
                'is-warning-closed',
                'is-danger-open',
                'is-danger-closed',
                'is-disabled-open',
                'is-disabled-closed'
            ].includes(value)
        }
    },
});

const labelClass = computed(() => {
    return [
        props.shape,
        props.size,
        props.type,
    ];
})

</script>
