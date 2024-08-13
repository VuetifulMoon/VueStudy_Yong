<template>
  <div class="mb-2 d-flex">
    <div>
      <input type="checkbox" :checked='todo.checked' @change="togglCheckbox">
    </div>
    <span class="ml-3 flex-grow-1" :class="todo.checked?'text-muted': ''" :style="todo.checked?'text-decoration:line-through':''">{{todo.text}}</span>
    <button class="btn btn-danger btn-sm" @click="clickDelete">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    togglCheckbox(e) {
      this.$store.commit('TOGGLE_TODO', {
        id: this.todo.id,
        checked: e.target.checked
      });
    },
    clickDelete() {
      this.$store.commit('DELETE_TODO', this.todo.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
