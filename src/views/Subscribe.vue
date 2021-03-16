<template>
  <div>
    <NavBar />
    <form id="subscribe">
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
      <!-- <div>
      <span>Genre</span><br />
      <label for="Homme">Homme</label>
      <input type="checkbox" name="Homme" />
      <label for="Femme">Femme</label>
      <input type="checkbox" name="Femme" />
    </div> -->
      <!-- <div>
      <span>Année de naissance</span>
      <input type="date" />
    </div> -->
      <div>
        <label for="selectLevel">Niveau de dev</label>
        <select name="selectLevel" id="selectLevel" v-model="user.selectLevel">
          <option value="Junior">Junior</option>
          <option value="Confirmé">Confirmé</option>
          <option value="Expert">Expert</option>
        </select>
      </div>
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
      <button @click.prevent="pushUser">S'inscrire</button>
    </form>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  components: { NavBar },
  data() {
    return {
      users: [],
      user: {
        pseudo: "",
        email: "",
        password: "",
        repeatPassword: "",
        selectLevel: "",
        selectLanguage: "",
      },
    };
  },
  methods: {
    pushUser: function() {
      if (this.user.password == this.user.repeatPassword) {
        this.users.push(this.user);
      } else {
        alert("echec mdp");
      }
      console.log(this.user);
      console.log(this.users);
    },
  },
};
</script>

<style>
#subscribe {
  background-color: rgb(228, 222, 222);
  width: 40%;
  height: 50vh;
  margin: auto;
}
#nameSurname {
  display: flex;
}
</style>
