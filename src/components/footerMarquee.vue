<template>
  <div id="bottomMarquee">
    <marquee><p>We Create Magic with Software</p></marquee>
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
    font-size: 16px;
    margin-top: 14px;
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
  background: linear-gradient(rgba(2, 75, 88,0.6), rgba(7, 88, 143,0.6), rgba(0, 46, 54,0.6 ));
  height: 30px;
  width: 100vw;
  position:fixed;
  color: rgb(175, 170, 170);
}
</style>