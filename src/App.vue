<template>
  <div id="app">
    <Connection />
    <Subscribe />
    <!-- NAVBAR -->
    <div id="navbar">
      <!-- LOGO NAVBAR -->
      <div id="logo">
        <router-link to="/"><h1>[LinkDev]</h1></router-link>
        <!-- Bouton Admin connexion -->
        <button @click="btnAdmin">Admin connect</button>
      </div>
      <!-- BOUTON ACCUEIL -->
      <router-link to="/"><font-awesome-icon icon="home"/></router-link>
      <!-- BARRE DE RECHERCHE -->
      <input type="text" placeholder="Rechercher sur LinkDev" />
      <!-- SI  isConnected==TRUE alors -->
      <div v-if="isConnected == false">
        <button @click="linkConnection" id="linkConnection">
          <span id="connectLink">Connection</span>
        </button>
        |
        <router-link to="/Subscribe"
          ><span id="subscribeLink">Inscription</span></router-link
        >
      </div>
      <!-- sinon -->
      <div v-else>
        <router-link to="/User"><span>Loïc</span></router-link>
        <button @click="logout" id="buttonLogout">
          <font-awesome-icon icon="power-off" />
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Connection from "./components/Connection.vue";
import Subscribe from "./components/Subscribe.vue";
export default {
  components: { Connection, Subscribe },

  data: () => ({
    isConnected: false,
  }),

  methods: {
    login: function() {
      this.isConnected = true;
    },
    logout: function() {
      this.isConnected = false;
    },
    closeConnexion: function() {
      this.divConnexion = false;
    },
    linkConnection: function() {
      this.divConnexion = true;
      console.log("ehooo");
    },
    btnAdmin: function() {
      this.isConnected = true;
    },
  },

  provide: function() {
    return {
      login: this.login,
      logout: this.logout,
      btnAdmin: this.btnAdmin,
      isConnected: this.isConnected,
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
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #565656;
  height: 8vh;
}
#navbar input {
  height: 40px;
  width: 20%;
  border-radius: 10px;
}
#navbar a {
  text-decoration: none;
  color: white;
}
#logo {
  color: white;
}
#connectLink::before,
#subscribeLink::before {
  content: "< ";
}
#connectLink::after,
#subscribeLink::after {
  content: " / >";
}

#navbar a.router-link-exact-active {
  border-bottom: 1px solid red;
}
#navbar a:hover {
  color: red;
}
#buttonLogout {
  border: none;
  background-color: transparent;
  font-size: xx-large;
}
#linkConnection {
  border: none;
  background-color: transparent;
  color: white;
  font-size: 17px;
}
</style>
