<template>
    <div class="field">
        <div label="Show" icon="pi pi-external-link" @click="handleHelpClicked" >xxxx</div>
        <YModalHelp header="aereware" v-model:visible="showHelpModal"/>
        base value ; {{modelValue}}
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
        {{errors}}
        <small id="username1-help">Enter your username to reset your password.</small>
        <div v-for="error in errors" :key="error.$message">
        <small id="username2-help" class="p-error">{{ error.$message }}</small>
        </div>
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
