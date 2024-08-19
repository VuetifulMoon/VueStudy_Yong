export default {
  state: {
    todos: [
      {id:0, text: 'buy a car', checked: false, completed: false},
      {id:1, text: 'buy a phone', checked: false, completed: false}
    ],
    searchText: ''
  },
  getters: {
    numberOfCompletedTodo: state => {
      return state.todos.filter(todo => todo.completed).length;
    },
    selectedAll: state => {
      return state.todos.filter(todo => todo.checked).length === state.todos.length;
    }
  },
  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: state.todos[state.todos.length - 1].id + 1,
        text: value,
        checked: false,
        compeleted: false
      });
    },
    TOGGLE_TODO(state, {id,checked}) {
      const index = state.todos.findIndex(todo => {
        return todo.id === id;
      });

      state.todos[index].checked = checked;
    },
    COMPLETE_TODO(state, {id, completed}) {
      const index = state.todos.findIndex(todo => {
        return todo.id === id;
      });

      state.todos[index].completed = completed;
    },
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== todoId
      });
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
