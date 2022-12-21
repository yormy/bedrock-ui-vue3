<template>
    <span class="y-btn-dropdown">
        <span
            @mouseover="hoverButton = true"
            @mouseleave="hoverButton = false"
        >
            <slot name="trigger"></slot>
        </span>
        <div v-if="slots.dropdown" v-show="displayDropdown"
             @mouseover="hoverDropdown = true"
             @mouseleave="hoverDropdown = false"
        >
            <div class="dropdown-content">
                <slot name="dropdown"></slot>
            </div>
        </div>
    </span>
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
