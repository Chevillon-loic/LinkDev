<template>
  <div id="navbar">
    <div id="logo">
      <router-link to="/"><h1>[LinkDev]</h1></router-link>
    </div>
    <router-link to="/">Accueil</router-link>
    <input type="text" placeholder="Rechercher sur LinkDev" />
    <router-link to="/Connect">Connection</router-link> |
    <router-link to="/Subscribe">Inscription</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
</style>
