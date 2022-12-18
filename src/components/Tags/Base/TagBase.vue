<template>
    <prime-tag value="taggie"></prime-tag>
</template>

<script setup lang="ts">
import PrimeTag from 'primevue/tag';
// import PrimeSplitButton from 'primevue/splitbutton';
// import {computed, defineProps, watch} from 'vue';
// import useButtonTypes from '../useButtonTypes';
// import useBadgeTypes from '../useBadgeTypes';
// import useButtonSizes from '../useButtonSizes';
//
// const props = defineProps({
//     type: {
//         type: String,
//         default: '',
//     },
//     badgeType: {
//         type: String,
//         default: '',
//     },
//
//     size: {
//         type: String,
//         default: '',
//     },
//
//     dropdown: {
//         type: Boolean,
//         default: false,
//     },
// });
//
// let buttonTypeClass = useButtonTypes(props.type);
//
// watch(
//     () => props.type,
//     (newValue) => {
//         buttonTypeClass = useButtonTypes(newValue);
//     }
// );
//
// let badgeClass = useBadgeTypes(props.badgeType);
//
// watch(
//     () => props.badgeType,
//     (newValue) => {
//         badgeClass = useBadgeTypes(newValue);
//     }
// );
//
// let buttonSizeClass = useButtonSizes(props.size);
//
// watch(
//     () => props.size,
//     (newValue) => {
//         buttonSizeClass = useButtonSizes(newValue);
//     }
// );
//
// const buttonClass = computed(() => {
//     return `${buttonSizeClass} ${buttonTypeClass}`;
// })
</script>
