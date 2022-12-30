<template>
    <div>
        <div class="y-breadcrumb">
            <div v-for="(item, index) in items" :key="item.label">
                <a :href="item.url" class="breadcrumb--link" :title="item.description">
                    <span v-if="index !== 0" class="breadcrumb--separator"><span class="y-icon icon icon-breadcrumb-separator"></span></span>
                    <span v-if="item.icon" :class="item.icon"></span>
                    <span class="title">{{ item.label }}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";

const props = defineProps({
    items: {
        type: Array as PropType<Array<
            {
                label: string,
                description: string,
                icon: string,
                url: string,
            }>> ,
        default() {
            return [];
        },
    },
});
</script>
