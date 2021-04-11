import { requestAnswers } from '../../api/answers';
import { UPDATE_ANSWERS } from './mutations';

const actions = {
  async fetchAnswers ({ commit }) {
    return await requestAnswers()
      .then(({ data }) => {
        const { items } = data;

        commit(UPDATE_ANSWERS, items);
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

export default actions;
