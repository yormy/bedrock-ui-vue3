<template>
    <div class="p-fluid grid">
        <div class="field col-12 md:col-8">
            <y-input-text
                v-model="v$.name.$model"
                :errors="v$.name.$errors"
                :warnings="warnings"
                :successes="successes"
                @blur="handleInputBlur"
                v-bind="$attrs"
                @secondary-label-clicked="handleSecondaryLabelClicked"
                :is-required="true"
            ></y-input-text>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { email, required, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import YInputText from '../InputText/InputText.vue';

const state = reactive({
    name: '',
});

const rules = {
    name: { minLength: minLength(100) },
};

const warnings = [{ message: 'a warning 1' }, { message: 'a warning 2' }];

const successes = [{ message: 'a success 1' }, { message: 'a success 2' }];

const handleSecondaryLabelClicked = () => {
    // ...
};

const v$ = useVuelidate(rules, state);

v$.value.name.$touch(); // just for now test invalid

const handleInputBlur = () => {
    v$.value.name.$touch();
};
</script>
