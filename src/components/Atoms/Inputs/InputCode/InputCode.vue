<!--eslint-disable vuejs-accessibility/form-control-has-label-->
<template>
    <div class="y-input-code">
        <div v-if="isLoading" class="is-loading">
            <div class="loading-text">LOADING...</div>
        </div>
        <span class="flex">
            {{ label }}
            <span class="ml-1">
                <y-icon-help v-if="moreHelpIcon" :icon="moreHelpIcon" :label="moreHelpLabel" :header="label" :description="moreHelpDescription">
                </y-icon-help>
            </span>
        </span>
        <div :class="isLoading ? 'blurred' : ''" class="code">
            <template v-for="index in fields" :key="`${index}`">
                <input
                    :id="(index - 1).toString()"
                    :class="hasErrors() ? 'is-error' : ''"
                    :data-id="index - 1"
                    :disabled="isDisabled"
                    :pattern="pattern"
                    :style="{
                        width: `${fieldWidthCalc}px`,
                        height: `${fieldHeight}px`,
                    }"
                    :type="type === 'number' ? 'tel' : type"
                    :value="items[index - 1]"
                    maxlength="1"
                    @focus="onFocus"
                    @input="onValueChange"
                    @keydown="onKeyDown"
                    @paste="onPaste"
                />
            </template>
        </div>
        <small v-if="hintText" :id="fieldId + '-hint'" class="p-info">{{ hintText }}</small>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, defineEmits } from 'vue';
import YIconHelp from '../../Helpers/IconHelp.vue';

const emits = defineEmits<{
    (eventName: 'onComplete', code: string): void;
    (eventName: 'onEsc', code: any): void;
    (eventName: 'onEnter', code: any): void;
    (eventName: 'onChange', code: any): void;
    (eventName: 'onKeyUp', code: any): void;
    (eventName: 'update:modelValue', value: string): void;
}>();

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
    id: {
        type: String,
        default: '',
    },

    /**
     * allowed input number | string
     */
    type: {
        type: String,
        default: 'number',
    },

    label: {
        type: String,
        default: '',
    },

    hintText: {
        type: String,
        default: '',
    },

    /** --------- More Help ---------- */
    moreHelpLabel: {
        type: String,
        default: '',
    },

    moreHelpIcon: {
        type: String,
        default: 'y-icon icon icon-help icon-small',
    },

    moreHelpDescription: {
        type: String,
        default: '',
    },

    /**
     * The length of the code
     */
    fields: {
        type: Number,
        default: 6,
    },

    fieldSpace: {
        type: Number,
        default: 10,
    },

    fieldWidth: {
        type: Number,
        default: 48,
    },

    fieldHeight: {
        type: Number,
        default: 54,
    },

    autoFocus: {
        type: Boolean,
        default: true,
    },

    modelValue: {
        type: String,
        default: '',
    },

    isLoading: {
        type: Boolean,
        default: false,
    },

    isDisabled: {
        type: Boolean,
        default: false,
    },
});

const fieldWidthCalc = computed(() => {
    return props.fieldWidth;
})

const hasErrors = () => {
    return false;
};

const pattern = computed<string>(() => {
    let regex = '[0-9a-zA-Z]';

    if (props.type === 'number') {
        regex = '[0-9]';
    }

    return regex;
});

const fieldId = computed(() => {
    if (!props.id) {
        return Math.ceil(Math.random() * 1000000);
    }

    return props.id;
});

//= ==============================================

const setFocusTo = (id: any) => {
    const element = document.getElementById(id) as HTMLInputElement;

    element?.focus();
    element?.select();
};

const setFocusToPrevious = (index: number) => {
    let next = index;

    if (index - 1 >= 0) {
        next = index - 1;
    }

    setFocusTo(next);
};

const buildCode = (input: any) => {
    const fullCode = [];

    for (let i = 0; i < props.fields; i += 1) {
        fullCode[i] = input[i];
    }

    return fullCode;
};

const items = ref(buildCode(props.modelValue));

const setCode = (input: string) => {
    for (let i = 0; i < props.fields; i += 1) {
        items.value[i] = input[i];
    }
};

const clear = () => {
    for (let i = 0; i < props.fields; i += 1) {
        items.value[i] = '';
    }
};

const onChange = () => {
    emits('onChange', buildCode(items.value));
};

const onKeyUp = () => {
    emits('onChange', buildCode(items.value));
    emits('onKeyUp', buildCode(items.value));
};

const onEsc = () => {
    emits('onEsc', buildCode(items.value));
};

const onFocus = (e: any) => {
    setFocusTo(e.target.id);
};

const triggerChange = () => {
    const concatValue = items.value.join('');

    if (concatValue.length === props.fields) {
        emits('onComplete', concatValue);
        emits('update:modelValue', concatValue);
    }
};

const setFocusToNext = (index: number) => {
    let next = index;

    if (items.value.length >= index + 1) {
        next = index + 1;
    }

    setFocusTo(next);
};

const onKeyDown = (e: any) => {
    const index = parseInt(e.target.id, 10);

    switch (e.keyCode) {
        case KEY_CODE.enter: {
            e.preventDefault();
            const val = items.value.join('');

            if (val.length >= props.fields) {
                emits('onEnter', val);
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
            items.value[index] = '';
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
            break;
    }
};

const onValueChange = (e: any) => {
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

    items.value[index] = e.target.value;

    setFocusToNext(index);
    triggerChange();
};

const onPaste = (event: any) => {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData('Text');

    setCode(pastedValue);
    triggerChange();
};
</script>
