<template>
  <a @click.prevent.stop="toggle" href="javascript:void(0);" class="ham-toggle">
    <i class="fa fa-bars"></i>
  </a>
  <div id="hamburger">
    <div v-if="cond" class="hamburger-list">
      <router-link class="ham-list" to="/">Home</router-link>
      <router-link class="ham-list" to="/about">About</router-link>
      <router-link class="ham-list" to="/services">Services</router-link>
      <router-link class="ham-list" to="/contact">Contact us</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cond: false,
    };
  },
  methods: {
    toggle() {
      this.cond = !this.cond;
    },
  },
};
</script>


<style scoped>
.hamburger-list {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  /* margin-top: 120px; */
  height: 250px;
  z-index: 3;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0%;
  padding-top: 10px;
}
.ham-list {
  margin-left: 3vw;
  margin-top: 5px;
}
#hamburger {
  /* display: none; */
}
.ham-toggle {
  display: none;
  position: absolute;
  right: 8vw;
  top: 5vh;
  color: #a3a3a3;
  transform: scale(1.5);
  cursor: pointer;
}
@media (max-width: 660px) {
  .ham-toggle {
    display: block;
    z-index: 10;
  }
}
@media (min-width: 660px) {
  .hamburger-list {
    display: none;
  }
}
#hamburger a {
  font-weight: bold;
  font-family: monospace, arial;
  color: #a3a3a3;
  /* margin: 0 0 0 1vw; */
  font-size: 20px;
  transition: 0.5s;
  text-decoration: none;
  position: relative;
}
#hamburger a::after {
  content: "\00bb";
  font-size: 27px;
  margin: -15px 5px -15px 5px;
  opacity: 0;
  transition: 0.5s;
}

#hamburger a:hover::after {
  opacity: 1;
  padding-right: 10px;
}

#hamburger a#logo:hover::after {
  opacity: 0;
  padding-right: 0px;
}

#hamburger a.router-link-exact-active {
  color: #ffffff;
}
</style>