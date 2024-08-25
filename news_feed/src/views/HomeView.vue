<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NewsList/>
    <Pagination/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NewsList from '@/components/NewsList.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NewsList,
    Pagination
  }
}
</script>
