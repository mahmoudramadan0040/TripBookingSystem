import Link from "next/link";
function HeaderBottomComponent() {
  return (
    <>
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
                          <Link href="/home" className="single link-active">
                            Home 
                          </Link>
                        </li>
                        <li className="single-list">
                          <Link href="" className="single">
                            Tours 
                          </Link>
                          <ul className="submenu">
                            <li className="single-list">
                              <Link href="/tours" className="single">
                                Tour List Page
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="single-list">
                          <Link href="javascript:void(0)" className="single">
                            Transports <i className="ri-arrow-down-s-line"></i>
                          </Link>
                          <ul className="submenu">
                            <li className="single-list">
                              <Link href="transports-list.html" className="single">
                                transports Category Page
                              </Link>
                            </li>
                            <li className="single-list">
                              <Link
                                href="top-filter-transports-list.html"
                                className="single"
                              >
                                Top Filter Category
                              </Link>
                            </li>
                            <li className="single-list">
                              <Link
                                href="transports-details-with-slider.html"
                                className="single"
                              >
                                Details With slider
                              </Link>
                            </li>
                            <li className="single-list">
                              <Link
                                href="transports-cart-page.html"
                                className="single"
                              >
                                Cart transports Page
                              </Link>
                            </li>
                            <li className="single-list">
                              <Link
                                href="transports-booking-payment.html"
                                className="single"
                              >
                                Payment transports Page
                              </Link>
                            </li>
                            <li className="single-list">
                              <Link
                                href="transports-booking-complite.html"
                                className="single"
                              >
                                Finish transports Booking
                              </Link>
                            </li>
                            <li className="single-list">
                              <Link href="invoice.html" className="single">
                                View Invoice
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="d-block d-lg-none">
                          <div className="header-right-three pl-15 mt-10">
                            <div className="sign-btn">
                              <Link
                                href="/register"
                                className="btn-secondary-sm m-0"
                              >
                                Sign In
                              </Link>
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
    </>
  );
}

export default HeaderBottomComponent;
