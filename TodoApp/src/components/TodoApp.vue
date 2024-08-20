<template>
  <div>
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <SearchTodo />
    <hr/>
    <div class="list">
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
    }
  },
  beforeMount() {
    this.$store.dispatch('getTodo');
  }
}
</script>

<style scoped>
  .list {
    display: flex;
    justify-content: space-around;
  }
</style>