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
            <span
              style="color : grey; font-style : italic ;font-size : 11px;display:flex; justify-content : space-between"
            >
              <p style="display : inline-block">
                Région PACA - Nice Côte d'Azur
              </p>
              <button>Contact</button>
            </span>
          </div>
        </div>
        <div style="text-align : justify; padding : 10px">
          <p>Compétence de l'utilisateur</p>
          <table>
            <tr>
              <th>Language de développement</th>
              <th>Niveau de compétence</th>
            </tr>
            <tr>
              <td>JaveScript</td>
              <td>Expert</td>
            </tr>
            <tr>
              <td>PHP</td>
              <td>Intermédiaire</td>
            </tr>
          </table>
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
