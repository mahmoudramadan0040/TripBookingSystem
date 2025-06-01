"use client";

import { useDispatch, useSelector } from "react-redux";
import DetailsSlider from "../DetailsSlider";
import { useEffect, useRef, useState } from "react";
import { clearCart, setToCart } from "@/app/Redux/slices/SharedSlice";
import toast, { Toaster } from "react-hot-toast";

export default function DetailsWithSlider({ tour }) {
  //   --------------------- Add To Cart ---------------------
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.shared.cart);
  console.log(cartData);
  const isInCart = cartData?.some((item) => item.id === tour.id);
  useEffect(() => {
    if (isInCart) {
      const tourInCart = cartData.find((item) => item.id === tour.id);
      console.log(tourInCart);
      setSelectedDate(tourInCart.tourDate);
      setGuestCount(tourInCart.persons);
    }
  }, []);
  function addToCart() {
    const updatedTour = {
      ...tour,
      tourDate: selectedDate,
      persons: guestCount,
    };
    dispatch(setToCart(updatedTour));
    toast.success(
      isInCart ? "🛒 Item updated in your cart!" : "✅ Item added to your cart!"
    );
  }
  function checkInCart() {
    const id = tour.id;

    const cart = cartData;

    const exist = cart.some((item) => item.id === id);

    return exist;
  }

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

  return (
    <div>
      <Toaster />
      <main>
        {/* Breadcrumbs S t a r t  */}
        <section className="breadcrumbs-area breadcrumb-bg">
          <div className="container">
            <h1 className="title wow fadeInUp" data-wow-delay="0.0s">
              Tour Details
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
                      Tour Details
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        {/*/ End-of Breadcrumbs */}

        {/* Destination area S t a r t  */}
        <section className="tour-details-section section-padding2">
          <div className="tour-details-area">
            <DetailsSlider images={tour?.images} />
            <div className="tour-details-container">
              <div className="container">
                {/* Details Heading  */}
                <div className="details-heading">
                  <div className="d-flex flex-column">
                    <h4 className="title text-capitalize">
                      {tour ? tour.title : ""}
                    </h4>
                    <div className="d-flex flex-wrap align-items-center gap-30 mt-16">
                      <div className="location">
                        <i className="ri-map-pin-line"></i>
                        <div className="name">
                          Egypt, {tour?.Governorate || ""}
                        </div>
                      </div>
                      <div className="divider"></div>
                      <div className="d-flex align-items-center flex-wrap gap-20">
                        <div className="count">
                          <i className="ri-time-line"></i>
                          <p className="pera">
                            {tour ? tour.tourDuration : ""}
                          </p>
                        </div>
                        {/* <div className="count">
                          <i className="ri-user-line"></i>
                          <p className="pera">2 Person</p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="price-review">
                    <div className="d-flex gap-10 align-items-end">
                      <p className="light-pera">From</p>
                      <p className="pera">${tour?.price || 0}</p>
                    </div>
                    <div className="rating">
                      <i className="ri-star-s-fill"></i>
                      <p className="pera">4.7 (20 Reviews)</p>
                    </div>
                  </div>
                </div>
                {/* / Details Heading  */}

                <div className="mt-30">
                  <div className="row g-4">
                    {/* Left content  */}
                    <div className="col-xl-8 col-lg-7">
                      {/* About tour  */}
                      <div className="tour-details-content">
                        <h4 className="title">About</h4>
                        <p className="pera">{tour ? tour?.Description : ""}</p>
                      </div>
                      {/* / About tour  */}

                      {/* Tour Include Exclude  */}
                      <div className="tour-include-exclude radius-6">
                        <div className="includ-exclude-point">
                          <h4 className="title">Included</h4>
                          <ul className="expect-list">
                            {tour
                              ? tour?.included?.map((item, index) => {
                                  return (
                                    <li key={index} className="list">
                                      {item}
                                    </li>
                                  );
                                })
                              : ""}
                          </ul>
                        </div>
                        <div className="divider"></div>
                        <div className="includ-exclude-point">
                          <h4 className="title">Exclude</h4>
                          <ul className="expect-list">
                            {tour
                              ? tour?.excluded?.map((item, index) => {
                                  return (
                                    <li key={index} className="list">
                                      {item}
                                    </li>
                                  );
                                })
                              : ""}
                          </ul>
                        </div>
                      </div>
                      {/* / Tour Include Exclude  */}

                      {/* Tour Plan accordion */}
                      <div className="tour-details-content mb-30">
                        <h4 className="title">Tour Plan</h4>
                        <div className="destination-accordion">
                          <div
                            className="accordion"
                            id="accordionPanelsStayOpenExample"
                          >
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingOne"
                              >
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseOne"
                                  aria-expanded="true"
                                  aria-controls="panelsStayOpen-collapseOne"
                                >
                                  {tour ? tour.title : ""}
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne"
                              >
                                <div className="accordion-body">
                                  <p className="pera mb-16">
                                    {tour ? tour?.FullDescription : ""}
                                  </p>

                                  <ul className="listing">
                                    {tour
                                      ? tour?.highlights?.map((item, index) => {
                                          return (
                                            <li className="list" key={index}>
                                              {item}
                                            </li>
                                          );
                                        })
                                      : ""}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* / Tour Plan accordion */}

                      {/* Tour Privacy Policy  */}
                      <div className="tour-details-content">
                        <h4 className="title">Policy</h4>
                        <p className="pera">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum."
                        </p>
                        <p className="pera">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur? Quis autem vel eum iure
                          reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum
                          fugiat quo voluptas nulla pariatur?"
                        </p>
                        <ol className="policy-point">
                          <li className="list">
                            Neque porro quisquam est, qui dolorem ipsum quia
                            dolor sit amet, consectetur, adipisci velit.
                          </li>
                          <li className="list">
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit.
                          </li>
                          <li className="list">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod.
                          </li>
                        </ol>
                      </div>
                      {/* / Tour Privacy Policy  */}
                    </div>

                    {/* Right content  */}
                    <div className="col-xl-4 col-lg-5">
                      <div className="date-travel-card position-sticky top-0">
                        <div className="price-review">
                          <div className="d-flex gap-10 align-items-end">
                            <p className="light-pera">From</p>
                            <p className="pera">
                              ${tour?.price * guestCount || 0}
                            </p>
                          </div>
                          <div className="rating">
                            <p className="pera">Price varies by group size</p>
                          </div>
                        </div>
                        {/* Date Select */}
                        <h4 className="heading-card">
                          Select Date and Travelers
                        </h4>
                        <div className="date-time-dropdown-single">
                          <i className="ri-time-line"></i>
                          <p className="date-time-result">{selectedDate}</p>
                        </div>
                        {/* End Date Select */}
                        {/* # Persons Select */}
                        <div
                          className="dropdown-section position-relative user-picker-dropdown"
                          ref={wrapperRef}
                          onClick={() => setIsOpen(!isOpen)}
                          // onClick={toggleDropdown}
                        >
                          <div className="d-flex gap-12 align-items-center">
                            <i className="dropdown-icon ri-user-line"></i>
                            <div className="custom-dropdown">
                              <h4 className="title">Guests</h4>
                              <div className="arrow">
                                <i className="ri-arrow-down-s-line"></i>
                              </div>
                            </div>
                          </div>

                          <div className="user-result px-6">
                            {guestCount > 0 && (
                              <span>{guestCount} person(s)</span>
                            )}
                          </div>

                          {isOpen && (
                            <div
                              className={`user-picker dropdown-shadow ${
                                isOpen ? "show" : ""
                              }`}
                              onClick={stopPropagation}
                            >
                              <div className="user-category">
                                <div className="category-name">
                                  <h4 className="title">Persons</h4>
                                </div>
                                <div className="qty-container">
                                  <button
                                    className="qty-btn-minus mr-1"
                                    type="button"
                                    onClick={decreaseGuest}
                                  >
                                    <i className="ri-subtract-fill"></i>
                                  </button>
                                  <input
                                    type="text"
                                    name="qty"
                                    value={guestCount}
                                    readOnly
                                    className="input-qty input-rounded text-center"
                                  />
                                  <button
                                    className="qty-btn-plus ml-1"
                                    type="button"
                                    onClick={increaseGuest}
                                  >
                                    <i className="ri-add-fill"></i>
                                  </button>
                                </div>
                              </div>

                              <div className="btn-section">
                                <button
                                  className="done-btn no-border"
                                  onClick={closeDropdown}
                                >
                                  Done
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                        {/* End # Persons Select */}
                        <div className="mt-30">
                          <button
                            type="submit"
                            className="send-btn w-100"
                            onClick={addToCart}
                          >
                            {isInCart ? "Edit In" : "Add To"} Cart
                            <i className="ri-shopping-cart-line mx-5"></i>
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
          </div>
        </section>
        {/* End-of Destination */}
      </main>
    </div>
  );
}
