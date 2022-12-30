<template>
    <div class="y-dropdown--container">
        <!-- Dropdown toggle -->
        <input id="checkbox-125" type="checkbox" class="hidden y-dropdown--checkbox--input" />
        <label for="checkbox-125" class="flex" :class="labelClass">
            <div class="y-dropdown--label">
                <span :class="currentLocale.icon"></span>
            </div>
            <div class="y-icon icon icon-dropdown"></div>
        </label>

        <!-- Dropdown card -->
        <div class="y-dropdown--card" :class="dropdownClass">
            <div v-for="locale in locales" :key="locale.key">
                <a href="#" class="y-dropdown--item" @click="handleLanguageClicked(locale.key)">
                    <span :class="locale.icon"></span> {{ locale.text }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PrimeMenubar from 'primevue/menubar';
import { defineEmits, computed } from 'vue';

const emit = defineEmits(['languageChanged', 'update:modelValue']);

const currentLocale = {
    key: 'nl',
    text: 'Nederlands',
    icon: 'flag-icon flag-icon-nl',
};

const locales = [
    {
        key: 'nl',
        text: 'Nederlands',
        icon: 'flag-icon flag-icon-nl',
    },
    {
        key: 'en',
        text: 'English',
        icon: 'flag-icon flag-icon-us',
    },
];

const props = defineProps({
    rightAligned: {
        type: Boolean,
        default: true,
    },
    leftAligned: {
        type: Boolean,
        default: true,
    },
});

const labelClass = computed(() => {
    return props.rightAligned ? 'justify-content-end' : 'justify-content-start';
});

const dropdownClass = computed(() => {
    return props.rightAligned ? 'right-aligned' : '';
});

const handleLanguageClicked = (value: string) => {
    emit('languageChanged', value);
};
</script>
