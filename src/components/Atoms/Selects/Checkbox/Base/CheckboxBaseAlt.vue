<template>
    <label class="y-checkbox--normal is-danger">
        <div class="checkbox">
            <input type="checkbox" class="hidden checkbox-input" id="checkbox-123">
            <svg class="mark" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
        </div>
        <div class="select-none">
            <label for="checkbox-123" class="checkbox--label">Free shipping via Flowbite</label>
            <div class="checkbox--help">
                For orders shipped from $25 in books or
                I agree with the <a href="#">terms and conditions</a>
                other categories
            </div>

            <div class="checkbox--validation">
                s
                sss
            </div>
        </div>
    </label>
</template>

<script>
import { ObjectUtils } from 'primevue/utils';

export default {
    name: 'Checkbox',
    emits: ['click', 'update:modelValue', 'change', 'input', 'focus', 'blur'],
    props: {
        value: null,
        modelValue: null,
        binary: Boolean,
        name: {
            type: String,
            default: null
        },
        trueValue: {
            type: null,
            default: true
        },
        falseValue: {
            type: null,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: null
        },
        inputId: {
            type: String,
            default: null
        },
        inputClass: {
            type: String,
            default: null
        },
        inputStyle: {
            type: null,
            default: null
        },
        inputProps: {
            type: null,
            default: null
        },
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                let newModelValue;

                if (this.binary) {
                    newModelValue = this.checked ? this.falseValue : this.trueValue;
                } else {
                    if (this.checked) newModelValue = this.modelValue.filter((val) => !ObjectUtils.equals(val, this.value));
                    else newModelValue = this.modelValue ? [...this.modelValue, this.value] : [this.value];
                }

                this.$emit('click', event);
                this.$emit('update:modelValue', newModelValue);
                this.$emit('change', event);
                this.$emit('input', newModelValue);
                this.$refs.input.focus();
            }
        },
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        }
    },
    computed: {
        checked() {
            return this.binary ? this.modelValue === this.trueValue : ObjectUtils.contains(this.value, this.modelValue);
        },
        containerClass() {
            return [
                'p-checkbox p-component',
                {
                    'p-checkbox-checked': this.checked,
                    'p-checkbox-disabled': this.disabled,
                    'p-checkbox-focused': this.focused
                }
            ];
        }
    }
};
</script>
