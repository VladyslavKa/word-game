<template>
    <Cell class="game-field">
      <CellTitle>
        Rounds <b>1/</b> 20
      </CellTitle>

      <CellBody>
        <WordSearch />
      </CellBody>
    </Cell>
</template>

<script>
import WordSearch from './WordSearch';
import Cell from './Cell';
import CellTitle from './CellTitle';
import CellBody from './CellBody';
export default {
  name: 'GameField',

  components: { CellBody, CellTitle, Cell, WordSearch }
};
</script>

<style lang="scss">
  @import "./../assets/styles/var";

  .game-field {
    background-color: $game-field-bg;
  }
</style>
