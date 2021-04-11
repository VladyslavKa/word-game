<template>
  <Cell class="d-flex flex-direction-column full-height words">
    <CellTitle>Words</CellTitle>

    <CellBody class="full-height flex-direction-column py-0">
      <AnswerItem v-for="(item, index) of items" :key="`${item.answer}-${item.author-name}-${index}`" :item="item" />
    </CellBody>
  </Cell>
</template>

<script>
import Cell from './Cell.vue';
import CellTitle from './CellTitle.vue';
import CellBody from './CellBody.vue';
import { mapGetters } from 'vuex';
import { NS_ANSWERS } from '../store';
import AnswerItem from './AnswerItem';
export default {
  name: 'Words',

  components: { AnswerItem, CellBody, CellTitle, Cell },

  computed: {
    ...mapGetters(NS_ANSWERS, ['items'])
  }
};
</script>

<style lang="scss">
  .words {
    background-color: #30365e;
  }
</style>
