function HeaderTopComponent() {
    return ( 
        <>
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
                                    <a href="/home"><img src="/assets/images/logo/logo.png" alt="logo" className="changeLogo"/></a>
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
                                            <a href="/register" className="btn-secondary-sm radius-30">Sign Up</a>
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
        </>
    );
}

export default HeaderTopComponent;