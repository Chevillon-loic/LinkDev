<template>
  <div id="connection">
    <div v-if="divConnexion == true" id="test">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isConnect: Boolean,
      userConnect: [],
      userMail: "",
      userPassword: "",
      divConnexion: false,
    };
  },
  methods: {
    validLogin: function() {
      // Condition connected or not
      this.userConnect.userMail = this.userMail;
      this.userConnect.userPassword = this.userPassword;

      if (this.userMail & this.userPassword) {
        this.isConnect = true;
      } else {
        this.isConnect = false;
      }
      this.userConnect.push(this.userMail, this.userPassword);
      console.log(this.userConnect);
    },
    closeConnexion: function() {
      this.divConnexion = false;
    },
  },
};

/* A faire methods/conditions

- Si mail + pass = compte existant -> isconnect (true) sinon false.
- Si champs non renseigné, message d'erreur.
- si btn isconnect = true + btn click --> redirection page acceuil.

*/
</script>

<style>
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
#test {
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
</style>
