import Link from "next/link";

function SearchTransportComponent() {
    return ( 
        <>

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
                                        <button className="plan-link" id="book-transport" data-bs-toggle="tab" data-bs-target="#transport-tap"
                                            type="button" role="tab" aria-controls="transport-tap" aria-selected="false">
                                            <i className="ri-car-line"></i>Transport
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
                                                <div className="sign-btn text-right">
                                                    <Link href="tour-list.html" className="btn-secondary-lg w-100 text-center">
                                                        <i   className="ri-search-line mr-10 font-20"></i> Search Plan
                                                    </Link>
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
                                                    <Link href="tour-list.html" className="btn-secondary-lg w-100 text-center">
                                                        <i className="ri-search-line mr-10 font-20"></i> Search Plan
                                                    </Link>
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
        </>
    );
}

export default SearchTransportComponent;