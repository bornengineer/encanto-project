<template>
  <div
    id="main"
    class="
      d-flex
      justify-content-center
      flex-column
      flex-sm-column
      flex-md-column
      flex-lg-row
      flex-xl-row
      flex-xxl-row
    "
  >
    <div id="imgcontainer1" class="flexbox">
      <img
        src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png"
      />
      <!-- <p>We cover all techs</p> -->
    </div>
    <div class="headingtext">
      <h1 class="gradient-text">We Create Magic with Software</h1>
      <div class="summary">
        <h3>
          <span>ENCANTO</span><br />
          is a software company, where we thrive to provide the best solutions
          to our clients
        </h3>
      </div>
    </div>
    <div id="imgcontainer2" class="flexbox">
      <img
        src="https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978_960_720.png"
      />
      <!-- <p>All Devices covered</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "mainComp",
  props: {},
};
</script>
<style scoped>
b {
  letter-spacing: 4px;
}
span {
  font-family: opensticks;
  /* font-weight: bold; */
}

#main {
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 30px;
}
.gradient-text {
  background-color: red;

  /* Create the gradient. */
  background-image: linear-gradient(45deg, #0cb0f1, #ebc139);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
h1 {
  /* color: linear-gradient(45deg, rgb(10, 176, 241), rgb(12, 92, 240)); */
  font-family: playfair-display, serif;
  font-weight: 700;
  font-style: italic;
  letter-spacing: 2px;
  /* margin-bottom: -5px; */
  margin-bottom: 20px;
  font-size: 35px;
  text-align: center;
}
h3 {
  color: rgb(212, 211, 211);
  font-family: merriweather, serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  font-size: 20px;
}
img {
  height: 100%;
  width: 100%;
  transition: 0.3s ease-in-out;
}
.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#imgcontainer1 {
  height: 220px;
  max-width: 220px;
  width: 220px;
  background-color: rgba(75, 74, 74, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 2%;
  border-radius: 3%;
  position: relative;
  /* margin: 0 40px 0 0; */
}
#imgcontainer2 {
  height: 220px;
  width: 440px;
  max-width: 440px;
  background-color: rgba(75, 74, 74, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 2%;
  border-radius: 3%;
  /* margin: 0 0 10px 0; */
  position: relative;
}

/* @media (max-width: 960px){
  flex-dir{
    flex-direction: column;
  }
} */

.flexbox p {
  color: rgb(161, 161, 161);
  margin-bottom: -15px;
}

img:hover {
  height: 125%;
  width: 125%;
}
.headingtext h1{margin-top:20px; margin-bottom:10px;}
.headingtext {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 30px;
  background-color: rgba(5, 47, 54, 0.4);
  border-radius: 10px;
  padding: 10px;
  width: 40vw;
  max-width: 500px;
  height: 220px;
}
@media (max-width: 960px) {
  .headingtext {
    width: 60vw;
  }
  #imgcontainer1 {
    height: 200px;
    width: 200px;
  }
  #imgcontainer2 {
    height: 200px;
    width: 400px;
  }
  h1{font-size:32px;}
  h3{font-size:20px;}
}
@media (max-width: 720px) {
  .headingtext {
    width: 70vw;
  }
  #imgcontainer1 {
    height: 180px;
    width: 180px;
  }
  #imgcontainer2 {
    height: 180px;
    width: 360px;
  }
  h1{font-size:28px;}
  h3{font-size:18px;}
}
@media (max-width: 540px) {
  .headingtext {
    width: 80vw;  
  }
  #main {
    flex-direction: column;
  }
  #imgcontainer1 {
    height: 160px;
    width: 160px;
  }
  #imgcontainer2 {
    height: 160px;
    width: 320px;
  }
  h1{font-size:22px;}
  h3{font-size:15px;}
}
.summary {
  /* height: 10vw; */
  /* width: 30vw; */
}
</style>