<template>
    <div class="field-checkbox">
        MUST AGREE {{ v$.checkedValue.$model }}
        <checkbox
            v-model="v$.checkedValue.$model"
            input-id="binary"
            v-bind="$attrs"
            :binary="true"
            :successes="successes"
            :errors="errors"
            :warnings="warnings"
        />
    </div>
</template>

<script setup lang="ts">
import { reactive, watch, inject } from 'vue';

import { required, sameAs } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import Checkbox from '../Checkbox/Checkbox.vue';

const i18ntc: any = inject('i18ntc');

let errors: Array<{message:string}> = [];
const warnings: Array<{message:string}> = [];
const successes: Array<{message:string}> = [];

const state = reactive({
    checkedValue: false,
});

const tries = 0;

const rules = {
    checkedValue: { required, sameAs: sameAs(true) },
};

const v$ = useVuelidate(rules, state);

v$.value.checkedValue.$touch(); // validate on loading

watch(
    () => v$.value.checkedValue.$model,
    (newValue) => {
        errors = [];

        if (v$.value.checkedValue.$errors.length > 0) {
            errors = [{ message: 'validation.mustAgree' }];
        }
    },
    { immediate: true }
);
</script>
