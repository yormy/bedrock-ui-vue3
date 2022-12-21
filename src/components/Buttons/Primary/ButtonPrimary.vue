<template>
    <button-base class="p-button-raised" v-bind="$attrs">
        <slot></slot>
        <template v-if="slots.dropdown" v-slot:dropdown>
            <slot name="dropdown"></slot>
        </template>
    </button-base>

</template>

<script setup lang="ts">
import ButtonBase from '../Base/ButtonBase.vue';
import {useSlots} from "vue";

const slots = useSlots()
</script>
