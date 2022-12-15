<template>
    <div class="field-checkbox">
        <prime-select-box inputId="binary" v-model="checked" :binary="true" />
        <label for="binary">{{checked}}</label>
    </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from 'vue';
import PrimeSelectBox from 'primevue/checkbox';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});

const checked = ref(props.modelValue);
</script>
