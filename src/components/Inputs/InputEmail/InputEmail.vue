<template>
    <y-input-text
        v-model="v$.name.$model"
        :errors="v$.name.$errors"
        :warnings="warnings"
        :successes="successes"
        @blur="handleInputBlur"
        v-bind="$attrs"
    ></y-input-text>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import YInputText from '../InputText/InputText.vue';
import { email, required, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const state = reactive({
    name: 'test@robco',
});

const rules = {
    name: { required, email, minLength:minLength(100) },
};

const warnings = [
    { message: "a warning 1" },
    { message: "a warning 2" }
]

const successes = [
    { message: "a success 1" },
    { message: "a success 2" }
]

const v$ = useVuelidate(rules, state);
v$.value.name.$touch(); // just for now test invalid
const handleInputBlur = () => {
    v$.value.name.$touch();
};
</script>
