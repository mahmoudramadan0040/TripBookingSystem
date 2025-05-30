"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function TourCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: "cd8bc7cd-0fdc-4544-930e-063c2c7b803d",
      price: "199.99",
      title: "Giza pyramids, Egyptian museum and Khan el Khalili Bazaar",
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
      tourLocations: [
        "Giza pyramids",
        "Egyptian museum",
        "Khan el Khalili Bazaar",
      ],
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
      locations: ["Giza pyramids", "Sphinx"],
      IsDeleted: null,
      createdAt: "2025-05-30T14:01:18.963Z",
      updatedAt: "2025-05-30T14:01:18.963Z",
      images: [
        {
          id: "8b8f440d-5d7b-41e5-b1c5-a61e6f0b307c",
          localImage: null,
          cloudImage:
            "https://res.cloudinary.com/dibg7krep/image/upload/v1748613674/uploads/1748613670480-tour-details-banner.png.png",
          publicId: "uploads/1748613670480-tour-details-banner.png",
          TourId: "cd8bc7cd-0fdc-4544-930e-063c2c7b803d",
          createdAt: "2025-05-30T14:01:20.264Z",
          updatedAt: "2025-05-30T14:01:20.264Z",
        },
        {
          id: "a4364618-aee0-4c0b-a67c-c3a91c173135",
          localImage: null,
          cloudImage:
            "https://res.cloudinary.com/dibg7krep/image/upload/v1748613677/uploads/1748613672221-tour-details-banner-three.png.png",
          publicId: "uploads/1748613672221-tour-details-banner-three.png",
          TourId: "cd8bc7cd-0fdc-4544-930e-063c2c7b803d",
          createdAt: "2025-05-30T14:01:20.264Z",
          updatedAt: "2025-05-30T14:01:20.264Z",
        },
        {
          id: "145f43bc-cf4f-4c5c-83fc-ff3d51949e57",
          localImage: null,
          cloudImage:
            "https://res.cloudinary.com/dibg7krep/image/upload/v1748613678/uploads/1748613674368-tour-details-banner-two.png.png",
          publicId: "uploads/1748613674368-tour-details-banner-two.png",
          TourId: "cd8bc7cd-0fdc-4544-930e-063c2c7b803d",
          createdAt: "2025-05-30T14:01:20.264Z",
          updatedAt: "2025-05-30T14:01:20.264Z",
        },
      ],
      tourDate: "Saturday, May 24, 2025",
      persons: 3,
    },
  ]);

  //   --------------------- Cart Items ---------------------
  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  //   --------------------- Agree Terms ---------------------
  const [agreeTerms, setagreeTerms] = useState(false);

  const handleChangeAgreeTerms = (e) => {
    setagreeTerms(e.target.checked);
    console.log("Checked:", e.target.checked); // true or false
  };

  //   --------------------- Calculates ---------------------
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    console.log(cartItems);
    let sumPrice = cartItems.reduce((sum, tour) => sum + (Number(tour.price) * Number(tour.persons) || 0), 0);
    setTotalPrice(sumPrice);
  }, [cartItems]);

  //   --------------------- Payment Now ---------------------
  function paymentNow() {
    console.log("--------------------- Payment Now ---------------------");
    console.log(`Terms Check: ${agreeTerms}`);
    console.log(cartItems);
    console.log(totalPrice);
  }
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
                            <th className="text-title font-600">Date</th>
                            <th className="text-title font-600">Persons</th>
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
                                      src={item.images[0].cloudImage}
                                      className="table-photo"
                                      alt="profile"
                                    />
                                  </div>
                                  <div>
                                    <Link className="line-clamp-1" href={`/tours`}>
                                      {item.title}
                                    </Link>
                                  </div>
                                </td>
                                <td className="font-600">{item.tourDate}</td>
                                <td className="font-600">{item.persons}</td>
                                <td className="font-600">${item.price}</td>
                                <td className="text-start">
                                  <button
                                    className="border-0 bg-transparent badge-basic-danger-text text-18"
                                    onClick={() => handleRemoveItem(index)}
                                  >
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
                                  checked={agreeTerms}
                                  onChange={handleChangeAgreeTerms}
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
                            {/* <a
                              href="javascript:void(0)"
                              className="btn-primary-submit"
                            >
                              Payment Now
                            </a> */}
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
                          <p className="pera">${totalPrice}</p>
                        </div>
                        <div className="rating">
                          <p className="pera">Price varies by group size</p>
                        </div>
                      </div>
                      <div className="mt-30">
                        <button
                          type="submit"
                          className="send-btn w-100 no-border"
                          onClick={paymentNow}
                        >
                          Payment Now
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
