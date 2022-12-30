<template>
    <div class="field-checkbox">
        <checkbox-base-alt></checkbox-base-alt>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, watch, nextTick } from 'vue';
import CheckboxBaseAlt from '../Base/CheckboxBaseAlt.vue';
import YIconHelp from '../../../Helpers/IconHelp.vue';
import YIconRequired from '../../../Helpers/IconRequired.vue';
import YPurifiedHtml from '../../../Helpers/PurifiedHtml.vue';
import YValidations from '../../../Inputs/Partials/Validations.vue';

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
        default() {
            return [];
        },
    },

    warnings: {
        type: Array,
        default() {
            return [];
        },
    },

    errors: {
        type: Array,
        default() {
            return [];
        },
    },
});

const checked = ref(props.modelValue);

watch(
    () => checked.value,
    (newValue) => {
        if (newValue) {
            emit('isOn');
        }

        if (!newValue) {
            emit('isOff');
        }
    }
);

async function handleInputChanged(e: Event) {
    await nextTick();
    emit('update:modelValue', checked.value);
}
</script>
