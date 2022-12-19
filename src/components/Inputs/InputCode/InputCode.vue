<template>
    <div class="y-input-code">
        <div v-if="isLoading" class="is-loading">
            <div class="loading-text">LOADING...</div>
        </div>
        {{values}}
        <div :class="isLoading ? 'blurred' : ''" class="code">
            <template v-for="(v, index) in values" :key="`${id}-${index}`">

                <input

                    :ref="iRefs[index]"
                    :autoFocus="autoFocus && !isLoading && index === autoFocusIndex"
                    :class="hasErrors() ? 'is-error' : ''"
                    :data-id="index"
                    :disabled="isDisabled"
                    :pattern="pattern"
                    :required="isRequired"
                    :style="{
                        width: `${fieldWidthCalc}px`,
                        height: `${fieldHeight}px`,
                      }"
                    :type="type === 'number' ? 'tel' : type"
                    :value="v"
                    maxlength="1"
                    v-on:focus="onFocus"
                    v-on:input="onValueChange"
                    v-on:keydown="onKeyDown"
                    v-on:paste="onPaste"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, ref, defineEmits, defineProps, reactive} from "vue";

const emit = defineEmits(['enter', 'onChange', 'onFocus', 'onValueChange', 'onKeyDown', 'onPaste', 'update:modelValue']);

const KEY_CODE = {
    backspace: 8,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46,
    space: 32,
    enter: 13,
};

const props = defineProps({
    /**
     * allowed input number | string
     */
    type: {
        type: String,
        default: 'number',
    },

    /**
     * The length of the code
     */
    fields: {
        type: Number,
        default: 6,
    },

    fieldWidth: {
        type: Number,
        default: 48,
    },

    fieldSpace: {
        type: Number,
        default: 10,
    },

    fieldHeight: {
        type: Number,
        default: 54,
    },

    autoFocus: {
        type: Boolean,
        default: true,
    },
});

const values = ref(['1','1','1','1','1','1']);
const iRefs = ['1','2','3','4','5','6'];


const value ='';
const isLoading = false;
const isDisabled = false;
const isRequired = false;

const hasErrors = () => {
    return false;
};

const pattern = computed<string>(() => {
    let pattern = '[0-9a-zA-Z]';
    if (props.type === 'number') {
        pattern = '[0-9]';
    }

    return pattern;
});

//===============================================
const onChange = () => {
    emit("input", value);
};

const onKeyUp = () => {
    emit("input", value);
    emit('onKeyUp', value);
};

const onEnter = () => {
    emit('onEnter', value);
};

const onEsc = () => {
    emit('onEsc', value);
};

const onKeyDown = (e) => {
    const index = parseInt(e.target.dataset.id, 10);
    const prevIndex = index - 1;
    const nextIndex = index + 1;
    const prev = iRefs[prevIndex];
    const next = iRefs[nextIndex];
    switch (e.keyCode) {
        case KEY_CODE.enter: {
            e.preventDefault();
            const val = values.join('');
            if (val.length >= props.fields) {
                emit('enter', val);
            }
            break;
        }

        case KEY_CODE.space: {
            e.preventDefault();
            break;
        }

        case KEY_CODE.delete: {
            e.preventDefault();
            const vals = [...values];
            vals[index] = '';
            values = vals;
            triggerChange(vals);
            break;
        }

        case KEY_CODE.backspace: {
            e.preventDefault();
            const vals = [...values];
            if (values[index]) {
                vals[index] = '';
                values = vals;
                triggerChange(vals);
            } else if (prev) {
                vals[prevIndex] = '';
                $refs[prev][0].focus();
                values = vals;
                triggerChange(vals);
            }
            break;
        }
        case KEY_CODE.left:
            e.preventDefault();
            if (prev) {
                $refs[prev][0].focus();
            }
            break;
        case KEY_CODE.right:
            e.preventDefault();
            if (next) {
                $refs[next][0].focus();
            }
            break;
        case KEY_CODE.up:
        case KEY_CODE.down:
            e.preventDefault();
            break;
        default:
            // this.handleKeys[index] = true
            break;
    }
};

const triggerChange = (values = values) => {
    // const {fields} = this;
    // const val = values.join('');
    // this.$emit('change', val);
    // if (val.length >= fields) {
    //     this.$emit('complete', val);
    // }
};

const onValueChange = (e) => {
    const index = parseInt(e.target.dataset.id, 10);
    // const {type, fields} = this;

    if (props.type === 'number') {
        e.target.value = e.target.value.replace(/[^\d]/gi, '');
    }
    if (props.type === 'string') {
        e.target.value = e.target.value.replace(/[^0-9a-zA-Z]/g, '');
    }

    // this.handleKeys[index] = false
    if (e.target.value === '' || (props.type === 'number' && !e.target.validity.valid)) {
        return;
    }

    const enteredValue = e.target.value;

    let next = 0;
    const {value} = e.target;
    //let {values} = this;


    console.log(value);
    values.value = Object.assign([], values);
    if (value.length > 1) {
        let nextIndex = value.length + index - 1;
        if (nextIndex >= props.fields) {
            nextIndex = props.fields - 1;
        }
        next = iRefs[nextIndex];
        const split = value.split('');

        let i = 0;
        for (let item of split) {
            const cursor = index + i;
            if (cursor < props.fields) {
                values.value[cursor] = item;
            }
            i++;
        }

        console.log(values.value);
        values.value = values;
    } else {
        next = iRefs[index + 1];
        values[index] = value;
        values = values;
    }

    if (next) {
        const element = $refs[next][0];
        element.focus();
        element.select();
    }

    triggerChange(values);
};
</script>
