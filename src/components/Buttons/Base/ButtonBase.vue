<template>
    <div>
        <button-root class="p-button-raised" v-bind="$attrs"
                     @mouseover="hoverButton = true"
                     @mouseleave="hoverButton = false"
        >
            <slot></slot>
        </button-root>
        <div v-if="slots.dropdown" v-show="displayDropdown"
             @mouseover="hoverDropdown = true"
             @mouseleave="hoverDropdown = false"
        >
            <div class="dropdown-content">
                <slot name="dropdown"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonRoot from '../Root/ButtonRoot.vue';
import {computed, ref, useSlots} from "vue";

const hoverButton = ref(false);
const hoverDropdown = ref(false);

const slots = useSlots()

const displayDropdown = computed(() => {
    if (!slots.dropdown) {
        return false;
    }
    return hoverButton.value || hoverDropdown.value
})
</script>

