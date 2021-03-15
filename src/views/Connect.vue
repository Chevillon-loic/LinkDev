<template>
  <div class="connect">
    <nav-bar />
    <!-- Boite générale de "Connexion" -->
    <div id="boxConnect">
      <!-- Header de "Connexion" avec titre -->
      <div id="headerConnect"><h3>Connexion</h3></div>
      <!-- Contenu de "Connexion" avec input etc -->
      <div id="contentConnect">
        <label for="inputConnect">E-mail :</label><br />
        <input id="inputConnect" type="text" placeholder="Mail" /><br /><br />
        <label for="inputPassword">Mot de passe :</label><br />
        <input id="inputPassword" type="text" placeholder="Mot de passe" />
      </div>
      <!-- footer de "Connexion" avec bouton etc -->
      <div id="footerConnect">
        <!-- .Attention, Home = Link modelé en btn -->
        <br /><button>login</button> <a class="btnHome" href="/">Home</a>
        <p>Pas de compte? <a href="/subscribe">Inscrivez vous!</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isConnect: true,
      user: {
        userName: "",
        userPassword: "",
      },
    };
  },
};

/* A faire methods/conditions

- Si mail + pass = compte existant -> isconnect (true) sinon false.
- Si champs non renseigné, message d'erreur.
- si btn isconnect = true + btn click --> redirection page acceuil.

*/
</script>

<style>
#connect {
  padding: 0;
  margin: 0;
}
#boxConnect {
  box-shadow: 0 0 8px 1px grey;
  padding: 20px;
  border-radius: 5px;
  width: 25%;
  margin: auto;
}
.btnHome {
  border: 1px solid black;
  color: black;
  text-decoration: none;
}
</style>
