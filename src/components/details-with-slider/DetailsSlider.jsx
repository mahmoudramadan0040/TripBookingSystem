"use client";

export default function DetailsSlider() {
  return (
    <>
      {/* Details Banner Slider  */}
      <div className="tour-details-banner">
        <div className="swiper tourSwiper-active">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="assets/images/gallery/tour-details-banner-three.png"
                alt="travello"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/images/gallery/tour-details-banner.png"
                alt="travello"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/images/gallery/tour-details-banner-two.png"
                alt="travello"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/images/gallery/tour-details-banner-three.png"
                alt="travello"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/images/gallery/tour-details-banner.png"
                alt="travello"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/images/gallery/tour-details-banner-two.png"
                alt="travello"
              />
            </div>
          </div>
          <div className="swiper-button-next">
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="ri-arrow-left-s-line"></i>
          </div>
        </div>
      </div>
      {/* / Slider */}
    </>
  );
}
