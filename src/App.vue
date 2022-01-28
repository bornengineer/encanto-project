<template>
  <div class="container">
    <div id="logotext">
      <router-link id="logo" to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7M1r--N6wUvjWAlwK3oua8ish4VT9ubK2w&usqp=CAU"
        />
      </router-link>
      <h1>ENCANTO</h1>
    </div>
    <div id="navs">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <!-- <a href="javascript:void(0);" class="ham-toggle" id="toggle" onclick="Myfunction()">
      <i class="fa fa-bars"></i>
    </a> -->
  </div>
  <div class="container-i">
    <div class="sicons">
      <ul>
        <li>
          <a href="#">
            <i class="fab fa-twitter-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-instagram-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div>
  <b-button>This is a button</b-button>
  <b-button href="#">This is a link</b-button>
</div>
  <router-view />
</template>


<style scoped>

*{box-sizing: border-box;} 

.container {
  height: 100px;
  max-width: 100%;
  /* border: 2px solid black; */
  margin: 0;
  background: url("../public/blue-259458.jpg") right;
  background-position: right center;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.sicons {
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 40%;
  left: -3%;
  /* margin-right: 40px; */
  background-color: rgba(78, 78, 78, 0.5);
  background-size:2em;
  padding: 6px;
  /* height: 180px; */
  border-radius: 15px;
  /* width: 100px; */
  transition: all 0.2s ease;
}
@media (max-width:960px){
  .sicons{
    left:-4%;
  }
}
@media (max-width:720px){
  .sicons{
    left:-5%;
  }
}
@media (max-width:540px){
  .sicons{
    left:-7%;
  }
}
.sicons:hover {
  box-shadow: 0px 0px 8px 1px white;
}
.sicons ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
}
.sicons li {
  list-style: none;
  margin:15px 10px 5px 10px;
}
.sicons i {
  transform: scale(1.5);
  transition: all 0.2s ease;
  color: #0cb0f1;
}
.sicons i:hover {
  /* color:#2362a1; */
  transform: scale(2);
}
/* body{
  margin: 0;
  background: linear-gradient(180deg, #07203f, black) fixed;
  box-sizing: border-box;
  overflow: hidden;
} */

#logotext {
  display: flex;
  align-items: center;
  transform: scale(0.85);
  /* border: 2px solid black; */
  margin-left: 5vw;
}

#logotext h1 {
  color: white;
  /* margin-top: 0px; */
  font-family: opensticks;
}
#navs {
  position: absolute;
  right: 2%;
  transition: all 0.5s ease;
}

img {
  height: 60px;
  width: 60px;
  filter: grayscale(30%);
  border-radius: 50%;
  /* margin: -15px 20px 15px 20px; */
  transition: 0.3s ease-in-out;
}
img:hover {
  transform: scale(1.1);
  filter: grayscale(0%);
  box-shadow: 0 0 6px 1px rgb(165, 165, 165);
}

@font-face {
  font-family: opensticks;
  src: url(./fonts/open/Opensticks-EOBW.ttf);
}

.container a {
  font-weight: bold;
  font-family: monospace, arial;
  color: #a3a3a3;
  /* margin: 0 0 0 1vw; */
  font-size: 20px;
  transition: 0.5s;
  text-decoration: none;
  position: relative;
}

@media (max-width: 960px) {
  #logotext,
  #navs {
    margin: 0 -10px;
    transform: scale(0.9);
  }
}
@media (max-width: 720px) {
  #logotext,
  #navs {
    margin: 0 -15px;
    transform: scale(0.8);
  }
}
@media (max-width: 660px) {
  #navs {
    display: none;
  }
}

.container a::after {
  content: "\00bb";
  font-size: 27px;
  margin: -15px 10px -15px 10px;
  opacity: 0;
  transition: 0.5s;
}

.container a:hover::after {
  opacity: 1;
  padding-right: 10px;
}

.container a#logo:hover::after {
  opacity: 0;
  padding-right: 0px;
}

.container a.router-link-exact-active {
  color: #ffffff;
}
</style>
