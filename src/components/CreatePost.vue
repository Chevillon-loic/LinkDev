<template>
  <div id="CreatePost">
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
        <button>PUBLIER</button>
      </div>
    </div>
    <div v-if="isConnected == false"><h1>Créer un compte</h1></div>
  </div>
</template>

<script>
export default {
  props: {},
  inject: ["logout", "login", "isConnected"],
  data: () => ({}),
};
</script>

<style>
#CreatePostBox {
  margin: auto;
  width: 75%;
  border: 1px solid blue;
}
</style>
