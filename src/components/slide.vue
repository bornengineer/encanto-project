 <template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <!-- <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div> -->
    <div class="carousel-inner">
      <div class="carousel-item height-350 active">
        <img
          src="https://images.pexels.com/photos/7988669/pexels-photo-7988669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block caption-div">
          <h5>A Web Development team for all your needs</h5>
          <!-- <p>Providing best solutions for several years</p> -->
        </div>
      </div>
      <div class="carousel-item height-350">
        <img
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260 "
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block caption-div">
          <h5>Providing best solutions for several years</h5>
          <!-- <p>Some representative placeholder content for the second slide.</p> -->
        </div>
      </div>
      <div class="carousel-item height-350">
        <img
          src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block caption-div">
          <h5>Contact us to take your venture to next level</h5>
          <!-- <p>Some representative placeholder content for the third slide.</p> -->
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
.height-350 img {
  max-height: 350px;
  object-fit: cover;
  object-position: center;
}
/* .carousel-item h5,.carousel-item p{color:black;} */
.caption-div {
  background-color: rgba(2, 2, 2, 0.3);
  border-radius: 10px;
  width: 30vw;
  height: 20px;
  position: absolute;
  left: 37%;
  top:87%;
}
.caption-div h5 {
  margin-top:-10px;
  font-size: 15px;
}
</style>