<template>
  <div class="container">
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Container'
};
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
  }
</style>
