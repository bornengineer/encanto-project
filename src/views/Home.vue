<template>
  <!-- <h1>This is an Home page</h1> -->
  <mainComp/>
  <footerMarquee />
  <hamburger/>
  <!-- <socialIcons/> -->
</template>

<script>
// @ is an alias to /src
// import header1 from "@/components/header1.vue";
import footerMarquee from "@/components/footerMarquee.vue";
import mainComp from "@/components/mainComp.vue";
import hamburger from "@/components/hamburger.vue";
// import socialIcons from "@/components/socialIcons.vue";

export default {
  name: "Home",
  components: {
    // header1,
    footerMarquee,
    mainComp,
    hamburger,
    // socialIcons,
  },
};
</script>

<style>
body{
  margin: 0;
  background: linear-gradient(180deg, #07203f, black) fixed;
  box-sizing: border-box;
  overflow: hidden;
  /* max-width: 1200px; */
}
h1{
  display: flex;
  justify-content: center;
}
</style>
