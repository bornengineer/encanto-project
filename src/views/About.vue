<template>
  <div class="about">
    <h1>This is an About page</h1>
    <hamburger/>
    <footerMarquee/>
  </div>
</template>

<script>
// @ is an alias to /src
import hamburger from "@/components/hamburger.vue";
import footerMarquee from "@/components/footerMarquee.vue";


export default {
  name: "socialIcons",
  components: {
    hamburger,
    footerMarquee,
  },
};
</script>

<style scoped>
h1{
  color:white
}
</style>