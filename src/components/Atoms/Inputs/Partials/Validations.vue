<template>
    <div>
        <validation-errors :errors="errors" :error-objects="errorObjects" :attribute-name="attributeName"></validation-errors>
        <validation-warnings :warnings="warnings"></validation-warnings>
        <validation-success :successes="successes"></validation-success>
    </div>
</template>

<script setup lang="ts">
import ValidationErrors from './ValidationErrors.vue';
import ValidationWarnings from './ValidationWarnings.vue';
import ValidationSuccess from './ValidationSuccess.vue';

const props = defineProps({
    attributeName: {
        type: String,
        default: '',
    },

    successes: {
        type: Object,
        default() {
            return {};
        },
    },

    warnings: {
        type: Object,
        default() {
            return {};
        },
    },

    errors: {
        type: Object,
        default() {
            return {};
        },
    },

    errorObjects: {
        type: Object,
        default() {
            return {};
        },
    },
});
</script>
