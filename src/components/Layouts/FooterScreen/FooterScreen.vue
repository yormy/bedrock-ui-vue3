<template>
    <div class="y-page-footer--container">
        <div class="y-page-footer--bar">
            <p class="text-sm font-medium text-left sm:text-center">fixed to bottom of screen</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.y-page-footer--container {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
}

.y-page-footer--bar {
    position: relative;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 3.5rem;
    background-color: #4f46e5;
    color: #ffffff;
}
</style>
