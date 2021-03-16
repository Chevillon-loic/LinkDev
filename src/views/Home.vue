<template>
  <div class="home">
    <div id="homeHeader">
      <h1>Création de post</h1>
      <CreatePost />
    </div>
    <div id="homeContent">
      <Post pseudoName=" Jean Michael" like="0" nbComment="0" />
      <Post pseudoName=" Alfred" like="0" nbComment="0" />
    </div>
  </div>
</template>

<script>
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

export default {
  components: { CreatePost, Post },
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
  overflow: scroll;
  max-height: 47vh;
}
</style>
