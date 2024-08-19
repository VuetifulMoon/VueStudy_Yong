<template>
  <div class="d-flex flex-column">
    <div class="mb-2 d-flex">
      <div>
        <input type="checkbox" :checked='todo.checked' @change="togglCheckbox">
      </div>
      <span class="ml-3 flex-grow-1" :class="todo.completed?'text-muted': ''" :style="todo.completed?'text-decoration:line-through':''">{{todo.text}}</span>
      <button v-if="!todo.completed" class="btn btn-danger btn-sm" @click="clickComplete">Complete</button>
      <button v-if="todo.completed" class="btn btn-danger btn-sm" @click="clickComplete">UnComplete</button>
      <button class="btn btn-primary btn-sm" @click="clickModify">Modify</button>
      <button class="btn btn-danger btn-sm" @click="clickDelete">Delete</button>
    </div>

    <ModifyTodo :style="onModify? 'display:block':'display:none'" :todo='todo' @off-modify='offModify'/>
  </div>
</template>

<script>
import ModifyTodo from '@/components/ModifyTodo.vue';

export default {
  name: 'TodoItem',
  components: {
    ModifyTodo
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      onModify: false
    }
  },
  methods: {
    togglCheckbox(e) {
      this.$store.commit('TOGGLE_TODO', {
        id: this.todo.id,
        checked: e.target.checked
      });
    },
    clickComplete() {
      this.$store.commit('COMPLETE_TODO', {
        id: this.todo.id,
        completed: !this.todo.completed
      });
    },
    clickDelete() {
      this.$store.commit('DELETE_TODO', this.todo.id);
    },
    clickModify() {
      this.onModify = !this.onModify;
    },
    offModify(toggle) {
      this.onModify = toggle;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
