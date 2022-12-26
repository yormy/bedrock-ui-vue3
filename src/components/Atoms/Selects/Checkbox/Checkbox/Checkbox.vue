<template>
    <div class="field-checkbox">
        <checkbox-base inputId="binary" v-model="checked" v-bind="$attrs" :binary="true" @click="handleInputChanged"/>

        <y-icon-required :required="required"></y-icon-required>

        <label for="binary">
            <span class="flex flex-column">
                <span>
                    <y-purified-html :value="label"></y-purified-html>
                    <y-icon-help
                        class="ml-1"
                        v-if="moreHelpDescription"
                        :label="moreHelpLabel"
                        :header="moreHelpHeader"
                        :description="moreHelpDescription"
                    >
                    </y-icon-help>
                </span>

                <y-purified-html :value="labelExtended"></y-purified-html>
                <y-validations :successes="successes" :warnings="warnings" :errors="errors"></y-validations>
        </span>

    </label>
    </div>
</template>

<script setup lang="ts">
import {defineProps, ref, defineEmits, watch, nextTick, reactive} from 'vue';
import CheckboxBase from '../Base/CheckboxBase.vue'
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