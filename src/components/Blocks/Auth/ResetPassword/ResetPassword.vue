<template>
    <div>
        <y-auth-title :title="'Reset Password'" :subtitle="'You will receive an email to confirm'"></y-auth-title>

        <y-input-username
            label="username"
            moreHelpDescription="Can be but does not have to be your email"
            :required="true"
        ></y-input-username>

        <y-input-password
            label="Password"
            :required="true"
        ></y-input-password>

        <y-input-password
            label="Retype passwword"
            :required="true"
        ></y-input-password>

        <div class="flex justify-content-between">
            <y-button-primary label="reset"></y-button-primary>
            <y-button-link label="login"></y-button-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import YInputUsername from '../../../Inputs/InputUsername/InputUsername.vue';
import YInputPassword from '../../../Inputs/InputPassword/InputPassword.vue';

import YButtonPrimary from '../../../Buttons/Primary/ButtonPrimary.vue';
import YButtonLink from '../../../Buttons/Link/ButtonLink.vue';

import YAuthTitle from '../Helpers/Title.vue'

import { defineProps, watch } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: '',
    },
    badgeType: {
        type: String,
        default: '',
    },
});
//
// watch(
//     () => props.badgeType,
//     (newValue) => {
//         badgeClass = useBadgeTypes(newValue);
//     }
// );
</script>

