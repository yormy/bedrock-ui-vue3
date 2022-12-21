<template>
    <div v-if="isDropdown">
        <button-root class="p-button-raised" iconPos="right" icon="y-icon icon icon-dropdown" v-bind="$attrs"
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

    <div v-else>

        <div v-if="withBanner">
            <div class='y-button-banner' >
                <button-root class="p-button-raised" v-bind="$attrs"><slot></slot></button-root>
                <div class="ribbon" :style="`padding-left:${padding}px`">{{ bannerText }}</div>
            </div>
        </div>

        <div v-else>
            <button-root class="p-button-raised" v-bind="$attrs"><slot></slot></button-root>
        </div>


    </div>

</template>

<script setup lang="ts">
import ButtonRoot from '../Root/ButtonRoot.vue';
import {computed, defineProps, ref, useSlots} from "vue";

const hoverButton = ref(false);
const hoverDropdown = ref(false);

const slots = useSlots()

const props = defineProps({
    isDropdown: {
        type: Boolean,
        default: false,
    },

    withBanner: {
        type: Boolean,
        default: false,
    },

    bannerText: {
        type: String,
        default: '',
    },

    bannerTextOffset: {
        type: Number,
        default: 0,
    },
});

const padding = computed(() => {
    return 50 + props.bannerTextOffset;
})


const displayDropdown = computed(() => {
    if (!slots.dropdown) {
        return false;
    }
    return hoverButton.value || hoverDropdown.value
})
</script>

