export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';

export const mutations = {
  [UPDATE_ANSWERS] (state, value) {
    state.items = [
      ...state.items,
      value
    ];
  }
};
