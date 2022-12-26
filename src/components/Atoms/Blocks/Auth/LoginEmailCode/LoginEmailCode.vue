<template>
    <div>
        <y-auth-title :title="'Authenticator Code'" :subtitle="'You will receive an email to confirm'"></y-auth-title>

        <y-input-code
            label="Code"
            moreHelpDescription="Can be but does not have to be your email"
            :required="true"
        ></y-input-code>

        <y-button-row-steps>
            <template v-slot:main>
                <y-button-primary label="Next"/>
            </template>
        </y-button-row-steps>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import YInputUsername from '../../../Inputs/InputUsername/InputUsername.vue';
import YInputPassword from '../../../Inputs/InputPassword/InputPassword.vue';

import YButtonPrimary from '../../../Buttons/Primary/ButtonPrimary.vue';
import YButtonLink from '../../../Buttons/Link/ButtonLink.vue';

import YAuthTitle from '../Helpers/Title.vue'

import YButtonRow from '../../../Layouts/ButtonRow/ButtonRow.vue';

import {defineProps, reactive, watch} from 'vue';

const password = ref();


const props = defineProps({
    newPassword: {
        type: String,
        default: '',
    },
});

</script>

