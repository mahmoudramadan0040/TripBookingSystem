"use client";

export default function DetailsSlider({ images }) {
  return (
    <>
      {/* Details Banner Slider  */}
      <div className="tour-details-banner">
        <div className="swiper tourSwiper-active">
          <div className="swiper-wrapper">
            {images?.map((img, index) => {
              
              return (
                <div className="swiper-slide " key={index}>
                  <img src={img?.cloudImage} alt="travello" className="!max-h-115 "/>
                </div>
              );
            })}
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
