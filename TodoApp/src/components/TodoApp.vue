<template>
  <div>
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <SearchTodo />
    <hr/>
    <input type="checkbox" :checked="checkedAll" @change="allSelect"><span>전체선택</span>&nbsp;&nbsp;<span @click="selectedDelete">선택삭제</span>
    <div class="flex">
      <TodoList title="TodoList" :list='todos'/>
      <TodoList title="CompletedList" :list="completedTodos"/>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import SearchTodo from '@/components/SearchTodo.vue';
import CompletedTodo from './CompletedTodo.vue';

export default {
  components: {
    TodoList,
    AddTodo,
    SearchTodo,
    CompletedTodo
  },
  computed: {
    todos() {
      if (this.$store.state.todo.searchText === '') {
        return this.$store.state.todo.todos.filter((todo) => {
          return !todo.completed
        })
      } else {
        return this.$store.state.todo.todos.filter((todo) => {
          return todo.text.includes(this.$store.state.todo.searchText) && !todo.completed
        })
      }
    },
    completedTodos() {
      if (this.$store.state.todo.searchText === '') {
        return this.$store.state.todo.todos.filter((todo) => {
          return todo.completed
        })
      } else {
        return this.$store.state.todo.todos.filter((todo) => {
          return todo.text.includes(this.$store.state.todo.searchText) && todo.completed
        })
      }
    },
    checkedAll(){
      return this.$store.getters['selectedAll'];
    } 
  },
  methods: {
    allSelect(e) {
      if (e.target.checked) {
        this.$store.state.todo.todos.map((todo) => {
          todo.checked = true
        });
      } else {
        this.$store.state.todo.todos.map((todo) => {
          todo.checked = false
        });
      }
    },
    selectedDelete() {
      this.$store.state.todo.todos.map((todo) => {
        if (todo.checked) {
          this.$store.commit('DELETE_TODO', todo.id);
        }
      });
    }
  }
}
</script>

<style scoped>

</style>