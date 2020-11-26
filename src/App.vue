<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Auth">Auth</router-link></li>
    </ul>
    <!-- <Login/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from "./components/Login";

export default {
  name: 'App',
  components: {  }
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
