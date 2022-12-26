<script setup>
import ButtonDropdownWrapper from '../../../docs/.vitepress/wrappers/buttons/DropdownWrapper.vue'
</script>

# Primary Button

The default button to press

<DemoContainer>
  <div class="flex justify-content-between">
      <button-dropdown-wrapper :dropdown="true" label="Primary"/>
    <YButtonPrimary label="Dropdown" is-dropdown="true">
      <template v-slot:dropdown>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
      </template>
    </YButtonPrimary>
  </div>
</DemoContainer>

### Usage
The primary button on a page or form. 

### Code
::: details Code
```js
<YButtonPrimary label="hellso"/>
```
:::



