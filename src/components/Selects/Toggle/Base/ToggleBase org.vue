<template>
    <div class="y-content">
<!--        todo: sqaure vs round round = yellow-->
<!--        colors not correct...-->
<!--        <label class="y-toggle-slider round wide-slider" for="toggle-123" >-->
<!--            <input id="toggle-123" type="checkbox" checked class="hidden checkbox-input">-->
<!--            <span class="is-off red">No</span>-->
<!--            <span class="is-on green">Yes</span>-->
<!--            <span class="slider">&nbsp;</span>-->
<!--        </label>-->


<!--        <br>&#45;&#45;<br>-->
<!--        <label class="y-toggle-section" for="toggle-125" >-->
<!--            <span class="y-faded-small">-->
<!--                <input id="toggle-125" type="checkbox" checked class="hidden checkbox-input">-->
<!--                <span class="is-off"><span class="y-icon icon icon-darkmode"> *******</span></span>-->
<!--                <span class="is-on"><span class="y-icon icon icon-lightmode"> ######</span></span>-->
<!--            </span>-->
<!--        </label>-->

<!--        <br>&#45;&#45;<br>-->
<!--        <label class="y-toggle-section" for="toggle-1251" >-->
<!--            <input id="toggle-1251" type="checkbox" checked class="hidden checkbox-input">-->
<!--            <span class="is-off"><span class="y-icon icon icon-darkmode"> *******</span></span>-->
<!--            <span class="is-on"><span class="y-icon icon icon-lightmode"> ######</span></span>-->
<!--        </label>-->

<!--        <br>&#45;&#45;<br>-->
<!--        <label  class="y-toggle-select" for="Toggle3">-->
<!--            <input id="Toggle3" type="checkbox" class="hidden checkbox-input">-->
<!--            <span class="left green ">Monthly 123</span>-->
<!--            <span class="right green ">Annually</span>-->
<!--        </label>-->


        <div class="y-checkable">
            <div class="flex flex-col">
                <div class="flex y-chip--help">
                    <div class="text">sss</div>
                    <div class="icon icon-help icon-extra-small"></div>
                </div>


                <input id="toggle-126" type="checkbox" class="checkbox-input">
                <label class="y-checkable" for="toggle-126" >
                    <span class="is-on">
                        <span class="y-tag-chip tiny is-danger-solid">
                            <span class="icon icon-checked"></span> on
                        </span>
                    </span>
                    <span class="is-off">
                        <span class="y-tag-chip tiny square is-danger-open">
                            <span class="icon icon-checked"></span> off
                        </span>
                    </span>
                </label>
                <div class="flex y-chip--help below">
                    <div class="text">sss</div>
                    <!--                    <div class="icon icon-help icon-extra-small"></div>-->
                </div>
            </div>
        </div>

        +++++++++++++++

        <div class="y-checkable">
            <div class="flex flex-col">
                <div class="flex y-chip--help">
                    <div class="text">sss</div>
                    <div class="icon icon-help icon-extra-small"></div>
                </div>


                <input id="toggle-127" type="checkbox" class="checkbox-input">
                <label class="y-checkable" for="toggle-127" >
                    <span class="is-on">
                        <span class="y-tag-icon is-info-open">
                            <span class="icon solid icon-dislike"></span>
                        </span>
                    </span>
                    <span class="is-off">
                    <span class="y-tag-icon is-info-solid">
                        <span class="icon icon-dislike"></span>
                    </span>
                    </span>
                </label>
                <div class="flex y-chip--help below">
                    <div class="text">sss</div>
                    <!--                    <div class="icon icon-help icon-extra-small"></div>-->
                </div>
            </div>

        </div>
    </div>




</template>

<script setup lang="ts">

</script>
