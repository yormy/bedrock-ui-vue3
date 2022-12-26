<template>
draggable
</template>

<script setup lang="ts">
import {computed, defineProps, ref, useSlots} from "vue";

const hoverButton = ref(true);
const hoverDropdown = ref(false);

const slots = useSlots();

const props = defineProps({
    isDropdown: {
        type: Boolean,
        default: false,
    },
});

const displayDropdown = computed(() => {
    // if (!slots.dropdown) {
    //     return false;
    // }
    return hoverButton.value || hoverDropdown.value
})
</script>
