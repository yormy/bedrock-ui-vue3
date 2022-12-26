<template>
    <div class="y-content">
        <div class="flex justify-content-between">

            <div v-for="(option, index) in options" :key="option.label">

                <div class="y-checkable">

                    <input
                        class="checkbox-input"
                        type="radio"
                        name="shippingOption"
                        :value="option.value"
                        v-model="selection"
                        :id="'radio-' + index" checked />

                    <label class="label" :for="'radio-' + index" :title="option.mouseOver">
                        <span class="is-on">
                            <y-purified-html :value="option.labelOn"></y-purified-html>
                        </span>
                        <span class="is-off">
                            <y-purified-html :value="option.labelOff"></y-purified-html>
                        </span>
                    </label>

                    <y-icon-help
                        v-if="option.moreHelpContent"
                        :header="option.moreHelpTitle"
                        :description="option.moreHelpContent"
                    >
                    </y-icon-help>

                </div>

            </div>

        </div>
    </div>

</template>

<script setup lang="ts">
import {computed, defineEmits, ref, watch} from "vue";
const emit = defineEmits(['update:modelValue']);
import YPurifiedHtml from '../../../Helpers/PurifiedHtml.vue';

const props = defineProps({
    id: {
        type: String,
    },

    name: {
        type: String,
        required: true
    },

    options: {
        type: Array,
    },

    modelValue: {
        type: String,
        required: true
    },
});


const selection = ref(props.modelValue);

const identifier = computed(() => {
    if (props.id) {
        return props.id;
    }

    if (props.name) {
        return props.name;
    }

    return Math.random()
})

watch(
    () => selection.value,
    (newValue) => {
        console.log('changed');
        emit('update:modelValue', selection.value);
    }
);

</script>
