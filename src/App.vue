<template>
  <div id="app">
    <div v-if="divConnexion == true" id="test">
      <div id="divConnexion">
        <div class="connect">
          <!-- Boite générale de "Connexion" -->
          <div id="boxConnect">
            <!-- Header de "Connexion" avec titre -->
            <div id="headerConnect"><h3>Connexion</h3></div>
            <!-- Contenu de "Connexion" avec input etc -->
            <div id="contentConnect">
              <label for="inputConnect">E-mail :</label><br />
              <input
                v-model="userMail"
                id="inputConnect"
                type="text"
                placeholder="Mail"
              /><br /><br />
              <label for="inputPassword">Mot de passe :</label><br />
              <input
                v-model="userPassword"
                id="inputPassword"
                type="text"
                placeholder="Mot de passe"
              />
            </div>
            <!-- footer de "Connexion" avec bouton etc -->
            <div id="footerConnect">
              <!-- .Attention, Home = Link modelé en btn -->
              <br /><button @click="validLogin">login</button>
              <p>Pas de compte? <a href="/subscribe">Inscrivez vous!</a></p>
            </div>
          </div>
        </div>
        <button @click="closeConnexion">X</button>
      </div>
    </div>
    <!-- NAVBAR -->
    <div id="navbar">
      <!-- LOGO NAVBAR -->
      <div id="logo">
        <router-link to="/"><h1>[LinkDev]</h1></router-link>
      </div>
      <!-- BOUTON ACCUEIL -->
      <router-link to="/"><font-awesome-icon icon="home"/></router-link>
      <!-- BARRE DE RECHERCHE -->
      <input type="text" placeholder="Rechercher sur LinkDev" />
      <!-- SI  isConnected==TRUE alors -->
      <div v-if="isConnected == false">
        <router-link to="/Connect"
          ><span id="connectLink">Connection</span></router-link
        >
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
export default {
  data: () => ({
    isConnected: false,
    divConnexion: true,
  }),

  methods: {
    login: function() {
      this.isConnected = true;
    },
    logout: function() {
      this.isConnected = false;
      console.log("test");
    },
    closeConnexion: function() {
      this.divConnexion = false;
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

#test {
  width: -webkit-fill-available;
  height: 100vh;
  position: absolute;
  background-color: #7d7b7be0;
}

#divConnexion {
  height: 57vh;
  width: 63vh;
  background-color: chartreuse;
  position: fixed;
  left: 36%;
  top: 18%;
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
</style>
