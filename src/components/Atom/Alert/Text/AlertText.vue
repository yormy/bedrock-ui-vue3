<script setup lang="ts">
/**
 * Show an alertbox
 *
 * Cases:
 *  - error messages, success messages
 */
import YPurifiedHtml from '../../Display/PurifiedHtml.vue';
import {computed} from "vue";

const props = defineProps({
    /**
     * The message of the alert, displayed in the header
     */
    message: {
        type: String,
        default: '',
        required: false,
    },

    /**
     * The styling o the modal is-info , is-success, is-warning, is-danger
     */
    styling: {
        type: String,
        default: 'is-danger'
    },

    /**
     * The styling ?
     */
    alertBorder: {
        type: String,
        default: 'is-danger'
    }
});


const styleClass = computed<string>(() => {
    return props.alertBorder + ' ' + props.styling;
});

</script>

<template>
    <div>
        <div v-if="message" :class="styleClass" role="alert">
            <YPurifiedHtml :value="message"></YPurifiedHtml>
        </div>
    </div>
</template>
