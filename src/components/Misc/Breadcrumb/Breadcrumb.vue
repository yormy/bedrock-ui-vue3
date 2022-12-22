<template>
    <div>,......
        <div v-for="item in items" :key="item.label">
            {{item.label}}
        </div>

        <div class="y-breadcrumb">
            <a href="#" class="breadcrumb--link">
                <span class="y-icon icon icon-home"></span>
            </a>

            <span class="breadcrumb--separator"><span class="y-icon icon icon-breadcrumb-separator"></span></span>
            <a href="#" class="breadcrumb--link">
                Profile
            </a>

            <span class="breadcrumb--separator"><span class="y-icon icon icon-breadcrumb-separator"></span></span>
            <a href="#" class="breadcrumb--link">
                Settings
            </a>

            <span class="breadcrumb--separator"><span class="y-icon icon icon-breadcrumb-separator"></span></span>
            <a href="#" class="breadcrumb--link">
                Settings
            </a>
        </div>


        <div class="y-breadcrumb--boxed" aria-label="Breadcrumb">
            <ol role="list" class="breadcrumb--list">
                <li class="breadcrumb--item">
                    <a class="breadcrumb--link colored" href="#">
                        <span class="y-icon icon icon-home"></span>
                        <span class="title"> Home </span>
                    </a>
                </li>

                <li class="breadcrumb--item">
                    <span class="spacer"></span>

                    <a class="breadcrumb--link" href="#">
                        <span class="y-icon icon icon-home"></span>
                        <span class="title"> Profile </span>
                    </a>
                </li>

                <li class="breadcrumb--item">
                    <span class="y-icon icon icon-breadcrumb-separator"></span>
                    <a class="breadcrumb--link" href="#">
                        <span class="y-icon icon icon-home"></span>
                        <span class="title"> Profile </span>
                    </a>
                </li>
            </ol>
        </div>

    </div>
</template>

<script setup lang="ts">
import {computed, defineProps, ref, useSlots} from "vue";

const hoverButton = ref(true);
const hoverDropdown = ref(false);

const slots = useSlots();

const props = defineProps({
    items: {
        type: Array,
    },
});

const displayDropdown = computed(() => {
    // if (!slots.dropdown) {
    //     return false;
    // }
    return hoverButton.value || hoverDropdown.value
})
</script>
