<template>
    <div v-for="item in items" :key="item.text">
        <div v-if="item.loading || item.completed">
            <i v-if="item.loading && !item.completed" class="y-icon icon icon-loading fa icon-spin">&nbsp;</i>
            <i v-if="item.completed" class="y-icon icon icon-checked">&nbsp;</i>
            {{ item.text }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits, onMounted, ref } from 'vue';

const props = defineProps({
    startMs: {
        type: Number,
        default: 1000,
    },
    messages: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['completed']);

const items = ref(props.messages);

const startAppearingBullets = () => {
    let completedTime = props.startMs;

    let index = 0;

    for (const item of items.value) {
        window.setTimeout(() => {
            item.loading = true;
        }, completedTime);

        completedTime += item.processingMs;
        // eslint-disable-next-line
        window.setTimeout(() => {
            item.completed = true;

            if (index === items.value.length - 1) {
                emit('completed');
            }
        }, completedTime);

        index += 1;
    }
};

const resetBullets = () => {
    items.value = JSON.parse(JSON.stringify(props.messages));
};

onMounted(() => {
    console.log('start');
    startAppearingBullets();
});
</script>

<style lang="scss" scoped></style>
