<script setup lang="ts">
/**
 * Display HTML after purification
 *
 * Cases
 * - When you need to render html use this instead of other options like {!! or v-html
 *
 * Required: npm install DOMPurify
 */

import { computed } from 'vue'
// @ts-ignore
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
      type: Array,
      default: () => [
        'b',
        'i', 'strong',
        'a',
        'ul', 'ol', 'li',
        'br'
      ],
    },

    /**
    * The allowed attributes to be displayed (default: nothing)
    */
    allowedAttributes: {
      type: Array,
      default: () => [
        'href',
        'target',
        'class'
      ],
    },
});

const purifiedHtml = computed<string>(() => {
      return DOMPurify.sanitize(props.value, {
        ALLOWED_TAGS: props.allowedTags,
        ALLOWED_ATTR: props.allowedAttributes
      });
});
</script>

<template>
    <div>
        <div v-html="purifiedHtml"></div>
    </div>
</template>
