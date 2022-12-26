<template>
    <div>
        <y-appearing-bullets
            :messages="messages"
            :start-ms="500"
        ></y-appearing-bullets>
    </div>
</template>

<script setup lang="ts">
import YAppearingBullets from '../../../Display/AppearingBullets/AppearingBullets.vue';


const messages = [
    {
        text: 'aaaaaa',
        loading: false,
        completed: false,
        processingMs: 1000,
    },
    {
        text: 'bbbb',
        loading: false,
        completed: false,
        processingMs: 1000,
    },
    {
        text: 'ccccc',
        loading: false,
        completed: false,
        processingMs: 1000,
    },
    {
        text: 'ccccc',
        loading: false,
        completed: false,
        processingMs: 5000,
    },
];
</script>

