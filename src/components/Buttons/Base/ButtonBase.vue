<template>
    <prime-button :class="buttonClass" :badge-class="badgeClass"><slot></slot></prime-button>
</template>

<script setup lang="ts">
import PrimeButton from 'primevue/button';
import {computed, defineProps, watch} from 'vue';
import useButtonTypes from '../useButtonTypes';
import useBadgeTypes from '../useBadgeTypes';
import useButtonSizes from '../useButtonSizes';

const props = defineProps({
    type: {
        type: String,
        default: '',
    },
    badgeType: {
        type: String,
        default: '',
    },

    size: {
        type: String,
        default: '',
    },
});

let buttonTypeClass = useButtonTypes(props.type);

watch(
    () => props.type,
    (newValue) => {
        buttonTypeClass = useButtonTypes(newValue);
    }
);

let badgeClass = useBadgeTypes(props.badgeType);

watch(
    () => props.badgeType,
    (newValue) => {
        badgeClass = useBadgeTypes(newValue);
    }
);

let buttonSizeClass = useButtonSizes(props.size);

watch(
    () => props.size,
    (newValue) => {
        buttonSizeClass = useButtonSizes(newValue);
    }
);

const buttonClass = computed(() => {
    return `${buttonSizeClass} ${buttonTypeClass}`;
})
</script>
