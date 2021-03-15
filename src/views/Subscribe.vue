<template>
  <form id="subscribe">
    <h1>Inscription</h1>
    <div id="nameSurname">
      <div>
        <label for="name">Prénom</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label for="surname">Nom de famille</label>
        <input type="text" name="surname" />
      </div>
    </div>
    <div id="divEmail">
      <label for="email">E-mail</label>
      <input type="text" name="email" />
    </div>
    <div>
      <label for="password">Mot de passe</label>
      <input type="text" name="password" />
    </div>
    <div>
      <label for="repeatPassword">Répéter le mot de passe</label>
      <input type="text" name="repeatPassword" />
    </div>
    <div>
      <span>Genre</span><br />
      <label for="Homme">Homme</label>
      <input type="checkbox" name="Homme" />
      <label for="Femme">Femme</label>
      <input type="checkbox" name="Femme" />
    </div>
    <div>
      <span>Année de naissance</span>
      <input type="date" />
    </div>
    <div>
      <label for="selectLevel">Niveau de dev</label>
      <select name="selectLevel" id="selectLevel">
        <option value="Junior">Junior</option>
        <option value="Confirmé">Confirmé</option>
        <option value="Expert">Expert</option>
      </select>
    </div>
    <div>
      <label for="selectlanguage">langage maitrisé</label>
      <select name="selectLanguage" id="selectLanguage">
        <option value="">Javascript</option>
        <option value="">PHP</option>
        <option value="">Ruby</option>
      </select>
    </div>
    <button>S'inscrire</button>
  </form>
</template>

<script>
export default {};
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
