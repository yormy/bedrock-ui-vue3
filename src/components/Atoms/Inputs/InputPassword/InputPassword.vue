<template>
    <div class="p-fluid grid">
        <div class="col-12">
            <input-base
                v-bind="$attrs"
                v-model="v$.password.$model"
                :errors="v$.password.$errors"
                :is-password="true"
                :is-required="true"
                :successes="successes"
                :warnings="warnings"
                @blur="handleInputBlur"
                @secondary-label-clicked="handleSecondaryLabelClicked"
                :feedback="false"
            ></input-base>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineEmits, watch, defineProps } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, sameAs } from '@vuelidate/validators';
import InputBase from '../Base/InputBase.vue';

const emit = defineEmits(['update:modelValue']);

const state = reactive({
    password: '',
});

const props = defineProps({
    confirmWith: {
        type: String,
        default: '',
    },
});

const rules = {
    password: {
        required,
        minLength: minLength(8),
        containsUppercase(value) {
            return /[A-Z]/.test(value);
        },
        containsLowercase(value) {
            return /[a-z]/.test(value);
        },
        containsNumber(value) {
            return /[0-9]/.test(value);
        },
        containsSpecial(value) {
            return /[#?!@$%^&*-]/.test(value);
        },
        confirmPassword(value) {
            if (props.confirmWith.length === 0) {
                return true;
            }

            return value === props.confirmWith;
        },
    },
};

// const warnings = [{ message: 'a warning 1' }, { message: 'a warning 2' }];
// const successes = [{ message: 'a success 1' }, { message: 'a success 2' }];

const handleSecondaryLabelClicked = () => {
    // ...
};

const v$ = useVuelidate(rules, state);

const handleInputBlur = () => {
    v$.value.password.$touch();
};

watch(
    () => state.password,
    (newValue) => {
        emit('update:modelValue', state.password);
    }
);
</script>
