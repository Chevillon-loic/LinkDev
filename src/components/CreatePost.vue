<template>
  <div id="CreatePost">
    <div id="CreatePostBox">
      <p>Créer un post</p>
      <textarea
        placeholder="Saisissez le contenu de votre post ici"
        name=""
        id=""
        cols="100"
        rows="5"
      ></textarea
      ><br /><input type="file" />
      <button>PUBLIER</button>
    </div>
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
