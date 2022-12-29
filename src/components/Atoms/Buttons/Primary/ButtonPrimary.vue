<template>
    <button-base class="p-button-raised" v-bind="$attrs">
        <slot></slot>
        <template v-if="slots.dropdown" #dropdown>
            <slot name="dropdown"></slot>
        </template>
    </button-base>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import ButtonBase from '../Base/ButtonBase.vue';

const slots = useSlots();
</script>
