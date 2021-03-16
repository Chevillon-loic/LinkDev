<template>
  <div class="home">
    <div id="homeHeader">
      <CreatePost />
    </div>
    <div id="homeContent">
      <Post pseudoName=" Jean Michael" like="0" nbComment="0" />
      <Post pseudoName=" Alfred" like="0" nbComment="0" />
      <Post pseudoName=" Robert" like="0" nbComment="0" />
      <Post pseudoName=" Piapiapia" like="0" nbComment="0" />
      <Post pseudoName=" Keskifait" like="0" nbComment="0" />
      <Post pseudoName=" keskildit" like="0" nbComment="0" />
    </div>
  </div>
</template>

<script>
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

export default {
  components: { CreatePost, Post },
  inject: ["logout", "login"],
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
  overflow-x: hidden;
  max-height: 47vh;
}
/* design scrollbar */
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Le handle  */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
