<template>
    <div class="answer" :class="{ 'answer--success': isSuccess }">
      <div class="answer__image"></div>
      <div class="answer__name">{{ item.author.name }}</div>

      <div class="ml-auto answer__text"><template v-if="isSuccess">
        {{ item.answer }}
      </template></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { NS_ANSWERS } from '../store';

export default {
  name: 'AnswerItem',

  props: {
    item: {
      type: Object,
      default: () => ({
        answer: '',
        author: {
          name: '',
          picture: ''
        }
      })
    }
  },

  computed: {
    ...mapGetters(NS_ANSWERS, ['words']),

    isSuccess () {
      return this.words.includes(this.item.answer);
    }
  }
};
</script>

<style lang="scss">
  .answer {
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    background-color: #4f5476;

    & + .answer {
      margin-top: 10px;
    }

    &--success {
      background-color: #4e4a97;

      .answer {
        &__image,
        &__text {
          background-color: #3a3771;
        }
      }
    }

    &__image,
    &__text {
      background-color: #a7aabb;
    }

    &__name {
      margin-left: 10px;
    }

    &__image {
      $size: 35px;

      border-radius: 50%;
      width: $size;
      height: $size;
    }

    &__text {
      border-radius: 10px;
      padding: 10px;
      text-transform: uppercase;

      &:empty {
        width: 50%;
      }
    }
  }
</style>
