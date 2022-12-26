<template>
    <div class="y-content">
    <div class="y-table--container">
        <table class="y-table--table">
            <thead>
                <tr class="y-table--header">
                    <th v-for="(heading, indexheading) in headings" :key="indexheading">
                        {{heading.name}}
                    </th>
                </tr>
            </thead>

            <tbody class="y-table--body">
                <tr v-for="(row, index) in rows" :key="index">
                    <td v-for="(column, indexcolumn) in row" :key="indexcolumn">
                       {{column}}
                    </td>
                </tr>

            </tbody>

            <tfoot>
                <tr class="y-table--footer">
                    <th v-for="(footer, indexFooter) in footers" :key="indexFooter">
                        {{footer.name}}
                    </th>
                </tr>
            </tfoot>
        </table>
    </div>
    </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";

const props = defineProps({
    rows: {
        type: Array,
        required: true,
    },

    headings: {
        type: Array,
    },

    footers: {
        type: Array,
    },
});

</script>
