import Link from "next/link";
import { useSelector } from "react-redux";
function PopularPakageComponent() {

    const tours = useSelector((state)=>state.shared.tours)
    const cairo = tours?.data?.filter(t => t.Governorate === "Cairo").slice(0, 4);
    const Alex = tours?.data?.filter(t => t.Governorate === "Alexandria").slice(0, 4);
    const Luxor = tours?.data?.filter(t => t.Governorate === "Luxor").slice(0, 4);
    console.log(cairo);
    console.log(tours);
    return ( 

        <>
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
                                    Cairo
                                </button>
                            </li>
                            <li className="nav-item package-item" role="presentation">
                                <button className="nav-link package-nav" id="pills-bangkok-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-bangkok" role="tab" aria-controls="pills-bangkok"
                                    aria-selected="false">
                                    Luxor
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link package-nav" id="pills-hongkong-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-hongkong" role="tab" aria-controls="pills-hongkong"
                                    aria-selected="false">
                                    Alex
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
                                    
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-bangkoks" role="tabpanel" aria-labelledby="pills-bangkok-tab">
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
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-button d-inline-block">
                            <Link href="tours">
                                <div className="btn-primary-icon-sm">
                                    <p className="pera">View All Tour</p>
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End of Packages --> */}

        </>
    );
}

export default PopularPakageComponent;