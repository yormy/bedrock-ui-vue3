<template>
    <Button class="p-button-raised p-button-primary" :class="buttonClass" :badge-class="badgeClass"><slot></slot></Button>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
// @ts-ignore
import { useButtonTypes } from '../useButtonTypes.js'
// @ts-ignore
import { useBadgeTypes } from '../useBadgeTypes.js'
import {defineProps, watch} from "vue";

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

watch(() => props.type, (newValue) => {
    buttonClass = useButtonTypes(newValue);
});

let badgeClass = useBadgeTypes(props.badgeType);

watch(() => props.badgeType, (newValue) => {
    badgeClass = useBadgeTypes(newValue);
});

</script>


