<template>
  <div>
    <h1 class="text-center">Todo App</h1>
    <input type="text" class="w-100 p-2" placeholder="Type todo" @keyup.enter="addTodo" :value="todoText">
    <hr/>
    <Todo v-for='todo in todos' :key="todo.id" :todo='todo' @toggle-checkbox='togglCheckbox' @click-delete='deleteTodo'/>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
  components: {
    Todo
  },
  data() {
    return {
      todoText: '',
      todos: [
        {id:1, text: 'buy a car', checked: false},
        {id:2, text: 'buy a phone', checked: false}
      ]
    }
  },
  methods: {
    addTodo(e) {
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false
      });
      this.todoText = '';
    },
    togglCheckbox({id, checked}) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });

      this.todos[index].checked = checked;
    },
    deleteTodo(id) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });

      this.todos.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>