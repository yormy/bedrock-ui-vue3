<template>
    <div v-for="error in errorObjects" :key="error.$message">
        <small :id="fieldId + '-error'" class="p-error">
            {{ errorMsg(error) }}
        </small>
    </div>

    <div v-for="error in errors" :key="error">
        <small :id="fieldId + '-error'" class="p-error">
            {{ translate(error.message) }}
        </small>
    </div>
</template>

<script setup lang="ts">
import { defineProps, inject } from 'vue';
import useValidationTranslator from '../../Helpers/validationTranslator'; //eslint-disable-line

const i18ntc: any = inject('i18ntc');

const props = defineProps({
    attributeName: {
        type: String,
        default: '',
    },

    errorObjects: {
        type: Object,
        default() {
            return {};
        },
    },

    errors: {
        type: Object,
        default() {
            return {};
        },
    },

    fieldId: {
        type: String,
        default: '',
    },
});

const errorMsg = (error: { $property: string; $params: object; $validator: string }) => {
    return useValidationTranslator(props.attributeName, i18ntc, error);
};

const translate = (key: string) => {
    return i18ntc.t(key);
};
</script>
