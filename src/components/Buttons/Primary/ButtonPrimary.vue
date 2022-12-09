<template>
    <button-base class="p-button-raised" :class="buttonClass" :badge-class="badgeClass"><slot></slot></button-base>
</template>

<script setup lang="ts">
import ButtonBase from '../Base/ButtonBase.vue';
const badgeClass = '';
const buttonClass = '';
</script>
