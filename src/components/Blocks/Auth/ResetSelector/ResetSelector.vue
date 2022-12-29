<template>
    <div>
        <y-button-row>
            <template #main>
                <y-button-primary label="Password" />
            </template>

            <template #alternative>
                <y-button-secondary label="Username" />
            </template>
        </y-button-row>
    </div>
</template>

<script setup lang="ts">
import YButtonPrimary from '../../../Atoms/Buttons/Primary/ButtonPrimary.vue';
import YButtonSecondary from '../../../Atoms/Buttons/Secondary/ButtonSecondary.vue';
import YButtonRow from '../../../Layouts/ButtonRow/ButtonRow.vue';
</script>
