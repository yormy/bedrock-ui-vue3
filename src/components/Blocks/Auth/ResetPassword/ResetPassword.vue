<template>
    <div>
        <y-auth-title :title="'Reset Password'" :subtitle="'You will receive an email to confirm'"></y-auth-title>

        <y-input-username
            label="username"
            moreHelpDescription="Can be but does not have to be your email"
            :required="true"
        ></y-input-username>

        <y-input-password
            v-model="password"
            label="Password"
            :required="true"
        ></y-input-password>

        <y-input-password
            label="Retype passwword"
            :required="true"
            :confirm-with="password"
        ></y-input-password>

        <div class="flex justify-content-between">
            <y-button-primary label="reset"></y-button-primary>
            <y-button-link label="login"></y-button-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import YInputUsername from '../../../Inputs/InputUsername/InputUsername.vue';
import YInputPassword from '../../../Inputs/InputPassword/InputPassword.vue';

import YButtonPrimary from '../../../Buttons/Primary/ButtonPrimary.vue';
import YButtonLink from '../../../Buttons/Link/ButtonLink.vue';

import YAuthTitle from '../Helpers/Title.vue'

import {defineProps, reactive, watch} from 'vue';

const password = ref();


const props = defineProps({
    newPassword: {
        type: String,
        default: '',
    },
});

</script>

