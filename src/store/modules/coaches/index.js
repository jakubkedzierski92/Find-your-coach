import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Jakub',
          lastName: 'Kedzierski',
          areas: ['frontend', 'backend', 'career'],
          description: "I'm Jakub, Nice to meet you!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description: "I'm Julia, hi",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
