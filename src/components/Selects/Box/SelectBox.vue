<template>
    <div class="field-checkbox">
        {{ v$.checkedValue.$model}}
        <prime-select-box inputId="binary" v-model="v$.checkedValue.$model" v-bind="$attrs" :binary="true" @click="handleInputChanged"/>
{{v$.checkedValue.$errors}}
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
        </label>
    </div>
</template>

<script setup lang="ts">
import {defineProps, ref, defineEmits, watch, nextTick, reactive} from 'vue';
import PrimeSelectBox from 'primevue/checkbox';
import YIconHelp from '../../Helpers/IconHelp.vue';
import YIconRequired from '../../Helpers/IconRequired.vue';
import YPurifiedHtml from '../../Helpers/PurifiedHtml.vue';

import {required, sameAs, minLength, email} from '@vuelidate/validators';
import {useVuelidate} from "@vuelidate/core";

const moreHelpHeader = "heading of modal";
const moreHelpDescription = "Hello<strong>kkk</strong> sss<a href='#'>link</a> normla <br>dsfsfsd <br>dsfsfsd"

const emit = defineEmits(['isOn', 'isOff', 'update:modelValue']);

const state = reactive({
    checkedValue: false,
});


const rules = {
    checkedValue: {required, sameAs: sameAs(true) },
};


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
});

let checked = ref(props.modelValue);

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
    await nextTick()
    emit('update:modelValue', checked.value);
    handleInputBlur();
};

const v$ = useVuelidate(rules, state);

v$.value.checkedValue.$touch(); // validate on loading

const handleInputBlur = () => {
    console.log('touch');
    v$.value.checkedValue.$touch();
};

</script>
