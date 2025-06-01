function FooterContentComponent() {
    return ( <>
    
    {/* <!-- Footer S t a r t --> */}
    <footer>
        <div className="footer-wrapper footer-bg">
            <div className="container">
                <div className="footer-area">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-footer-caption">
                                <div className="footer-tittle">
                                    <h4 className="title">Company</h4>
                                    <ul className="listing">
                                        <li className="single-lsit">
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li className="single-lsit">
                                            <a href="news.html">News</a>
                                        </li>
                                        <li className="single-lsit"><a href="faq.html">Faq</a></li>
                                        <li className="single-lsit">
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-footer-caption">
                                <div className="footer-tittle">
                                    <h4 className="title">Explore</h4>
                                    <ul className="listing">
                                        <li className="single-lsit"><a href="faq.html">Faq</a></li>
                                        <li className="single-lsit">
                                            <a href="tour-list.html">Tour Listings</a>
                                        </li>
                                        <li className="single-lsit">
                                            <a href="destination.html">Destination</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-footer-caption">
                                <div className="footer-tittle">
                                    <h4 className="title">Quick Links</h4>
                                    <ul className="listing">
                                        <li className="single-lsit"><a href="index.html">Home</a></li>
                                        <li className="single-lsit">
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li className="single-lsit">
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-footer-caption">
                                <div className="footer-tittle">
                                    <h4 className="title">Contact</h4>
                                    <ul className="listing">
                                        <li className="single-lsit">
                                            <a href="#" className="mb-20 d-block">70/A Floor Divo Tower Melbourne,
                                                Australia</a>
                                        </li>
                                        <li className="single-lsit">
                                            <a href="#">
                                                <div className="d-flex gap-12">
                                                    <i className="ri-phone-line"></i> (00) +888 123456 789
                                                </div>
                                            </a>
                                        </li>
                                        <li className="single-lsit">
                                            <a href="#">
                                                <div className="d-flex gap-12">
                                                    <i className="ri-mail-line"></i> example@gmail.com
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle-area">
                    <div className="footer-body">
                        <div className="footer-content">
                            <div className="d-flex flex-column gap-20">
                                <div className="logo">
                                    <img src="assets/images/logo/logo.png" alt="travello" className="changeLogo"/>
                                </div>
                                <p className="pera">
                                    Travel is a transformative and enriching experience that
                                    allows individuals to explore new destinations, cultures,
                                    and landscapes.
                                </p>
                            </div>
                            <div className="footer-right">
                                <h4 className="title">Subscribe Our Newsletter</h4>
                                <div className="subscribe-wraper">
                                    <input className="footer-search" type="search" name="footer"
                                        placeholder="Enter Your Email"/>
                                    <button className="subscribe-btn">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <ul className="listing">
                            <li className="single-list">
                                <a href="terms-condition.html" className="single">Terms of usa</a>
                            </li>
                            <li className="single-list">
                                <a href="privacy-policy.html" className="single">Privacy and Cookies Statement</a>
                            </li>
                            <li className="single-list">
                                <a href="contact.html" className="single">How the site works</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- footer-bottom area --> */}
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between gap-14 flex-wrap">
                                <p className="pera">
                                    © <span className="current-year">2025</span> initTheme. All rights
                                    reserved
                                </p>
                                <p className="pera">Powered by @Travello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!--/ End-of Footer --> */}

    {/* <!-- Scroll Up  --> */}
    <div className="progressParent" id="back-top">
        <svg className="backCircle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
    {/* <!-- Add an search-overlay element --> */}
    <div className="search-overlay"></div>
    </> );
}

export default FooterContentComponent;