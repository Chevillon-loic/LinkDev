<template>
  <div id="CreatePost">
    <div v-if="(isConnect = true)">
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
    <div v-else-if="(isConnect = false)"><h1>Créer un compte</h1></div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style>
#CreatePostBox {
  margin: auto;
  width: 75%;
  border: 1px solid blue;
}
</style>
