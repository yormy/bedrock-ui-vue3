<template>
    :Selected car = {{ selectedCar }}
    <br>
    <y-radio name="car" v-model='selectedCar' :options='options'></y-radio>

</template>

<script setup lang="ts">
import YBreadcrumb from '../../../../src/components/Misc/Breadcrumb/Breadcrumb.vue';
import YBreadcrumbBoxed from '../../../../src/components/Misc/Breadcrumb/BreadcrumbBoxed.vue';
import {ref} from "vue";

const selectedCar = ref('');

const options = [
    {
        label:'Renault',
        value : "ren",
        mouseOver: 'mouseover description',
        moreHelpTitle: 'Title',
        moreHelpContent: 'more help here'
    },
    {
        label:'BMW',
        value : "bm",
    },
]
</script>
