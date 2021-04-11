<template>
  <div class="word-search">
    <div
      v-for="(word, rowIndex) of rows"
      :key="rowIndex"
      class="word-search__row"
    >
      <span
        v-for="(letter, index) of word"
        :key="`${letter}-${index}`"
        class="word-search__letter"
        :class="highlight({ x: index, y: rowIndex })"
        :style="{ background: getColor({ x: index, y: rowIndex })}"
      >
        {{ letter }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { wordfind } from './../libs/wordfind';
import { NS_ANSWERS } from '../store';
import { GRID_SIZE } from '../@const';

export default {
  name: 'WordSearch',

  data: () => ({
    solutions: {},
    rows: [],
    colors: []
  }),

  watch: {
    items (newValue) {
      const { answer } = newValue[newValue.length - 1];

      this.resolveWord(answer);
    }
  },

  computed: {
    ...mapGetters(NS_ANSWERS, ['items', 'words'])
  },

  created () {
    this.initColors();
    this.initGrid();

    this.fetchInterval = setInterval(() => {
      this.simulateFetchAnswers();
    }, Math.ceil(Math.random() * 5000));
  },

  beforeDestroy () {
    clearInterval(this.fetchInterval);
  },

  methods: {
    ...mapActions(NS_ANSWERS, ['fetchAnswers']),

    initColors () {
      this.colors = this.words.map(() => {
        const rgb = [Math.random() * 255, Math.random() * 255, Math.random() * 255];

        return `rgb(${rgb.join(',')})`;
      });
    },

    initGrid () {
      const words = this.words;
      const config = {
        height: GRID_SIZE,
        width: GRID_SIZE,
        fillBlanks: true
      };

      this.rows = wordfind.newPuzzle(
        words,
        config
      );
    },

    simulateFetchAnswers () {
      this.fetchAnswers();
    },

    resolveWord (targetWord) {
      if (!this.words.includes(targetWord)) return;

      const solution = wordfind.solve(this.rows, [targetWord]).found;

      for (let i = 0, len = solution.length; i < len; i++) {
        const word = solution[i].word;
        const orientation = solution[i].orientation;
        const x = solution[i].x;
        const y = solution[i].y;
        const next = wordfind.orientations[orientation];

        for (let j = 0, size = word.length; j < size; j++) {
          const nextPos = next(x, y, j);

          if (this.solutions[word]?.length === word.length) return;

          this.solutions = {
            ...this.solutions,
            [word]: [].concat(this.solutions[word] || [], {
              orientation,
              x: nextPos.x,
              y: nextPos.y,
              first: j === 0,
              last: j === size - 1,
              color: this.colors[this.words.findIndex(key => key === word)]
            })
          };
        }
      }
    },

    highlight ({ x, y }) {
      const filtered = Object.values(this.solutions)
        .flat()
        .filter((item) => item.x === x && item.y === y);

      const [current] = filtered;
      const highlight = !!current;

      return {
        highlight,
        first: current?.first,
        last: current?.last,
        [current?.orientation]: current?.orientation,
        [`layer-${filtered.length}`]: highlight
      };
    },

    getColor ({ x, y }) {
      const filtered = Object.values(this.solutions)
        .flat()
        .filter((item) => item.x === x && item.y === y);

      const [current] = filtered;

      return current?.color;
    }
  }
};
</script>

<style lang="scss" scoped>
.word-search {
  $border-radius: 10px;

  &__row {
    display: flex;
  }

  &__letter {
    $size: 25px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width:  $size;
    height:  $size;
    padding: 5px;
    margin: 2px;
    line-height: 1;
    font-weight: bold;
    text-transform: uppercase;
  }

  &.horizontal {
    &.first {
      border-radius: $border-radius 0 0 $border-radius;
    }

    &.last {
      border-radius: 0 $border-radius $border-radius 0;
    }
  }

  /* TODO
  &.diagonalUp {}

  &.diagonalUpBack {}
   */
}

</style>
