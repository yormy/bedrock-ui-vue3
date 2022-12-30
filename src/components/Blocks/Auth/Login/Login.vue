<template>
    <div>
        <div class="flex justify-content-between">
            <div>Not a member? <span class="p-link">sign up</span></div>
            <y-select-language></y-select-language>
        </div>

        <y-auth-title :title="'Login'" :subtitle="'subtitle here'"></y-auth-title>

        <y-input-username label="username" more-help-description="Can be but does not have to be your email" :required="true"></y-input-username>

        <y-input-password label="Password" more-help-description="Can be but does not have to be your email" :required="true"></y-input-password>

        <div class="flex justify-content-between">
            <y-checkbox
                :label="'remember'"
                :label-extended="'we will remember for x days'"
                :more-help-header="'Remember'"
                :more-help-description="'dsadsadasadsasd'"
            >
            </y-checkbox>
            <y-button-link label="forgot"></y-button-link>
        </div>

        <y-button-primary label="login"></y-button-primary>
    </div>
</template>

<script setup lang="ts">
import YInputUsername from '../../../Atoms/Inputs/InputUsername/InputUsername.vue';
import YInputPassword from '../../../Atoms/Inputs/InputPassword/InputPassword.vue';
import YCheckbox from '../../../Atoms/Selects/Checkbox/Checkbox/Checkbox.vue';
import YButtonPrimary from '../../../Atoms/Buttons/Primary/ButtonPrimary.vue';
import YSelectLanguage from '../../../Atoms/Selects/Language/SelectLanguage.vue';
import YAuthTitle from '../Helpers/Title.vue';
import YButtonLink from '../../../Atoms/Buttons/Link/ButtonLink.vue';

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
