<template>
    <div class="field">
        <div class="flex justify-content-end y-content-input-label-float-secondary">
            <small v-if="secondaryLabel" @click="handleSecondaryHelpClicked" @KeyDown="handleSecondaryHelpClicked">
                {{ secondaryLabel }}
            </small>

            <y-icon-help v-if="moreHelpIcon" :icon="moreHelpIcon" :label="moreHelpLabel" :header="label" :description="moreHelpDescription">
            </y-icon-help>
        </div>
        <div class="field col-12">
            <span class="p-float-label" :class="inlineIcon ? 'p-input-icon-right' : ''">
                <i :class="inlineIcon" @click="handleInlineIconClicked" @KeyDown="handleInlineIconClicked" />
                <prime-input-text
                    v-if="!isPassword"
                    :id="fieldId"
                    v-model.trim="value"
                    type="text"
                    :disabled="disabledState"
                    @input="handleInputChanged"
                    v-bind="$attrs"
                    :class="getClass()"
                    style="width: 100%"
                />

                <prime-password
                    v-else
                    :id="fieldId"
                    v-model="value"
                    :disabled="disabledState"
                    @input="handleInputChanged"
                    v-bind="$attrs"
                    input-style="width:100%"
                    toggle-mask
                    hide-icon="y-icon icon icon-password-hide"
                    show-icon="y-icon icon icon-password-show"
                />
                <label :for="fieldId"> {{ label }} <y-icon-required :required="required"></y-icon-required> </label>
            </span>

            <small v-if="hintText" :id="fieldId + '-hint'" class="p-info">{{ hintText }}</small>

            <validations :error-objects="errors" :warnings="warnings" :successes="successes" :attribute-name="attributeLabel"></validations>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, inject } from 'vue';
import PrimeInputText from 'primevue/inputtext';
import PrimePassword from 'primevue/password';
import Validations from '../Partials/Validations.vue';

import YIconHelp from '../../Helpers/IconHelp.vue';
import YIconRequired from '../../Helpers/IconRequired.vue';

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

    /** --------- More Help ---------- */
    moreHelpLabel: {
        type: String,
        default: '?',
    },

    moreHelpIcon: {
        type: String,
        default: 'y-icon icon icon-help icon-small',
    },

    moreHelpDescription: {
        type: String,
        default: '',
    },

    inlineIcon: {
        type: String,
        default: '',
    },

    secondaryLabel: {
        type: String,
        default: '',
    },

    required: {
        type: Boolean,
        default: false,
    },

    attributeName: {
        type: String,
        default: '',
    },
});

const attributeLabel = ref(props.attributeName);

// todo: is this still needed
onMounted(async () => {
    fieldId.value = props.id;

    if (!props.id) {
        fieldId.value = Math.ceil(Math.random() * 1000000);
    }

    if (!props.attributeName) {
        attributeLabel.value = props.label;
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

const getClass = () => {
    if (props.errors.length > 0) {
        return 'p-invalid';
    }

    return '';
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
