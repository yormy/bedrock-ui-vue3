<template>
        <div class="y-dropdown--container">
            <!-- Dropdown toggle -->
            <input id="checkbox-125" type="checkbox" class="hidden y-dropdown--checkbox--input " >
            <label for="checkbox-125" class="flex" :class="labelClass" >
                <div  class="y-dropdown--label">
                    <span class="flag-icon flag-icon-de"></span>
                </div>
                <div class="y-icon icon icon-dropdown "></div>
            </label>

            <!-- Dropdown card -->
            <div class="y-dropdown--card" :class="dropdownClass">
                <a href="#" class="y-dropdown--item"> <span class="flag-icon flag-icon-nl"></span> Dutch  </a>
                <a href="#" class="y-dropdown--item"> <span class="flag-icon flag-icon-us"></span> English </a>
            </div>
        </div>
</template>

<script setup lang="ts">
import PrimeMenubar from 'primevue/menubar';
import {defineProps, computed} from "vue";
import useButtonTypes from "../../Buttons/useButtonTypes";

const props = defineProps({
    rightAligned: {
        type: Boolean,
        default: true,
    },
    leftAligned: {
        type: Boolean,
        default: true,
    }
});

const labelClass = computed(() => {
    return props.rightAligned ? 'justify-content-end' : 'justify-content-start'
})

const dropdownClass = computed(() => {
    return props.rightAligned ? 'right-aligned' : ''
})

</script>
