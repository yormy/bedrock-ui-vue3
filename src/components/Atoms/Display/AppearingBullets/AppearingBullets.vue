<template>
    <div v-for="item in items" :key="item.text">
        <div v-if="item.loading || item.completed">
            <span v-if="item.loading && !item.completed" class="y-icon icon icon-loading fa icon-spin">&nbsp;</span>
            <span v-if="item.completed" class="y-icon icon icon-checked">&nbsp;</span>
            {{ item.text }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits, onMounted, ref, PropType } from 'vue';

const props = defineProps({
    startMs: {
        type: Number,
        default: 1000,
    },
    messages: {
        type: Array as PropType<Array<
            {
                text: string,
                loading: boolean,
                completed: boolean,
                processingMs: number
            }>> ,
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
