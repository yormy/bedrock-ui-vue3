<template>
    <div class="y-content">
        <label class="y-toggle-slider wide-slider" :class="shape" style="" :for="identifier">
            <input :id="identifier" type="checkbox" checked class="hidden checkbox-input" />
            <span class="is-off red">{{ labelOff }}</span>
            <span class="is-on green">{{ labelOn }}</span>
            <span class="slider">&nbsp;</span>
        </label>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useIdentifier from '../../../Hooks/useIdentifier';

const props = defineProps({
    id: {
        type: String,
        default: null,
    },

    name: {
        type: String,
        required: true,
    },

    shape: {
        type: String,
        default: 'round',
        required: false,
        validator(value: string) {
            return ['square', 'round'].includes(value);
        },
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

const [identifier] = useIdentifier(props.id);
</script>
