<template>
    <h1>This is an Service page</h1>
  <footerMarquee />
  <hamburger/>

</template>

<script>
import footerMarquee from "@/components/footerMarquee.vue";
  import hamburger from "@/components/hamburger.vue";
export default {
  name: "Services",
  components: {
    footerMarquee,
    hamburger,
  },
};
</script>

<style scoped>
h1{
  color:white
}
</style>