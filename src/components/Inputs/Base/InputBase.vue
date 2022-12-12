<template>
    <div class="field">

        <y-modal-help :header="label" v-model:visible="showHelpModal">{{moreHelpDescription}}</y-modal-help>
        <div class="flex justify-content-end">
            <small v-if="secondaryLabel" @click="handleSecondaryHelpClicked">{{secondaryLabel}}</small>

            <small v-if="moreHelpDescription" @click="handleMoreHelpClicked" >
                <span v-if="moreHelpIcon" :class="moreHelpIcon"></span>
                <span v-else>{{moreHelpLabel}}></span>
            </small>

            <small v-if="isRequired"><div class="p-error">*</div></small>
        </div>
        <div class="field col-12">
            <span class="p-float-label p-input-icon-right">
                <i :class="inlineIcon" @click="handleInlineIconClicked"/>
                <prime-input-text
                    :id="fieldId"
                    type="text"
                    v-model="value"
                    :disabled="disabledState"
                    @input="$emit('update:modelValue', $event.target.value)"
                    v-bind="$attrs"
                />
                <label :for="fieldId">{{ label }}</label>
            </span>
        </div>

        <small v-if="hintText" :id="fieldId +'-hint'" class="p-info">{{ hintText }}</small>

        <validations :errors="errors" :warnings="warnings" :successes="successes"></validations>

        {{errors}}
    </div>
</template>

<script setup lang="ts">
import PrimeInputText from 'primevue/inputtext';
import YModalHelp from '../../Modals/Help/ModalHelp.vue';
import Validations from '../Partials/Validations.vue';
import {defineProps, defineEmits, ref, onMounted, watch, computed} from 'vue';

const fieldId = ref();
const value = ref();
const showHelpModal = ref();

const emit = defineEmits(['secondaryLabelClicked', 'inlineIconClicked']);

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
    },
    modelValue: {},

    errors: {
        type: Array,
        default: []
    },

    warnings: {
        type: Array,
        default: []
    },

    successes: {
        type: Array,
        default: []
    },

    hintText: {
        type: String,
        default: ''
    },

    moreHelpLabel: {
        type: String,
        default: '?'
    },

    moreHelpIcon: {
        type: String,
        default: 'y-icon icon icon-help icon-small'
    },

    inlineIcon: {
        type: String,
        default: ''
    },

    moreHelpDescription: {
        type: String,
        default: ''
    },

    secondaryLabel: {
        type: String,
        default: ''
    },

    isRequired: {
        type: Boolean,
        default: false
    }
});

onMounted(async () => {
    fieldId.value = props.id;
    if (!props.id) {
        fieldId.value = Math.ceil(Math.random()*1000000);
    }

    value.value = props.modelValue;
})

const handleMoreHelpClicked = () => {
    showHelpModal.value = true;
};

const handleSecondaryHelpClicked = () => {
    emit('secondaryLabelClicked');
}

const handleInlineIconClicked= () => {
    emit('inlineIconClicked');
}

let disabledState = props.disabled;
watch(
    () => props.disabled,
    (newValue) => {
        disabledState = true;
        if (!newValue) {
            disabledState = undefined;
        }
    }
);
</script>
