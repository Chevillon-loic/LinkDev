<template>
  <div id="Post">
    <div id="PostBox">
      <div>
        <p>Post de {{ pseudoName }}</p>
        <p>Contenu du post</p>
      </div>
      <!-- Contenu nb Like + nb Comment -->
      <div
        style="background-color:green;display:flex;justify-content:space-between"
        id="postNb"
      >
        <span style="text-align:left;">J'aime : {{ like }}</span>
        <span style="text-align:right">Commentaires : {{ nbComment }}</span>
      </div>
      <div id="postFooter">
        <button v-on:click.prevent="btnLike">J'aime</button
        ><button id="btnComment">commenter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    like: Number,
    nbComment: Number,
  },
  data() {
    return {
      propsLike: true,
    };
  },
  methods: {
    btnLike: function() {
      this.propsLike = !this.propsLike;
      if (this.propsLike != true) {
        this.like = Number(this.like) + 1;
        console.log(this.like);
      } else if (this.propsLike != false) {
        this.like = Number(this.like) - 1;
      }
    },
  },
};
</script>

<style>
#PostBox {
  margin: auto;
  margin-bottom: 10px;
  width: 75%;
  border: 1px solid grey;
}
#postFooter {
  display: flex;
  justify-content: space-between;
}
</style>
