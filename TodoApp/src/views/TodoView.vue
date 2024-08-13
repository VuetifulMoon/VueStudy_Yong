<template>
  <div class="container">
    <TodoApp/>
  </div>
</template>

<script>
import TodoApp from '@/components/TodoApp.vue';

export default {
  components: {
    TodoApp
  },
  data() {
    return {
      name: 'Kossie Coder'
    }
  }
}
</script>

<style scoped>

</style>