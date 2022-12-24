<template>
    <div class="y-content">
<!--        todo: sqaure vs round round = yellow-->
<!--        colors not correct...-->
        <label class="y-toggle-slider wide-slider" :class="shape" style="" for="toggle-123" >
            <input id="toggle-123" type="checkbox" checked class="hidden checkbox-input">
            <span class="is-off red">{{ labelOff }}</span>
            <span class="is-on green">{{labelOn}}</span>
            <span class="slider">&nbsp;</span>
        </label>
    </div>
</template>

<script setup lang="ts">
import ButtonRoot from '../Root/ButtonRoot.vue';
import {computed, defineProps, ref, useSlots} from "vue";

const hoverButton = ref(false);
const hoverDropdown = ref(false);

const slots = useSlots()

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
