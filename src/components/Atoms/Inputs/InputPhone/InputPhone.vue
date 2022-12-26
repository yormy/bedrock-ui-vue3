<template>
    <div class="p-inputgroup">
        <YDropdown
            v-model="selectedCountry"
            :options="countries"
            optionLabel="name"
            style="flex: 0 0 5rem"
            class="border-right-none"
            panelStyle="width: 16rem"
        >
            <template #value="slotProps">
                <div v-if="slotProps.value" class="country-item country-item-value">
                    <span :class="slotProps.icon"></span>
                    <div>{{ slotProps.value.phone }}</div>
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
                <div class="country-item">
                    <div class="flex">
                        <span :class="slotProps.option.icon"></span>
                        <span>{{slotProps.option.name}}</span>
                        <span class="text-500">{{ slotProps.option.phone }}</span>
                    </div>
                </div>
            </template>

        </YDropdown>
    </div>
</template>

<script setup lang="ts">
import YDropdown from 'primevue/dropdown';
import {ref} from "vue";

const selectedCountry = ref();

const countries= [
    {
        name: "Australia",
        code: "AU",
        phone: "+61",
        placeholder: "061 111 22 33",
        icon: 'flag-icon flag-icon-us'
    },
    {
        name: "Brazil",
        code: "BR",
        phone: "+55",
        placeholder: "055 111 22 33",
        icon: 'flag-icon flag-icon-us'
    },
    {
        name: "China",
        code: "CN",
        phone: "+86",
        placeholder: "086 111 22 33",
        icon: 'flag-icon flag-icon-us'
    }
];

const props = defineProps({

    ss: {
        type: String,
        default: '',
    },
});

</script>

<!--

<template>
  <div class="p-inputgroup">
    <Dropdown
      v-model="selectedCountry"
      :options="model"
      optionLabel="name"
      style="flex: 0 0 5rem"
      class="border-right-none"
      panelStyle="width: 16rem"
      @change="onChange"
    >

<template #value="slotProps">
    <div v-if="slotProps.value" class="country-item country-item-value">
        <img
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
        />
        <div>{{ slotProps.value.phone }}</div>
    </div>
    <span v-else>
          {{ slotProps.placeholder }}
        </span>
</template>
<template #option="slotProps">
    <div class="country-item">
        <img
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
        />
        <div>
            {{ slotProps.option.name }}
            <span class="text-500">{{ slotProps.option.phone }}</span>
        </div>
    </div>
</template>
</Dropdown>
<InputText
    v-model="inputValue.placeholder"
    style="width: 8rem"
    type="text"
/>
</div>
</template>

<script>
export default {
    props: {
        model: null,
    },
    data() {
        return {
            selectedCountry: this.model[0],
            inputValue: this.model[0],
        };
    },
    methods: {
        onChange() {
            this.inputValue = this.selectedCountry;
        },
    },
};
</script>

<style lang="scss" scoped>
.country-item {
    img {
        width: 17px;
        margin-right: 0.5rem;
    }
}
</style>

-->
