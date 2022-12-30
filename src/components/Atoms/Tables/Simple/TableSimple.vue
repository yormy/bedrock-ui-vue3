<template>
    <div class="y-content">
        <div class="y-table--container">
            <table class="y-table--table">
                <thead>
                    <tr class="y-table--header">
                        <th v-for="(heading, indexheading) in headings" :key="indexheading" id="header">
                            {{ heading.name }}
                        </th>
                    </tr>
                </thead>

                <tbody class="y-table--body">
                    <tr v-for="(row, index) in rows" :key="index">
                        <td v-for="(column, indexcolumn) in row" :key="indexcolumn">
                            {{ column }}
                        </td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr class="y-table--footer">
                        <th v-for="(footer, indexFooter) in footers" :key="indexFooter" id="footer">
                            {{ footer.name }}
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
    rows: {
        type: Array,
        required: true,
    },

    headings: {
        type: Array as PropType<
            Array<{
                name: string;
            }>
        >,
        default() {
            return [];
        },
    },

    footers: {
        type: Array as PropType<
            Array<{
                name: string;
            }>
        >,
        default() {
            return [];
        },
    },
});
</script>
