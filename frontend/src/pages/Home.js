import React from "react";

const Home = () => {
  return (
    <div>
      <header class="bg-primary-gradient">
        <div class="container pt-4 pt-xl-5">
          <div class="row pt-5">
            <div class="col-md-8 col-xl-6 text-center text-md-start mx-auto">
              <div class="text-center">
                <p class="fw-bold text-success mb-2">Voted #1 Worldwide</p>
                <h1 class="fw-bold">The best solution for you and your customers</h1>
              </div>
            </div>
            <div class="col-12 col-lg-10 mx-auto">
              <div class="position-relative" style="display: flex;flex-wrap: wrap;justify-content: flex-end;">
                <div style="position: relative;flex: 0 0 45%;transform: translate3d(-15%, 35%, 0);">
                  <img class="img-fluid" data-bss-parallax="" data-bss-parallax-speed="0.8" src="assets/img/products/3.jpg" />
                </div>
                <div style="position: relative;flex: 0 0 45%;transform: translate3d(-5%, 20%, 0);">
                  <img class="img-fluid" data-bss-parallax="" data-bss-parallax-speed="0.4" src="assets/img/products/2.jpg" />
                </div>
                <div style="position: relative;flex: 0 0 60%;transform: translate3d(0, 0%, 0);">
                  <img class="img-fluid" data-bss-parallax="" data-bss-parallax-speed="0.25" src="assets/img/products/1.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
