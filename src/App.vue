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
  <router-view />
</template>


<style scoped>
.container {
  height: 100px;
  max-width: 100%;
  border: 2px solid black;
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
  position: fixed;
  top: 40%;
  left: -3.2%;
  margin-right: 40px;
  background-color: rgba(78, 78, 78, 0.5);
  padding: 6px;
  height: 160px;
  border-radius: 15px;
  transition: all 0.2s ease;
}
.sicons:hover {
  box-shadow: 0px 0px 8px 1px white;
}
.sicons ul {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  margin-left: 10px;
}
.sicons li {
  list-style: none;
  margin: 10px;
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

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

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

/* .hamburger-list {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: 90px;
  height: 250px;
  z-index: 3;
  width: 100vw;
  position: absolute;
  left: 0;
  top: -12%;
  padding-top: 10px;
}
.ham-list {
  margin-left: 2vw;
  margin-top: 5px;
}
#hamburger {
  display: none;
}*/
/* .ham-toggle {
  display: none;
  position: absolute;
  right: 8vw;
  color: #a3a3a3;
  transform: scale(1.5);
  cursor: pointer;
} */

.visible {
  display: block !important;
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
  /* .ham-toggle {
    display: block;
  } */
}

/* .container a#logo {
  margin-left: -30px;
} */

.container a::after {
  content: "\00bb";
  font-size: 27px;
  margin: -15px 5px -15px 5px;
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
