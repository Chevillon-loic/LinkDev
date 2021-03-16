<template>
  <div id="Post">
    <div id="PostBox">
      <div>
        <p>Post de {{ user }}</p>
        <p>Contenu du post</p>
      </div>
      <!-- Contenu nb Like + nb Comment -->
      <div id="postNb"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style>
#PostBox {
  margin: auto;
  width: 75%;
  border: 1px solid grey;
}
</style>
