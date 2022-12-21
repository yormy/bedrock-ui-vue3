<script setup>
import TagWrapper from '../../.vitepress/wrappers/tag/TagWrapper.vue'
</script>

# Tags

<DemoContainer>
  <div class="flex justify-content-between">
    <YTag label="info" icon="y-icon icon icon-file-download" type="is-info-open"/>
    <YTag label="success" icon="y-icon icon icon-file-download" type="is-success-open"/>
    <YTag label="warning" icon="y-icon icon icon-file-download" type="is-warning-open"/>
    <YTag label="danger" icon="y-icon icon icon-file-download" type="is-danger-open"/>
    <YTag label="disabled" icon="y-icon icon icon-file-download" type="is-disabled-open"/>
  </div>

  <div class="flex justify-content-between">
    <YTag label="info" icon="y-icon icon icon-file-download" type="is-info-solid"/>
    <YTag label="success" icon="y-icon icon icon-file-download" type="is-success-solid"/>
    <YTag label="warning" icon="y-icon icon icon-file-download" type="is-warning-solid"/>
    <YTag label="danger" icon="y-icon icon icon-file-download" type="is-danger-solid"/>
    <YTag label="disabled" icon="y-icon icon icon-file-download" type="is-disabled-solid"/>
  </div>
</DemoContainer>

## Sizes
<DemoContainer>
  <div class="flex justify-content-between">
    <div>
        <YTag label="tiny" type="is-info-solid" size="tiny"/>
    </div>
    <div>
        <YTag label="small" type="is-info-solid" size="small"/>
    </div>
    <div>
        <YTag label="normal" type="is-info-solid" size="normal"/>
    </div>
    <div>
        <YTag label="large" type="is-info-solid" size="large"/>
    </div>
    <div>
        <YTag label="extra-large" type="is-info-solid" size="extra-large"/>
    </div>
  </div>
</DemoContainer>

## Shapes
<DemoContainer>
  <div class="flex justify-content-between">
    <YTag label="square" icon="y-icon icon icon-file-download" type="is-info-solid" shape="square"/>
    <YTag label="rounded" icon="y-icon icon icon-file-download" type="is-info-solid" shape="rounded"/>
  </div>
</DemoContainer>
