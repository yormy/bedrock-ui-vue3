<template>
    <div class="y-content">
        <div class="grid grid-cols-3 gap-8">

            <div v-for="(option, index) in options" :key="option.label" class="relative radio1">
                <input class="hidden group peer radio-input" type="radio" v-model="selection" :name="name" :value="option.value" :id="'radio1-' + index" />
                <label class="label" :for="'radio1-' + index">
                    <div class="flex justify-between">
                        <div> {{ option.label }} </div>
                        <div class="checked"> <span class="y-icon icon solid icon-checked-circle"></span> </div>
                    </div>
                    <span class="price">$ 5.99</span>
                </label>
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

<style lang="scss" scoped>
.radio1 {
    :hover {
        background-color: lightskyblue;
    }
}

.radio-input ~label .checked{
    display:none;
}
.radio-input:checked ~label .checked{
    display:block;
}

.price {
    display: block;
    margin-top: 0.25rem;
    color: #6B7280;
    font-size: 0.75rem;
    line-height: 1rem;
}

.label {
    display: block;
    padding: 1rem;
    transition-property: background-color, border-color, color, fill, stroke;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: navy;
    border-style:solid;
    cursor: pointer;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

</style>
