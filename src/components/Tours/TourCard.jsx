import Link from "next/link";

function TourCard({ tour }) {
  console.log(tour);
  const { title, price, Duration, images, locations, IsFeatured, id } = tour;
  return (
  
      <div className="package-card h-calc">
        <div className="package-img imgEffect4">
          <Link href={`/tours/${id}`}>
            {images && images[0] ? <img src={images[0].cloudImage} alt="travello" />:""}
          </Link>
          {IsFeatured ? (
            <div className="image-badge">
              <p className="pera">Featured</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="package-content">
          <h4 className="area-name">
            <a href="details-with-slider.html">{title ? title : ""}</a>
          </h4>
          <div className="location">
            <i className="ri-map-pin-line"></i>
            <div className="name"> {locations ? locations.join(", ") : ""}</div>
          </div>
          <div className="packages-person">
            <div className="count">
              <i className="ri-time-line"></i>
              <p className="pera">
                {Duration ? Duration : ""} Days {Duration ? Duration : "" - 1}{" "}
                Night
              </p>
            </div>
          </div>
          <div className="price-review">
            <div className="d-flex gap-10">
              <p className="light-pera">From</p>
              <p className="pera">{price ? price : ""}</p>
            </div>
            <div className="rating">
              <i className="ri-star-s-fill"></i>
              <p className="pera">4.7 (20 Reviews)</p>
            </div>
          </div>
        </div>
      </div>

  );
}

export default TourCard;
