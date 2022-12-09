<script setup>
import {YButtonPrimary} from 'bedrock-ui-vue3'
</script>

# Primary Button

The default button to press

<DemoContainer>
  <div class="flex justify-content-between">
    <div class="">
      <YButtonPrimary label="Primary"/>
    </div>
    <div>
      <YButtonSecondary label="Secondary"/>
    </div>
    <div>
      <YButtonTertiary label="Tertiary"/>
    </div>
  </div>
</DemoContainer>

<DemoContainer>
  <div class="flex justify-content-between">
    <div class="">
      <YButtonPrimary label="Disabled" disabled="true"/>
    </div>
    <div>
      <YButtonSecondary label="Disabled" disabled="true"/>
    </div>
    <div>
      <YButtonTertiary label="Disabled" disabled="true"/>
    </div>
  </div>
</DemoContainer>

<DemoContainer>
  <div class="flex justify-content-between">
    <div class="">
      <YButtonPrimary label="Loading" loading="true"/>
    </div>
    <div>
      <YButtonSecondary label="Loading" loading="true"/>
    </div>
    <div>
      <YButtonTertiary label="Loading" loading="true"/>
    </div>
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


