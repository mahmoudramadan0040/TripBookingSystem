function HomeContentComponent() {
    return ( 
    <>
        <main>
        {/* <!-- Hero area S t a r t--> */}
        <section className="hero-padding-for-three video-overlay position-relative">
            {/* <!-- Video --> */}
            <div className="hero-bg-video">
                <video className="hero-slider-video video-cover" 
                    poster="assets/images/hero/hero-three-banner.png" loop autoPlay muted>
                    <source src="assets/images/videos/travel1.mp4" type="video/mp4"/>
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
                        <div className="hero-footer position-relative z-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="all-user">
                                <div className="happy-user">
                                    <img src="assets/images/hero/user-1.jpeg" alt="travello"/>
                                </div>
                                <div className="happy-user">
                                    <img src="assets/images/hero/user-2.png" alt="travello"/>
                                </div>
                                <div className="happy-user">
                                    <img src="assets/images/hero/user-3.png" alt="travello"/>
                                </div>
                                <div className="happy-user">
                                    <img src="assets/images/hero/user-4.jpeg" alt="travello"/>
                                </div>
                                <div className="happy-user-count">
                                    <p className="user-count">5k+</p>
                                </div>
                                <p className="pera">Happy Customer</p>
                                <span className="wave-emoji">
                                    <img src="assets/images/icon/hand.png" alt="travello"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End-of Hero--> */}

        {/* <!-- Plan area S t a r t --> */}
        <section className="plan-area-three">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="plan-section-three plan-shadow">
                            <div className="choose-plan-nav">

                                {/* <!-- Buttons Type Select --> */}
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="plan-link active" id="tour-tab" data-bs-toggle="tab"
                                            data-bs-target="#tour" type="button" role="tab" aria-controls="tour"
                                            aria-selected="true">
                                            <i className="ri-flight-takeoff-fill"></i> Tour
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="plan-link" id="book-hotel" data-bs-toggle="tab" data-bs-target="#hotel-tap"
                                            type="button" role="tab" aria-controls="hotel-tap" aria-selected="false">
                                            <i className="ri-hotel-bed-line"></i>Hotel
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="plan-link" id="book-transport" data-bs-toggle="tab" data-bs-target="#transport-tap"
                                            type="button" role="tab" aria-controls="transport-tap" aria-selected="false">
                                            <i className="ri-car-line"></i>Transport
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="plan-link" id="book-restaurant" data-bs-toggle="tab" data-bs-target="#restaurant-tap"
                                            type="button" role="tab" aria-controls="restaurant-tap" aria-selected="false">
                                            <i className="ri-restaurant-line"></i>Restaurant
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="plan-link" id="book-visa" data-bs-toggle="tab" data-bs-target="#visa-tap"
                                            type="button" role="tab" aria-controls="visa-tap" aria-selected="false">
                                            <i className="ri-cellphone-line"></i>visa
                                        </button>
                                    </li>
                                </ul>
                                {/* <!-- / End-of Buttons --> */}

                                {/* <!-- Tab Search Contents --> */}
                                <div className="tab-content" id="tourTab">
                                    <div className="tab-pane fade show active" id="tour" role="tabpanel" aria-labelledby="tour-tab">
                                        <div className="d-flex gap-16 flex-wrap mb-26">
                                            <label className="one-way-label">
                                                <input className="one-way-input" type="radio" name="radio"/>
                                                <span className="circle"></span>
                                                <span className="radio-text">One Way</span>
                                            </label>
                                            <label className="round-trip-label">
                                                <input className="round-trip-input" type="radio" name="radio" checked/>
                                                <span className="circle"></span>
                                                <span className="radio-text">Round Trip</span>
                                            </label>
                                        </div>
                                        <div className="row g-4 justify-content-end">
                                            <div className="col-xl-5 col-lg-12">
                                                <div className="destination-flex">
                                                    <div className="select-dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="destination-dropdown-two"></div>
                                                        </div>
                                                        <div className="destination-result line-clamp-1">
                                                            Istanbul Airport...
                                                        </div>
                                                    </div>
                                                    <div className="select-dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="destination-dropdown-three"></div>
                                                        </div>
                                                        <div className="destination-result-three line-clamp-1">
                                                            Istanbul Airport...
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <i className="ri-arrow-left-right-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-12">
                                                <div className="destination-flex">
                                                    <div className="dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="custom-date-three">
                                                                <h4 className="month-title month-result">February</h4>
                                                                <div className="year-title year-result">
                                                                    Tuesday, 6, 2025
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="custom-date-three">
                                                                <h4 className="month-title text-right month-result-two">
                                                                    March
                                                                </h4>
                                                                <div className="year-title text-right year-result-two">
                                                                    Tuesday, 6, 2025
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <i className="ri-calendar-2-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-3">
                                                <div className="sign-btn text-right">
                                                    <a href="tour-list.html" className="btn-secondary-lg w-100 text-center">
                                                        <i   className="ri-search-line mr-10 font-20"></i> Search Plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="hotel-tap" role="tabpanel" aria-labelledby="book-hotel">
                                        <div className="d-flex gap-16 flex-wrap mb-26">
                                            <label className="one-way-label">
                                                <input className="one-way-input" type="radio" name="radio"/>
                                                <span className="circle"></span>
                                                <span className="radio-text">One Way</span>
                                            </label>
                                            <label className="round-trip-label">
                                                <input className="round-trip-input" type="radio" name="radio"/>
                                                <span className="circle"></span>
                                                <span className="radio-text">Round Trip</span>
                                            </label>
                                        </div>
                                        <div className="row g-4 justify-content-end">
                                            <div className="col-xl-5 col-lg-12">
                                                <div className="destination-flex">
                                                    <div className="select-dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="destination-dropdown-two"></div>
                                                        </div>
                                                        <div className="destination-result line-clamp-1">
                                                            Istanbul Airport...
                                                        </div>
                                                    </div>
                                                    <div className="select-dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="destination-dropdown-three"></div>
                                                        </div>
                                                        <div className="destination-result-three line-clamp-1">
                                                            Istanbul Airport...
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <i className="ri-arrow-left-right-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-12">
                                                <div className="destination-flex">
                                                    <div className="dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="custom-date-three">
                                                                <h4 className="month-title month-result">February</h4>
                                                                <div className="year-title year-result">
                                                                    Tuesday, 6, 2025
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="custom-date-three">
                                                                <h4 className="month-title text-right month-result-two">
                                                                    March
                                                                </h4>
                                                                <div className="year-title text-right year-result-two">
                                                                    Tuesday, 6, 2025
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <i className="ri-calendar-2-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-3">
                                                <div className="sign-btn">
                                                    <a href="tour-list.html" className="btn-secondary-lg w-100 text-center">
                                                        <i className="ri-search-line mr-10 font-20"></i> Search Plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="transport-tap" role="tabpanel" aria-labelledby="book-transport">
                                        <div className="d-flex gap-16 flex-wrap mb-26">
                                            <label className="one-way-label">
                                                <input className="one-way-input" type="radio" name="radio"/>
                                                <span className="circle"></span>
                                                <span className="radio-text">One Way</span>
                                            </label>
                                            <label className="round-trip-label">
                                                <input className="round-trip-input" type="radio" name="radio"/>
                                                <span className="circle"></span>
                                                <span className="radio-text">Round Trip</span>
                                            </label>
                                        </div>
                                        <div className="row g-4 justify-content-end">
                                            <div className="col-xl-5 col-lg-12">
                                                <div className="destination-flex">
                                                    <div className="select-dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="destination-dropdown-two"></div>
                                                        </div>
                                                        <div className="destination-result line-clamp-1">
                                                            Istanbul Airport...
                                                        </div>
                                                    </div>
                                                    <div className="select-dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="destination-dropdown-three"></div>
                                                        </div>
                                                        <div className="destination-result-three line-clamp-1">
                                                            Istanbul Airport...
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <i className="ri-arrow-left-right-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-12">
                                                <div className="destination-flex">
                                                    <div className="dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="custom-date-three">
                                                                <h4 className="month-title month-result">February</h4>
                                                                <div className="year-title year-result">
                                                                    Tuesday, 6, 2025
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="custom-date-three">
                                                                <h4 className="month-title text-right month-result-two">
                                                                    March
                                                                </h4>
                                                                <div className="year-title text-right year-result-two">
                                                                    Tuesday, 6, 2025
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <i className="ri-calendar-2-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-3">
                                                <div className="sign-btn">
                                                    <a href="tour-list.html" className="btn-secondary-lg w-100 text-center">
                                                        <i className="ri-search-line mr-10 font-20"></i> Search Plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="restaurant-tap" role="tabpanel" aria-labelledby="restaurant-transport">
                                        <div className="d-flex gap-16 flex-wrap mb-26">
                                            <label className="one-way-label">
                                                <input className="one-way-input" type="radio" name="radio"/>
                                                <span className="circle"></span>
                                                <span className="radio-text">One Way</span>
                                            </label>
                                            <label className="round-trip-label">
                                                <input className="round-trip-input" type="radio" name="radio"/>
                                                <span className="circle"></span>
                                                <span className="radio-text">Round Trip</span>
                                            </label>
                                        </div>
                                        <div className="row g-4 justify-content-end">
                                            <div className="col-xl-5 col-lg-12">
                                                <div className="destination-flex">
                                                    <div className="select-dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="destination-dropdown-two"></div>
                                                        </div>
                                                        <div className="destination-result line-clamp-1">
                                                            Istanbul Airport...
                                                        </div>
                                                    </div>
                                                    <div className="select-dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="destination-dropdown-three"></div>
                                                        </div>
                                                        <div className="destination-result-three line-clamp-1">
                                                            Istanbul Airport...
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <i className="ri-arrow-left-right-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-12">
                                                <div className="destination-flex">
                                                    <div className="dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="custom-date-three">
                                                                <h4 className="month-title month-result">February</h4>
                                                                <div className="year-title year-result">
                                                                    Tuesday, 6, 2025
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="custom-date-three">
                                                                <h4 className="month-title text-right month-result-two">
                                                                    March
                                                                </h4>
                                                                <div className="year-title text-right year-result-two">
                                                                    Tuesday, 6, 2025
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <i className="ri-calendar-2-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-3">
                                                <div className="sign-btn">
                                                    <a href="tour-list.html" className="btn-secondary-lg w-100 text-center">
                                                        <i className="ri-search-line mr-10 font-20"></i> Search Plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="visa-tap" role="tabpanel" aria-labelledby="visa-transport">
                                        <div className="d-flex gap-16 flex-wrap mb-26">
                                            <label className="one-way-label">
                                                <input className="one-way-input" type="radio" name="radio"/>
                                                <span className="circle"></span>
                                                <span className="radio-text">One Way</span>
                                            </label>
                                            <label className="round-trip-label">
                                                <input className="round-trip-input" type="radio" name="radio"/>
                                                <span className="circle"></span>
                                                <span className="radio-text">Round Trip</span>
                                            </label>
                                        </div>
                                        <div className="row g-4 justify-content-end">
                                            <div className="col-xl-5 col-lg-12">
                                                <div className="destination-flex">
                                                    <div className="select-dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="destination-dropdown-two"></div>
                                                        </div>
                                                        <div className="destination-result line-clamp-1">
                                                            Istanbul Airport...
                                                        </div>
                                                    </div>
                                                    <div className="select-dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="destination-dropdown-three"></div>
                                                        </div>
                                                        <div className="destination-result-three line-clamp-1">
                                                            Istanbul Airport...
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <i className="ri-arrow-left-right-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-12">
                                                <div className="destination-flex">
                                                    <div className="dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="custom-date-three">
                                                                <h4 className="month-title month-result">February</h4>
                                                                <div className="year-title year-result">
                                                                    Tuesday, 6, 2025
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-section">
                                                        <div className="d-flex gap-10 align-items-center">
                                                            <div className="custom-date-three">
                                                                <h4 className="month-title text-right month-result-two">
                                                                    March
                                                                </h4>
                                                                <div className="year-title text-right year-result-two">
                                                                    Tuesday, 6, 2025
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swap-icon">
                                                        <i className="ri-calendar-2-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-3">
                                                <div className="sign-btn">
                                                    <a href="tour-list.html" className="btn-secondary-lg w-100 text-center">
                                                        <i className="ri-search-line mr-10 font-20"></i> Search Plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- / End-of Search Contents --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End-of Plan--> */}

        {/* <!-- Packages S t a r t --> */}
        <section className="package-area section-padding2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title mx-464 mx-auto text-center">
                            <span className="highlights">Popular Packages</span>
                            <h4 className="title">
                                Most Favorite Tour Place in The World
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- Tab Buttons --> */}
                        <ul className="nav nav-pills package-pills" id="pills-tab" role="tablist">
                            <li className="nav-item package-item" role="presentation">
                                <button className="nav-link package-nav active" id="pills-london-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-london" role="tab" aria-controls="pills-london" aria-selected="true">
                                    London
                                </button>
                            </li>
                            <li className="nav-item package-item" role="presentation">
                                <button className="nav-link package-nav" id="pills-bangkok-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-bangkok" role="tab" aria-controls="pills-bangkok"
                                    aria-selected="false">
                                    Bangkok
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link package-nav" id="pills-hongkong-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-hongkong" role="tab" aria-controls="pills-hongkong"
                                    aria-selected="false">
                                    Hong Kong
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link package-nav" id="pills-manchester-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-manchester" role="tab" aria-controls="pills-manchester"
                                    aria-selected="false">
                                    Manchester
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link package-nav" id="pills-dubai-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-dubai" role="tab" aria-controls="pills-dubai" aria-selected="false">
                                    Dubai
                                </button>
                            </li>
                        </ul>
                        {/* <!-- Tab contents --> */}
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-london" role="tabpanel"
                                aria-labelledby="pills-london-tab">
                                <div className="row g-4">
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-4.png" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-3.png" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-2.png" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-10.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-bangkok" role="tabpanel" aria-labelledby="pills-bangkok-tab">
                                <div className="row g-4">
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-5.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-6.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-7.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-8.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-hongkong" role="tabpanel" aria-labelledby="pills-hongkong-tab">
                                <div className="row g-4">
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-9.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-10.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-11.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-12.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-manchester" role="tabpanel"
                                aria-labelledby="pills-manchester-tab">
                                <div className="row g-4">
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-13.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-14.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-15.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-16.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-dubai" role="tabpanel" aria-labelledby="pills-dubai-tab">
                                <div className="row g-4">
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-17.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-18.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-19.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="package-card h-calc">
                                            <div className="package-img imgEffect4">
                                                <a href="details-with-slider.html">
                                                    <img src="assets/images/package/package-20.jpg" alt="travello"/>
                                                </a>
                                                <div className="image-badge">
                                                    <p className="pera">Featured</p>
                                                </div>
                                            </div>
                                            <div className="package-content">
                                                <h4 className="area-name">
                                                    <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                                </h4>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <div className="name">Bangkok, Thailand</div>
                                                </div>
                                                <div className="packages-person">
                                                    <div className="count">
                                                        <i className="ri-time-line"></i>
                                                        <p className="pera">3 Days 2 Night</p>
                                                    </div>
                                                    <div className="count">
                                                        <i className="ri-user-line"></i>
                                                        <p className="pera">2 Person</p>
                                                    </div>
                                                </div>
                                                <div className="price-review">
                                                    <div className="d-flex gap-10">
                                                        <p className="light-pera">From</p>
                                                        <p className="pera">$95</p>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="ri-star-s-fill"></i>
                                                        <p className="pera">4.7 (20 Reviews)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-button d-inline-block">
                            <a href="tour-list.html">
                                <div className="btn-primary-icon-sm">
                                    <p className="pera">View All Tour</p>
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End of Packages --> */}

        {/* <!-- Special area S t a r t --> */}
        <section className="special-area bottom-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title mx-430 mx-auto text-center">
                            <span className="highlights fancy-font font-400">special offers</span>
                            <h4 className="title">
                                Winter Our Big Offers to Inspire You
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-md-6">
                        <a href="tour-list.html" className="offer-banner imgEffect4 wow fadeInLeft" data-wow-delay="0.0s">
                            <img src="assets/images/gallery/offercard-1.jpg" alt="travello"/>
                            <div className="offer-content">
                                <p className="highlights-text">Save up to</p>
                                <h4 className="title">50%</h4>
                                <p className="pera">Let’s Explore The World</p>
                                <div className="location">
                                    <i className="ri-map-pin-line"></i>
                                    <p className="name">Bangkok, Thailand</p>
                                </div>
                                <div className="btn-secondary-sm radius-30"> Booking Now </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <a href="tour-list.html" className="offer-banner imgEffect4 wow fadeInRight" data-wow-delay="0.0s">
                            <img src="assets/images/gallery/offercard-2.jpg" alt="travello"/>
                            <div className="offer-content-two">
                                <h4 className="title">Nearby Hotel</h4>
                                <p className="pera">
                                    Up to <span className="highlights-text">50%</span> Off
                                </p>
                                <div className="location">
                                    <i className="ri-map-pin-line"></i>
                                    <p className="name">Bangkok, Thailand</p>
                                </div>
                                <div className="btn-secondary-sm radius-30"> Booking Now </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End-of special--> */}

        {/* <!-- Trip area S t a r t --> */}
        <section className="special-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title mx-464 mx-auto text-center">
                            <span className="highlights fancy-font font-400">Enjoy Trip</span>
                            <h4 className="title">
                                Top Domestic & International Tour
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">

                        {/* <!-- Trip Buttons --> */}
                        <ul className="nav nav-pills trip-pills" id="pills-tab" role="tablist">
                            <li className="nav-item trip-item" role="presentation">
                                <button className="nav-link trip-nav active" id="pills-domestic-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-domestic" type="button" role="tab" aria-controls="pills-domestic"
                                    aria-selected="true">
                                    Domestic
                                </button>
                            </li>
                            <li className="nav-item trip-item" role="presentation">
                                <button className="nav-link trip-nav" id="pills-international-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-international" type="button" role="tab"
                                    aria-controls="pills-international" aria-selected="false">
                                    International
                                </button>
                            </li>
                        </ul>
                        {/* <!-- / End-of Trip Buttons --> */}

                        {/* <!-- Tab Contents --> */}
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-domestic" role="tabpanel"
                                aria-labelledby="pills-domestic-tab">
                                <div className="row g-4">
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">Sylhet</h4>
                                                <p className="from-pera line-clamp-1">Osman Internatin...</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">kolkata</h4>
                                                <p className="from-pera line-clamp-1">kolkata Airport</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">india</h4>
                                                <p className="from-pera line-clamp-1">Shah Amanat Inter...</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">india</h4>
                                                <p className="from-pera line-clamp-1">Shah Amanat Inter...</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">canada</h4>
                                                <p className="from-pera line-clamp-1">canada Airport</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">kolkata</h4>
                                                <p className="from-pera line-clamp-1">kolkata Airport</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-international" role="tabpanel"
                                aria-labelledby="pills-international-tab">
                                <div className="row g-4">
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">Australia</h4>
                                                <p className="from-pera line-clamp-1">
                                                    Australia Internatin...
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">Usa</h4>
                                                <p className="from-pera line-clamp-1">Usa Airport</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">Japan</h4>
                                                <p className="from-pera line-clamp-1">Narita Inter...</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">Hongkok</h4>
                                                <p className="from-pera line-clamp-1">Hongkok Inter...</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">Japan</h4>
                                                <p className="from-pera line-clamp-1">Narita Inter...</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <a href="details-with-slider.html" className="trip-card">
                                            <div className="from-flex">
                                                <h4 className="from-title">USA</h4>
                                                <p className="from-pera line-clamp-1">Istanbul Airport...</p>
                                            </div>
                                            <div className="trip-icon-flex">
                                                <div className="trip-icon"><i className="ri-flight-takeoff-fill"></i></div>
                                            </div>
                                            <div className="from-flex">
                                                <h4 className="from-title">Canada</h4>
                                                <p className="from-pera line-clamp-1">Canada Airport</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- / End-of Tab contents --> */}
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End-of trip--> */}

        {/* <!-- About Us area S t a r t --> */}
        <section className="about-area">
            <div className="container"> 
                <div className="row g-4">
                    <div className="col-xl-5 col-lg-6">
                        <div className="section-title max-w-108 mb-30 w-md-100">
                            <span className="highlights fancy-font font-400">About Us</span>
                            <h4 className="title">
                                Get The Best Travel Experience With Travello
                            </h4>
                            <p className="pera">
                                Travel is a transformative and enriching experience that
                                allows individuals to explore new destinations, cultures, and
                                landscapes. It is a fundamental human activity that has been
                                practiced for centuries and continues to be a source of joy,
                                learning, and personal growth.
                            </p>
                            <p className="pera">
                                Travel is a transformative and enriching experience that
                                allows individuals to explore new destinations, cultures.
                            </p>
                            <div className="section-button mt-27 d-inline-block">
                                <a href="about.html" className="btn-primary-icon-sm radius-20">
                                    <p className="pera mt-0">Learn More</p>
                                    <i className="ri-arrow-right-up-line"></i>
                                </a>
                            </div>
                            <div className="about-imp-link mt-40">
                                <div className="icon">
                                    <i className="ri-user-line"></i>
                                </div>
                                <div className="content">
                                    <p className="pera font-16">
                                        <span className="font-700">2,500</span> People Booked Tomorrow
                                        Land Event in the Last 24 hours
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="about-count-section about-count-before-bg">
                            <div className="banner">
                                <img src="assets/images/gallery/about-banner-three.png" alt="travello"/>
                            </div>
                            <div className="all-count-list">
                                <div className="details">
                                    <h4 className="count">150k</h4>
                                    <p className="pera">Happy Traveler</p>
                                </div>
                                <div className="divider"></div>
                                <div className="details">
                                    <h4 className="count">95.7%</h4>
                                    <p className="pera">Satisfaction Rate</p>
                                </div>
                                <div className="divider"></div>
                                <div className="details">
                                    <h4 className="count">5000+</h4>
                                    <p className="pera">Tour Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End-of About US--> */}

        {/* <!-- Feature S t a r t --> */}
        <section className="feature-area feature-area-bg section-padding2">
            <div className="container">
                <div className="row justify-content-center position-relative z-10">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title mx-464 mx-auto text-center">
                            <span className="highlights fancy-font font-400">Features Tour</span>
                            <h4 className="title">
                                Most Favorite Tour Place in The World
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row g-4 position-relative z-10">
                    <div className="swiper favSwiper-active">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="package-card">
                                    <div className="package-img imgEffect4">
                                        <a href="details-with-slider.html">
                                            <img src="assets/images/package/package-4.png" alt="travello"/>
                                        </a>
                                        <div className="image-badge">
                                            <p className="pera">Featured</p>
                                        </div>
                                        <div className="fav-badge">
                                            <i className="ri-heart-fill"></i>
                                        </div>
                                    </div>
                                    <div className="package-content">
                                        <div className="location">
                                            <i className="ri-map-pin-line"></i>
                                            <div className="name">Bangkok, Thailand</div>
                                        </div>
                                        <h4 className="area-name">
                                            <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                        </h4>
                                        <div className="packages-person mb-16">
                                            <div className="count">
                                                <i className="ri-time-line"></i>
                                                <p className="pera">3 Days 2 Night</p>
                                            </div>
                                            <div className="count">
                                                <i className="ri-user-line"></i>
                                                <p className="pera">2 Person</p>
                                            </div>
                                        </div>
                                        <div className="price-review mb-0">
                                            <div className="d-flex gap-10">
                                                <p className="light-pera">From</p>
                                                <p className="pera">$95</p>
                                            </div>
                                            <div className="rating">
                                                <i className="ri-star-s-fill"></i>
                                                <p className="pera">4.7 (20 Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="package-card">
                                    <div className="package-img imgEffect4">
                                        <a href="details-with-slider.html">
                                            <img src="assets/images/package/package-3.png" alt="travello"/>
                                        </a>
                                        <div className="image-badge">
                                            <p className="pera">Featured</p>
                                        </div>
                                        <div className="fav-badge">
                                            <i className="ri-heart-fill"></i>
                                        </div>
                                    </div>
                                    <div className="package-content">
                                        <div className="location">
                                            <i className="ri-map-pin-line"></i>
                                            <div className="name">Bangkok, Thailand</div>
                                        </div>
                                        <h4 className="area-name">
                                            <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                        </h4>
                                        <div className="packages-person mb-16">
                                            <div className="count">
                                                <i className="ri-time-line"></i>
                                                <p className="pera">3 Days 2 Night</p>
                                            </div>
                                            <div className="count">
                                                <i className="ri-user-line"></i>
                                                <p className="pera">2 Person</p>
                                            </div>
                                        </div>
                                        <div className="price-review mb-0">
                                            <div className="d-flex gap-10">
                                                <p className="light-pera">From</p>
                                                <p className="pera">$95</p>
                                            </div>
                                            <div className="rating">
                                                <i className="ri-star-s-fill"></i>
                                                <p className="pera">4.7 (20 Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="package-card">
                                    <div className="package-img imgEffect4">
                                        <a href="details-with-slider.html">
                                            <img src="assets/images/package/package-2.png" alt="travello"/>
                                        </a>
                                        <div className="image-badge">
                                            <p className="pera">Featured</p>
                                        </div>
                                        <div className="fav-badge">
                                            <i className="ri-heart-fill"></i>
                                        </div>
                                    </div>
                                    <div className="package-content">
                                        <div className="location">
                                            <i className="ri-map-pin-line"></i>
                                            <div className="name">Bangkok, Thailand</div>
                                        </div>
                                        <h4 className="area-name">
                                            <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                        </h4>
                                        <div className="packages-person mb-16">
                                            <div className="count">
                                                <i className="ri-time-line"></i>
                                                <p className="pera">3 Days 2 Night</p>
                                            </div>
                                            <div className="count">
                                                <i className="ri-user-line"></i>
                                                <p className="pera">2 Person</p>
                                            </div>
                                        </div>
                                        <div className="price-review mb-0">
                                            <div className="d-flex gap-10">
                                                <p className="light-pera">From</p>
                                                <p className="pera">$95</p>
                                            </div>
                                            <div className="rating">
                                                <i className="ri-star-s-fill"></i>
                                                <p className="pera">4.7 (20 Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="package-card">
                                    <div className="package-img imgEffect4">
                                        <a href="details-with-slider.html">
                                            <img src="assets/images/package/package-10.jpg" alt="travello"/>
                                        </a>
                                        <div className="image-badge">
                                            <p className="pera">Featured</p>
                                        </div>
                                        <div className="fav-badge">
                                            <i className="ri-heart-fill"></i>
                                        </div>
                                    </div>
                                    <div className="package-content">
                                        <div className="location">
                                            <i className="ri-map-pin-line"></i>
                                            <div className="name">Bangkok, Thailand</div>
                                        </div>
                                        <h4 className="area-name">
                                            <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                        </h4>
                                        <div className="packages-person mb-16">
                                            <div className="count">
                                                <i className="ri-time-line"></i>
                                                <p className="pera">3 Days 2 Night</p>
                                            </div>
                                            <div className="count">
                                                <i className="ri-user-line"></i>
                                                <p className="pera">2 Person</p>
                                            </div>
                                        </div>
                                        <div className="price-review mb-0">
                                            <div className="d-flex gap-10">
                                                <p className="light-pera">From</p>
                                                <p className="pera">$95</p>
                                            </div>
                                            <div className="rating">
                                                <i className="ri-star-s-fill"></i>
                                                <p className="pera">4.7 (20 Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="package-card">
                                    <div className="package-img imgEffect4">
                                        <a href="details-with-slider.html">
                                            <img src="assets/images/package/package-4.png" alt="travello"/>
                                        </a>
                                        <div className="image-badge">
                                            <p className="pera">Featured</p>
                                        </div>
                                        <div className="fav-badge">
                                            <i className="ri-heart-fill"></i>
                                        </div>
                                    </div>
                                    <div className="package-content">
                                        <div className="location">
                                            <i className="ri-map-pin-line"></i>
                                            <div className="name">Bangkok, Thailand</div>
                                        </div>
                                        <h4 className="area-name">
                                            <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                        </h4>
                                        <div className="packages-person mb-16">
                                            <div className="count">
                                                <i className="ri-time-line"></i>
                                                <p className="pera">3 Days 2 Night</p>
                                            </div>
                                            <div className="count">
                                                <i className="ri-user-line"></i>
                                                <p className="pera">2 Person</p>
                                            </div>
                                        </div>
                                        <div className="price-review mb-0">
                                            <div className="d-flex gap-10">
                                                <p className="light-pera">From</p>
                                                <p className="pera">$95</p>
                                            </div>
                                            <div className="rating">
                                                <i className="ri-star-s-fill"></i>
                                                <p className="pera">4.7 (20 Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="package-card">
                                    <div className="package-img imgEffect4">
                                        <a href="details-with-slider.html">
                                            <img src="assets/images/package/package-3.png" alt="travello"/>
                                        </a>
                                        <div className="image-badge">
                                            <p className="pera">Featured</p>
                                        </div>
                                        <div className="fav-badge">
                                            <i className="ri-heart-fill"></i>
                                        </div>
                                    </div>
                                    <div className="package-content">
                                        <div className="location">
                                            <i className="ri-map-pin-line"></i>
                                            <div className="name">Bangkok, Thailand</div>
                                        </div>
                                        <h4 className="area-name">
                                            <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                        </h4>
                                        <div className="packages-person mb-16">
                                            <div className="count">
                                                <i className="ri-time-line"></i>
                                                <p className="pera">3 Days 2 Night</p>
                                            </div>
                                            <div className="count">
                                                <i className="ri-user-line"></i>
                                                <p className="pera">2 Person</p>
                                            </div>
                                        </div>
                                        <div className="price-review mb-0">
                                            <div className="d-flex gap-10">
                                                <p className="light-pera">From</p>
                                                <p className="pera">$95</p>
                                            </div>
                                            <div className="rating">
                                                <i className="ri-star-s-fill"></i>
                                                <p className="pera">4.7 (20 Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="package-card">
                                    <div className="package-img imgEffect4">
                                        <a href="details-with-slider.html">
                                            <img src="assets/images/package/package-2.png" alt="travello"/>
                                        </a>
                                        <div className="image-badge">
                                            <p className="pera">Featured</p>
                                        </div>
                                        <div className="fav-badge">
                                            <i className="ri-heart-fill"></i>
                                        </div>
                                    </div>
                                    <div className="package-content">
                                        <div className="location">
                                            <i className="ri-map-pin-line"></i>
                                            <div className="name">Bangkok, Thailand</div>
                                        </div>
                                        <h4 className="area-name">
                                            <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                        </h4>
                                        <div className="packages-person mb-16">
                                            <div className="count">
                                                <i className="ri-time-line"></i>
                                                <p className="pera">3 Days 2 Night</p>
                                            </div>
                                            <div className="count">
                                                <i className="ri-user-line"></i>
                                                <p className="pera">2 Person</p>
                                            </div>
                                        </div>
                                        <div className="price-review mb-0">
                                            <div className="d-flex gap-10">
                                                <p className="light-pera">From</p>
                                                <p className="pera">$95</p>
                                            </div>
                                            <div className="rating">
                                                <i className="ri-star-s-fill"></i>
                                                <p className="pera">4.7 (20 Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="package-card">
                                    <div className="package-img imgEffect4">
                                        <a href="details-with-slider.html">
                                            <img src="assets/images/package/package-10.jpg" alt="travello"/>
                                        </a>
                                        <div className="image-badge">
                                            <p className="pera">Featured</p>
                                        </div>
                                        <div className="fav-badge">
                                            <i className="ri-heart-fill"></i>
                                        </div>
                                    </div>
                                    <div className="package-content">
                                        <div className="location">
                                            <i className="ri-map-pin-line"></i>
                                            <div className="name">Bangkok, Thailand</div>
                                        </div>
                                        <h4 className="area-name">
                                            <a href="details-with-slider.html">Dusitd2 Samyan Bangkok</a>
                                        </h4>
                                        <div className="packages-person mb-16">
                                            <div className="count">
                                                <i className="ri-time-line"></i>
                                                <p className="pera">3 Days 2 Night</p>
                                            </div>
                                            <div className="count">
                                                <i className="ri-user-line"></i>
                                                <p className="pera">2 Person</p>
                                            </div>
                                        </div>
                                        <div className="price-review mb-0">
                                            <div className="d-flex gap-10">
                                                <p className="light-pera">From</p>
                                                <p className="pera">$95</p>
                                            </div>
                                            <div className="rating">
                                                <i className="ri-star-s-fill"></i>
                                                <p className="pera">4.7 (20 Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                <div className="row position-relative z-10">
                    <div className="col-12 text-center">
                        <div className="section-button d-inline-block">
                            <a href="tour-list.html">
                                <div className="btn-primary-icon-sm border-radius-20">
                                    <p className="pera">View All Tour</p>
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End of Feature --> */}

        {/* <!-- Destination area S t a r t --> */}
        <section className="destination-area destination-bg-before">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title text-center mx-464 mx-auto position-relative">
                            <span className="highlights">Destination List</span>
                            <h4 className="title">
                                Explore The Beautiful Places Around World
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-7 col-md-7">
                        <a href="details-with-gallery.html" className="destination-banner">
                            <img src="assets/images/destination/destination-01.png" alt="travello"/>
                            <div className="destination-content">
                                <div className="ratting-badge">
                                    <i className="ri-star-s-fill"></i>
                                    <span>4.5</span>
                                </div>
                                <div className="destination-info">
                                    <div className="destination-name">
                                        <p className="pera">Spain</p>
                                        <div className="location">
                                            <i className="ri-map-pin-line"></i>
                                            <p className="name">Malaga View</p>
                                        </div>
                                    </div>
                                    <div className="button-section">
                                        <div className="arrow-btn">
                                            <i  className="ri-arrow-right-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-4 col-lg-7 col-md-7">
                        <a href="details-with-gallery.html" className="destination-banner">
                            <img src="assets/images/destination/destination-1.png" alt="travello"/>
                            <div className="destination-content">
                                <div className="ratting-badge">
                                    <i className="ri-star-s-fill"></i>
                                    <span>4.5</span>
                                </div>
                                <div className="destination-info">
                                    <div className="destination-name">
                                        <p className="pera">Spain</p>
                                        <div className="location">
                                            <i className="ri-map-pin-line"></i>
                                            <p className="name">Malaga View</p>
                                        </div>
                                    </div>
                                    <div className="button-section">
                                        <div className="arrow-btn">
                                            <i  className="ri-arrow-right-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-4 col-lg-7 col-md-7">
                        <a href="details-with-gallery.html" className="destination-banner">
                            <img src="assets/images/destination/destination-001.jpg" alt="travello"/>
                            <div className="destination-content">
                                <div className="ratting-badge">
                                    <i className="ri-star-s-fill"></i>
                                    <span>4.5</span>
                                </div>
                                <div className="destination-info">
                                    <div className="destination-name">
                                        <p className="pera">Spain</p>
                                        <div className="location">
                                            <i className="ri-map-pin-line"></i>
                                            <p className="name">Malaga View</p>
                                        </div>
                                    </div>
                                    <div className="button-section">
                                        <div className="arrow-btn">
                                            <i  className="ri-arrow-right-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="destination-gallery">
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <a href="details-with-gallery.html" className="destination-banner">
                                    <img src="assets/images/destination/destination-3.png" alt="travello"/>
                                    <div className="destination-content">
                                        <div className="ratting-badge">
                                            <i className="ri-star-s-fill"></i>
                                            <span>4.5</span>
                                        </div>
                                        <div className="destination-info">
                                            <div className="destination-name">
                                                <p className="pera">Switzerland</p>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <p className="name">Zürich View</p>
                                                </div>
                                            </div>
                                            <div className="button-section">
                                                <div className="arrow-btn">
                                                    <i  className="ri-arrow-right-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <a href="details-with-gallery.html" className="destination-banner">
                                    <img src="assets/images/destination/destination-4.png" alt="travello"/>
                                    <div className="destination-content">
                                        <div className="ratting-badge">
                                            <i className="ri-star-s-fill"></i>
                                            <span>4.5</span>
                                        </div>
                                        <div className="destination-info">
                                            <div className="destination-name">
                                                <p className="pera">Australia</p>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <p className="name">Melbourne View</p>
                                                </div>
                                            </div>
                                            <div className="button-section">
                                                <div className="arrow-btn">
                                                    <i  className="ri-arrow-right-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <a href="details-with-gallery.html" className="destination-banner">
                                        <img src="assets/images/destination/destination-5.png" alt="travello"/>
                                    <div className="destination-content">
                                        <div className="ratting-badge">
                                            <i className="ri-star-s-fill"></i>
                                            <span>4.5</span>
                                        </div>
                                        <div className="destination-info">
                                            <div className="destination-name">
                                                <p className="pera">Canada</p>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <p className="name">Toronto View</p>
                                                </div>
                                            </div>
                                            <div className="button-section">
                                                <div className="arrow-btn">
                                                    <i  className="ri-arrow-right-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <a href="details-with-gallery.html" className="destination-banner">
                                        <img src="assets/images/destination/destination-02.png" alt="travello"/>
                                    <div className="destination-content">
                                        <div className="ratting-badge">
                                            <i className="ri-star-s-fill"></i>
                                            <span>4.5</span>
                                        </div>
                                        <div className="destination-info">
                                            <div className="destination-name">
                                                <p className="pera">Canada</p>
                                                <div className="location">
                                                    <i className="ri-map-pin-line"></i>
                                                    <p className="name">Toronto View</p>
                                                </div>
                                            </div>
                                            <div className="button-section">
                                                <div className="arrow-btn">
                                                    <i  className="ri-arrow-right-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- shape --> */}
            <div className="shape">
                <img src="assets/images/icon/shape.png" alt="travello"/>
            </div>
        </section>
        {/* <!--/ End-of Destination --> */}
        
        {/* <!-- Explore S t a r t --> */}
        <section className="explore-area section-padding2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title text-center mx-430 mx-auto position-relative mb-60">
                            <span className="highlights">Explore The Word</span>
                            <h4 className="title">
                                Our Best Offer Package For You
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-xl-5 col-lg-5 col-md-6">
                        <div className="all-explore" id="v-pills-tab-three" role="tablist" aria-orientation="vertical">
                            <div className="explore-btn active" id="pills-explore-one-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-explore-one" role="tab" aria-controls="pills-explore-one"
                                aria-selected="true">
                                <div className="d-flex gap-16 align-items-center">
                                    <div className="explore-icon">
                                        <img src="assets/images/icon/explore-1.svg" alt="travello"/>
                                    </div>
                                    <h4 className="name">Fishing & Swimming</h4>
                                </div>
                            </div>
                            <div className="explore-btn" id="pills-explore-two-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-explore-two" role="tab" aria-controls="pills-explore-two"
                                aria-selected="true">
                                <div className="d-flex gap-16 align-items-center">
                                    <div className="explore-icon">
                                        <img src="assets/images/icon/explore-2.svg" alt="travello"/>
                                    </div>
                                    <h4 className="name">Music & Relaxing</h4>
                                </div>
                            </div>
                            <div className="explore-btn" id="pills-explore-three-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-explore-three" role="tab" aria-controls="pills-explore-three"
                                aria-selected="true">
                                <div className="d-flex gap-16 align-items-center">
                                    <div className="explore-icon">
                                        <img src="assets/images/icon/explore-3.svg" alt="travello"/>
                                    </div>
                                    <h4 className="name">Trailers & Sports</h4>
                                </div>
                            </div>
                            <div className="explore-btn" id="pills-explore-four-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-explore-four" role="tab" aria-controls="pills-explore-four"
                                aria-selected="true">
                                <div className="d-flex gap-16 align-items-center">
                                    <div className="explore-icon">
                                        <img src="assets/images/icon/explore-4.svg" alt="travello"/>
                                    </div>
                                    <h4 className="name">Mountain & Hill Hiking</h4>
                                </div>
                            </div>
                            <div className="explore-btn" id="pills-explore-five-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-explore-five" role="tab" aria-controls="pills-explore-five"
                                aria-selected="true">
                                <div className="d-flex gap-16 align-items-center">
                                    <div className="explore-icon">
                                        <img src="assets/images/icon/explore-5.svg" alt="travello"/>
                                    </div>
                                    <h4 className="name">Paragliding Tours</h4>
                                </div>
                            </div>
                            <div className="explore-btn" id="pills-explore-six-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-explore-six" role="tab" aria-controls="pills-explore-six"
                                aria-selected="true">
                                <div className="d-flex gap-16 align-items-center">
                                    <div className="explore-icon">
                                        <img src="assets/images/icon/explore-1.svg" alt="travello"/>
                                    </div>
                                    <h4 className="name">Music & Relaxing</h4>
                                </div>
                            </div>
                            <div className="explore-btn" id="pills-explore-seven-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-explore-seven" role="tab" aria-controls="pills-explore-seven"
                                aria-selected="true">
                                <div className="d-flex gap-16 align-items-center">
                                    <div className="explore-icon">
                                        <img src="assets/images/icon/explore-2.svg" alt="travello"/>
                                    </div>
                                    <h4 className="name">Mountain & Hill Hiking</h4>
                                </div>
                            </div>
                            <div className="explore-btn" id="pills-explore-eight-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-explore-eight" role="tab" aria-controls="pills-explore-eight"
                                aria-selected="true">
                                <div className="d-flex gap-16 align-items-center">
                                    <div className="explore-icon">
                                        <img src="assets/images/icon/explore-1.svg" alt="travello"/>
                                    </div>
                                    <h4 className="name">Fishing & Swimming</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6">
                        <div className="tab-content" id="v-pills-tabContent-three">
                            <div className="tab-pane fade show active" id="pills-explore-one" role="tabpanel"
                                aria-labelledby="pills-explore-one">
                                <div className="explore-conntent">
                                    <h4 className="title">Trailers & Sports</h4>
                                    <p className="pera">
                                        Lorem ipsum dolor sit amet consectetur. Nullam amet at sed
                                        dui tellus tempor pretium tincidunt. Id amet sit viverra
                                        dolor consectetur elementum. Non at volutpat aliquam ac ac
                                        at amet. Ut semper semper sit aliquam penatibus dolor
                                        tortor nisl.
                                    </p>
                                    <ul className="expect-list">
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci. Non sit
                                            lorem dolor placerat faucibus.
                                        </li>
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci.
                                        </li>
                                    </ul>
                                </div>
                                <div className="explore-banner">
                                    <img src="assets/images/gallery/about.png" alt="travello"/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-explore-two" role="tabpanel"
                                aria-labelledby="pills-explore-two">
                                <div className="explore-conntent">
                                    <h4 className="title">Trailers & Sports</h4>
                                    <p className="pera">
                                        Lorem ipsum dolor sit amet consectetur. Nullam amet at sed
                                        dui tellus tempor pretium tincidunt. Id amet sit viverra
                                        dolor consectetur elementum. Non at volutpat aliquam ac ac
                                        at amet. Ut semper semper sit aliquam penatibus dolor
                                        tortor nisl.
                                    </p>
                                    <ul className="expect-list">
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci. Non sit
                                            lorem dolor placerat faucibus.
                                        </li>
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci.
                                        </li>
                                    </ul>
                                </div>
                                <div className="explore-banner">
                                    <img src="assets/images/gallery/music.png" alt="travello"/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-explore-three" role="tabpanel"
                                aria-labelledby="pills-explore-three">
                                <div className="explore-conntent">
                                    <h4 className="title">Trailers & Sports</h4>
                                    <p className="pera">
                                        Lorem ipsum dolor sit amet consectetur. Nullam amet at sed
                                        dui tellus tempor pretium tincidunt. Id amet sit viverra
                                        dolor consectetur elementum. Non at volutpat aliquam ac ac
                                        at amet. Ut semper semper sit aliquam penatibus dolor
                                        tortor nisl.
                                    </p>
                                    <ul className="expect-list">
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci. Non sit
                                            lorem dolor placerat faucibus.
                                        </li>
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci.
                                        </li>
                                    </ul>
                                </div>
                                <div className="explore-banner">
                                    <img src="assets/images/gallery/sports.png" alt="travello"/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-explore-four" role="tabpanel"
                                aria-labelledby="pills-explore-four">
                                <div className="explore-conntent">
                                    <h4 className="title">Trailers & Sports</h4>
                                    <p className="pera">
                                        Lorem ipsum dolor sit amet consectetur. Nullam amet at sed
                                        dui tellus tempor pretium tincidunt. Id amet sit viverra
                                        dolor consectetur elementum. Non at volutpat aliquam ac ac
                                        at amet. Ut semper semper sit aliquam penatibus dolor
                                        tortor nisl.
                                    </p>
                                    <ul className="expect-list">
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci. Non sit
                                            lorem dolor placerat faucibus.
                                        </li>
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci.
                                        </li>
                                    </ul>
                                </div>
                                <div className="explore-banner">
                                    <img src="assets/images/gallery/hiking.png" alt="travello"/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-explore-five" role="tabpanel"
                                aria-labelledby="pills-explore-five">
                                <div className="explore-conntent">
                                    <h4 className="title">Trailers & Sports</h4>
                                    <p className="pera">
                                        Lorem ipsum dolor sit amet consectetur. Nullam amet at sed
                                        dui tellus tempor pretium tincidunt. Id amet sit viverra
                                        dolor consectetur elementum. Non at volutpat aliquam ac ac
                                        at amet. Ut semper semper sit aliquam penatibus dolor
                                        tortor nisl.
                                    </p>
                                    <ul className="expect-list">
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci. Non sit
                                            lorem dolor placerat faucibus.
                                        </li>
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci.
                                        </li>
                                    </ul>
                                </div>
                                <div className="explore-banner">
                                    <img src="assets/images/gallery/paragliding.png" alt="travello"/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-explore-six" role="tabpanel"
                                aria-labelledby="pills-explore-six">
                                <div className="explore-conntent">
                                    <h4 className="title">Trailers & Sports</h4>
                                    <p className="pera">
                                        Lorem ipsum dolor sit amet consectetur. Nullam amet at sed
                                        dui tellus tempor pretium tincidunt. Id amet sit viverra
                                        dolor consectetur elementum. Non at volutpat aliquam ac ac
                                        at amet. Ut semper semper sit aliquam penatibus dolor
                                        tortor nisl.
                                    </p>
                                    <ul className="expect-list">
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci. Non sit
                                            lorem dolor placerat faucibus.
                                        </li>
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci.
                                        </li>
                                    </ul>
                                </div>
                                <div className="explore-banner">
                                    <img src="assets/images/gallery/music.png" alt="travello"/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-explore-seven" role="tabpanel"
                                aria-labelledby="pills-explore-seven">
                                <div className="explore-conntent">
                                    <h4 className="title">Trailers & Sports</h4>
                                    <p className="pera">
                                        Lorem ipsum dolor sit amet consectetur. Nullam amet at sed
                                        dui tellus tempor pretium tincidunt. Id amet sit viverra
                                        dolor consectetur elementum. Non at volutpat aliquam ac ac
                                        at amet. Ut semper semper sit aliquam penatibus dolor
                                        tortor nisl.
                                    </p>
                                    <ul className="expect-list">
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci. Non sit
                                            lorem dolor placerat faucibus.
                                        </li>
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci.
                                        </li>
                                    </ul>
                                </div>
                                <div className="explore-banner">
                                    <img src="assets/images/gallery/hiking.png" alt="travello"/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-explore-eight" role="tabpanel"
                                aria-labelledby="pills-explore-eight">
                                <div className="explore-conntent">
                                    <h4 className="title">Trailers & Sports</h4>
                                    <p className="pera">
                                        Lorem ipsum dolor sit amet consectetur. Nullam amet at sed
                                        dui tellus tempor pretium tincidunt. Id amet sit viverra
                                        dolor consectetur elementum. Non at volutpat aliquam ac ac
                                        at amet. Ut semper semper sit aliquam penatibus dolor
                                        tortor nisl.
                                    </p>
                                    <ul className="expect-list">
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci. Non sit
                                            lorem dolor placerat faucibus.
                                        </li>
                                        <li className="list">
                                            Lorem ipsum dolor sit amet consectetur. Platea urna
                                            hendrerit dui eget velit sollicitudin orci.
                                        </li>
                                    </ul>
                                </div>
                                <div className="explore-banner">
                                    <img src="assets/images/gallery/about.png" alt="travello"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End of Explore --> */}

        {/* <!-- Testimonial S t a r t --> */}
        <section className="testimonial-area-three position-relative section-bg-before-two top-padding">
            <div className="container">
                <div className="row justify-content-center position-relative">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title mx-430 mx-auto text-center">
                            <span className="highlights fancy-font font-400">Testimonial</span>
                            <h4 className="title">
                                What People Have Said About Our Service
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row g-4 align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="swiper testimonialThree-active">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide testimonial-card">
                                    <div className="testimonial-header">
                                        <div className="user-img">
                                            <img src="assets/images/testimonial/testimonial-1.jpeg" alt="travello"/>
                                        </div>
                                        <div className="user-info">
                                            <p className="name">David Malan</p>
                                            <p className="designation">Traveler</p>
                                        </div>
                                    </div>
                                    <div className="rattings">
                                        <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i
                                            className="ri-star-fill"></i><i className="ri-star-fill"></i><i
                                            className="ri-star-fill"></i>
                                    </div>
                                    <div className="testimonial-body">
                                        <p className="pera line-clamp-3">
                                            Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                                            adipiscing. Donec tincidunt dui vel adipiscing sit
                                            turpis neque at cursus. Dignissim scelerisque mattis
                                            ultricies vitae.
                                        </p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <div className="logo">
                                            <img src="assets/images/logo/logo.png" alt="travello" className="changeLogo"/>
                                        </div>
                                        <p className="date">Jan 20, 2025</p>
                                    </div>
                                </div>
                                <div className="swiper-slide testimonial-card">
                                    <div className="testimonial-header">
                                        <div className="user-img">
                                            <img src="assets/images/testimonial/testimonial-1.jpeg" alt="travello"/>
                                        </div>
                                        <div className="user-info">
                                            <p className="name">David Malan</p>
                                            <p className="designation">Traveler</p>
                                        </div>
                                    </div>
                                    <div className="rattings">
                                        <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i
                                            className="ri-star-fill"></i><i className="ri-star-fill"></i><i
                                            className="ri-star-fill"></i>
                                    </div>
                                    <div className="testimonial-body">
                                        <p className="pera line-clamp-3">
                                            Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                                            adipiscing. Donec tincidunt dui vel adipiscing sit
                                            turpis neque at cursus. Dignissim scelerisque mattis
                                            ultricies vitae.
                                        </p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <div className="logo">
                                            <img src="assets/images/logo/logo.png" alt="travello" className="changeLogo"/>
                                        </div>
                                        <p className="date">Jan 20, 2025</p>
                                    </div>
                                </div>
                                <div className="swiper-slide testimonial-card">
                                    <div className="testimonial-header">
                                        <div className="user-img">
                                            <img src="assets/images/testimonial/testimonial-1.jpeg" alt="travello"/>
                                        </div>
                                        <div className="user-info">
                                            <p className="name">David Malan</p>
                                            <p className="designation">Traveler</p>
                                        </div>
                                    </div>
                                    <div className="rattings">
                                        <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i
                                            className="ri-star-fill"></i><i className="ri-star-fill"></i><i
                                            className="ri-star-fill"></i>
                                    </div>
                                    <div className="testimonial-body">
                                        <p className="pera line-clamp-3">
                                            Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                                            adipiscing. Donec tincidunt dui vel adipiscing sit
                                            turpis neque at cursus. Dignissim scelerisque mattis
                                            ultricies vitae.
                                        </p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <div className="logo">
                                            <img src="assets/images/logo/logo.png" alt="travello" className="changeLogo"/>
                                        </div>
                                        <p className="date">Jan 20, 2025</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="hero-banner imgEffect2 o-hidden radius-20">
                            <img src="assets/images/hero/testimonial-three-banner.png" alt="travello"/>
                            {/* <!-- shape 01 --> */}
                            <div className="shape">
                                <img src="assets/images/icon/feature-shape.png" alt="travello"/>
                            </div>
                            <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" data-fancybox="video-gallery" className="wow bounceIn" data-wow-delay=".2s">
                                <div className="video-player">
                                    <i className="ri-play-fill"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* <!-- / End Slider --> */}
                </div>
            </div>
            <div className="shape-testimonial">
                <img src="assets/images/icon/graphic.png" alt="travello"/>
            </div>
        </section>
        {/* <!--/ End of Testimonial --> */}

        {/* <!-- Brand S t a r t --> */}
        <div className="brand-area">
            <div className="container">
                <div className="swiper brandSwiper-active">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1.jpeg" alt="travello"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-2.jpg" alt="travello"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-3.jpg" alt="travello"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-4.png" alt="travello"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-5.png" alt="travello"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1.jpeg" alt="travello"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-2.jpg" alt="travello"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--/ End of Brand --> */}

        {/* <!-- News S t a r t --> */}
        <section className="news-area section-padding2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title text-center mx-605 mx-auto position-relative mb-60">
                            <span className="highlights">News & Article</span>
                            <h4 className="title">
                                Latest News & Articles From The Blog Posts
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-4 col-sm-6">
                        <article className="news-card-two">
                            <figure className="news-banner-two imgEffect">
                                <a href="news-details.html"><img src="assets/images/news/news-4.png"
                                        alt="travello"/></a>
                            </figure>
                            <div className="news-content">
                                <div className="heading">
                                    <span className="heading-pera">Tour Guide</span>
                                </div>
                                <h4 className="title">
                                    <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                                        Only
                                        One Page.</a>
                                </h4>
                                <div className="news-info">
                                    <div className="d-flex gap-10 align-items-center">
                                        <div className="all-user">
                                            <div className="happy-user">
                                                <img src="assets/images/brand/brand-1.jpeg" alt="travello"/>
                                            </div>
                                            <div className="happy-user">
                                                <img src="assets/images/hero/user-2.png" alt="travello"/>
                                            </div>
                                            <div className="happy-user">
                                                <img src="assets/images/hero/user-3.png" alt="travello"/>
                                            </div>
                                            <div className="happy-user">
                                                <img src="assets/images/hero/user-4.jpeg" alt="travello"/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="time">10 min read</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-sm-6">
                        <article className="news-card-two">
                            <figure className="news-banner-two imgEffect">
                                <a href="news-details.html"><img src="assets/images/news/news-5.png"
                                        alt="travello"/></a>
                            </figure>
                            <div className="news-content">
                                <div className="heading">
                                    <span className="heading-pera">Tour Guide</span>
                                </div>
                                <h4 className="title">
                                    <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                                        Only
                                        One Page.</a>
                                </h4>
                                <div className="news-info">
                                    <div className="d-flex gap-10 align-items-center">
                                        <div className="all-user">
                                            <div className="happy-user">
                                                <img src="assets/images/brand/brand-1.jpeg" alt="travello"/>
                                            </div>
                                            <div className="happy-user">
                                                <img src="assets/images/hero/user-2.png" alt="travello"/>
                                            </div>
                                            <div className="happy-user">
                                                <img src="assets/images/hero/user-3.png" alt="travello"/>
                                            </div>
                                            <div className="happy-user">
                                                <img src="assets/images/hero/user-4.jpeg" alt="travello"/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="time">10 min read</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-sm-6">
                        <article className="news-card-two">
                            <figure className="news-banner-two imgEffect">
                                <a href="news-details.html"><img src="assets/images/news/news-6.png"
                                        alt="travello"/></a>
                            </figure>
                            <div className="news-content">
                                <div className="heading">
                                    <span className="heading-pera">Tour Guide</span>
                                </div>
                                <h4 className="title">
                                    <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                                        Only
                                        One Page.</a>
                                </h4>
                                <div className="news-info">
                                    <div className="d-flex gap-10 align-items-center">
                                        <div className="all-user">
                                            <div className="happy-user">
                                                <img src="assets/images/hero/user-1.jpeg" alt="travello"/>
                                            </div>
                                            <div className="happy-user">
                                                <img src="assets/images/hero/user-2.png" alt="travello"/>
                                            </div>
                                            <div className="happy-user">
                                                <img src="assets/images/hero/user-3.png" alt="travello"/>
                                            </div>
                                            <div className="happy-user">
                                                <img src="assets/images/hero/user-4.jpeg" alt="travello"/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="time">10 min read</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <div className="section-button d-inline-block">
                        <a href="news.html">
                            <div className="btn-primary-icon-sm">
                                <p className="pera">View All News</p>
                                <i className="ri-arrow-right-up-line"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End of News --> */}

        {/* <!-- Pricing S t a r t --> */}
        <section className="pricing-area bottom-padding section-bg-before-two">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title text-center mx-605 mx-auto position-relative">
                            <span className="highlights-primary">Package Pricing Plan</span>
                            <h4 className=" title">
                                Simply Choose The Pricing Plan That Fits You Best
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="position-relative">
                    <div className="row g-4">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="price-card h-calc wow fadeInUp" data-wow-delay="0.0s">
                                <div className="price-header">
                                    <div className="d-flex gap-7 mb-2">
                                        <h4 className="title">Basic</h4>
                                        <div className="price-badge d-none">popular</div>
                                    </div>
                                    <p className="pera">Best for personal and basic needs</p>
                                </div>
                                <div className="price-tag-section">
                                    <div className="price-tag">
                                        <h4 className="title">$10</h4>
                                        <p className="pera">One-time payment</p>
                                    </div>
                                </div>
                                <ul className="feature-points">
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">20+ Partners</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Mass Messaging</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Lorem ipsum dolor sit amet</p>
                                    </li>
                                    <li className="feature-point disable">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Lorem ipsum dolor</p>
                                    </li>
                                    <li className="feature-point disable">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Online booking engine</p>
                                    </li>
                                    <li className="feature-point disable">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Business Card Scanner</p>
                                    </li>
                                </ul>
                                <div className="button-section">
                                    <a href="payment.html">
                                        <div className="btn-primary-icon-outline">
                                            <span className="pera">Try Now</span>
                                            <i className="ri-arrow-right-up-line"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className="imp-note">
                                    <p className="pera">Per month +2% per online Booking</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="price-card h-calc wow fadeInUp" data-wow-delay="0.1s">
                                <div className="price-header">
                                    <div className="d-flex gap-7 mb-2">
                                        <h4 className="title">Pro</h4>
                                        <div className="price-badge">popular</div>
                                    </div>
                                    <p className="pera">Best for personal and basic needs</p>
                                </div>
                                <div className="price-tag-section">
                                    <div className="price-tag">
                                        <h4 className="title">$77</h4>
                                        <p className="pera">One-time payment</p>
                                    </div>
                                </div>
                                <ul className="feature-points">
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">20+ Partners</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Mass Messaging</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Lorem ipsum dolor sit amet</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Lorem ipsum dolor</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Online booking engine</p>
                                    </li>
                                    <li className="feature-point disable">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Business Card Scanner</p>
                                    </li>
                                </ul>
                                <div className="button-section">
                                    <a href="payment.html">
                                        <div className="btn-primary-icon-outline">
                                            <span className="pera">Try Now</span>
                                            <i className="ri-arrow-right-up-line"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className="imp-note">
                                    <p className="pera">Per month +1.9% per online Booking</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="price-card h-calc wow fadeInUp" data-wow-delay="0.2s">
                                <div className="price-header">
                                    <div className="d-flex gap-7 mb-2">
                                        <h4 className="title">Custom</h4>
                                        <div className="price-badge d-none">popular</div>
                                    </div>
                                    <p className="pera">Best for personal and basic needs</p>
                                </div>
                                <ul className="feature-points">
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Mass Messaging</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Lorem ipsum dolor sit amet</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Unlimited Everything</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Lorem ipsum dolor</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Lorem ipsum dolor</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Lorem ipsum dolor</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Online booking engine</p>
                                    </li>
                                    <li className="feature-point">
                                        <div className="tick-icon">
                                            <i className="ri-check-line"></i>
                                        </div>
                                        <p className="pera">Business Card Scanner</p>
                                    </li>
                                </ul>
                                <div className="button-section">
                                    <a href="payment.html">
                                        <div className="btn-primary-icon-outline">
                                            <span className="pera">Contact</span>
                                            <i className="ri-arrow-right-up-line"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className="imp-note">
                                    <p className="pera">Please contact anytime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End of Pricing --> */}
    </main>
    </> );
}

export default HomeContentComponent;