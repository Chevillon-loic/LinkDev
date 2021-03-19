<template>
  <div id="Post">
    <div id="PostTop" style="display:flex;justify-content:space-between">
      <span>De : {{ pseudoName }} </span
      ><span style="font-style:italic;font-size: 14px;color: grey;"
        >mardi 24 2017 à 21h</span
      >
    </div>
    <div id="PostContent" style="display:flex">
      <div id="PostLeft" style="width:20%;">
        <img
          style="border-radius:50%"
          height="70px"
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        />
      </div>
      <div id="PostRight" style="width:80%;text-align:justify;padding:5px">
        <p>
          {{ text }}
        </p>
      </div>
    </div>

    <div id="PostBox">
      <div></div>
      <!-- Contenu nb Like + nb Comment -->
      <div style="display:flex;justify-content:space-between" id="postNb">
        <span style="text-align:left;">J'aime : {{ like }}</span>
        <span style="text-align:right">Commentaires : {{ nbComment }}</span>
      </div>
      <div v-if="checkLogin() === true" id="postFooter">
        <button v-on:click.prevent="btnLike">J'aime</button>
        <!-- Les commentaires -->
      </div>
      <button v-on:click="btnCommenter" id="btnComment">
        Afficher les commentaires
      </button>
      <div id="postComment">
        <div v-if="burgerComment == false">
          <ul>
            <li>Comm1</li>
          </ul>

          <div v-if="checkLogin() === true">
            <textarea name="" id="textAreaPosts" cols="90" rows="3"></textarea
            ><button @click="btnComment">Commenter</button>
          </div>
          <div v-else-if="checkLogin() === false">
            <p style="color:red">
              Vous devez être connecter pour ajouter un commentaire
            </p>
          </div>
        </div>
        <div v-if="burgerComment == true"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    like: String,
    nbComment: String,
    pseudoName: String,
    text: String,
  },
  inject: ["logout", "login", "checkLogin"],
  data() {
    return {
      propsLike: true,
      burgerComment: true,
      tabComment: [],
      comment: String,
    };
  },
  methods: {
    // Fonction incré - décré Likes
    btnLike: function() {
      this.propsLike = !this.propsLike;
      if (this.propsLike != true) {
        this.like = Number(this.like) + 1;
        console.log(this.like);
      } else if (this.propsLike != false) {
        this.like = Number(this.like) - 1;
      }
    },
    btnComment: function() {
      this.tabComment.push();
    },
    btnCommenter: function() {
      this.burgerComment = !this.burgerComment;
    },
  },
};
</script>

<style>
#Post {
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 10px;
  width: 75%;
  box-shadow: 0 0 3px 1px grey;
}
#postFooter {
  display: flex;
  justify-content: space-between;
}

#Post:hover {
  transform: scale(1.001);
  box-shadow: 0 0 15px 1px grey;
}
#postComment {
  box-shadow: 0 0 15px 1px grey;
}
.userComment {
  text-align: justify;
}
#textAreaPosts {
  width: 80vh;
  resize: none;
}
</style>
