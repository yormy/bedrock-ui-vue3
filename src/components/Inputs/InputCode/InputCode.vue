<template>
    <input-text
        :errors="v$.username.$errors"
        @blur="handleInputBlur"
        v-bind="$attrs"
        v-model="v$.username.$model"
    ></input-text>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import { required, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

import InputText from '../InputText/InputText.vue';

const state = reactive({
    username: '',
});

const rules = {
    username: { required, minLength: minLength(5) },
};

const v$ = useVuelidate(rules, state);

const handleInputBlur = () => {
    v$.value.username.$touch();
    console.log('blur');
};
</script>
