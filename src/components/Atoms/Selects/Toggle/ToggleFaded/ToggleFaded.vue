<template>
    <div class="y-content">
        <label class="y-toggle-section" :for="identifier">
            <span class="y-faded-small">
                <input :id="identifier" type="checkbox" checked class="hidden checkbox-input" />
                <span class="is-off"><span class="y-icon icon icon-darkmode"></span></span>
                <span class="is-on"><span class="y-icon icon icon-lightmode"></span></span>
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
