<template>
    <div>
        dd
        <div class="y-dropdown--container">
            <!-- Dropdown toggle -->
            <input id="checkbox-125" type="checkbox" class="hidden y-dropdown--checkbox--input" >
            <label for="checkbox-125" class="flex justify-end" >
                <div  class="y-dropdown--label">
                    <span class="flag-icon flag-icon-de"></span>
                </div>
                <div class="y-icon icon icon-dropdown"></div>
            </label>

            <!-- Dropdown card -->
            <div class="y-dropdown--card right-aligned">
                <a href="#" class="y-dropdown--item"> <span class="flag-icon flag-icon-nl"></span> Dutch  </a>
                <a href="#" class="y-dropdown--item"> <span class="flag-icon flag-icon-us"></span> English </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PrimeMenubar from 'primevue/menubar';
import {ref} from "vue";

const items = ref([
    {
        label:'File',
        icon:'y-icon icon icon-users',
        items:[
            {
                label:'New',
                icon:'y-icon icon icon-users',
                items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    }
                ]
            },
            {
                label:'Delete',
                icon:'pi pi-fw pi-trash'
            },
            {
                separator:true
            }
        ]
    },
]);

</script>
