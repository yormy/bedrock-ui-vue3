<template>
    <div>
        <validation-errors :errors="errors" attribute-name="voornmameie"></validation-errors>
        <validation-warnings :warnings="warnings"></validation-warnings>
        <validation-success :successes="successes"></validation-success>
    </div>
</template>

<script setup lang="ts">
import ValidationErrors from '../Partials/ValidationErrors.vue';
import ValidationWarnings from '../Partials/ValidationWarnings.vue';
import ValidationSuccess from '../Partials/ValidationSuccess.vue';

const props = defineProps({
    attributeName: {
        type: String,
        default: '',
    },
    successes: {
        type: Object,
        default: {},
    },
    warnings: {
        type: Object,
        default: {},
    },
    errors: {
        type: Object,
        default: {},
    },
});

</script>

