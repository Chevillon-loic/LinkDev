<template>
  <div class="about">
    <br />
    <div id="user">
      <br />
      <div
        style="box-shadow : 0 0 8px 1px grey ;width:700px; margin:auto; border-radius: 5px"
        id="profilCard"
      >
        <div id="pictureHeader">
          <img
            style="border-top-left-radius : 5px; border-top-right-radius :5px"
            width="700px"
            height="200px"
            src="https://pic.clubic.com/v1/images/1709696/raw?width=1200&fit=max&hash=b66a110eab5bfb759d547630534eb1be823a7b82"
            alt=""
          />
        </div>
        <div style=" display:flex;" id="profilContent">
          <div style="width:20%;border-right: 1px solid grey">
            <img
              style="border-radius:50%;margin : 12px;"
              height="70px"
              src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
            />
          </div>
          <div style="text-align:justify ; padding : 10px">
            <p style="font-weight : bold; font-size : 20px">
              Pseudo
            </p>
            <p style="color : grey; font-style : italic">
              Développeur Full Stack | Entreprise : Le Bocal
            </p>
            <p style="color : grey; font-style : italic ;font-size : 11px">
              Région PACA - Nice Côte d'Azur
            </p>
          </div>
        </div>
        <div style="text-align : justify; padding : 10px">
          <p>Compétence de l'utilisateur</p>
          <ul>
            <li>PHP : Expert</li>
            <li>JavaScript : Junior</li>
          </ul>
        </div>
      </div>

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
