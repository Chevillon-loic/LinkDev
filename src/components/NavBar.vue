<template>
  <div id="navbar">
    <div id="logo">
      <router-link to="/"><h1>[LinkDev]</h1></router-link>
    </div>
    <router-link to="/"><font-awesome-icon icon="home"/></router-link>
    <input type="text" placeholder="Rechercher sur LinkDev" />
    <div v-if="(isConnected = false)">
      <router-link to="/Connect"
        ><span id="connectLink">Connection</span></router-link
      >
      |
      <router-link to="/Subscribe"
        ><span id="subscribeLink">Inscription</span></router-link
      >
    </div>
    <div v-else>
      <router-link to="/User"><span>Loïc</span></router-link>
      <button @click="logout"><font-awesome-icon icon="power-off" /></button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["logout", "login"],
};
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
</style>
