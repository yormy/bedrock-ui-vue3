<template>
  <div class="fluid container mx-auto sm:px-4">
    <div class="mb-4 form-group-lg panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Sortable control</h3>
      </div>
      <div class="panel-body">
        <div class="checkbox">
          <label><input v-model="editable" type="checkbox">Enable drag and drop</label>
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
          :move="onMove"
          class="flex flex-col pl-0 mb-0 border rounded border-gray-300"
          tag="ul"
          v-bind="dragOptions"
          @end="isDragging=false"
          @start="isDragging=true"
        >

          <li v-for="(element, index) in list"
              :key="element.order"
              :class="selectedElementLevel1 === element ? 'selected' : ''"
              class="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline"
              @click="clickedLevel1(element)"
          >
            <span>
              {{ index + 1 }}
                <span v-if="!selectedElementLevel2 || !selectedElementLevel2.items">
                - {{ element.name }}
                </span>
            </span>
          </li>

        </draggable>
      </div>


      <div
        v-if="selectedElementLevel1"
        class="md:w-1/4 pr-4 pl-4">
        <draggable
          v-model="selectedElementLevel1.items"
          :move="onMove"
          class="flex flex-col pl-0 mb-0 border rounded border-gray-300"
          tag="ul"
          v-bind="dragOptions"
          @end="isDragging=false"
          @start="isDragging=true"
        >
          <li v-for="(element, index) in selectedElementLevel1.items"
              :key="element.order"
              :class="selectedElementLevel2 === element ? 'selected' : ''"
              class="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline"
              @click="clickedLevel2(element)"
          >
            <span>
              {{ index + 1 }} - {{ element.name }}
            </span>
          </li>
        </draggable>
      </div>

      <div
        v-if="selectedElementLevel1 && selectedElementLevel2"
        class="md:w-1/4 pr-4 pl-4">
        <draggable
          v-model="selectedElementLevel2.items"
          :move="onMove"
          class="flex flex-col pl-0 mb-0 border rounded border-gray-300"
          tag="ul"
          v-bind="dragOptions"
          @end="isDragging=false"
          @start="isDragging=true"
        >
          <li v-for="(element, index) in selectedElementLevel2.items"
              :key="element.order"
              class="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline"
          >
            <span>
<!--              <i :class="element.fixed? 'fa fa-anchor' : 'fas fa-arrows-alt-v'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>-->
              {{ index + 1 }} - {{ element.name }}
              <i class="float-right fa fa-arrow-right" @click="clickedLevel3(element)"></i>
            </span>
          </li>
        </draggable>
      </div>

    </div>

  </div>
</template>

<script>
import draggable from "vuedraggable";



export default {
  methods: {


};
</script>
