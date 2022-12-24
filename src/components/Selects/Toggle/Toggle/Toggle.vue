<template>
    <toggle-base></toggle-base>
</template>

<script setup lang="ts">
import {defineProps, ref, defineEmits, watch, nextTick, reactive} from 'vue';
import ToggleBase from '../Base/ToggleBase.vue'
import YIconHelp from '../../../Helpers/IconHelp.vue';
import YIconRequired from '../../../Helpers/IconRequired.vue';
import YPurifiedHtml from '../../../Helpers/PurifiedHtml.vue';
import YValidations from '../../../Inputs/Partials/Validations.vue'

const emit = defineEmits(['isOn', 'isOff', 'update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },

    label: {
        type: String,
        default: '',
    },
    labelExtended: {
        type: String,
        default: '',
    },

    moreHelpLabel: {
        type: String,
        default: '',
    },

    moreHelpHeader: {
        type: String,
        default: '',
    },

    moreHelpDescription: {
        type: String,
        default: '',
    },

    required: {
        type: Boolean,
        default: false,
    },

    successes: {
        type: Array,
        default: [],
    },

    warnings: {
        type: Array,
        default: [],
    },

    errors: {
        type: Array,
        default: [],
    },
});

let checked = ref(props.modelValue);

watch(
    () => checked.value,
    (newValue) => {
        if (newValue) {
            emit('isOn');
            console.log('on');
        }
        if (!newValue) {
            emit('isOff');
            console.log('off');
        }
    }
);

async function handleInputChanged(e: Event) {
    await nextTick()
    emit('update:modelValue', checked.value);
    console.log('update');
};

</script>
