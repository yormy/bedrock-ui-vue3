<template>
    <slot></slot>
    <div class="y-content">
        <label class="y-toggle-section" :for="identifier">
            <input :id="identifier" type="checkbox" checked class="hidden checkbox-input" />
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
import useIdentifier from '../../../Hooks/useIdentifier';

const props = defineProps({
    id: {
        type: String,
    },

    name: {
        type: String,
        required: true,
    },
});

const [identifier] = useIdentifier(props.id);
</script>
