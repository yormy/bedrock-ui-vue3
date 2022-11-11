<script setup lang="ts">
import YAlertText from './AlertText.vue';
</script>

<template>
    <YAlertText class="is-danger" v-bind="{ ...$props, ...$attrs }"> </YAlertText>
</template>
