<template>
  <div>
    <input class="ml-3 flex-grow-1" v-model="text">
    <button class="btn btn-primary btn-sm" @click="modifyTodo">Modify</button>
    <button class="btn btn-danger btn-sm" @click="$emit('off-modify', false);">Cancle</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    modifyTodo() {
      this.$store.commit('MODIFY_TODO', {id: this.todo.id, text: this.text});
      this.text = '';
      this.$emit('off-modify', false);
    }
  }
}
</script>

<style>

</style>