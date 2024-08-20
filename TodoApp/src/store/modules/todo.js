export default {
  state: {
    todos: [],
    searchText: ''
  },
  getters: {
    numberOfCompletedTodo: state => {
      return state.todos.filter(todo => todo.completed).length;
    }
  },
  mutations: {
    GET_TODO(state, values) {
      values?.map((value) => {
        if(value==='null'|| value==='') return;
        state.todos.push(JSON.parse(value));
      });
    },
    ADD_TODO(state, value) {
      state.todos.push(value);
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
    getTodo({commit}) {
      const todoList = localStorage.getItem('todolist')?.split('_');
      commit('GET_TODO', todoList);
    },
    addTodo({commit}, payload) {
      const todo = {
        id: localStorage.getItem('todolist')?.length+1 || 1,
        text: payload,
        checked: false,
        completed: false
      };

      if (localStorage.getItem('todolist') !== null) {
        const list = localStorage.getItem('todolist');
        localStorage.setItem('todolist', list+'_'+JSON.stringify(todo));
      } else {
        localStorage.setItem(`todolist`, JSON.stringify(todo));
      }
      commit('ADD_TODO', todo);
    },
    modifyTodo({commit}, {id, text}) {
      const todoList = localStorage.getItem('todolist').split('_').filter(Boolean).map((todo) => {  // localstorage에서 문자열로 되어있는 todolist를 꺼내 객체리스트로 변환
        if(todo==='') return;                                                                       // 객체1_객체2_ 이런형식으로 저장되어있는 문자열을 split을 사용하여 분리 
        return JSON.parse(todo);                                                                    // 맨뒤에 ''문자열을 지우기위해 filter(Boolean)사용 filter(Boolean)은 false로 평가되는 모든 요소를 제거
      });

      const index = todoList.findIndex(todo => {
        return todo.id === id;
      });
      todoList[index].text = text;

      let str = '';                 // 객체리스트로 된 todolist를 다시 문자열로 변환해서 localstorage에 저장
      todoList.map((todo) => {
        str += `${JSON.stringify(todo)}_`
      });
      localStorage.setItem('todolist', str);

      commit('MODIFY_TODO', {id, text});
    },
    deleteTodo({commit}, payload) {
      const todoList = localStorage.getItem('todolist').split('_').filter(Boolean).map((todo) => {
        if(todo==='') return;
        return JSON.parse(todo);
      });

      let str = '';
      todoList.filter((todo) => {
        if (todo !== undefined) {
          return todo.id !== payload
        }
      }).map((todo) => {
        str += `${JSON.stringify(todo)}_`
      });
      localStorage.setItem('todolist', str);
      commit('DELETE_TODO', payload);
    },
    searchTodo({commit}, payload) {
      commit('SEARCH_TODO', payload);
    },
    completeTodo({commit}, {id, completed}) {
      const todoList = localStorage.getItem('todolist').split('_').filter(Boolean).map((todo) => {  // localstorage에서 문자열로 되어있는 todolist를 꺼내 객체리스트로 변환
        if(todo==='') return;                                                                       // 객체1_객체2_ 이런형식으로 저장되어있는 문자열을 split을 사용하여 분리 
        return JSON.parse(todo);                                                                    // 맨뒤에 ''문자열을 지우기위해 filter(Boolean)사용 filter(Boolean)은 false로 평가되는 모든 요소를 제거
      });

      const index = todoList.findIndex(todo => {
        return todo.id === id;
      });
      todoList[index].completed = completed;

      let str = '';                 // 객체리스트로 된 todolist를 다시 문자열로 변환해서 localstorage에 저장
      todoList.map((todo) => {
        str += `${JSON.stringify(todo)}_`
      });
      localStorage.setItem('todolist', str);

      commit('COMPLETE_TODO', {id, completed});
    }
  }
}
