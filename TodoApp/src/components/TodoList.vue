<template>
  <div>
    <h2>{{title}}</h2>
    <Todo v-for='todo in list' :key="todo.id" :todo='todo'/>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
  components: {
    Todo
  },
  props: {
    title: {
      type: String
    },
    list: {
      type: Array
    }
  }
}
</script>