<template>
    <div class="y-tag-label" :class="labelClass">
        <div class="y-tag-label--pointer">
            <svg height="100%" viewBox="0 0 50 100">
                <path
                    d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                    fill="currentColor"
                />
            </svg>
            <div class="y-tag-label--content"></div>
        </div>
        <span class="y-tag-label--text">
            {{ label }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: 'dsfdsfds',
    },

    size: {
        type: String,
        validator(value: string) {
            return ['tiny', 'small', 'normal', 'large', 'extra-large'].includes(value);
        },
    },

    rotate: {
        type: Boolean,
        default: false,
    },

    type: {
        type: String,
        default: 'is-info-open',
        validator(value: string) {
            return [
                'is-info-open',
                'is-info-solid',
                'is-success-open',
                'is-success-solid',
                'is-warning-open',
                'is-warning-solid',
                'is-danger-open',
                'is-danger-solid',
                'is-disabled-open',
                'is-disabled-solid',
            ].includes(value);
        },
    },
});

const labelClass = computed(() => {
    return [props.rotate ? 'rotate' : '', props.size, props.type];
});
</script>
