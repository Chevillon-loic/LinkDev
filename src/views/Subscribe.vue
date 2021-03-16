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
      <div id="select">
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
        <span v-for="item in test" :key="item.selectLanguage">
          {{ item }}
        </span>
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
        selectLanguage: "",
        selectLevel: "",
      },
      test: [],
    };
  },
  methods: {
    pushUser: function() {
      if (this.user.password == this.user.repeatPassword) {
        this.users.push(this.user);
      } else {
        alert("echec mdp");
      }
      if (this.user.pseudo == "") {
        alert("Entrez un pseudo");
      }
      console.log(this.user);
      console.log(this.users);
    },
    pushLanguage: function() {
      this.test.push(this.user.selectLanguage, this.user.selectLevel);
      console.log(this.test);
    },
  },
};
</script>

<style>
#subscribe {
  width: 40%;
  min-height: 50vh;
  margin: auto;
  background-color: white;
  box-shadow: 0 0 8px 1px grey;
  border-radius: 5px;
}
#nameSurname {
  display: flex;
}
#select {
  display: flex;
  justify-content: center;
}
</style>
