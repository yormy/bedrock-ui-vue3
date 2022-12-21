<script setup>
import TagWrapper from '../../.vitepress/wrappers/tag/TagWrapper.vue'
</script>

# Mouse Over

<DemoContainer>
  <div class="">
<span>
    Hello, hover the word next to this
    <Y-mouse-over>
      <template v-slot:trigger><strong>trigger</strong></template>
      <template v-slot:dropdown>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
      </template>
    </Y-mouse-over>
</span>
  </div>
</DemoContainer>
