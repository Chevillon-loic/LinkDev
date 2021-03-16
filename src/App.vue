<template>
  <div id="app">
    <NavBar v-if="isConnected" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  data: () => ({
    isConnected: false,
  }),

  components: {
    NavBar,
  },

  methods: {
    login: function() {
      this.isConnected = true;
    },
    logout: function() {
      this.isConnected = false;
    },
  },

  provide: function() {
    return {
      login: this.login,
      logout: this.logout,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(https://vogappdevelopers.com/wp-content/uploads/2019/04/vw-backv2.jpg);
  background-color: #cccccc;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
