<template>
    <div>
        <y-auth-title :title="'Authenticator Code'" :subtitle="'You will receive an email to confirm'"></y-auth-title>

        <y-input-code label="Code" more-help-description="Can be but does not have to be your email" :required="true"></y-input-code>

        <y-button-row-steps>
            <template #main>
                <y-button-primary label="Next" />
            </template>
        </y-button-row-steps>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, reactive, watch } from 'vue';
import YButtonPrimary from '../../../Atoms/Buttons/Primary/ButtonPrimary.vue';
import YAuthTitle from '../Helpers/Title.vue';

const password = ref();

const props = defineProps({
    newPassword: {
        type: String,
        default: '',
    },
});
</script>
