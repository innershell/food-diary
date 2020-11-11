<template>
  <div id="app">
    <Patient/>
  </div>
</template>

<script>
import Patient from "./components/Patient";

export default {
  name: 'App',
  components: { Patient }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  background-color: #F3F5FA;
}
</style>
