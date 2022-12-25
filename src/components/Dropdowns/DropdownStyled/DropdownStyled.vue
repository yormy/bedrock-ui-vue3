<template>
    <div class="y-content">
        <div>
            <div class="y-dropdown-container">
                <svg class="input"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     width="30px" height="30px" viewBox="0 0 38 22" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-539.000000, -199.000000)" fill="#ffffff" fill-rule="nonzero">
                            <g transform="translate(538.000000, 183.521208)">
                                <polygon id="Path-Copy"
                                         transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                                         points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"/>
                            </g>
                        </g>
                    </g>
                </svg>
                <select class="select">
                    <option>A-Z</option>
                    <option>Z-A</option>
                    <option>x</option>
                    <option>Dreuzel</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.y-dropdown-container {
    display: inline-flex;
    position: relative;
    align-self: center;

    .input {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5rem;
        margin: 0.5rem;
        background-color: #6D28D9;
        color: #ffffff;
        border-radius: 0.25rem;
        pointer-events: none;

    }

    .select {
        padding-left: 1.25rem;
        padding-right: 2.5rem;
        color: #4B5563;
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 700;
        height: 3rem;
        border-radius: 0.25rem;
        border-width: 2px;
        border-color: #6D28D9;
        appearance: none;
        background-color: #ffffff;

        &:hover {
            border-color: #9CA3AF;
        }

    }

}
</style>
