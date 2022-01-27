<template>
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
</template>

<script>
export default {
  name: "mainComp",
  props: {},
};
</script>

<style scoped>

.sicons {
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 25%;
  left: -5%;
  margin-left: -45px;
  margin-top: -100px;
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
  color: #0cb0f1;
}

</style>