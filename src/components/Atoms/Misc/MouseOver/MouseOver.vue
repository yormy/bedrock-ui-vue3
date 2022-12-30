<template>
    <span class="y-btn-dropdown">
        <span class="hover-trigger">
            <slot name="trigger"></slot>

            <span class="dropdown-content2">
                <slot name="dropdown"></slot>
            </span>
        </span>
    </span>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';

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
    return hoverButton.value || hoverDropdown.value;
});
</script>
