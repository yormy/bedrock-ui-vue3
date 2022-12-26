<template>
    <div class="banner">
        <p class="text sm:text-center">
            Love Alpine JS? Check out this new course!
            <a class="underline" href="/alpinejs"> Now More &rarr; </a>
        </p>
    </div>

    <br>
    <div class="banner2 sm:justify-between sm:items-center sm:flex sm:px-6 lg:px-8"
    >
        <p class="font-medium text-center sm:text-left">
            Love Alpine JS?
            <br class="sm:hidden" />
            Check out this new deep dive course!
        </p>

        <a
            class="learn-more"
            href="/alpinejs"
        >
            Learn More
        </a>
    </div>
    <br><br>
</template>

<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
});
</script>

<style lang="scss" scoped>
.banner2 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #4F46E5;
    color: #ffffff;
}

.banner {
    position: relative;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-right: 3.5rem;
    background-color: #4F46E5;
    color: #ffffff;

    .text {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        text-align: left;
    }

    .close {
        position: absolute;
        right: 1rem;
        top: 50%;
        padding: 0.25rem;
        transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
        --transform-translate-y: -50%;
        border-radius: 0.5rem;
    }

    .learn-more {
        display: block;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        margin-top: 1rem;
        background-color: #ffffff;
        transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
        color: #4F46E5;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        text-align: center;
        border-radius: 0.5rem;

        @media (min-width: 640px) {
            margin-top: 0;
        }
    }

}
</style>
