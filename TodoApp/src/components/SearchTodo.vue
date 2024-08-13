<template>
  <input type="text" class="w-100 p-2" placeholder="Search todo" @input="search" v-model="searchText">
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    search() {
      this.$store.commit('SEARCH_TODO', this.searchText);
    }
  }
}
</script>

<style>

</style>