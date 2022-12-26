<template>
    <div class="y-content">
        <div class="y-button--card--group h-150">
            <div class="mt-5 grid grid-cols-3 gap-4">


                <div class="y-button--card">
                    <a href="#" class="link">
                        <div class="y-button--card--layout">
                            <div class="card--icon">
                                <span class="y-icon icon icon-warning"></span>
                            </div>

                            <div class="card--content">
                                <div class="flex justify-between">
                                    <div class="title">Profile</div>
                                    <div class="content--icon"><span class="y-icon icon icon-link-external"></span></div>
                                </div>
                                <div class="description">
                                    <ul>
                                        <li> line 1</li>
                                        <li> line 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="y-button--card">
                    <a href="#" class="link">
                        <div class="y-button--card--layout">
                            <div class="card--icon">
                                <span class="y-icon icon icon-warning"></span>
                            </div>

                            <div class="card--content">
                                <div class="flex justify-between">
                                    <div class="title">Profile</div>
                                    <div class="content--icon"><span class="y-icon icon icon-link-external"></span></div>
                                </div>
                                <div class="description">
                                    <ul>
                                        <li> line 1</li>
                                        <li> line 2</li>
                                        <li> line 3</li>
                                        <li> line 5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>


            <div class=" mt-5 grid grid-cols-3 gap-4">


                <div class="y-button--card">
                    <a href="#" class="link">
                        <div class="y-button--card--layout">
                            <div class="card--icon">
                                <span class="y-icon icon icon-warning"></span>
                            </div>

                            <div class="card--content">
                                <div class="flex justify-between">
                                    <div class="title">Profile</div>
                                    <div class="content--icon"><span class="y-icon icon icon-link-external"></span></div>
                                </div>
                                <div class="description">
                                    <ul>
                                        <li> line 1</li>
                                        <li> line 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>


                <div class="y-button--card green">
                    <a href="#" class="link">
                        <div class="y-button--card--layout">
                            <div class="card--icon">
                                <span class="y-icon icon icon-warning"></span>
                            </div>

                            <div class="card--content">
                                <div class="flex justify-between">
                                    <div class="title">Profile</div>
                                    <div class="content--icon"><span class="y-icon icon icon-link-external"></span></div>
                                </div>
                                <div class="description">
                                    <ul>
                                        <li> line 1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="y-button--card green">
                    <a href="#" class="link">
                        <div class="y-button--card--layout">
                            <div class="card--icon">
                                <span class="y-icon icon icon-warning"></span>
                            </div>

                            <div class="card--content">
                                <div class="flex justify-between">
                                    <div class="title">Profile</div>
                                    <div class="content--icon"><span class="y-icon icon icon-link-external"></span></div>
                                </div>
                                <div class="description">
                                    <ul>
                                        <li> line 1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            </div>

        </div>
    </div>
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

.y-content {
    --button-label-font-weight:600;

    --button-card-color-background: purple;
    --button-card-color-background-hover: yellow;
    --button-card-color-text: red;
    --button-card-color-text-hover: pink;
}

.y-button--card--group {
    &.h-50 {
        --button-tab-height : 100px;
    }

    &.h-100 {
        --button-tab-height : 100px;
    }

    &.h-150 {
        --button-tab-height : 150px;
    }

    &.h-200 {
        --button-tab-height : 150px;
    }

}

.y-button--card {
    border-radius: 10px;
    height: var(--button-tab-height);
    background-color: var(--button-card-color-background);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    &.green {
        --button-card-color-background : green;
        --button-card-color-background-hover : orange;
        --button-card-color-text : lime;
        --button-card-color-text-hover: white;
    }

    :hover {
        border-radius: 10px;
        color: var(--button-card-color-text-hover) !important;
        background-color: var(--button-card-color-background-hover);

        font-weight:normal !important;

        .y-button--card--layout .title:hover {
            font-weight: var(--button-label-font-weight) !important;
        }
    }

    a.link {
        text-decoration: none;
        color: var(--button-card-color-text);
        display: flex;
        flex-direction: column;
        height:100%;
    }


    .y-button--card--layout {

        display: flex;
        box-shadow: none;

        .card--icon {
            display: flex;
            font-size: 2.875rem;
            padding-left: 10px;
            pointer-events: none;
        }

        .card--content {
            display: flex;
            flex-direction: column;
            padding: 10px;
            width:100%;


            .title {
                font-size: 1.875rem;
                font-weight: var(--button-label-font-weight);
                line-height: 1;
            }
        }
    }
}

</style>
