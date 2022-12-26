<template>
    <slot></slot>
    <div class="y-content">
        <label class="y-toggle-section" :for="identifier" >
            <input :id="identifier" type="checkbox" checked class="hidden checkbox-input">
            <span class="is-off">
                <slot name="off"></slot>
            </span>
            <span class="is-on">
                <slot name="on"></slot>
            </span>
        </label>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    id: {
        type: String,
    },

    name: {
        type: String,
        required: true
    },
});


const identifier = computed(() => {
    if (props.id) {
        return props.id;
    }

    if (props.name) {
        return props.name;
    }

    return Math.random()
})

</script>
