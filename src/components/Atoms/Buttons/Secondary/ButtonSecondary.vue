<template>
    <button-base class="p-button-raised p-button-secondary p-button-outlined" v-bind="$attrs"><slot></slot></button-base>
</template>

<script setup lang="ts">
import ButtonBase from '../Base/ButtonBase.vue';
</script>
