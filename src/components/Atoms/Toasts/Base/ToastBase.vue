<template>
    <div>
        <Toast
            :close-icon="closeIcon"
            :info-icon="infoIcon"
            :success-icon="successIcon"
            :warn-icon="warningIcon"
            :error-icon="dangerIcon"
            :position="position"
            v-bind="$attrs"
        />
    </div>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { watch } from 'vue';

const toast = useToast();

const closeIcon = 'y-icon icon icon-close';
const infoIcon = 'y-icon icon icon-info';
const successIcon = 'y-icon icon icon-success';
const warningIcon = 'y-icon icon icon-warning';
const dangerIcon = 'y-icon icon icon-danger';

const props = defineProps({
    type: {
        type: String,
        default: 'info',
        validator(value: string) {
            return ['info', 'success', 'warning', 'danger'].includes(value);
        },
    },

    position: {
        type: String,
        default: 'top-right',
        validator(value: string) {
            return ['top-left', 'bottom-left', 'bottom-right', 'top-right'].includes(value);
        },
        required: false,
    },

    trigger: {
        type: Boolean,
    },

    title: {
        type: String,
        default: '',
    },

    description: {
        type: String,
        default: '',
    },
});

const getType = () => {
    if (props.type === 'danger') {
        return 'error';
    }

    if (props.type === 'warning') {
        return 'warn';
    }

    return props.type;
};

const showToast = () => {
    toast.add({
        severity: getType(),
        summary: props.title,
        detail: props.description,
        life: 3000,
    });
};

watch(
    () => props.trigger,
    (newValue) => {
        showToast();
    }
);
</script>
