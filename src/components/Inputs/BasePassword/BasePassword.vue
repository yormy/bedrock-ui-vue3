<template>
    <div class="field">
        <y-modal-help v-model:visible="showHelpModal" :header="label">{{ moreHelpDescription }}</y-modal-help>
        <div class="flex justify-content-end">
            <small v-if="secondaryLabel" @click="handleSecondaryHelpClicked" @KeyDown="handleSecondaryHelpClicked">{{ secondaryLabel }}</small>

            <small v-if="moreHelpDescription" @click="handleMoreHelpClicked" @KeyDown="handleMoreHelpClicked">
                <span v-if="moreHelpIcon" :class="moreHelpIcon"></span>
                <span v-else>{{ moreHelpLabel }}></span>
            </small>

            <small v-if="isRequired"><div class="p-error">*</div></small>
        </div>
        <div class="field col-12 mb-0">
            <span class="p-float-label">
                <prime-password
                    :id="fieldId"
                    v-model="value"
                    :disabled="disabledState"
                    @input="$emit('update:modelValue', $event.target.value)"
                    v-bind="$attrs"
                    toggle-mask
                />
                <label :for="fieldId">{{ label }}</label>
            </span>
        </div>

        <small v-if="hintText" :id="fieldId + '-hint'" class="p-info">{{ hintText }}</small>

        <div v-for="error in errors" :key="error.$message">
            <small :id="fieldId + '-error'" class="p-error">{{ error.$message }}</small>
        </div>

        <div v-for="warning in warnings" :key="warning.message">
            <small :id="fieldId + '-warning'" class="p-warning">{{ warning.message }}</small>
        </div>

        <div v-for="success in successes" :key="success.message">
            <small :id="fieldId + '-success'" class="p-success">{{ success.message }}</small>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted, watch } from 'vue';
import PrimePassword from 'primevue/password';
import YModalHelp from '../../Modals/Help/ModalHelp.vue';

const fieldId = ref();
const value = ref();
const showHelpModal = ref();

const emit = defineEmits(['secondaryLabelClicked', 'inlineIconClicked', 'update:modelValue']);

const props = defineProps({
    id: {
        type: String,
        default: '',
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
        type: Object,
        default() {
            return {};
        },
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

const handleMoreHelpClicked = () => {
    showHelpModal.value = true;
};

const handleSecondaryHelpClicked = () => {
    emit('secondaryLabelClicked');
};

const handleInlineIconClicked = () => {
    emit('inlineIconClicked');
};

const disabledState = ref(props.disabled);

watch(
    () => props.disabled,
    (newValue) => {
        disabledState.value = true;

        if (!newValue) {
            disabledState.value = undefined;
        }
    }
);
</script>
