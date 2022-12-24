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
        description: 'mouseover description',
        url:'https://xxxx',
        icon: 'y-icon icon icon-home'
    },
    {
        label:'BMW',
        value : "bm",
        description: 'mouseover test',
        url:'https://xxxx',
    },
]
</script>
