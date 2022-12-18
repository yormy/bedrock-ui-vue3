<template>
    <button-base :dropdown="true" class="p-button-raised p-button-text" v-bind="$attrs"><slot></slot></button-base>
</template>

<script setup lang="ts">
import ButtonBase from '../Base/ButtonBase.vue';
</script>
