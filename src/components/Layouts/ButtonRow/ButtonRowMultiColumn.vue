<template>
    <div class="y-button-row flex justify-content-between">
        <slot name="alternative"></slot>
        <div>
            <!-- empty necessary for styling-->
        </div>
        <div class="flex flex-row-reverse">
            <slot name="main"></slot>
            <slot></slot>
        </div>
    </div>
</template>
