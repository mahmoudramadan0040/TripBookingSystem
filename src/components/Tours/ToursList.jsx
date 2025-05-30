import TourCard from "./TourCard";
import TourFilters from "./ToursFilters";

function TourList({ tours }) {
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
                  <a href="index.html" className="single">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item single-list" aria-current="page">
                  <a href="javascript:void(0)" className="single active">
                    Tour List
                  </a>
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
                <h4 className="title">Showing 6 of 10 Results</h4>
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="sorting-dropdown">
                    <select className="select2">
                      <option value="popular"> Sort by Popular</option>
                      <option value="low">Price low to high</option>
                      <option value="high">Price high to low</option>
                      <option value="new">Sort by Newset</option>
                    </select>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-24  ">
                {tours && tours.data
                  ? tours.data.map((tour) => (
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
