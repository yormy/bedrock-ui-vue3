<template>
    <toast-base v-bind="$attrs">
        <slot></slot>
    </toast-base>

</template>

<script setup lang="ts">
import ToastBase from '../Base/ToastBase.vue';
</script>
