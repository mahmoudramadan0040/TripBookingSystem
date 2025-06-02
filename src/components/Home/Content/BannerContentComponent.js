function BannerContentComponent() {
  return (
    <>
      {/* <!-- Hero area S t a r t--> */}
      <section className="hero-padding-for-three video-overlay position-relative">
        {/* <!-- Video --> */}
        <div className="hero-bg-video">
          <video
            className="hero-slider-video video-cover"
            poster="/assets/images/hero/hero-three-banner.png"
            loop
            autoPlay
            muted
          >
            <source src="/assets/images/videos/travel1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-xl-12">
              <div className="hero-caption-three position-relative z-3">
                <h4 className="title wow fadeInUp" data-wow-delay="0.0s">
                  Plan tours to dream locations in just a click!
                </h4>
                <p className="pera wow fadeInUp" data-wow-delay="0.1s">
                  Travel is a transformative and enriching experience that
                  allows individuals to explore new destinations, cultures, and
                  landscapes
                </p>
              </div>
              <div
                className="hero-footer position-relative z-3 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="all-user">
                  <div className="happy-user">
                    <img src="/assets/images/hero/user-1.jpeg" alt="travello" />
                  </div>
                  <div className="happy-user">
                    <img src="/assets/images/hero/user-2.png" alt="travello" />
                  </div>
                  <div className="happy-user">
                    <img src="/assets/images/hero/user-3.png" alt="travello" />
                  </div>
                  <div className="happy-user">
                    <img src="/assets/images/hero/user-4.jpeg" alt="travello" />
                  </div>
                  <div className="happy-user-count">
                    <p className="user-count">5k+</p>
                  </div>
                  <p className="pera">Happy Customer</p>
                  <span className="wave-emoji">
                    <img src="/assets/images/icon/hand.png" alt="travello" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/ End-of Hero--> */}
    </>
  );
}

export default BannerContentComponent;
