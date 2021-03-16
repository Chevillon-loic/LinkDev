<template>
  <div class="home">
    <NavBar />
    <div id="homeHeader">
      <h1>Création de post</h1>
      <CreatePost />
    </div>
    <div id="homeContent">
      <h1>post d'actualité</h1>
      <p>Post les plus récents en haut - push reverse général</p>
      <Post />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post.vue";

export default {
  name: "Home",

  components: { NavBar, CreatePost, Post },
};
</script>

<style scoped>
#homeHeader,
#homeContent {
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 60%;
  box-shadow: 0 0 5px 1px white;
}

#homeContent {
  height: auto;
}
</style>
