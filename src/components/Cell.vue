<template>
  <div class="cell" v-bind="$attrs">
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Cell'
};
</script>

<style lang="scss">

</style>
