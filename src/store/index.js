import Vue from 'vue';
import Vuex from 'vuex';
import answers from './answers';

Vue.use(Vuex);

export const NS_ANSWERS = 'answers';

const store = new Vuex.Store({
  strict: true,

  modules: {
    [NS_ANSWERS]: answers
  }
});

export default store;
