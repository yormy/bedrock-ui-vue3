<!--eslint-disable  vue/no-v-html-->
<template>
    <span v-html="purifiedHtml"></span>
</template>

<script setup lang="ts">
/**
 * Display HTML after purification
 *
 * Cases
 * - When you need to render html use this instead of other options like {!! or v-html
 *
 * Required: npm install DOMPurify
 */

import { computed, PropType } from 'vue';
import DOMPurify from 'dompurify';

const props = defineProps({
    /**
     * The HTML string that needs to be purified and displayed
     */
    value: {
        type: String,
        default: '',
        required: true,
    },

    /**
     * The allowed tags to be displayed (default: b, i, strong, a , ul , ol, li ,'br')
     */
    allowedTags: {
        type: Array as PropType<string[]>,
        default: () => ['b', 'i', 'strong', 'a', 'ul', 'ol', 'li', 'br', 'span'],
    },

    /**
     * The allowed attributes to be displayed (default: nothing)
     */
    allowedAttributes: {
        type: Array as PropType<string[]>,
        default: () => ['href', 'target', 'class'],
    },
});

const purifiedHtml = computed<string>(() => {
    return DOMPurify.sanitize(props.value, {
        ALLOWED_TAGS: props.allowedTags,
        ALLOWED_ATTR: props.allowedAttributes,
    });
});
</script>
