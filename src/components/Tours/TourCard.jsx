function TourCard({ tour }) {
  const { title, price, Duration, images, locations } = tour;
  return (
    <div className="">
      <div className="package-card">
        <div className="package-img imgEffect4">
          <a href="details-with-slider.html">
            <img src="assets/images/package/package-4.png" alt="travello" />
          </a>
          <div className="image-badge">
            <p className="pera">Featured</p>
          </div>
        </div>
        <div className="package-content">
          <h4 className="area-name">
            <a href="details-with-slider.html">{tour.title}</a>
          </h4>
          <div className="location">
            <i className="ri-map-pin-line"></i>
            <div className="name">{...locations}</div>
          </div>
          <div className="packages-person">
            <div className="count">
              <i className="ri-time-line"></i>
              <p className="pera">
                {Duration} Days {Duration - 1} Night
              </p>
            </div>
          </div>
          <div className="price-review">
            <div className="d-flex gap-10">
              <p className="light-pera">From</p>
              <p className="pera">{price}</p>
            </div>
            <div className="rating">
              <i className="ri-star-s-fill"></i>
              <p className="pera">4.7 (20 Reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
