<template>
    <div>
    <input-text
        v-model="v$.username.$model"
        :errors="v$.username.$errors"
        v-bind="$attrs"
        attribute-name="'usernasssssmie'"
    ></input-text>
    </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import { email, required, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

import InputText from '../InputText/InputText.vue';

const state = reactive({
    username: '',
});

const rules = {
    username: { required, email, minLength: minLength(100) },
};

const v$ = useVuelidate(rules, state);

const handleInputBlur = () => {
    v$.value.username.$touch();
};
</script>
