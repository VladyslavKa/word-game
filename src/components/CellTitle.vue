<template>
  <div class="cell-title">
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CellTitle'
};
</script>

<style lang="scss">
  @import "./../assets/styles/var";

  .cell-title {
    border-bottom: 1px solid $body-bg;
    padding: $cell-p;
    font-weight: normal;
  }
</style>
