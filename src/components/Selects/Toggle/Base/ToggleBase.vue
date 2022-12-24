<template>
    <div class="y-content">
        <label class="y-toggle-slider wide-slider" :class="shape" style="" for="toggle-123" >
            <input id="toggle-123" type="checkbox" checked class="hidden checkbox-input">
            <span class="is-off red">{{ labelOff }}</span>
            <span class="is-on green">{{labelOn}}</span>
            <span class="slider">&nbsp;</span>
        </label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    shape: {
        type: String,
        default: 'round',
        required: false,
        validator(value: string) {
            return [
                'square',
                'round',
            ].includes(value)
        }
    },

    labelOn: {
        type: String,
        default: ' ', // default is space to prevent resizing slider
    },

    labelOff: {
        type: String,
        default: ' ',
    },

    width: {
        type: Number,
        default: 50,
    },
});

</script>
