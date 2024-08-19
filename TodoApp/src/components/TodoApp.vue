<template>
  <div>
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <SearchTodo />
    <hr/>
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

export default {
  components: {
    TodoList,
    AddTodo,
    SearchTodo,
  },
  computed: {
    todos() {
      if (this.$store.state.todo.searchText === '') {
        const searchResult = [];
        this.$store.state.todo.todos.map(todo => {
          if (!todo.checked) {
            searchResult.push(todo);
          }
        })
        return searchResult;
      } else {
        const searchResult = [];
        this.$store.state.todo.todos.map(todo => {
          if (todo.text.includes(this.$store.state.todo.searchText) && !todo.checked) {
            searchResult.push(todo);
          }
        })
        return searchResult;
      }
    },
    completedTodos() {
      if (this.$store.state.todo.searchText === '') {
        const searchResult = [];
        this.$store.state.todo.todos.map(todo => {
          if (todo.checked) {
            searchResult.push(todo);
          }
        })
        return searchResult;
      } else {
        const searchResult = [];
        this.$store.state.todo.todos.map(todo => {
          if (todo.text.includes(this.$store.state.todo.searchText) && todo.checked) {
            searchResult.push(todo);
          }
        })
        return searchResult;
      }
    }
  }
}
</script>

<style scoped>

</style>