<template>
    <div v-for="error in errors" :key="error.$message">
        <small :id="fieldId + '-error'" class="p-error">
            {{ errorMsg(error) }}
            {{ $t('message.hello') }}
        </small>
    </div>
</template>

<script setup lang="ts">
import { defineProps, inject } from 'vue';

const i18ntc: any = inject('i18ntc');

const props = defineProps({
    attributeName: {
        type: String,
        default: '',
    },
    errors: {
        type: Object,
        default() {
            return {};
        },
    },
});

const errorMsg = (error: { $property: string; $params: object; $validator: string }) => {
    const params: any = error.$params;

    if (props.attributeName !== '') {
        params.attribute = props.attributeName;
    } else {
        params.attribute = error.$property;
    }

    const rule = error.$validator;

    return i18ntc.t(`'validator. ${rule}`, params);
};
</script>
