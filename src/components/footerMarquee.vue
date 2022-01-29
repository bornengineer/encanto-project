<template>
  <div id="bottomMarquee">
    <marquee><p> Create Magic with Software</p></marquee>
  </div>
</template>

<script>
// import HelloWorld from "@/components/H.vue";
// import { defineComponent } from '@vue/composition-api'

export default {
  name: "footerMarquee",
};
</script>

<style scoped>
p{
    font-size: 18px;
}
p::before{
    content:" \2022 ";
}
p::after{
    content:" \2022 ";
}
/* h1{margin-top: 20px;} */
#bottomMarquee {
    display:flex;
    align-items:center;
  position: absolute;
  bottom: 0%;
  background-color: rgb(0, 46, 54);
  height: 30px;
  width: 100vw;
  position:fixed;
  color: rgb(128, 128, 128);
}
</style>