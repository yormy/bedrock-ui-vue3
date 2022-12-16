<template>
    <div class="field-checkbox">
        ={{checked}}=
        <checkbox-base inputId="binary" v-model="checked" v-bind="$attrs" :binary="true" @click="handleInputChanged"/>

        <y-icon-required :required="required"></y-icon-required>

        <label for="binary">
            <y-purified-html :value="moreHelpDescription"></y-purified-html>
            <y-icon-help
                v-if="moreHelpLabel"
                :label="moreHelpLabel"
                :header="moreHelpHeader"
                :description="moreHelpDescription"
            >
            </y-icon-help>
            <y-validations :successes="successes" :warnings="warnings" :errors="errors"></y-validations>

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

const moreHelpHeader = "heading of modal";
const moreHelpDescription = "Hello<strong>kkk</strong> sss<a href='#'>link</a> normla <br>dsfsfsd <br>dsfsfsd"

const emit = defineEmits(['isOn', 'isOff', 'update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },

    moreHelpLabel: {
        type: String,
        default: 'kkkk',
    },

    moreHelpDescription: {
        type: String,
        default: 'in modal',
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
