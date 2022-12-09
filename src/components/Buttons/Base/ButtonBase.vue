<template>
    <prime-button :class="buttonClass" :badge-class="badgeClass"><slot></slot></prime-button>
</template>

<script setup lang="ts">
import PrimeButton from 'primevue/button';
import { defineProps, watch } from 'vue';
import useButtonTypes from '../useButtonTypes';
import useBadgeTypes from '../useBadgeTypes';

const props = defineProps({
    type: {
        type: String,
        default: '',
    },
    badgeType: {
        type: String,
        default: '',
    },
});

let buttonClass = useButtonTypes(props.type);

watch(
    () => props.type,
    (newValue) => {
        buttonClass = useButtonTypes(newValue);
    }
);

let badgeClass = useBadgeTypes(props.badgeType);

watch(
    () => props.badgeType,
    (newValue) => {
        badgeClass = useBadgeTypes(newValue);
    }
);
</script>
