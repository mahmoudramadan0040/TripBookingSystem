"use client";

import Link from "next/link";
import { useState } from "react";

export default function TourCart() {

  const [cartItems, setCartItems] = useState([
    {
      title: "Giza pyramids, Egyptian museum and Khan el Khalili Bazaar",
      price: 30,
      summary:
        "Explore the history and culture of Egypt at Great Pyramids of Giza and Sphinx, Egyptian museum for antiques. Hunt for unique bargains in the historic Khan El Khalili Bazaar.",
      tourDuration: "Up to 8 hours",
      activityDetails: {
        reserveNowPayLater: true,
        duration: "4 hours",
        skipTheTicketLine: true,
        liveTourGuide: true,
        pickupIncluded: "Please wait 10 minutes before your scheduled time.",
        privateGroup: true,
      },
      location: {
        country: "Egypt",
        city: "Giza",
      },
      highlights: [
        "Explore the history and culture of Ancient Egypt",
        "Wander through 120,000 masterpieces of art at the Egyptian Museum",
        "See the treasures from the Tomb of Tutankhamen",
        "Visit the Pyramids of Giza and Great Sphinx",
        "Pick up some souvenir bargains and learn to haggle at the Khan El Khalili Bazaar",
      ],
      fullDescription:
        "Starts with Pickup from your hotel in either Cairo or Giza by tour guide to start your full day tour visiting Giza Pyramids where you visit the Great Pyramids - Cheops, Chephren & Mykerinos then Visit the Valley Temple where the Priests Mummified the dead body of King Chephren. Also there you will have a close-up look at The Sphinx. Then continue your day tour to the Egyptian Museum of antiquities. It exhibits over 250,000 genuine artifacts including treasures of Tutankhamon. Then visit the Khan El Khalili Bazaar known for trading fine brassware, copper, perfumes, leather, silver, gold, antiques and much more.",
      included: [
        "Hotel pickup and drop-off",
        "Transportation by air-conditioned vehicle",
        "Entry ticket",
        "Egyptologist tour guide",
        "Shopping at Papyrus Gallery and Essential Oils Factory",
        "Bottle of water",
      ],
      excluded: ["Entry ticket to go inside any Pyramid", "Lunch", "Tips"],
    },
    {
      price: 45,
      title: "Dahshur pyramids, Saqqara, Memphis city and Giza pyramids",
      summary:
        "Explore the Cairo's ancient pyramids on a private guided day tour. See the oldest smooth Egyptian pyramid at Dahshur, and the famous step pyramid at Sakkara, Memphis city then marvel at the Great Pyramid of Giza.",
      tourDuration: "Up to 8 hours",
      activityDetails: {
        reserveNowPayLater: true,
        duration: "4 hours",
        skipTheTicketLine: true,
        liveTourGuide: true,
        pickupIncluded: "Please wait 10 minutes before your scheduled time.",
        privateGroup: true,
      },
      highlights: [
        "Marvel at ancient pyramids of Giza, Sakkara, Memphis city and Dahshur on a Cairo private tour",
        "Discover the Bent Pyramid and Red Pyramid at the ancient site of Dahshur",
        "Admire the Step Pyramid at Sakkara, the oldest stone building in all of Egypt",
        "Explore the Great Pyramids and Great Sphinx of Giza on an unforgettable visit",
        "Discover Memphis, the heart of ancient Egypt",
      ],
      fullDescription:
        "After pickup from your Cairo hotel, begin your tour at Sakkara, the city of the dead with the famous Step Pyramid of Djoser. Then visit Memphis, the ancient capital, to see the colossal Statue of Ramses II and the alabaster Sphinx. Continue to Dahshur to see the Bent Pyramid and the Red Pyramid. End the tour at the Giza plateau where you will explore the Great Pyramid of Cheops, the Pyramid of Chephren, and the smaller Pyramid of Mykerinus, and see the Great Sphinx.",
      included: [
        "Hotel pickup and drop-off",
        "Transportation by air-conditioned vehicle",
        "Entry ticket",
        "Egyptologist tour guide",
        "Shopping at Papyrus Gallery and Essential Oils Factory",
        "Bottle of water",
      ],
      excluded: ["Entry ticket to go inside any Pyramid", "Lunch", "Tips"],
    },
    {
      price: 55,
      title: "Dahshur pyramids, Saqqara and Memphis city",
      tour_duration: "Up to 8 hours",
      about: {
        reserve_now_pay_later: true,
        duration: "4 hours",
        skip_ticket_line: true,
        live_tour_guide: true,
        pickup_included: true,
        private_group: true,
      },
      highlights: [
        "Marvel at the Step Pyramid of Djoser in Saqqara.",
        "Gaze upon the remarkable Bent & Red Pyramids.",
        "Discover Memphis, the heart of ancient Egypt.",
        "Stand before the colossal Statue of Ramses II.",
        "Witness the mysterious alabaster Sphinx.",
      ],
      description:
        "Your adventure begins in the morning as our expert guide whisks you away from your hotel to the awe-inspiring Step Pyramid of Djoser in Saqqara. Marvel at the world's earliest colossal stone monument, erected during the 3rd Dynasty for the venerable King Djoser.\n\nYour excursion continues 8 miles away to Dahshur, where you'll step inside the Red Pyramid, hailed as history's inaugural true pyramid. Gaze upon the Bent Pyramid, renowned for its remarkable preservation. These architectural wonders offer a glimpse into the ingenuity of ancient builders from the Old Kingdom.\n\nNext, we transport you for another 6 miles to the storied city of Memphis, established by the illustrious King Menes. Once the heart of Egyptian rule and culture. Here, we stand in the presence of the colossal Statue of Ramses II and the enigmatic alabaster Sphinx, symbols of a civilization that has captivated the world.\n\nThis is more than a tour; it's a passage through time, take advantage of this opportunity to witness the most incredible ancient sites near Cairo in a single day.\n\nSun Pyramids Tours ensures a transparent and hassle-free experience. You won't encounter any hidden surprises or unexpected costs. Secure your spot on this epic voyage into history today.",
      included: [
        "Hotel pickup and drop-off",
        "Transportation by air-conditioned vehicle",
        "Entry ticket",
        "Egyptologist tour guide",
        "Shopping at Papyrus Gallery and Essential Oils Factory",
        "Bottle of water",
      ],
      excluded: ["Entry ticket to go inside any Pyramid", "Lunch", "Tips"],
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());

  // Format the date as "Wednesday, Jan 17, 2025"
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(selectedDate);

  const handleChange = (e) => {
    console.log('-----Date-----');
    setSelectedDate(new Date(e.target.value));
    console.log(selectedDate);
    
  };


  return (
    <>
      <main>
        {/* Breadcrumbs S t a r t  */}
        <section className="breadcrumbs-area breadcrumb-bg">
          <div className="container">
            <h1 className="title wow fadeInUp" data-wow-delay="0.0s">
              Cart & Payment
            </h1>
            <div className="breadcrumb-text">
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-nav wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <ul className="breadcrumb listing">
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
                      Cart & Payment
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        {/*/ End-of Breadcrumbs*/}

        {/* Destination area S t a r t */}
        <section className="tour-details-section section-padding2">
          <div className="tour-details-area">
            <div className="tour-details-container">
              <div className="container">
                <div className="row g-4">
                  <div className="col-xl-8">
                    {/* Table */}
                    <div className="table-responsives mb-40">
                      <table className="table-color-col table-w-uset table-head-border  ">
                        <thead>
                          <tr>
                            <th className="text-title font-600">Product</th>
                            <th className="text-title font-600">Price</th>
                            <th className="text-title font-600">Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item, index) => {
                            return (
                              <tr key={index}>
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
                                      {item.title}
                                    </span>
                                  </div>
                                </td>
                                <td className="font-600">{item.price} $</td>
                                <td className="text-start">
                                  <button className="border-0 bg-transparent badge-basic-danger-text text-18">
                                    <i className="ri-delete-bin-6-line"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    {/* End Table */}

                    {/* Payment S t a r t */}
                    <div className="donation-payment">
                      {/* Payment */}
                      <div className="card-style box-shadow border-0 p-2">
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="contact-form mb-24">
                                <label className="contact-label">Name</label>
                                <input
                                  className="form-control contact-input"
                                  type="text"
                                  placeholder="e.g Alex"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="contact-form mb-24">
                                <label className="contact-label">Email</label>
                                <input
                                  className="form-control contact-input"
                                  type="email"
                                  placeholder="e.g example@gmail.com"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="form-group col-12 payment-gateway-wrapper mt-10">
                            <ul className="payment-gateway-list mb-10">
                              <li className="single-gateway-item selected">
                                <img
                                  src="assets/images/icon/payment-method1.png"
                                  alt="img"
                                />
                              </li>
                              
                            </ul>
                            <div className="remember-me terms-condition">
                              <label>
                                <input
                                  className="checkbox-style"
                                  type="checkbox"
                                  value="remember"
                                  name="remember"
                                />
                                <small>
                                  I agree to all the
                                  <a href="terms-condition.html">
                                    <span className="text-primary">Terms</span>
                                  </a>{" "}
                                  and{" "}
                                  <a href="privacy-policy.html">
                                    <span className="text-primary">
                                      Privacy policy
                                    </span>
                                  </a>
                                </small>
                                <span className="checkmark-style"></span>
                              </label>
                            </div>
                            <a
                              href="javascript:void(0)"
                              className="btn-primary-submit"
                            >
                              Payment Now
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/*End-of Payment */}
                  </div>
                  <div className="col-xl-4">
                    <div className="date-travel-card position-sticky top-0">
                      <div className="price-review">
                        <div className="d-flex gap-10 align-items-end">
                          <p className="light-pera">From</p>
                          <p className="pera">$95</p>
                        </div>
                        <div className="rating">
                          <p className="pera">Price varies by group size</p>
                        </div>
                      </div>
                      <h4 className="heading-card">
                        Select Date and Travelers
                      </h4>
                      <div className="date-time-dropdown">
                        <i className="ri-time-line"></i>
                        <p className="date-time-result">
                          Wednesdsay, Jan 17, 2025
                        </p>
                      </div>
                      <div className="dropdown-section position-relative user-picker-dropdown">
                        <div className="d-flex gap-12 align-items-center">
                          <i className="dropdown-icon ri-user-line"></i>
                          <div className="custom-dropdown">
                            <h4 className="title">Guests</h4>
                            <div className="arrow">
                              <i className="ri-arrow-down-s-line"></i>
                            </div>
                          </div>
                        </div>
                        <div className="user-result"></div>
                        <div className="user-picker dropdown-shadow">
                          <div className="user-category">
                            <div className="category-name">
                              <h4 className="title">Adults</h4>
                              <p className="pera">12years and above</p>
                            </div>
                            <div className="qty-container">
                              <button
                                className="qty-btn-minus mr-1"
                                type="button"
                              >
                                <i className="ri-subtract-fill"></i>
                              </button>
                              <input
                                type="text"
                                name="qty"
                                value="0"
                                className="input-qty input-rounded"
                              />
                              <button
                                className="qty-btn-plus ml-1"
                                type="button"
                              >
                                <i className="ri-add-fill"></i>
                              </button>
                            </div>
                          </div>
                          <div className="user-category">
                            <div className="category-name">
                              <h4 className="title">Children</h4>
                              <p className="pera">2-11 years</p>
                            </div>
                            <div className="qty-container">
                              <button
                                className="qty-btn-minus mr-1"
                                type="button"
                              >
                                <i className="ri-subtract-fill"></i>
                              </button>
                              <input
                                type="text"
                                name="qty"
                                value="0"
                                className="input-qty input-rounded"
                              />
                              <button
                                className="qty-btn-plus ml-1"
                                type="button"
                              >
                                <i className="ri-add-fill"></i>
                              </button>
                            </div>
                          </div>
                          <div className="user-category">
                            <div className="category-name">
                              <h4 className="title">infant</h4>
                              <p className="pera">belwo 2 years</p>
                            </div>
                            <div className="qty-container">
                              <button
                                className="qty-btn-minus mr-1"
                                type="button"
                              >
                                <i className="ri-subtract-fill"></i>
                              </button>
                              <input
                                type="text"
                                name="qty"
                                value="0"
                                className="input-qty input-rounded"
                              />
                              <button
                                className="qty-btn-plus ml-1"
                                type="button"
                              >
                                <i className="ri-add-fill"></i>
                              </button>
                            </div>
                          </div>
                          <div className="btn-section">
                            <a href="javascript:void(0)" className="done-btn">
                              Done
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-30">
                        <button type="submit" className="send-btn w-100">
                          Check Availability
                        </button>
                      </div>
                      <div className="footer bg-transparent">
                        <h4 className="title">Free Cancellation</h4>
                        <p className="pera">Up to 24 hours in advance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ End-of Destination */}
      </main>
    </>
  );
}
