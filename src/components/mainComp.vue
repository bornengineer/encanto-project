<template>
  <div id="main">
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
  justify-content: space-around;
  align-items: center;
  margin-top:10px;
  margin-left: 20px;
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
  margin-bottom: -5px;
}
h3 {
  color: rgb(212, 211, 211);
  font-family: merriweather, serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
}
img {
  height: 110%;
  width: 110%;
  transition: 0.3s ease-in-out;
}
.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#imgcontainer1 {
  height: 12vw;
  width: 12vw;
  background-color: rgba(75, 74, 74, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 2%;
  border-radius: 3%;
  position: relative;
}
#imgcontainer2 {
  height: 12vw;
  width: 24vw;
  background-color: rgba(75, 74, 74, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 2%;
  border-radius: 3%;
  position: relative;
}

.flexbox p{
  color:rgb(161, 161, 161);
  margin-bottom: -15px;
}

img:hover {
  height: 125%;
  width: 125%;
}


.headingtext {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin: 6% 0 0 8%; */
  background-color: rgba(5, 47, 54, 0.4);
  border-radius: 10px;
  padding: 0.1rem 0.1rem 0.1rem 0.1em;
  width: 40vw;
  height: 220px;
}
.summary {
  /* height: 10vw; */
  width: 30vw;
}
</style>