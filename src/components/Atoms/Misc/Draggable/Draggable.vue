<template>
    <div class="container1">
        <div class="mb-4 form-group-lg panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Sortable control</h3>
            </div>
            <div class="panel-body0">
                <div class="flex flex-row">
                    <input v-model="editable" type="checkbox">
                    <label>
                        Enable drag and drop
                    </label>
                </div>
                <button class="btn btn-default" type="button" @click="orderAllLists">Sort by original
                    order
                </button>
            </div>
        </div>

        <div class="flex flex-wrap ">
            <div
                :class="selectedElementLevel2 && selectedElementLevel2.items ? 'md:w-1/6 pr-4 pl-4' : 'md:w-1/4 pr-4 pl-4'">
                <draggable
                    v-model="list"
                    item-key="id"
                    :move="onMove"
                    class="draggable-a1"
                    tag="ul"
                    v-bind="dragOptions"
                    @end="isDragging=false"
                    @start="isDragging=true"
                >

                    <template #item="{ element }">
                        <div>
                              <span>
                                <span v-if="!selectedElementLevel2 || !selectedElementLevel2.items">
                                - {{ element.name }}
                                </span>
                            </span>
                        </div>
                    </template>

                </draggable>
            </div>

            <!--            ========== level 2 ========== -->
            <div
                v-if="selectedElementLevel1"
                class="md:w-1/4 pr-4 pl-4">
                <draggable
                    v-model="selectedElementLevel1.items"
                    item-key="id"
                    :move="onMove"
                    class="flex flex-col pl-0 mb-0 border rounded border-gray-300"
                    tag="ul"
                    v-bind="dragOptions"
                    @end="isDragging=false"
                    @start="isDragging=true"
                >
                    <template #item="{ element }">
                        - {{ element.name }}
                    </template>
                </draggable>
            </div>

<!--            &lt;!&ndash;            ========== level 3 ========== &ndash;&gt;-->
<!--            <div-->
<!--                v-if="selectedElementLevel1 && selectedElementLevel2"-->
<!--                class="md:w-1/4 pr-4 pl-4">-->
<!--                <draggable-->
<!--                    v-model="selectedElementLevel2.items"-->
<!--                    :move="onMove"-->
<!--                    class="flex flex-col pl-0 mb-0 border rounded border-gray-300"-->
<!--                    tag="ul"-->
<!--                    v-bind="dragOptions"-->
<!--                    @end="isDragging=false"-->
<!--                    @start="isDragging=true"-->
<!--                >-->
<!--                    <li v-for="(element, index) in selectedElementLevel2.items"-->
<!--                        :key="element.order"-->
<!--                        class="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline"-->
<!--                    >-->
<!--            <span>-->
<!--&lt;!&ndash;              <i :class="element.fixed? 'fa fa-anchor' : 'fas fa-arrows-alt-v'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>&ndash;&gt;-->
<!--              {{ index + 1 }} - {{ element.name }}-->
<!--              <i class="float-right fa fa-arrow-right" @click="clickedLevel3(element)"></i>-->
<!--            </span>-->
<!--                    </li>-->
<!--                </draggable>-->
<!--            </div>-->
        </div>

    </div>
</template>

<script setup lang="ts">
/**
 * Draggable
 * Requires: vuedraggable
 */
import {computed, ref, useSlots} from "vue";


const listQuotes = [
    {
        "name": "i’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later",
        "order": 1,
        "fixed": false
    },
    {
        "name": "A pessimist is a person who has had to listen to too many optimists",
        "order": 2,
        "fixed": false
    },
    {
        "name": "Better to remain silent and be thought a fool than to speak out and remove all doubt",
        "order": 3,
        "fixed": false
    },
    {
        "name": "If I were two-faced, would I be wearing this one?",
        "order": 4,
        "fixed": false
    },
    {
        "name": "The best thing about the future is that it comes one day at a time.",
        "order": 5,
        "description": "hello",
        "fixed": false
    },
];

const message = [
    {
        "name": "top 500 aller tijden albums",
        "order": 1,
        "fixed": false,
        "items": [
            {
                "name": "THE JOSHUA TREE",
                "order": 1,
                "fixed": false,
                "items": [
                    {
                        "name": "Where The Streets Have No Name",
                        "order": 1,
                        "fixed": false
                    },
                    {
                        "name": "I Still Haven't Found What I'm Looking For",
                        "order": 2,
                        "description": "hello",
                        "fixed": false
                    },
                    {
                        "name": "With Or Without You",
                        "order": 3,
                        "description": "hello",
                        "fixed": false
                    },
                    {
                        "name": "Bullet The Blue Sky",
                        "order": 4,
                        "description": "hello",
                        "fixed": false
                    },
                ],
            },
            {
                "name": "METALLICA (THE BLACK ALBUM)",
                "order": 2,
                "description": "hello",
                "fixed": false,
                "items": [
                    {
                        "name": " Enter Sandman",
                        "order": 1,
                        "fixed": false
                    },
                    {
                        "name": "Sad But True",
                        "order": 2,
                        "description": "hello",
                        "fixed": false
                    },
                    {
                        "name": "Holier Than Thou",
                        "order": 3,
                        "description": "hello",
                        "fixed": false
                    },
                    {
                        "name": " The Unforgiven",
                        "order": 4,
                        "description": "hello",
                        "fixed": false
                    },
                ],
            },
            {
                "name": "THE DARK SIDE OF THE MOON",
                "order": 3,
                "description": "hello",
                "fixed": false,
                "items": [
                    {
                        "name": " Speak To Me",
                        "order": 1,
                        "fixed": false
                    },
                    {
                        "name": "Breathe (in the Air)",
                        "order": 2,
                        "description": "hello",
                        "fixed": false
                    },
                    {
                        "name": "On The Run",
                        "order": 3,
                        "description": "hello",
                        "fixed": false
                    },
                    {
                        "name": "Time",
                        "order": 4,
                        "description": "hello",
                        "fixed": false
                    },
                ],
            },
            {
                "name": "THRILLER",
                "order": 4,
                "description": "hello",
                "fixed": false
            },
            {
                "name": "NEVERMIND",
                "order": 5,
                "description": "hello",
                "fixed": false
            },
        ],
    },
    {
        "name": "quotes",
        "order": 2,
        "fixed": false,
        "items": listQuotes
    },
    {
        "name": "component",
        "order": 3,
        "fixed": false
    },
    {
        "name": "for",
        "order": 4,
        "fixed": false
    },
    {
        "name": "vue.js 2.0",
        "order": 5,
        "description": "hello",
        "fixed": true
    },
    {
        "name": "based",
        "order": 6,
        "fixed": false
    },
    {
        "name": "on",
        "order": 7,
        "fixed": false
    },
    {
        "name": "Sortablejs",
        "order": 8,
        "fixed": false
    }
];

let list = ref(message);
let editable= ref(true);
let isDragging = false;
let delayedDragging=  false;
let selectedElementLevel1 = null;
let selectedElementLevel2 = null;


const dragOptions = computed(() => {
    return {
        animation: 0,
        group: "description",
        disabled: !editable,
        ghostClass: "ghost"
    }
});


const listString = computed(() => {
    return JSON.stringify(list, null, 2);
});

// watch(
//     () => props.badgeType,
//     (newValue) => {
//         badgeClass = useBadgeTypes(newValue);
//     }
// );
//
// watch: {
//     isDragging(newValue) {
//         if (newValue) {
//             this.delayedDragging = true;
//             return;
//         }
//         this.$nextTick(() => {
//             this.delayedDragging = false;
//         });
//     }
// }

const clickedLevel1 = (element) => {
    selectedElementLevel1 = element;
    selectedElementLevel2 = null;
};

const clickedLevel2 = (element) => {
    selectedElementLevel2 = element;
};

const clickedLevel3 = (element) => {
    // ???
};

let orderAllLists = () => {
    list = list.sort((one, two) => {
        return one.order - two.order;
    });

    list.forEach(element => {
        if (element.items) {
            element.items = element.items.sort((one, two) => {
                return one.order - two.order;
            });
        }
    });
};

const onMove = ({relatedContext, draggedContext}) => {
    console.log('onmove');
    const relatedElement = relatedContext.element;
    const draggedElement = draggedContext.element;
    return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    );
};


import draggable from "vuedraggable";
//
// const hoverButton = ref(true);
// const hoverDropdown = ref(false);
//
// const slots = useSlots();
//
// const props = defineProps({
//     isDropdown: {
//         type: Boolean,
//         default: false,
//     },
// });
//
// const displayDropdown = computed(() => {
//     // if (!slots.dropdown) {
//     //     return false;
//     // }
//     return hoverButton.value || hoverDropdown.value
// })
</script>


<style>
.flip-list-move {
    transition: transform 0.5s;
}

.no-move {
    transition: transform 0s;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.list-group {
    min-height: 20px;
}

.list-group-item {
    cursor: move;
}

.list-group-item i {
    cursor: pointer;
}

.selected {
    background-color: #00b3ee;
}

.drag-item-1 {
    display: block;
    position: relative;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-bottom: -1px;
    text-decoration: none;
    border-width: 1px;
    border-right-width: 0;
    border-left-width: 0;
    border-color: #D1D5DB;
}

.draggable-a1 {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    flex-direction: column;
    border-radius: 0.25rem;
    border-width: 1px;
    border-color: #D1D5DB;
}

.container1 {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
</style>
