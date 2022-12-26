<template>
    <div>
        <y-button-row>
            <template v-slot:main>
                <y-button-primary label="Password"/>
            </template>

            <template v-slot:alternative>
                <y-button-secondary label="Username"/>
            </template>
        </y-button-row>

    </div>
</template>

<script setup lang="ts">
import YButtonPrimary from '../../../Buttons/Primary/ButtonPrimary.vue';
import YButtonSecondary from '../../../Buttons/Secondary/ButtonSecondary.vue';
import YButtonRow from '../../../Layouts/ButtonRow/ButtonRow.vue';
</script>

