export default {
  addToItems: ({ commit }, item) => commit("ADD_DATA", item),
  addToSelect: ({ commit }, array) => commit("TO_SELECT", array)
};
