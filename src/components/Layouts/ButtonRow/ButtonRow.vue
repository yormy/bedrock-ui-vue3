<template>
    <div class="y-button-row flex justify-content-between">
        <div class="y-button-row flex">
            <slot name="main"></slot>
            <slot></slot>
        </div>
        <slot name="alternative"></slot>
    </div>
</template>
