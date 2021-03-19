<template>
  <div class="about">
    <div id="user">
      <div>
        <p>Page du profil</p>
        <div id="userProfile">
          <div>
            <img
              id="imgUser"
              style="border-radius:50%"
              height="70px"
              src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
              alt="photo de profil"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
</style>
