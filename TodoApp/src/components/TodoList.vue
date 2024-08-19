<template>
  <div>
    <h2>{{title}}</h2>
    <input type="checkbox" :checked="checkedAll" @change="allSelect"><span>전체선택</span>&nbsp;&nbsp;<span @click="selectedDelete">선택삭제</span>
    <hr>
    <Todo v-for='todo in list' :key="todo.id" :todo='todo'/>
    <div v-show="list.length===0">할 일이 없습니다</div>
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
  },
  computed: {
    checkedAll(){
      if (this.list.length === 0) {
        return false;
      }
      return this.list.filter(todo => todo.checked).length === this.list.length;
    }
  },
  methods: {
    allSelect(e) {
      if (e.target.checked) {
        this.list.map((todo) => {
          todo.checked = true
        });
      } else {
        this.list.map((todo) => {
          todo.checked = false
        });
      }
    },
    selectedDelete() {
      this.$store.state.todo.todos.map((todo) => {
        if (todo.checked) {
          this.$store.commit('DELETE_TODO', todo.id);
        }
      });
    }
  }
}
</script>