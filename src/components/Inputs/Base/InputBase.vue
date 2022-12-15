<template>
    <div class="field">
        <div class="flex justify-content-end">
            <small v-if="secondaryLabel" @click="handleSecondaryHelpClicked" @KeyDown="handleSecondaryHelpClicked">{{ secondaryLabel }}</small>

            <y-icon-help
                v-if="moreHelpIcon"
                :icon="moreHelpIcon"
                :label="moreHelpLabel"
                :header="label"
                :description="moreHelpDescription"
            >
            </y-icon-help>

            <small v-if="isRequired"><div class="p-error">*</div></small>
        </div>
        <div class="field col-12">
            <span class="p-float-label p-input-icon-right">
                <i :class="inlineIcon" @click="handleInlineIconClicked" @KeyDown="handleInlineIconClicked" />
                <prime-input-text
                    v-if="!isPassword"
                    :id="fieldId"
                    v-model="value"
                    type="text"
                    :disabled="disabledState"
                    @input="handleInputChanged"
                    v-bind="$attrs"
                />

                <prime-password
                    v-else
                    :id="fieldId"
                    v-model="value"
                    :disabled="disabledState"
                    @input="handleInputChanged"
                    v-bind="$attrs"
                    toggle-mask
                />
                <label :for="fieldId">{{ label }}</label>
            </span>
        </div>

        <small v-if="hintText" :id="fieldId + '-hint'" class="p-info">{{ hintText }}</small>

        <validations :errors="errors" :warnings="warnings" :successes="successes"></validations>

        {{ errors }}
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted, watch, inject } from 'vue';
import PrimeInputText from 'primevue/inputtext';
import PrimePassword from 'primevue/password';
import YModalHelp from '../../Modals/Help/ModalHelp.vue';
import Validations from '../Partials/Validations.vue';

import YIconHelp from '../../Helpers/IconHelp.vue';

const i18ntc: any = inject('i18ntc');

const fieldId = ref();
const value = ref();


const emit = defineEmits(['secondaryLabelClicked', 'inlineIconClicked', 'update:modelValue']);

const props = defineProps({
    id: {
        type: String,
        default: '',
    },

    isPassword: {
        type: Boolean,
        default: false,
    },

    label: {
        type: String,
        default: '',
    },

    disabled: {
        // can be true, false, or null
        type: Boolean,
        default: null,
    },

    modelValue: {
        type: String,
        default: '',
    },

    errors: {
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

    successes: {
        type: Array,
        default() {
            return [];
        },
    },

    hintText: {
        type: String,
        default: '',
    },

    moreHelpLabel: {
        type: String,
        default: '?',
    },

    moreHelpIcon: {
        type: String,
        default: 'y-icon icon icon-help icon-small',
    },

    inlineIcon: {
        type: String,
        default: '',
    },

    moreHelpDescription: {
        type: String,
        default: '',
    },

    secondaryLabel: {
        type: String,
        default: '',
    },

    isRequired: {
        type: Boolean,
        default: false,
    },
});

onMounted(async () => {
    fieldId.value = props.id;

    if (!props.id) {
        fieldId.value = Math.ceil(Math.random() * 1000000);
    }

    value.value = props.modelValue;
});

const handleSecondaryHelpClicked = () => {
    emit('secondaryLabelClicked');
};

const handleInlineIconClicked = () => {
    emit('inlineIconClicked');
};

const handleInputChanged = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value);
};

const disabledState = ref(props.disabled);

watch(
    () => disabledState.value,
    (newValue) => {
        disabledState.value = true;

        if (!newValue) {
            /* eslint-disable @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            disabledState.value = undefined;
        }
    }
);
</script>
