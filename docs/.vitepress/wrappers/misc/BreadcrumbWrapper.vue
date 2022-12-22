<template>
    <y-breadcrumb :items='items'></y-breadcrumb>
</template>

<script setup lang="ts">
import YBreadcrumb from '../../../../src/components/Misc/Breadcrumb/Breadcrumb.vue';

const items = [
    {
        label:'home',
        url:'https://xxxx'
    },
    {
        label:'test',
        url:'https://xxxx'
    },
]
</script>
