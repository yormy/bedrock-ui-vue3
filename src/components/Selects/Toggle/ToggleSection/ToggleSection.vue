<template>
    <slot></slot>
    <div class="y-content">
        <label class="y-toggle-section" for="toggle-125" >
            <input id="toggle-125" type="checkbox" checked class="hidden checkbox-input">
            <span class="is-off">
                <slot name="off"></slot>
            </span>
            <span class="is-on">
                <slot name="on"></slot>
            </span>
        </label>
    </div>
</template>

<script setup lang="ts">

</script>
