 <template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
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
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="data:image/jpeg;base64,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" class="d-block w-100"  alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.pikpng.com/pngl/b/60-600863_1400-x-350-18-ocean-water-splash-png.png" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://trsaero.com/allfastinc/wp-content/uploads/2018/01/header-1400x350-monogram-site-01.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
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