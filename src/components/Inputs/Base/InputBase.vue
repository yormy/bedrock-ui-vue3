<template>
    <div class="field">

        <div label="Show" icon="pi pi-external-link" @click="handleHelpClicked" >xxxx</div>
        <y-modal-help header="aereware" v-model:visible="showHelpModal"/>

        <div class="flex justify-content-end">
            <small v-if="helpTextLabel">{{ helpTextLabel }}</small>
        </div>
        <span class="p-float-label">
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

        <small v-if="hintText" :id="fieldId +'-hint'" class="p-info">{{ hintText }}</small>

        <div v-for="error in errors" :key="error.$message">
            <small :id="fieldId + '-error'" class="p-error">{{ error.$message }}</small>
        </div>

        <div v-for="warning in warnings" :key="warning.message">
            <small :id="fieldId + '-warning'" class="p-warning">{{ warning.message }}</small>
        </div>

        <div v-for="success in successes" :key="success.message">
            <small :id="fieldId + '-success'" class="p-success">{{ success.message }}</small>
        </div>

        {{errors}}
    </div>
</template>

<script setup lang="ts">
import PrimeInputText from 'primevue/inputtext';
import YModalHelp from '../../Modals/Help/ModalHelp.vue';
import { defineProps, ref, onMounted, watch } from 'vue';

const fieldId = ref();
const value = ref();
const showHelpModal = ref();

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

    helpTextLabel: {
        type: String,
        default: ''
    }
});

onMounted(async () => {
    fieldId.value = props.id;
    if (!props.id) {
        fieldId.value = Math.ceil(Math.random()*1000000);
    }

    value.value = props.modelValue;
})

const handleHelpClicked = () => {
    showHelpModal.value = true;
};

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

//
// let badgeClass = useBadgeTypes(props.badgeType);
//
// watch(
//     () => props.badgeType,
//     (newValue) => {
//         badgeClass = useBadgeTypes(newValue);
//     }
// );
</script>
