<template>
  <div>
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <SearchTodo />
    <hr/>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';
import SearchTodo from '@/components/SearchTodo.vue';

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
    SearchTodo
  },
}
</script>

<style scoped>

</style>