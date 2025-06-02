"use client";
import TourCard from "./TourCard";
import Select from "react-select";
import TourFilters from "./ToursFilters";
import { useState } from "react";
import Link from "next/link";
import { useSelector,useDispatch } from "react-redux";
import { selectFilteredSortedTours, setSortBy } from "@/app/Redux/slices/SharedSlice";
function TourList({ tours }) {
  const dispatch=useDispatch();
  const data = useSelector((state) => state.shared.tours);
  // console.log(tours)
  // const sortedTours = tours?.data?.slice().sort((a, b) => {
  //   switch (sortBy) {
  //     case "low":
  //       console.log("low");
  //       return Number(a.price) - Number(b.price); // low to high
  //     case "high":
  //       console.log("high");
  //       return Number(b.price) - Number(a.price); // high to low
  //     case "new":
  //       return (
  //         new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  //       ); // newest first
  //     case "popular":
  //     default:
  //       return 0; // no sort or original order
  //   }
  // });

  const sortedTours = useSelector(selectFilteredSortedTours);
  const handleSortChange = e => {
    console.log(e.value)
    dispatch(setSortBy(e.value));
  };
  const options = [
    { value: "popular", label: "Sort by Popular" },
    { value: "low", label: "Price low to high" },
    { value: "high", label: "Price high to low" },
    { value: "new", label: "Sort by Newest" },
  ];
  const customStyles = {
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#fef3c7", // yellow background in dropdown menu
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#fde68a" : "#fef3c7", // brighter yellow on hover
      color: "#92400e",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#92400e", // dark yellow selected text
    }),
  };
  return (
    <>
      {/* <!-- Breadcrumbs S t a r t --> */}
      <section className="breadcrumbs-area breadcrumb-bg">
        <div className="container">
          <h1 className="title wow fadeInUp" data-wow-delay="0.0s">
            Tour - Sidebar Filter
          </h1>
          <div className="breadcrumb-text">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-nav wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <ul className="breadcrumb listing">
                <li className="breadcrumb-item single-list">
                  <Link href="index.html" className="single">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item single-list" aria-current="page">
                  <Link href="javascript:void(0)" className="single active">
                    Tour List
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* <!--/ End-of Breadcrumbs--> */}
      <section className="tour-list-section top-bottom-padding2">
        <div className="container">
          <div className="row g-4">
            {/*----------- Map Tour Card Component -------------  */}

            <TourFilters></TourFilters>
            <div className="col-xl-9">
              <div className="showing-result">
                <h4 className="title">
                  Showing {data.count} of {data.count} Results
                </h4>
                <div className="d-flex gap-10 align-items-center">
                  <div
                    className="expand-icon hamburger block d-xl-none"
                    id="hamburger"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 7H10M10 7C10 8.65685 11.3431 10 13 10H14C15.6569 10 17 8.65685 17 7C17 5.34315 15.6569 4 14 4H13C11.3431 4 10 5.34315 10 7ZM16 17H21M20 7H21M3 17H6M6 17C6 18.6569 7.34315 20 9 20H10C11.6569 20 13 18.6569 13 17C13 15.3431 11.6569 14 10 14H9C7.34315 14 6 15.3431 6 17Z"
                        stroke="#071516"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="sorting-dropdown">
                    <Select
                      className="bg-yellow-100 border-yellow-300 rounded p-1 m-1 focus:ring-yellow-500 
             focus:border-yellow-500 focus:border focus:bg-yellow-100 focus:text-yellow-500"
                      options={options}
                      defaultValue={options[0]}
                      onChange={handleSortChange}
                      styles={customStyles}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-24  ">
                {tours && tours.data
                  ? sortedTours?.map((tour) => (
                      <TourCard tour={tour} key={tour.id}></TourCard>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TourList;
