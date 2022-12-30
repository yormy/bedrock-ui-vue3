<!--@ts-ignore-->
<template>
    <toggle-base name="name" v-bind="$attrs"></toggle-base>
</template>

<script setup lang="ts">
import ToggleBase from '../Base/ToggleBase.vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});
</script>
