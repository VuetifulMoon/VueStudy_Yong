<template>
  <div>
    <Todo v-for='todo in todos' :key="todo.id" :todo='todo'/>
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
  components: {
    Todo
  },
  computed: {
    todos() {
      if (this.$store.state.todo.searchText === '') {
        return this.$store.state.todo.todos;
      } else {
        const searchResult = [];
        this.$store.state.todo.todos.map(todo => {
          if (todo.text.includes(this.$store.state.todo.searchText)) {
            searchResult.push(todo);
          }
        })
        return searchResult;
      }
    }
  }
}
</script>