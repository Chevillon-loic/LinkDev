<template>
  <div class="about">
    <div id="user">
      <div>
        <p>Page du profil</p>
        <div id="userProfile">
          <div>
            <h2 style="text-align:center">Profil Utilisateur</h2>

            <div class="card">
              <img
                src=""
                alt="mettre photo pour c qui qui est là?"
                style="width:100%"
              />
              <h1>Ici son nom</h1>
              <p class="title">Son titre</p>
              <p>Ses compétences</p>
              <div style="margin: 24px 0;">
                <a href="#"><i class="fa fa-dribbble"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-facebook"></i></a>
              </div>
              <p><button>Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#user {
  box-shadow: 0 0 5px 1px white;
  border-radius: 5px;
  margin: auto;
  width: 75%;
  background-color: white;
  height: 89vh;
}
#userProfile {
  height: 35vh;
  width: 60%;
  margin: auto;
  background-color: burlywood;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
</style>
