<template>
  <div class="cell-body" v-bind="$attrs">
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CellBody'
};
</script>

<style lang="scss">
  @import "./../assets/styles/var";

  .cell-body {
    display: flex;
    overflow: auto;
    padding: $cell-p;
  }
</style>
