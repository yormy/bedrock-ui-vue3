<template>
    <div class="y-input-code">
        <div v-if="isLoading" class="is-loading">
            <div class="loading-text">LOADING...</div>
        </div>
        {{values}} {{fields}} {{modelValue}}==
        <div :class="isLoading ? 'blurred' : ''" class="code">
            <template v-for="index in fields" :key="`${index}`">
                <input
                    :id="index-1"
                    :autoFocus="autoFocus && !isLoading && index-1 === autoFocusIndex"
                    :class="hasErrors() ? 'is-error' : ''"
                    :data-id="index-1"
                    :disabled="isDisabled"
                    :pattern="pattern"
                    :required="isRequired"
                    :style="{
                        width: `${fieldWidthCalc}px`,
                        height: `${fieldHeight}px`,
                      }"
                    :type="type === 'number' ? 'tel' : type"
                    :value="values[index-1]"
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
import {computed, ref, defineEmits, defineProps, onMounted} from "vue";

const emit = defineEmits([
    'complete',
    'enter',
    'onChange',
    'onFocus',
    'onValueChange',
    'onKeyDown',
    'onPaste',
    'update:modelValue'
]);

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

    modelValue : {
        type: String,
        default: ''
    }
});



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
    const index = parseInt(e.target.id, 10);
    console.log('cleanindex:' + index);
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

        case KEY_CODE.delete:
        case KEY_CODE.backspace: {
            e.preventDefault();
            values.value[index] = '';
            triggerChange();
            break;
        }

        case KEY_CODE.left:
            e.preventDefault();
            setFocusToPrevious(index);
            break;

        case KEY_CODE.right:
            e.preventDefault();
            setFocusToNext(index);
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

const triggerChange = () => {
    const concatValue = values.value.join('');
    if (concatValue.length === props.fields) {
        emit('complete', concatValue);
        emit('update:modelValue', concatValue)
    }
};

const setFocusTo = (id: any) => {
    const element = document.getElementById(id) as HTMLInputElement;
    element?.focus()
    element?.select()
}

const setFocusToNext = (index: number) => {
    let next = index
    if (values.value.length >= (index + 1)) {
        next = index + 1;
    }
    setFocusTo(next);
}

const setFocusToPrevious = (index: number) => {
    let next = index
    if (0 <= (index - 1)) {
        next = index - 1;
    }
    setFocusTo(next);
}

const onValueChange = (e) => {
    const index = parseInt(e.target.id, 10);


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

    values.value[index] = e.target.value;

    setFocusToNext(index);
    triggerChange();
};


const onPaste = (event: any) => {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData('Text');
    setCode(pastedValue);
    triggerChange();
};

const setCode = (input) => {
    for (let i = 0; i < props.fields; i += 1) {
        values.value[i] = input[i];
    }
};

const buildCode = (input) => {
    const fullCode = [];
    for (let i = 0; i < props.fields; i += 1) {
        fullCode[i] = input[i];
    }

    return fullCode;
};

const values = ref(buildCode(props.modelValue));


</script>
