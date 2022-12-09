<template>
    <div>
        <y-button-primary label="Show" @click="handleShow"></y-button-primary>
        <y-modal-help header="This is the header" v-model:visible="showHelpModal">
            HTML content of the <strong>modal</strong> <i>goes</i> here
        </y-modal-help>
    </div>
</template>

<script setup lang="ts">
import YModalHelp from '../../../../src/components/Modals/Help/ModalHelp.vue';
import YButtonPrimary from '../../../../src/components/Buttons/Primary/ButtonPrimary.vue';
import {ref} from "vue";

const showHelpModal = ref(true);

const handleShow = () => {
    showHelpModal.value = true;
};
</script>
