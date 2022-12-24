<template>
    <div class="y-content">
        <div class="flex">

            <div v-for="(option, index) in options" :key="option.label">

                <div class="y-checkable">
                    <div class="flex flex-col">
                        <div class="flex y-chip--help">
                            <div class="text">sss</div>
                            <div class="icon icon-help icon-extra-small"></div>
                        </div>
                        <input
                            class="checkbox-input"
                            type="radio"
                            name="shippingOption"
                            :value="option.value"
                            v-model="selection"
                            :id="'radio-' + index" checked />
                        <label class="label" :for="'radio-' + index">

                    <span class="is-on">
                        ON-1- {{option.label}}
                    </span>
                            <span class="is-off">
                        OFF-1 - {{option.label}}
                    </span>

                        </label>
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<script setup lang="ts">
import {computed, defineEmits, ref, watch} from "vue";
const emit = defineEmits(['update:modelValue']);

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
