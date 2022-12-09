<template>
    <div class="field">
        <span class="p-float-label">
            <prime-input-text :id="fieldId" type="text" v-model="value" :disabled="disabledState"/>
            <label :for="fieldId">{{ label }}</label>
        </span>
        <small id="username1-help">Enter your username to reset your password.</small>
        <small id="username2-help" class="p-error">Username is not available.</small>
    </div>
</template>

<script setup lang="ts">
import PrimeInputText from 'primevue/inputtext';
import { defineProps, ref, onMounted, watch } from 'vue';

const fieldId = ref();
const value = ref();

// import useButtonTypes from '../useButtonTypes';
// import useBadgeTypes from '../useBadgeTypes';
//
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
});

onMounted(async () => {
    fieldId.value = props.id;
    if (!props.id) {
        fieldId.value = Math.ceil(Math.random()*1000000);
    }
})

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
