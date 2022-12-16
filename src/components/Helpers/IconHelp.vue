<!--eslint-disable  vue/no-v-html-->
<template>
    <span>
        <y-modal-help v-model:visible="showHelpModal" :header="header">
            <y-purified-html :value="description"></y-purified-html>
        </y-modal-help>

        <span @click="handleHelpClicked" class="p-link">
            <span v-if="icon"  :class="icon" ></span>
            <span v-else>
                <small>{{ label }} </small>
            </span>
        </span>
    </span>
</template>

<script setup lang="ts">
import {computed, ref, PropType, defineProps} from 'vue';
import YPurifiedHtml from './PurifiedHtml.vue';

const showHelpModal = ref();


const props = defineProps({
    id: {
        type: String,
        default: '',
    },

    icon: {
        type: String,
        default: 'y-icon icon icon-help icon-small',
    },

    label: {
        type: String,
        default: '',
    },

    header: {
        type: String,
        default: '',
    },

    description: {
        type: String,
        default: '',
    },
});

const handleHelpClicked = () => {
    showHelpModal.value = true;
};


</script>
