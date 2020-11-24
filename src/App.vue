<template>
  <div id="app">
    <Login/>
  </div>
</template>

<script>
import Login from "./components/Login";

export default {
  name: 'App',
  components: { Login }
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
  /* background-color: #F3F5FA; */
}
</style>
