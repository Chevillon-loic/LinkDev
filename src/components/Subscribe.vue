<template>
  <div>
    <div v-if="divSubscribe == true" id="test1">
      <div id="divSubscribe">
        <form id="subscribe">
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
    </div>
  </div>
</template>

<script>
export default {
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
      divSubscribe: false,
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
    },
    pushLanguage: function() {
      this.test.push(this.user.selectLanguage, this.user.selectLevel);
      console.log(this.test);
    },
    closeSubscribe: function() {
      this.divSubscribe = false;
    },
  },
};
</script>

<style>
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
#test1 {
  width: -webkit-fill-available;
  height: 100vh;
  position: absolute;
  background-color: #7d7b7be0;
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
</style>
