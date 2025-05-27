"use Client";

export default function TourCart() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <main>
        {/* Breadcrumbs S t a r t  */}
        <section className="breadcrumbs-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1
                  className="title wow fadeInUp text-center"
                  data-wow-delay="0.0s"
                >
                  place your order
                </h1>
                <div className="breadcrumb-text mb-40">
                  <nav
                    aria-label="breadcrumb"
                    className="breadcrumb-nav wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <ul className="breadcrumb listing justify-content-center">
                      <li className="breadcrumb-item single-list">
                        <a href="index.html" className="single">
                          Home
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item single-list"
                        aria-current="page"
                      >
                        <a href="javascript:void(0)" className="single active">
                          Tour cart page
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Multi Steps */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="progress-container-horizontal mb-10">
                  <a href="tour-cart-page.html" className="step completed">
                    <div className="step-number">
                      <span>1</span>
                    </div>
                    <p>cart page</p>
                  </a>
                  <a href="tour-booking-details.html" className="step current">
                    <div className="step-number">
                      <span>2</span>
                    </div>
                    <p>Your Details</p>
                  </a>
                  <a href="tour-booking-payment.html" className="step">
                    <div className="step-number">
                      <span>3</span>
                    </div>
                    <p>Payment information</p>
                  </a>
                  <a href="tour-booking-complite.html" className="step">
                    <div className="step-number">
                      <i className="ri-check-line"></i>
                    </div>
                    <p>completed</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* / */}
        </section>
        {/*/ End-of Breadcrumbs*/}
      </main>
      <div className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-two mb-20">
                <h3 className="title font-600">Your cart Details</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              {/* Table */}
              <div className="table-responsives mb-40">
                <table className="table-color-col table-w-uset table-head-border  ">
                  <thead>
                    <tr>
                      <th className="text-title font-600">Product</th>
                      <th className="text-title font-600">Price</th>
                      <th className="text-title font-600">Qty</th>
                      <th className="text-title font-600">Sub Total</th>
                      <th className="text-title font-600">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="d-flex align-items-center gap-10">
                        <div>
                          <img
                            src="assets/images/destination/destination-01.png"
                            className="table-photo"
                            alt="profile"
                          />
                        </div>
                        <div>
                          <span className="line-clamp-1">
                            Bangkok, Thailand
                          </span>
                          <span className="d-block">5 parson</span>
                        </div>
                      </td>
                      <td className="font-600">$10.00</td>
                      <td>
                        <div className="productCount">
                          <input
                            type="text"
                            name="qty"
                            value="0"
                            className="input-text qty"
                          />
                          <div className="button-container">
                            <button
                              className="count-plus"
                              type="button"
                              value="+"
                            >
                              <i className="ri-add-line"></i>
                            </button>
                            <button
                              className="count-minus"
                              type="button"
                              value="-"
                            >
                              <i className="ri-subtract-line"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="font-600">$10.00</td>
                      <td className="text-start">
                        <button className="border-0 bg-transparent badge-basic-danger-text text-18">
                          <i className="ri-delete-bin-6-line"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center gap-10">
                        <div>
                          <img
                            src="assets/images/destination/destination-6.png"
                            className="table-photo"
                            alt="profile"
                          />
                        </div>
                        <div>
                          <span className="line-clamp-1">
                            Bangkok, Thailand
                          </span>
                          <span className="d-block">5 parson</span>
                        </div>
                      </td>
                      <td className="font-600">$10.00</td>
                      <td>
                        <div className="productCount">
                          <input
                            type="text"
                            name="qty"
                            value="0"
                            className="input-text qty"
                          />
                          <div className="button-container">
                            <button
                              className="count-plus"
                              type="button"
                              value="+"
                            >
                              <i className="ri-add-line"></i>
                            </button>
                            <button
                              className="count-minus"
                              type="button"
                              value="-"
                            >
                              <i className="ri-subtract-line"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="font-600">$10.00</td>
                      <td className="text-start">
                        <button className="border-0 bg-transparent badge-basic-danger-text text-18">
                          <i className="ri-delete-bin-6-line"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center gap-10">
                        <div>
                          <img
                            src="assets/images/destination/destination-3.png"
                            className="table-photo"
                            alt="profile"
                          />
                        </div>
                        <div>
                          <span className="line-clamp-1">
                            Bangkok, Thailand
                          </span>
                          <span className="d-block">5 parson</span>
                        </div>
                      </td>
                      <td className="font-600">$10.00</td>
                      <td>
                        <div className="productCount">
                          <input
                            type="text"
                            name="qty"
                            value="0"
                            className="input-text qty"
                          />
                          <div className="button-container">
                            <button
                              className="count-plus"
                              type="button"
                              value="+"
                            >
                              <i className="ri-add-line"></i>
                            </button>
                            <button
                              className="count-minus"
                              type="button"
                              value="-"
                            >
                              <i className="ri-subtract-line"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="font-600">$10.00</td>
                      <td className="text-start">
                        <button className="border-0 bg-transparent badge-basic-danger-text text-18">
                          <i className="ri-delete-bin-6-line"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* End Table */}

              {/* option/Services */}
              <div className="row justify-content-end">
                <div className="col-md-9">
                  <ul className="listing mb-12 d-flex flex-column gap-0">
                    <li className="single-list bb-dotted d-flex justify-content-between align-items-center flex-wrap gap-10">
                      <div className="text-16 font-500 text-capitalize text-primary-paragraph d-flex align-items-center flex-wrap gap-25">
                        <span className="icon text-40">
                          <i className="icon_set_1_icon-15"></i>
                        </span>
                        <span>Welcome Drink</span>
                      </div>
                      <div className="w-full">
                        <p className="text-16 font-700 text-capitalize text-primary-paragraph">
                          +$121
                        </p>
                      </div>
                      {/* Switch Box */}
                      <div className="switch-box-style d-flex align-items-center gap-6 min-w-80">
                        <input id="2" type="checkbox" />
                        <label className="toggle-item" htmlFor="2"></label>
                        <p className="info-text hide-text">No</p>
                        <p className="info-text show-text">Yes</p>
                      </div>
                      {/* / */}
                    </li>
                    <li className="single-list bb-dotted d-flex justify-content-between align-items-center flex-wrap gap-10">
                      <div className="text-16 font-500 text-capitalize text-primary-paragraph d-flex align-items-center flex-wrap gap-25">
                        <span className="icon text-40">
                          <i className="icon_set_1_icon-16"></i>
                        </span>
                        <span>Tour guide</span>
                      </div>
                      <p className="text-16 font-700 text-capitalize text-primary-paragraph">
                        +$125
                      </p>
                      {/* Switch Box */}
                      <div className="switch-box-style d-flex align-items-center gap-6 min-w-80">
                        <input id="0" type="checkbox" />
                        <label className="toggle-item" htmlFor="0"></label>
                        <p className="info-text hide-text">No</p>
                        <p className="info-text show-text">Yes</p>
                      </div>
                      {/* / */}
                    </li>
                    <li className="single-list bb-dotted d-flex justify-content-between align-items-center flex-wrap gap-10">
                      <div className="text-16 font-500 text-capitalize text-primary-paragraph d-flex align-items-center flex-wrap gap-25">
                        <span className="icon text-40">
                          <i className="icon_set_1_icon-27"></i>
                        </span>
                        <span>Pick up service </span>
                      </div>
                      <p className="text-16 font-700 text-capitalize text-primary-paragraph">
                        +$125
                      </p>
                      {/* Switch Box */}
                      <div className="switch-box-style d-flex align-items-center gap-6 min-w-80">
                        <input id="1" type="checkbox" />
                        <label className="toggle-item" htmlFor="1"></label>
                        <p className="info-text hide-text">No</p>
                        <p className="info-text show-text">Yes</p>
                      </div>
                      {/* / */}
                    </li>
                    <li className="single-list bb-dotted d-flex justify-content-between align-items-center flex-wrap gap-10">
                      <div className="text-16 font-500 text-capitalize text-primary-paragraph d-flex align-items-center flex-wrap gap-25">
                        <span className="icon text-40">
                          <i className="icon_set_1_icon-59"></i>
                        </span>
                        <span>Coffe break</span>
                      </div>
                      <p className="text-16 font-700 text-capitalize text-primary-paragraph">
                        +$125
                      </p>
                      {/* Switch Box */}
                      <div className="switch-box-style d-flex align-items-center gap-6 min-w-80">
                        <input id="210" type="checkbox" />
                        <label className="toggle-item" htmlFor="210"></label>
                        <p className="info-text hide-text">No</p>
                        <p className="info-text show-text">Yes</p>
                      </div>
                      {/* / */}
                    </li>
                    <li className="single-list bb-dotted d-flex justify-content-between align-items-center flex-wrap gap-10">
                      <div className="text-16 font-500 text-capitalize text-primary-paragraph d-flex align-items-center flex-wrap gap-25">
                        <span className="icon text-40">
                          <i className="icon_set_1_icon-58"></i>
                        </span>
                        <span>Dinner</span>
                      </div>
                      <p className="text-16 font-700 text-capitalize text-primary-paragraph">
                        +$125
                      </p>
                      {/* Switch Box */}
                      <div className="switch-box-style d-flex align-items-center gap-6 min-w-80">
                        <input id="3" type="checkbox" />
                        <label className="toggle-item" htmlFor="3"></label>
                        <p className="info-text hide-text">No</p>
                        <p className="info-text show-text">Yes</p>
                      </div>
                      {/* / */}
                    </li>
                    <li className="single-list bb-dotted d-flex justify-content-between align-items-center flex-wrap gap-10 mb-10">
                      <div className="text-16 font-500 text-capitalize text-primary-paragraph d-flex align-items-center flex-wrap gap-25">
                        <span className="icon text-40">
                          <i className="icon_set_1_icon-40"></i>
                        </span>
                        <span>Bike rent</span>
                      </div>
                      <p className="text-16 font-700 text-capitalize text-primary-paragraph">
                        +$125
                      </p>
                      {/* Switch Box */}
                      <div className="switch-box-style d-flex align-items-center gap-6 min-w-80">
                        <input id="4" type="checkbox" />
                        <label className="toggle-item" htmlFor="4"></label>
                        <p className="info-text hide-text">No</p>
                        <p className="info-text show-text">Yes</p>
                      </div>
                      {/* / */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* / options/Services */}
            </div>
            {/* / Top Selling Product Table */}

            <div className="col-lg-4">
              <div className="show-pricing-details position-sticky top-0">
                <div className="price-review">
                  <div className="d-flex gap-10 align-items-end">
                    <p className="light-pera">Total</p>
                    <p className="pera">$425</p>
                  </div>
                  <div className="rating">
                    <p className="pera text-capitalize">my in time is</p>
                  </div>
                </div>
                {/* <h4 className="heading-card">My In Time is Now</h4> */}
                <div className="in-date-time mb-20">
                  <i className="ri-time-line"></i>
                  <p className="date-time-result">{formattedDate}</p>
                </div>

                <div className="show-info d-flex flex-column flex-wrap gap-10">
                  <div className="location">
                    <i className="ri-map-pin-line"></i>
                    <div className="name">Bangkok, Thailand</div>
                  </div>

                  <div className="card mb-10 border-0">
                    {/* Total Pricing */}
                    <ul className="listing border-bottom pb-6 mb-12">
                      <li className="single-list d-flex justify-content-between align-items-center flex-wrap gap-10 mb-10">
                        <p className="text-16 text-capitalize text-primary-paragraph">
                          Sub Total
                        </p>
                        <p className="text-16 font-600 text-capitalize text-primary-paragraph">
                          $170.15
                        </p>
                      </li>
                      <li className="single-list d-flex justify-content-between align-items-center flex-wrap gap-10 mb-10">
                        <p className="text-16 text-capitalize text-primary-paragraph">
                          Vat Tax
                        </p>
                        <p className="text-16 font-600 text-capitalize text-primary-paragraph">
                          $05.00
                        </p>
                      </li>
                      <li className="single-list d-flex justify-content-between align-items-center flex-wrap gap-10 mb-10">
                        <p className="text-16 text-capitalize text-primary-paragraph">
                          Adults
                        </p>
                        <p className="text-16 font-600 text-capitalize text-primary-paragraph">
                          04
                        </p>
                      </li>
                      <li className="single-list d-flex justify-content-between align-items-center flex-wrap gap-10 mb-10">
                        <p className="text-16 text-capitalize text-primary-paragraph">
                          Children
                        </p>
                        <p className="text-16 font-600 text-capitalize text-primary-paragraph">
                          01
                        </p>
                      </li>
                      <li className="single-list d-flex justify-content-between align-items-center flex-wrap gap-10 mb-10">
                        <p className="text-16 text-capitalize text-primary-paragraph">
                          Tour guide
                        </p>
                        <p className="text-16 font-600 text-capitalize text-primary-paragraph">
                          $170.15
                        </p>
                      </li>
                      <li className="single-list d-flex justify-content-between align-items-center flex-wrap gap-10 mb-10">
                        <p className="text-16 text-capitalize text-primary-paragraph">
                          Dinner
                        </p>
                        <p className="text-16 font-600 text-capitalize text-primary-paragraph">
                          $100.15
                        </p>
                      </li>
                    </ul>
                    {/* / Total Pricing */}

                    {/* Total */}
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-10">
                      <p className="text-18 text-capitalize text-primary font-700">
                        Total
                      </p>
                      <p className="text-18 text-capitalize text-primary font-700">
                        $425
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-30">
                  <a
                    href="tour-booking-details.html"
                    className="send-btn w-100 text-capitalize text-center d-block"
                  >
                    continue & Next
                  </a>
                </div>
                <div className="footer bg-transparent">
                  <h4 className="title">
                    <i className="icon_set_1_icon-59"></i>
                    Free Cancellation
                  </h4>
                  <p className="pera">Up to 24 hours in advance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
