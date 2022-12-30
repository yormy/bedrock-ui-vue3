<template>
    <input-text
        v-bind="$attrs"
        v-model="v$.search.$model"
        :errors="v$.search.$errors"
        @blur="handleInputBlur"
        inline-icon="y-icon icon icon-search"
    ></input-text>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { required, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

import InputText from '../InputText/InputText.vue';

const state = reactive({
    search: '',
});

const rules = {
    search: {},
};

const v$ = useVuelidate(rules, state);

const handleInputBlur = () => {
    v$.value.search.$touch();
};
</script>
