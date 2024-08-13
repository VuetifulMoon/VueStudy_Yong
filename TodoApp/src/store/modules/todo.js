export default {
  state: {
    todos: [
      {id:1, text: 'buy a car', checked: false},
      {id:2, text: 'buy a phone', checked: false}
    ],
    searchText: ''
  },
  getters: {
    numberOfCompletedTodo: state => {
      return state.todos.filter(todo => todo.checked).length;
    }
  },
  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false
      });
    },
    TOGGLE_TODO(state, {id,checked}) {
      const index = state.todos.findIndex(todo => {
        return todo.id === id;
      });

      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, todoId) {
      const index = state.todos.findIndex(todo => {
        return todo.id === todoId;
      });

      state.todos.splice(index, 1);
    },
    MODIFY_TODO(state, {id, text}) {
      const index = state.todos.findIndex(todo => {
        return todo.id === id;
      });

      state.todos[index].text = text;
    },
    SEARCH_TODO(state, text) {
      state.searchText = text;
    }
  },
  actions: {
    addTodo({commit}, payload) {
      commit('ADD_TODO', payload)
    }
  }
}
