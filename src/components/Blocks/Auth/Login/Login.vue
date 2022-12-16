<template>
    <div>
        <y-input-username
            label="username"
            moreHelpDescription="Can be but does not have to be your email"
            :required="true"
        ></y-input-username>

        <y-input-password
            label="Password"
            moreHelpDescription="Can be but does not have to be your email"
            :required="true"
        ></y-input-password>
    </div>
</template>

<script setup lang="ts">
import YInputUsername from '../../../Inputs/InputUsername/InputUsername.vue';
import YInputPassword from '../../../Inputs/InputPassword/InputPassword.vue';

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
