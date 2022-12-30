<template>
    <span v-if="isDropdown">
        <button-root
            icon-pos="right"
            icon="y-icon icon icon-dropdown"
            v-bind="$attrs"
            @mouseover="hoverButton = true"
            @focus="hoverButton = true"
            @mouseleave="hoverButton = false"
            @blur="hoverButton = false"
        >
            <slot></slot>
        </button-root>
        <span
            v-if="slots.dropdown"
            v-show="displayDropdown"
            @mouseover="hoverDropdown = true"
            @focus="hoverDropdown = true"
            @mouseleave="hoverDropdown = false"
            @blur="hoverDropdown = false"
        >
            <div class="dropdown-content">
                <slot name="dropdown"></slot>
            </div>
        </span>
    </span>

    <span v-else>
        <span v-if="withBanner">
            <span class="y-button-banner">
                <button-root class="p-button-raised" v-bind="$attrs"><slot></slot></button-root>
                <div class="ribbon" :style="`padding-left:${padding}px`">{{ bannerText }}</div>
            </span>
        </span>

        <span v-else>
            <button-root v-bind="$attrs" :menu-button-props="dropdownIcon"><slot></slot></button-root>
        </span>
    </span>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';
import ButtonRoot from '../Root/ButtonRoot.vue';

const hoverButton = ref(false);
const hoverDropdown = ref(false);

const slots = useSlots();

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
});

const displayDropdown = computed(() => {
    if (!slots.dropdown) {
        return false;
    }

    return hoverButton.value || hoverDropdown.value;
});

const dropdownIcon = computed(() => {
    return { icon: 'y-icon icon icon-dropdown' };
});
</script>
