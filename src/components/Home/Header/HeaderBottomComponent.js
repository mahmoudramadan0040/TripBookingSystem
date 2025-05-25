function HeaderBottomComponent() {
    return ( <>
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
                            <div>
                                <div className="div">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    </> );
}

export default HeaderBottomComponent;