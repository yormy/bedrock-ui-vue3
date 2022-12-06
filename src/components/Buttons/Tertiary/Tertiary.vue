<template>
    <base-button class="p-button-text" :class="buttonClass" :badge-class="badgeClass"><slot></slot></base-button>
</template>

<script setup lang="ts">
import BaseButton from '../Base/Base.vue';
</script>
