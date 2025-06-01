"use client"
function AboutUsComponent() {
    return ( 
        <>
       
        {/* <!-- About Us area S t a r t --> */}
        <section className="about-area">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-5 col-lg-6">
                        <div className="section-title mx-430 mb-30 w-md-100">
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
        
        </>
    );
}

export default AboutUsComponent;