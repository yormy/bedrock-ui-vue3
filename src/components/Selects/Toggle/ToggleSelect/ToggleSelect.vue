<template>
    <div class="y-content">
        <label  class="y-toggle-select" for="Toggle3">
            <input id="Toggle3" type="checkbox" class="hidden checkbox-input">
            <span class="left green ">{{ labelOn }}</span>
            <span class="right green ">{{ labelOff }}</span>
        </label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    labelOn: {
        type: String,
        default: ' ', // default is space to prevent resizing slider
    },

    labelOff: {
        type: String,
        default: ' ',
    },
});

</script>
