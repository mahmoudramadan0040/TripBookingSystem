"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function TourCart() {
  const [cartItems, setCartItems] = useState([
    {
      price: 30,
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
      Governorate: "Giza",
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
      images: [
        {
          id: "e3c0fb0d-d4a3-4733-ab11-e8bdf9c6d64f",
          localImage: null,
          cloudImage:
            "https://res.cloudinary.com/dibg7krep/image/upload/v1748636634/uploads/1748636633766-product-03.png.png",
          publicId: "uploads/1748636633766-product-03.png",
          TourId: "e4528791-d99e-42d5-844d-d0f259fae7be",
          createdAt: "2025-05-30T20:23:58.478Z",
          updatedAt: "2025-05-30T20:23:58.478Z",
        },
        {
          id: "a3afdcc8-a511-4030-bb40-f82c9f760749",
          localImage: null,
          cloudImage:
            "https://res.cloudinary.com/dibg7krep/image/upload/v1748636637/uploads/1748636633754-package-7.jpg.jpg",
          publicId: "uploads/1748636633754-package-7.jpg",
          TourId: "e4528791-d99e-42d5-844d-d0f259fae7be",
          createdAt: "2025-05-30T20:23:58.478Z",
          updatedAt: "2025-05-30T20:23:58.478Z",
        },
      ],
      locations: ["Giza pyramids", "Egyptian museum", "Khan el Khalili Bazaar"],
      excluded: ["Entry ticket to go inside any Pyramid", "Lunch", "Tips"],
      tourDate: "Thursday, Jun 5, 2025",
      persons: 3,
    },
    {
      price: 60,
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
      images: [
        {
          id: "e3c0fb0d-d4a3-4733-ab11-e8bdf9c6d64f",
          localImage: null,
          cloudImage:
            "https://res.cloudinary.com/dibg7krep/image/upload/v1748636634/uploads/1748636633766-product-03.png.png",
          publicId: "uploads/1748636633766-product-03.png",
          TourId: "e4528791-d99e-42d5-844d-d0f259fae7be",
          createdAt: "2025-05-30T20:23:58.478Z",
          updatedAt: "2025-05-30T20:23:58.478Z",
        },
        {
          id: "a3afdcc8-a511-4030-bb40-f82c9f760749",
          localImage: null,
          cloudImage:
            "https://res.cloudinary.com/dibg7krep/image/upload/v1748636637/uploads/1748636633754-package-7.jpg.jpg",
          publicId: "uploads/1748636633754-package-7.jpg",
          TourId: "e4528791-d99e-42d5-844d-d0f259fae7be",
          createdAt: "2025-05-30T20:23:58.478Z",
          updatedAt: "2025-05-30T20:23:58.478Z",
        },
      ],
      locations: ["Giza pyramids", "Sphinx"],
      excluded: ["Entry ticket to go inside any Pyramid", "Lunch", "Tips"],
      tourDate: "Thursday, Jun 5, 2025",
      persons: 3,
    },
  ]);

  //   --------------------- Select Date ---------------------
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long", // e.g., "Wednesday"
    year: "numeric", // e.g., "2025"
    month: "long", // e.g., "May"
    day: "numeric", // e.g., "14"
  });

  const [selectedDate, setSelectedDate] = useState(formattedDate);
  useEffect(() => {
    const handleDateChange = () => {
      console.log("Updated:", window.selectedDate);
      setSelectedDate(window.selectedDate); // Optional: update React state
    };

    window.addEventListener("daterangeChanged", handleDateChange);

    return () => {
      window.removeEventListener("daterangeChanged", handleDateChange);
    };
  }, []);

  //   --------------------- Cart Items ---------------------
  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  //   --------------------- Select Guest Count ---------------------
  const [isOpen, setIsOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(1);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  //   const toggleDropdown = (e) => {
  //     e.stopPropagation();
  //     setIsOpen((prev) => !prev);
  //   };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const closeDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const increaseGuest = () => {
    setGuestCount((prev) => prev + 1);
  };

  const decreaseGuest = () => {
    setGuestCount((prev) => (prev > 1 ? prev - 1 : 1));
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
    let sumPrice = cartItems.reduce((sum, tour) => sum + (tour.price || 0), 0);
    sumPrice *= guestCount;
    setTotalPrice(sumPrice);
  }, [cartItems, guestCount]);

  //   --------------------- Payment Now ---------------------
  function paymentNow() {
    console.log("--------------------- Payment Now ---------------------");
    console.log(`guestCount: ${guestCount}`);
    console.log(`Terms Check: ${agreeTerms}`);
    console.log(cartItems);
    console.log(totalPrice);
    console.log(selectedDate);
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
                            <th className="text-title font-600 pr-3">Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td className="d-flex align-items-center gap-10">
                                  <div>
                                    <img
                                      src="/assets/images/destination/destination-01.png"
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
                                <td className="font-600 text-start">
                                  {item.tourDate}
                                </td>
                                <td className="font-600 text-center">
                                  {item.persons}
                                </td>
                                <td className="font-600 text-center">
                                  ${item.price}
                                </td>
                                <td className="text-center">
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
                                  src="/assets/images/icon/payment-method1.png"
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
