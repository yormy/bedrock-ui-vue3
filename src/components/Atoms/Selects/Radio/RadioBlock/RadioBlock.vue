<template>
    <div class="y-content">
        <div class="grid grid-cols-3 gap-8">
            <div v-for="(option, index) in options" :key="option.label" class="relative radio1">
                <input
                    :id="'radio1-' + index"
                    v-model="selection"
                    class="hidden group peer radio-input"
                    type="radio"
                    :name="name"
                    :value="option.value"
                />
                <label class="label" :for="'radio1-' + index">
                    <div class="flex justify-between">
                        <div>{{ option.label }}</div>
                        <div class="checked"><span class="y-icon icon solid icon-checked-circle"></span></div>
                    </div>
                    <span class="price">$ 5.99</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineEmits, PropType, ref, watch} from 'vue';
import YPurifiedHtml from '../../../Helpers/PurifiedHtml.vue';
import useIdentifier from '../../../Hooks/useIdentifier';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    id: {
        type: String,
        default: null,
    },

    name: {
        type: String,
        required: true,
    },

    options: {
        type: Array as PropType<Array<
            {
                moreHelpTitle: string,
                moreHelpContent: string,
                labelOff: string,
                labelOn: string,
                mouseOver: string,
                value: string,
                label: string
            }>> ,
        default() {
            return [];
        },
    },

    modelValue: {
        type: String,
        required: true,
    },
});

const selection = ref(props.modelValue);

const [identifier] = useIdentifier(props.id);

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

.radio-input ~ label .checked {
    display: none;
}
.radio-input:checked ~ label .checked {
    display: block;
}

.price {
    display: block;
    margin-top: 0.25rem;
    color: #6b7280;
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
    border-style: solid;
    cursor: pointer;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>
