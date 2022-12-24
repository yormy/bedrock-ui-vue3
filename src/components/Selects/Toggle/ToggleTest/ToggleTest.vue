<template>
    <div class="y-content">
        <div class="y-checkable">
            <div class="flex flex-col">
                <div class="flex y-chip--help">
                    <div class="text">sss</div>

                    <y-icon-help
                        v-if="moreHelpIcon"
                        :icon="moreHelpIcon"
                        :label="moreHelpLabel"
                        :header="moreHelpHeader"
                        :description="moreHelpDescription"
                    >
                    </y-icon-help>


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
    </div>
</template>

<script setup lang="ts">
import YIconHelp from '../../../Helpers/IconHelp.vue';

const props = defineProps({
    /**--------- More Help ---------- */
    moreHelpLabel: {
        type: String,
        default: '?',
    },

    moreHelpIcon: {
        type: String,
        default: 'y-icon icon icon-help icon-small',
    },

    moreHelpHeader: {
        type: String,
        default: '',
    },

    moreHelpDescription: {
        type: String,
        default: '',
    },





    labelOn: {
        type: String,
        default: ' ', // default is space to prevent resizing slider
    },

    labelOff: {
        type: String,
        default: ' ',
    },
});

</script>
