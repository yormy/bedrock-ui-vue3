<template>
    <div class="p-fluid grid">
        <div class="field col-12">
            <input-base
                v-model="v$.name.$model"
                :is-password="true"
                :errors="v$.name.$errors"
                :warnings="warnings"
                :successes="successes"
                @blur="handleInputBlur"
                v-bind="$attrs"
                @secondary-label-clicked="handleSecondaryLabelClicked"
                :is-required="true"
            ></input-base>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import InputBase from '../Base/InputBase.vue';

const state = reactive({
    name: 'test@robco',
});

const rules = {
    name: {
        required,
        // minLength: minLength(8)  // I assume you'd want something like this too
        containsUppercase: function(value) {
            return /[A-Z]/.test(value)
        },
        containsLowercase: function(value) {
            return /[a-z]/.test(value)
        },
        containsNumber: function(value) {
            return /[0-9]/.test(value)
        },
        containsSpecial: function(value) {
            return /[#?!@$%^&*-]/.test(value)
        }},
};

// const warnings = [{ message: 'a warning 1' }, { message: 'a warning 2' }];
// const successes = [{ message: 'a success 1' }, { message: 'a success 2' }];

const handleSecondaryLabelClicked = () => {
    // ...
};

const v$ = useVuelidate(rules, state);

v$.value.name.$touch(); // just for now test invalid

const handleInputBlur = () => {
    v$.value.name.$touch();
};
</script>
