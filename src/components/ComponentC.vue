<script setup lang="ts">
defineProps({
    msg: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div class="y-test">
        ccccccc {{ msg }}
    </div>
</template>
