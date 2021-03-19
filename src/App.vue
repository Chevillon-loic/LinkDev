<template>
  <div id="app">
    <!-- DIV CONNECTION -->
    <!-- DIV CONNECTION -->
    <!-- DIV CONNECTION -->
    <div id="connection">
      <!-- si divConnexion est true affiche la div -->
      <div v-if="divConnexion == true" id="fondGris">
        <div id="divConnexion">
          <div class="connect">
            <!-- Boite générale de "Connexion" -->
            <div id="boxConnect">
              <!-- Bouton pour quitter la page connexion -->
              <button @click="closeConnexion" id="buttonLeaveConnection">
                X
              </button>
              <!-- Header de "Connexion" avec titre -->
              <div id="headerConnect"><h3>Connexion</h3></div>
              <!-- Contenu de "Connexion" avec input etc -->
              <div id="contentConnect">
                <label for="inputConnect">E-mail :</label><br />
                <input
                  v-model="logMail"
                  id="inputConnect"
                  type="text"
                  placeholder="Mail"
                /><br /><br />
                <label for="inputPassword">Mot de passe :</label><br />
                <input
                  v-model="logPassword"
                  id="inputPassword"
                  type="text"
                  placeholder="Mot de passe"
                />
              </div>
              <!-- footer de "Connexion" avec bouton etc -->
              <div id="footerConnect">
                <!-- .Attention, Home = Link modelé en btn -->
                <br /><button @click="validLogin">login</button>
                <p>
                  Pas de compte?
                  <button @click="connectionToSubscribe">
                    Inscrivez vous !
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- DIV SUBSCRIBE -->
    <!-- DIV SUBSCRIBE -->
    <!-- DIV SUBSCRIBE -->
    <!-- si divsubscribe est true affiche la div -->
    <div v-if="divSubscribe == true" id="fondGris">
      <div id="divSubscribe">
        <div id="subscribe">
          <!-- Bouton fermer la fenetre inscription -->
          <button @click="closeSubscribe" id="buttonLeaveSubscribe">
            X
          </button>
          <h1>Inscription</h1>
          <div id="pseudo">
            <label for="pseudo">Pseudo</label>
            <input type="text" name="pseudo" v-model="user.pseudo" />
          </div>
          <div id="divEmail">
            <label for="email">E-mail</label>
            <input type="text" name="email" v-model="user.email" />
          </div>
          <div>
            <label for="password">Mot de passe</label>
            <input type="text" name="password" v-model="user.password" />
          </div>
          <div>
            <label for="repeatPassword">Répéter le mot de passe</label>
            <input
              type="text"
              name="repeatPassword"
              v-model="user.repeatPassword"
            />
          </div>
          <!-- <div id="select">
            <div>
              <label for="selectLanguage">langage maitrisé</label>
              <select
                name="selectLanguage"
                id="selectLanguage"
                v-model="user.selectLanguage"
              >
                <option value="Javascript">Javascript</option>
                <option value="PHP">PHP</option>
                <option value="Ruby">Ruby</option>
              </select>
            </div>
            <div>
              <label for="selectLevel">Niveau</label>
              <select
                name="selectLevel"
                id="selectLevel"
                v-model="user.selectLevel"
              >
                <option value="Junior">Junior</option>
                <option value="Confirmé">Confirmé</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <button @click.prevent="pushLanguage">Ajout langage</button>
          </div>
          <div>
            <span v-for="item in languageUser" :key="item.selectLanguage">
              {{ item }}
            </span>
          </div> -->

          <button @click.prevent="pushUser">S'inscrire</button>
        </div>
      </div>
    </div>
    <!-- NAVBAR -->
    <!-- NAVBAR -->
    <!-- NAVBAR -->
    <div id="navbar">
      <!-- LOGO NAVBAR -->
      <div id="logo">
        <router-link to="/"><h1>[LinkDev]</h1></router-link>
        <!-- Bouton Admin qui force la connexion -->
        <button @click="btnAdmin">Bouton Admin</button>
      </div>
      <!-- BOUTON ACCUEIL -->
      <router-link to="/"><font-awesome-icon icon="home"/></router-link>
      <!-- BARRE DE RECHERCHE -->
      <input type="text" placeholder="Rechercher sur LinkDev" />
      <!-- SI  isConnected==TRUE alors -->
      <div v-if="isConnected == false">
        <!-- Fait apparaitre la div connection -->
        <button @click="linkConnection" id="linkConnection">
          <span id="connectLink">Connection</span>
        </button>
        |
        <button @click="linkSubscribe" id="linkSubscribe">
          <span id="subscribeLink">Inscription</span>
        </button>
      </div>
      <!-- sinon -->
      <div v-else>
        <router-link to="/User"><span>User Name</span></router-link>
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
    // Connection
    isConnect: Boolean,
    logMail: "",
    logPassword: "",
    isConnected: false,
    divConnexion: false,
    // Subscribe
    user: {
      pseudo: "",
      email: "",
      password: "",
      repeatPassword: "",
      selectLanguage: "",
      selectLevel: "",
    },
    languageUser: [],
    divSubscribe: false,
  }),

  methods: {
    checkLogin: function() {
      return this.isConnected;
    },

    login: function() {
      this.isConnected = true;
    },
    logout: function() {
      this.isConnected = false;
    },

    // Connection admin

    btnAdmin: function() {
      this.isConnected = true;
    },

    // Connection

    validLogin: async function() {
      // FETCH CONNEXION
      const body = {
        email: this.logMail,
        password: this.logPassword,
      };

      const token = this.user.email;

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },

        body: JSON.stringify(body),
      };

      try {
        const response = await fetch(
          "https://link-dev-api.osc-fr1.scalingo.io/login",
          options
        );
        if (response.status != 200) {
          this.isConnected = false;
        } else this.isConnected = true;

        console.log(response);

        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    linkConnection: function() {
      this.divConnexion = true;
    },
    closeConnexion: function() {
      this.divConnexion = false;
    },
    // Subscribe
    pushUser: async function() {
      /* Conditions Subscribe */
      if (this.user.password != this.user.repeatPassword) {
        alert("echec mdp");
        return;
      }
      if (this.user.pseudo == "") {
        alert("Entrez un pseudo");
        return;
      }

      /* Envois requêtes Subscribe */
      const body = {
        name: this.user.pseudo,
        email: this.user.email,
        password: this.user.password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      try {
        const response = await fetch(
          "https://link-dev-api.osc-fr1.scalingo.io/register",
          options
        );
        console.log(response);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    pushLanguage: function() {
      this.languageUser.push(this.user.selectLanguage, this.user.selectLevel);
    },
    linkSubscribe: function() {
      this.divSubscribe = true;
    },
    closeSubscribe: function() {
      this.divSubscribe = false;
    },
    connectionToSubscribe: function() {
      this.divConnexion = false;
      this.divSubscribe = true;
    },
  },

  provide: function() {
    return {
      login: this.login,
      logout: this.logout,
      checkLogin: this.checkLogin,
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
#boxConnect {
  background-color: white;
  box-shadow: 0 0 8px 1px grey;
  padding: 20px;
  border-radius: 5px;
  width: 91%;
  margin: auto;
  height: 51vh;
}
.btnHome {
  border: 1px solid black;
  color: black;
  text-decoration: none;
}
#fondGris {
  width: -webkit-fill-available;
  height: 100vh;
  position: absolute;
  background-color: #7d7b7be0;
}

#divConnexion {
  height: 57vh;
  width: 63vh;
  position: fixed;
  left: 36%;
  top: 18%;
}
#buttonLeaveConnection {
  float: right;
  border: none;
  background-color: transparent;
}
/* Subscribe */
#subscribe {
  background-color: white;
  box-shadow: 0 0 8px 1px grey;
  padding: 20px;
  border-radius: 5px;
  width: 91%;
  margin: auto;
  height: 51vh;
}
#nameSurname {
  display: flex;
}
#select {
  display: flex;
  justify-content: center;
}

#divSubscribe {
  height: 57vh;
  width: 63vh;
  position: fixed;
  left: 36%;
  top: 18%;
}
#buttonLeaveSubscribe {
  float: right;
  border: none;
  background-color: transparent;
}
#linkSubscribe {
  border: none;
  background-color: transparent;
  color: white;
  font-size: 17px;
}
</style>
