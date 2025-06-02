"use client";
import { useSelector } from "react-redux";
import TourCardV2 from "@/components/Tours/TourCardV2";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import Link from "next/link";
function FavoritPakageComponent() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [initSwiper, setInitSwiper] = useState(false);
  const tours = useSelector((state) => state.shared.tours);
  let FavoriteTours = tours?.data?.filter((t) => t.IsFeatured == true);

  useEffect(() => {
    if (tours) {
      FavoriteTours = tours?.data?.filter((t) => t.IsFetured == true);
    }
  }, [tours]);

  console.log(FavoriteTours);
  return (
    <>
      {/* <!-- Feature S t a r t --> */}
      <section className="feature-area feature-area-bg section-padding2">
        <div className="container">
          <div className="row justify-content-center position-relative z-10">
            <div className="col-xl-7 col-lg-7">
              <div className="section-title mx-464 mx-auto text-center">
                <span className="highlights fancy-font font-400">
                  Features Tour
                </span>
                <h4 className="title">Most Favorite Tour Place in The World</h4>
              </div>
            </div>
          </div>
          <div className="row g-4 position-relative z-10 testimonialTwo-active">
            {/* <div className="swiper favSwiper-active"> */}
            {/* <div className="swiper-wrapper"> */}

            <Swiper
              modules={[Autoplay, Navigation]}
              onBeforeInit={(swiper) => {
                // Bind navigation buttons to swiper navigation
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onSwiper={() => setInitSwiper(true)}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              loop={true}
            >
              {FavoriteTours
                ? FavoriteTours.map((tour) => (
                    <SwiperSlide key={tour.id}>
                      <TourCardV2 tour={tour} key={tour.id}></TourCardV2>
                    </SwiperSlide>
                  ))
                : ""}
              {/* <div className="swiper-button-prev" />
              <div className="swiper-button-next" /> */}
              {/* <div className="swiper-button-prev" ref={prevRef}>
                <i className="ri-arrow-left-s-line"></i>
              </div>
              <div className="swiper-button-next" ref={nextRef}>
                <i className="ri-arrow-right-s-line p-4 m-4"></i>
              </div> */}
            </Swiper>

            {/* Custom Navigation Buttons with Tailwind */}
          </div>
          <div className="row position-relative z-10">
            <div className="col-12 text-center">
              <div className="section-button d-inline-block">
                <Link href="/tours">
                  <div className="btn-primary-icon-sm border-radius-20">
                    <p className="pera">View All Tour</p>
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/ End of Feature --> */}
    </>
  );
}

export default FavoritPakageComponent;
