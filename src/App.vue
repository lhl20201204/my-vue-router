<template>
<input />
  <nav>
    <my-router-link to="/">home</my-router-link> |
    <my-router-link to="/about/yi/san">About</my-router-link>
  </nav>
  <my-router-view/>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
