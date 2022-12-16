<template>
    <div>
        <y-input-username
            label="username"
            moreHelpDescription="Can be but does not have to be your email"
            hint-text="your registered username"
            :required="true"
        ></y-input-username>
    </div>
</template>

<script setup lang="ts">
import YInputUsername from '../../../Inputs/InputUsername/InputUsername.vue';

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
