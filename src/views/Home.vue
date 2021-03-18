<template>
  <div class="home">
    <div id="homeHeader">
      <!-- Box Create Post -->
      <div id="CreatePost">
        <!-- Si connecté (affichage box create post) -->
        <div v-if="isConnected == true">
          <div id="CreatePostBox">
            <p>Créer un post</p>
            <textarea
              placeholder="Saisissez le contenu de votre post ici"
              name=""
              id=""
              cols="80"
              rows="5"
            ></textarea
            ><br /><input type="file" />
            <button @click="btnPublish">PUBLIER</button>
          </div>
        </div>
        <!-- Si non connecté (affichage phrase non connecté)-->
        <div v-else-if="isConnected == false"><h1>Créer un compte</h1></div>
      </div>
      <!-- Box des postes pushé -->
    </div>
    <div id="homeContent">
      <ul>
        <li v-for="elem in tabPost" :key="elem">
          <Post pseudoName=" Jean Michael" like="0" nbComment="0" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";

export default {
  components: { Post },

  inject: ["logout", "login", "isConnected"],
  data() {
    return {
      Post: {
        message: "",
        image: "",
      },
      tabPost: [], //tableau qui récuperera les push posts
    };
  },
  methods: {
    btnPublish: function() {
      let newPost = {
        message: this.message,
        image: this.image,
      };
      this.tabPost.push(newPost);
    },
  },
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
#CreatePostBox {
  margin: auto;
  width: 75%;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px grey;
}
button {
  padding: 5px;
  border: none;
  color: grey;
  box-shadow: 0 0 2px 1px grey;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
}
button:hover {
  cursor: pointer;

  background-color: gray;
  color: white;
}
</style>
