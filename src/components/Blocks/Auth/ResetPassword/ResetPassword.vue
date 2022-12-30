<template>
    <div>
        <y-auth-title :title="'Reset Password'" :subtitle="'You will receive an email to confirm'"></y-auth-title>

        <y-input-username label="username" more-help-description="Can be but does not have to be your email" :required="true"></y-input-username>

        <y-input-password v-model="password" label="Password" :required="true"></y-input-password>

        <y-input-password label="Retype passwword" :required="true" :confirm-with="password"></y-input-password>

        <y-button-row>
            <template #main>
                <y-button-primary label="Reset" />
            </template>

            <template #alternative>
                <y-button-link label="login" />
            </template>
        </y-button-row>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import YInputUsername from '../../../Atoms/Inputs/InputUsername/InputUsername.vue';
import YInputPassword from '../../../Atoms/Inputs/InputPassword/InputPassword.vue';

import YButtonPrimary from '../../../Atoms/Buttons/Primary/ButtonPrimary.vue';
import YButtonLink from '../../../Atoms/Buttons/Link/ButtonLink.vue';

import YAuthTitle from '../Helpers/Title.vue';

import YButtonRow from '../../../Layouts/ButtonRow/ButtonRow.vue';

const password = ref();

const props = defineProps({
    newPassword: {
        type: String,
        default: '',
    },
});
</script>
