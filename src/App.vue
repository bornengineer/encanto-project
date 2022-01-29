<template>
  <div class="container sticky-top">
    <div id="logotext">
      <router-link id="logo" to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7M1r--N6wUvjWAlwK3oua8ish4VT9ubK2w&usqp=CAU"
        />
      </router-link>
      <h1>ENCANTO</h1>
    </div>
    <div class="contInfo">
      <span
        ><a href="mailto:mail@encanto.com"
          ><i class="fa fa-envelope"></i>&nbsp;mail@encanto.com</a
        ></span
      >
      <span
        ><a href="tel:+91-9425350689"
          ><i class="fa fa-phone"></i>+91-9425350689</a
        ></span
      >
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
  <div class="container-i fixed-top">
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
  <router-view />
</template>


<style scoped>
* {
  box-sizing: border-box;
}

.contInfo {
  position: fixed;
  right: 10%;
  margin-bottom: 40px;
}

.contInfo span a {
  margin: 0 10px;
  color: gray;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.4s ease;
}

.contInfo span a:hover {
  color: white;
}

.container {
  height: 80px;
  max-width: 100%;
  /* border: 2px solid black; */
  margin: 0;
  background: url("../public/blue-259458.jpg") right;
  background-position: right center;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border-bottom:4px solid rgba(22, 22, 22, 0.322); */
  box-shadow: 0px 2px 8px 2px rgb(22, 22, 22);
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
  background-size: 2em;
  padding: 6px;
  /* height: 180px; */
  border-radius: 15px;
  transform: scale(0.9);

  /* width: 100px; */
  transition: all 0.2s ease;
}
@media (max-width: 960px) {
  .sicons {
    left: -4%;
    transform: scale(0.9);
  }
}
@media (max-width: 720px) {
  .sicons {
    left: -6%;
    transform: scale(0.8);
  }
}
@media (max-width: 540px) {
  .sicons {
    left: -9%;
    transform: scale(0.7);
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
  margin: 15px 10px 5px 10px;
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
  transform: scale(0.7);
  /* border: 2px solid black; */
  margin-left: 5vw;
}

#logotext h1 {
  color: white;
  margin-left: 20px;
  font-family: opensticks;
}
#navs {
  position: absolute;
  right: 2%;
  transition: all 0.5s ease;
  margin-top: 20px;
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

.container #navs a {
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
  #logotext {
    margin: 0 0 0 -20px;
    transform: scale(0.65);
  }
  #navs {
    margin: 25px -20px 0 0;
    transform: scale(0.85);
  }
  .contInfo {
    right: 12%;
  }
  .contInfo span a {
    font-size: 13px;
  }
}
@media (max-width: 720px) {
  #logotext {
    margin: 0 0 0 -40px;
    transform: scale(0.6);
  }
  #navs {
    margin: 28px -50px 0 0;
    transform: scale(0.7);
  }
  .contInfo {
    right: 8%;
  }
  .contInfo span a {
    font-size: 12px;
  }
}
@media (max-width: 540px) {
  #navs {
    display: none;
  }
  .contInfo {
    width: 130px;
    margin-top: 35px;
    margin-right: 25px;
  }
  .contInfo span a {
    font-size: 10px;
  }
  #logotext{margin-right:20px;}
}

.container #navs a::after {
  content: "\00bb";
  font-size: 27px;
  margin: -15px 10px -15px 10px;
  opacity: 0;
  transition: 0.5s;
}

.container #navs a:hover::after {
  opacity: 1;
  padding-right: 10px;
}

.container #navs a#logo:hover::after {
  opacity: 0;
  padding-right: 0px;
}

.container #navs a.router-link-exact-active {
  color: #ffffff;
}
</style>
