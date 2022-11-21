<template>
  <div class="main">
    <nav class="navbar navbar-dark bg-dark sticky-top shadow">
        <a class="navbar-brand mx-3" href="#">CityBikes Assignment</a>
    </nav>
    <div id="app">
      <MainApplication title="CityBikes"/>
    </div>
  </div>
</template>

<script>
import MainApplication from './components/MainApplication.vue'

export default {
  name: 'App',
  components: {
    MainApplication
  }
}
</script>

<style>
@import './assets/styles/index.css';
</style>
