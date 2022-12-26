<template>
    <div>
        <y-auth-title :title="'Reset Loginname'" :subtitle="'You will receive an email to confirm'"></y-auth-title>

        <y-input-email
            v-model="email"
            label="Current email address"
            :required="true"
        ></y-input-email>

        <y-input-username
            label="new username"
            v-model="username"
            moreHelpDescription="Can be but does not have to be your email"
            :required="true"
        ></y-input-username>

        <y-button-row>
            <template v-slot:main>
                <y-button-primary label="Reset"/>
            </template>

            <template v-slot:alternative>
                <y-button-link label="login"/>
            </template>
        </y-button-row>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import YInputUsername from '../../../Atoms/Inputs/InputUsername/InputUsername.vue';
import YInputEmail from '../../../Atoms/Inputs/InputEmail/InputEmail.vue';

import YButtonPrimary from '../../../Atoms/Buttons/Primary/ButtonPrimary.vue';
import YButtonLink from '../../../Atoms/Buttons/Link/ButtonLink.vue';

import YAuthTitle from '../Helpers/Title.vue'

import YButtonRow from '../../../Layouts/ButtonRow/ButtonRow.vue';

import {defineProps, reactive, watch} from 'vue';

const email = ref();
const username = ref();

const props = defineProps({
    newPassword: {
        type: String,
        default: '',
    },
});

</script>

