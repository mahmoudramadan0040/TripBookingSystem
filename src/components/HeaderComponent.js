function HeaderComponent() {
    return ( <>
            <header className="header-area-three">
        <div className="main-header">
            {/* <!-- Header Top --> */}
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-menu-wrapper d-flex align-items-center justify-content-between">
                                <div className="top-header-right">
                                    <div className="contact-section">
                                        <div className="circle-primary-sm">
                                            <i className="ri-phone-line"></i>
                                        </div>
                                        <div className="info">
                                            <p className="pera">Call Anytime</p>
                                            <h4 className="title">
                                                <a href="javascript:void(0)">00 (888) +123456</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Top Left Side --> */}
                                {/* <!-- Logo--> */}
                                <div className="logo">
                                    <a href="index.html"><img src="assets/images/logo/logo.png" alt="logo" className="changeLogo"/></a>
                                </div>
                                <div className="header-right-three pl-15 d-none d-lg-flex">
                                    <div className="lang">
                                        <i className="ri-global-line"></i>
                                        <p className="pera">English</p>
                                    </div>
                                    <div className="divider gradient-divider"></div>
                                    <div className="d-flex gap-20 align-items-center">
                                        <a href="tour-cart-page.html" className="cart signin">
                                            <i className="ri-shopping-cart-line"></i>
                                        </a>
                                        <div className="sign-btn">
                                            <a href="register.html" className="btn-secondary-sm radius-30">Sign Up</a>
                                        </div>
                                        {/* <!-- Theme Mode --> */}
                                        <button className="ToggleThemeButton change-theme-mode m-0 p-0 border-0">
                                            <i className="ri-sun-line"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- Mobile Device Search & Theme Mode --> */}
                                <div className="search-header-position d-block d-lg-none">
                                    <div className="d-flex gap-15">
                                        <div className="search-bar">
                                            <a href="javascript:void(0)" className="rounded-btn">
                                                <i  className="ri-search-line"></i>
                                            </a>
                                        </div>
                                        {/* <!-- Theme Mode --> */}
                                        <button className="ToggleThemeButton change-theme-mode m-0 p-0 border-0">
                                            <i className="ri-sun-line"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- / Mobile Device Search & Theme Mode--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header Bottom --> */}
            <div className="header-bottom header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="menu-wrapper">
                                {/* <!-- Main-menu for desktop --> */}
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <ul className="listing" id="navigation">
                                                <li className="single-list">
                                                    <a href=""
                                                        className="single link-active">Home <i
                                                            className="ri-arrow-down-s-line"></i></a>
                                                    <ul className="submenu">
                                                        <li className="single-list">
                                                            <a href="index.html" className="single">Home 01</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="index-two.html" className="single">Home 02</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="index-three.html" className="single">Home 03</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="single-list">
                                                    <a href="" className="single">
                                                        Tours <i className="ri-arrow-down-s-line"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li className="single-list">
                                                            <a href="tour-list.html" className="single">Tour Category Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="top-filter-tour-list.html" className="single">Tour Top Filter Category</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="destination.html" className="single">Tour destination</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="details-with-gallery.html" className="single">Details With Gallery</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="details-with-slider.html" className="single">Details With slider</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="tour-cart-page.html" className="single">Cart Tour Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="tour-booking-payment.html" className="single">Payment Tour Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="tour-booking-complite.html" className="single">Finish Tour Booking</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="single-list">
                                                    <a href="javascript:void(0)" className="single">
                                                        Hotels <i className="ri-arrow-down-s-line"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li className="single-list">
                                                            <a href="hotel-list.html" className="single">hotel Category Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="top-filter-hotel-list.html" className="single">hotel Top Filter Category</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="hotel-details-with-slider.html" className="single">Details With slider</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="hotel-cart-page.html" className="single">Cart hotel Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="hotel-booking-payment.html" className="single">Payment hotel Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="hotel-booking-complite.html" className="single">Finish hotel Booking</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="invoice.html" className="single">View Invoice</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="single-list">
                                                    <a href="javascript:void(0)" className="single">
                                                        Transports <i className="ri-arrow-down-s-line"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li className="single-list">
                                                            <a href="transports-list.html" className="single">transports Category Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="top-filter-transports-list.html" className="single">Top Filter Category</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="transports-details-with-slider.html" className="single">Details With slider</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="transports-cart-page.html" className="single">Cart transports Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="transports-booking-payment.html" className="single">Payment transports Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="transports-booking-complite.html" className="single">Finish transports Booking</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="invoice.html" className="single">View Invoice</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="single-list">
                                                    <a href="javascript:void(0)" className="single">
                                                        Restaurants <i className="ri-arrow-down-s-line"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li className="single-list">
                                                            <a href="restaurant-list.html" className="single">restaurant Category Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="top-filter-restaurant-list.html" className="single">Top Filter Category</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="restaurant-details-with-slider.html" className="single">Details With slider</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="restaurant-cart-page.html" className="single">Cart restaurant Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="restaurant-booking-payment.html" className="single">Payment restaurant Page</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="restaurant-booking-complite.html" className="single">Finish restaurant Booking</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="invoice.html" className="single">View Invoice</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="single-list">
                                                    <a href="javascript:void(0)" className="single">
                                                        Pages <i className="ri-arrow-down-s-line"></i>
                                                    </a>
                                                    <ul className="submenu">
                                                        <li className="single-list">
                                                            <a href="#" className="single"> Dashboard<i className="ri-arrow-right-s-line"></i></a>
                                                            <ul className="submenu">
                                                                <li className="single-list">
                                                                    <a href="dashboard.html" className="single">Dashboard</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="all-tours-booking.html" className="single">Tour Booking</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="all-hotels-booking.html" className="single">Hotel Booking</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="payout-settings.html" className="single">Payout Setting</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="support.html" className="single">Support Ticket</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="setting.html" className="single">Profile Setting</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="javascript:void(0)" className="single">
                                                                Error Page<i className="ri-arrow-right-s-line"></i></a>
                                                            <ul className="submenu">
                                                                <li className="single-list">
                                                                    <a href="error/400.html" className="single">400 page</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="error/404.html" className="single">404 page</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="error/408.html" className="single">408 page</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="error/500.html" className="single">500 page</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="error/503.html" className="single">503 page</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="javascript:void(0)" className="single">Login<i
                                                                    className="ri-arrow-right-s-line"></i></a>
                                                            <ul className="submenu">
                                                                <li className="single-list">
                                                                    <a href="login.html" className="single">Login</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="register.html"
                                                                        className="single">Registration</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="forgot-pass.html" className="single">Forgot
                                                                        Password</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="verification.html"
                                                                        className="single">Verification</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="new-password.html" className="single">New
                                                                        Password</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="about.html" className="single">About</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="tourist-guid.html" className="single">Tourist Guid</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="tourist-guid-details.html" className="single">Tourist Guid Details</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="news.html" className="single">News</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="contact.html" className="single">Contact</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="news-details.html" className="single">News
                                                                Details</a>
                                                        </li>
                                                        <li className="single-list">
                                                            <a href="#" className="single"> Others<i className="ri-arrow-right-s-line"></i></a>
                                                            <ul className="submenu">
                                                                <li className="single-list">
                                                                    <a href="faq.html" className="single">FAQs</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="privacy-policy.html" className="single">privacy policy</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="terms-condition.html" className="single">terms-condition</a>
                                                                </li>
                                                                <li className="single-list">
                                                                    <a href="tour-cart-page.html" className="single">cart</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="d-block d-lg-none">
                                                    <div className="header-right-three pl-15 mt-10">
                                                        <div className="sign-btn">
                                                            <a href="login.html" className="btn-secondary-sm m-0">Sign In</a>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-12">
                                                            <div className="lang">
                                                                <i className="ri-global-line"></i>
                                                                <p className="pera">English</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/* <!-- search box --> */}
                                            <div className="search-box search-bar d-none d-lg-block">
                                                <div className="header-search">
                                                    <span className="pera">Destination, attraction</span>
                                                    <div className="search-icon">
                                                        <i className="ri-search-line"></i>
                                                    </div>
                                                    <kbd className="light-text">
                                                        <abbr title="Ctrl">Ctrl +</abbr> k
                                                    </kbd>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            {/* <!-- Mobile Menu --> */}
                            <div className="div">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Search box --> */}
        <div className="search-container">
            <div className="top-section">
                <div className="search-icon">
                    <i className="ri-search-line"></i>
                </div>
                <div className="modal-search-box">
                    <input type="text" id="searchField" className="search-field"
                        placeholder="Destination, Agency, Country"/>
                    <button id="closeSearch" className="close-search-btn">
                        <kbd className="light-text"> ESC </kbd>
                    </button>
                </div>
            </div>
            <div className="body-section">
                <div className="row">
                    <div className="col-md-8">
                        <ul className="listing">
                            <li>
                                <h4 className="search-label">Recent</h4>
                            </li>
                            <li className="single-list">
                                <a href="details-with-slider.html">
                                    <div className="search-flex">
                                        <div className="content-img">
                                            <img src="assets/images/gallery/search-img-1.jpeg" alt="travello"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title line-clamp-1">
                                                Dubai by Night City Tour with Fountain show
                                            </h4>
                                            <p className="pera line-clamp-2">
                                                Wonderful evening escapade starting at Madinat
                                                Jumeirah to the musical fountains to see another.
                                                Wonderful evening escapade starting at Madinat
                                                Jumeirah to the musical fountains to see another
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="single-list">
                                <a href="details-with-slider.html">
                                    <div className="search-flex">
                                        <div className="content-img">
                                            <img src="assets/images/gallery/search-img-2.jpeg" alt="travello"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title line-clamp-1">
                                                Dubai: Premium Red Dunes, Camels, Stargazing & 5*
                                                BBQ at Al Khayma Camp™️
                                            </h4>
                                            <p className="pera line-clamp-2">
                                                Give a great end to your day in Dubai with our
                                                premium evening Red Dune Desert Safari. Give a great
                                                end to your day in Dubai with our premium evening
                                                Red Dune Desert Safari.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="single-list">
                                <a href="details-with-slider.html">
                                    <div className="search-flex">
                                        <div className="content-img">
                                            <img src="assets/images/gallery/search-img-3.jpeg" alt="travello"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title line-clamp-1">
                                                Admission to Global Village in Dubai
                                            </h4>
                                            <p className="pera line-clamp-2">
                                                Admission to Dubai’s biggest, multicultural festival
                                                park with replicas of iconic landmarks. Admission to
                                                Dubai’s biggest, multicultural festival park with
                                                replicas of iconic landmarks
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <h4 className="search-label">Recent</h4>
                            </li>
                            <li className="single-list">
                                <a href="details-with-slider.html">
                                    <div className="search-flex">
                                        <div className="content-img">
                                            <img src="assets/images/gallery/search-img-1.jpeg" alt="travello"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title line-clamp-1">
                                                Dubai by Night City Tour with Fountain show
                                            </h4>
                                            <p className="pera line-clamp-2">
                                                Wonderful evening escapade starting at Madinat
                                                Jumeirah to the musical fountains to see another.
                                                Wonderful evening escapade starting at Madinat
                                                Jumeirah to the musical fountains to see another
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="single-list">
                                <a href="details-with-slider.html">
                                    <div className="search-flex">
                                        <div className="content-img">
                                            <img src="assets/images/gallery/search-img-2.jpeg" alt="travello"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title line-clamp-1">
                                                Dubai: Premium Red Dunes, Camels, Stargazing & 5*
                                                BBQ at Al Khayma Camp™️
                                            </h4>
                                            <p className="pera line-clamp-2">
                                                Give a great end to your day in Dubai with our
                                                premium evening Red Dune Desert Safari. Give a great
                                                end to your day in Dubai with our premium evening
                                                Red Dune Desert Safari.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="single-list">
                                <a href="details-with-slider.html">
                                    <div className="search-flex">
                                        <div className="content-img">
                                            <img src="assets/images/gallery/search-img-3.jpeg" alt="travello"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title line-clamp-1">
                                                Admission to Global Village in Dubai
                                            </h4>
                                            <p className="pera line-clamp-2">
                                                Admission to Dubai’s biggest, multicultural festival
                                                park with replicas of iconic landmarks. Admission to
                                                Dubai’s biggest, multicultural festival park with
                                                replicas of iconic landmarks
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="right-section" id="filterMenu">
                            <h4 className="title">Filter Options</h4>
                            {/* <!-- List of Filter --> */}
                            <ul className="listing">
                                <li>
                                    <h4 className="search-label">Post Type</h4>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Posts (3)</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Posts (3)</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Links (44)</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Blogs (23)</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* <!-- List of Filter --> */}
                            <ul className="listing">
                                <li>
                                    <h4 className="search-label">Categories</h4>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Articles (3)</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Poll (3)</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Article (44)</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Blogs (23)</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* <!-- List of Filter --> */}
                            <ul className="listing">
                                <li>
                                    <h4 className="search-label">Travel</h4>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Articles (3)</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Poll (3)</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Article (44)</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Blogs (23)</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="div">
                        <div className="filter_menu"></div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- / End-Search --> */}
    </header>
    </> );
}

export default HeaderComponent;