<template>
    <div class="y-content">
        <!--
        https://mambaui.com/components/tab
        https://www.hyperui.dev/components/application-ui/steps
        https://preline.co/docs/navs-and-tabs.html#
        https://flowbite.com/docs/components/tabs/
        https://tailwindcomponents.com/component/tabs-line-with-icons
        -->
        <div class="y-tab-container">
            <section class="bg-gray-100 text-gray-800">
                <div class="grid grid-cols-1 gap-x-4 mx-auto content-between sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4">
                    <!-- TAB SECTION-->
                    <label for="checkbox-tab1" class="tab tab1 order-1">
                        <div class="icon">
                            <span class="icon icon-warning"></span>
                        </div>
                        <div class="content">
                            <p class="title">Names</p>
                            <p class="description">Orders</p>
                        </div>
                    </label>

                    <input id="checkbox-tab1" type="radio" name="tabs" class="hidden tab-checkbox-input-tab" />
                    <div class="sm:col-span-2 md:col-span-4 tab--content full-width tab1 order-1 sm:order-3 md:order-5 xl:order-9">order names</div>

                    <!-- TAB SECTION-->
                    <label for="checkbox-tab2" class="tab tab2 order-2">
                        <div class="icon">
                            <span class="icon icon-warning"></span>
                        </div>
                        <div class="content">
                            <p class="title">Back</p>
                            <p class="description">items</p>
                        </div>
                    </label>

                    <input id="checkbox-tab2" type="radio" name="tabs" class="hidden tab-checkbox-input-tab" checked />
                    <div class="sm:col-span-2 md:col-span-4 tab--content tab2 order-2 md:order-5 xl:order-9">back items</div>

                    <!-- TAB SECTION-->
                    <label for="checkbox-tab3" class="tab tab3 order-3">
                        <div class="icon">
                            <span class="icon icon-warning"></span>
                        </div>
                        <div class="content">
                            <p class="title">Log</p>
                            <p class="description">details</p>
                        </div>
                    </label>

                    <input id="checkbox-tab3" type="radio" name="tabs" class="hidden tab-checkbox-input-tab" />
                    <div class="sm:col-span-2 md:col-span-4 tab--content tab3 order-3 md:order-6 xl:order-9">log details</div>

                    <!-- TAB SECTION-->
                    <label for="checkbox-tab4" class="tab tab4 order-4">
                        <div class="icon">
                            <span class="icon icon-warning"></span>
                        </div>
                        <div class="content">
                            <p class="title">Emails</p>
                            <p class="description">sent</p>
                        </div>
                    </label>

                    <input id="checkbox-tab4" type="radio" name="tabs" class="hidden tab-checkbox-input-tab" />
                    <div class="sm:col-span-2 md:col-span-4 tab--content tab4 order-4 md:order-5 xl:order-9">Sent Emails</div>
                </div>
            </section>
        </div>

        <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <!-- Select (Mobile only) -->
            <div class="sm:hidden">
                <label for="hs-card-nav-tabs" class="sr-only">Select a nav</label>
                <select
                    id="hs-card-nav-tabs"
                    name="hs-card-nav-tabs"
                    class="block w-full border-t-0 border-x-0 border-gray-300 rounded-t-xl focus:ring-blue-600 focus:border-blue-600"
                >
                    <option selected>My Account</option>
                    <option>Company</option>
                    <option>Team Members</option>
                </select>
            </div>
            <!-- End Select (Mobile only) -->

            <!-- Nav Tabs (Device only) -->
            <div class="hidden sm:block">
                <nav
                    class="relative z-0 flex border-b rounded-xl divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
                    aria-label="Tabs"
                >
                    <a
                        class="group relative min-w-0 flex-1 bg-white py-4 px-4 border-b-2 border-b-blue-600 text-gray-900 rounded-tl-xl text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:text-gray-300"
                        aria-current="page"
                        href="#"
                    >
                        My Account
                    </a>

                    <a
                        class="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:hover:text-gray-400"
                        href="#"
                    >
                        Company
                    </a>

                    <a
                        class="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:hover:text-gray-400"
                        href="#"
                    >
                        Team Members
                    </a>
                </nav>
            </div>
            <!-- End Nav Tabs (Device only) -->
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.y-content {
    --tab-height: 100px;
}
.content .title {
    font-size: 0.6rem !important;
}

.y-tab-container {
    width: 100%;

    .tab {
        display: flex;
        //margin-left: 1rem;
        background-color: #f9fafb;
        color: #1f2937;
        border-radius: 0.5rem;

        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        //@media (min-width: 768px) {
        //    margin-left: 1.5rem;
        //}

        .icon {
            display: flex;
            font-size: 4rem;

            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 5px;

            vertical-align: middle;
            justify-content: center;
            border-radius: 0.5rem;

            //@media (min-width: 640px) {
            //    padding: 1rem;
            //}
        }

        .content {
            display: flex;
            vertical-align: middle;
            flex-direction: column;
            justify-content: center;
            padding-left: 15px;

            .title {
                font-size: 1.875rem;
                font-weight: 600;
                line-height: 1;
            }
        }
    }

    .tab--content {
        border-radius: 0.5rem;
        //display:none;
        height: var(--tab-height);

        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .tab-checkbox-input-tab {
        ~ .tab--content {
            display: none;
        }

        &:checked + .tab--content {
            display: block;
        }
    }

    .tab-checkbox-input-tab2 {
        + .tab--content {
            display: none;
        }

        &:checked + .tab--content {
            display: block;
        }
    }

    .tab2:active {
        color: red !important;
    }

    //.tab-checkbox-input-tab2 {
    //    ~.tab--content {
    //        display:none;
    //
    //    }
    //
    //    &:checked ~.tab--content {
    //        display:block
    //
    //    }
    //}

    //.tab-checkbox-input-tab2 {
    //    ~.tab--content {
    //        visibility: hidden;
    //        width:0;
    //    }
    //
    //    &:checked ~.tab--content {
    //        visibility: visible;
    //        width:100%;
    //    }
    //}

    .tab1 {
        background-color: green;
    }

    .tab2 {
        background-color: yellow;
    }

    .tab3 {
        background-color: purple;
    }

    .tab4 {
        background-color: navy;
    }
}
</style>
