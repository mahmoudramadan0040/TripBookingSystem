import Link from "next/link";
import { useSelector } from "react-redux";
import TourCard from "@/components/Tours/TourCard";
function PopularPakageComponent() {
  const tours = useSelector((state) => state.shared.tours);
  const Cairo = tours?.data
    ?.filter((t) => t.Governorate == "Cairo" && t.category=="Popular")
    .slice(0, 4);


  console.log(Cairo);
  const Alex = tours?.data
    ?.filter((t) => t.Governorate == "Alexandria" && t.category=="Popular")
    .slice(0, 4);


  const Luxor = tours?.data
    ?.filter((t) => t.Governorate == "Luxor" && t.category=="Popular")
    .slice(0, 4);
  const Giza = tours?.data?.filter((t) => t.Governorate == "Giza" && t.category=="Popular").slice(0, 4);
  return (
    <>
      {/* <!-- Packages S t a r t --> */}
      {Cairo || Alex || Luxor || Giza ? (
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
                <ul
                  className="nav nav-pills package-pills"
                  id="pills-tab"
                  role="tablist"
                >
                  {Cairo.length > 0 ? (
                    <li className="nav-item package-item" role="presentation">
                      <button
                        className="nav-link package-nav active"
                        id="pills-cairo-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-cairo"
                        role="tab"
                        aria-controls="pills-cairo"
                        aria-selected="true"
                      >
                        <span className="text-xl font-bold">Cairo</span>
                      </button>
                    </li>
                  ) : (
                    ""
                  )}
                  {Luxor.length > 0 ? (
                    <li className="nav-item package-item" role="presentation">
                      <button
                        className="nav-link package-nav"
                        id="pills-luxor-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-luxor"
                        role="tab"
                        aria-controls="pills-luxor"
                        aria-selected="false"
                      >
                        <span className="text-xl font-bold">Luxor</span>
                      </button>
                    </li>
                  ) : (
                    ""
                  )}
                  {Alex.length > 0 ? (
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link package-nav"
                        id="pills-alex-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-alex"
                        role="tab"
                        aria-controls="pills-alex"
                        aria-selected="false"
                      >
                        <span className="text-xl font-bold">Alexandria</span>
                      </button>
                    </li>
                  ) : (
                    ""
                  )}

                  {Giza.length > 0 ? (
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link package-nav"
                        id="pills-giza-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-giza"
                        role="tab"
                        aria-controls="pills-giza"
                        aria-selected="false"
                      >
                        <span className="text-xl font-bold">Giza</span>
                      </button>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
                {/* <!-- Tab contents --> */}
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-cairo"
                    role="tabpanel"
                    aria-labelledby="pills-cairo-tab"
                  >
                    <div className="row g-4 justify-center">
                      {Cairo
                        ? Cairo.map((tour) => (
                            <div
                              className="col-xl-3 col-lg-4 col-sm-6 "
                              key={tour.id}
                            >
                              <TourCard tour={tour} key={tour.id}></TourCard>
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-alex"
                    role="tabpanel"
                    aria-labelledby="pills-alex-tab"
                  >
                    <div className="row g-4 justify-center">
                      
                      {Alex
                        ? Alex.map((tour) => (
                            <div
                              className="col-xl-3 col-lg-4 col-sm-6 "
                              key={tour.id}
                            >
                              <TourCard tour={tour} key={tour.id}></TourCard>
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-luxor"
                    role="tabpanel"
                    aria-labelledby="pills-luxor-tab"
                  >
                    <div className="row g-4 justify-center">
                      {Luxor
                        ? Luxor.map((tour) => (
                            <div
                              className="col-xl-3 col-lg-4 col-sm-12"
                              key={tour.id}
                            >
                              <TourCard tour={tour} key={tour.id}></TourCard>
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-giza"
                    role="tabpanel"
                    aria-labelledby="pills-giza-tab"
                  >
                    <div className="row g-4 justify-center">
                      {Giza
                        ? Giza.map((tour) => (
                            <div
                              className="col-xl-3 col-lg-4 col-sm-12"
                              key={tour.id}
                            >
                              <TourCard tour={tour} key={tour.id}></TourCard>
                            </div>
                          ))
                        : ""}
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
      ) : (
        ""
      )}
      {/* <!--/ End of Packages --> */}
    </>
  );
}

export default PopularPakageComponent;
