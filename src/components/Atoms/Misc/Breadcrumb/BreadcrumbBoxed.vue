<template>
    <div>
        <div class="y-breadcrumb--boxed" aria-label="Breadcrumb">
            <ol class="breadcrumb--list">
                <div v-for="(item, index) in items" :key="item.label">
                    <li v-if="index == 0" class="breadcrumb--item">
                        <a class="breadcrumb--link colored" :href="item.url" :title="item.description">
                            <span v-if="item.icon" :class="item.icon"></span>
                            <span class="title">{{ item.label }}</span>
                        </a>
                    </li>

                    <li v-else class="breadcrumb--item">
                        <span v-if="index == 1" class="spacer"></span>
                        <span v-else class="y-icon icon icon-breadcrumb-separator"></span>

                        <a class="breadcrumb--link" :href="item.url" :title="item.description">
                            <span v-if="item.icon" :class="item.icon"></span>
                            <span class="title">{{ item.label }}</span>
                        </a>
                    </li>
                </div>
            </ol>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    items: {
        type: Array,
        default() {
            return [];
        },
    },
});
</script>
