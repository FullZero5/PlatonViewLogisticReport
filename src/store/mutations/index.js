export default {
  ADD_DATA: (state, item) => {
    state.data = item;
  },
  TO_SELECT: (state, array) => {
    state.select = array;
  }
};
