<template>
    <div v-for="error in errors" :key="error.$message">
        <small :id="fieldId + '-error'" class="p-error">
        {{errorMsg(error)}}
        </small>
    </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import { inject } from "vue";
const i18n = inject("i18n");

const props = defineProps({
    attributeName: {
        type: String,
        default: '',
    },
    errors: {
        type: Object,
        default: {},
    },
});

const errorMsg = (error : {$property: string, $params:object, $validator:string}) => {
    const params:any = error.$params;

    if (props.attributeName !== '') {
        params['attribute'] = props.attributeName;
    } else {
        params['attribute'] =  error.$property;
    }

    const rule = error.$validator;

    // @ts-ignore
    console.log('go trans');
    return i18n.translate('validator.' + rule, params);
}
</script>

