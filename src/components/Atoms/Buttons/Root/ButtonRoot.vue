<template>
    <prime-split-button v-if="dropdown" :class="buttonClass" :badge-class="badgeClass"><slot></slot></prime-split-button>
    <prime-button
        v-else
        :class="buttonClass"
        :badge-class="badgeClass"
        :icon="isExternal ? 'y-icon icon icon-link-external icon-small' : ''"
        :icon-pos="isExternal ? 'right' : 'left'"
        @click.stop="'';"
    >
        <slot></slot>
    </prime-button>
</template>

<script setup lang="ts">
import PrimeButton from 'primevue/button';
import PrimeSplitButton from 'primevue/splitbutton';
import { computed, watch } from 'vue';
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

    dropdown: {
        type: Boolean,
        default: false,
    },

    isExternal: {
        type: Boolean,
        default: false,
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
});
</script>
