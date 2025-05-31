import Link from "next/link";
function TourCardV2({ tour }) {
  const { title, price, Duration, images, locations, IsFeatured, id } = tour;
  return (
      <div className="package-card">
        <div className="package-img imgEffect4">
          <Link href={`/tours/${id}`}>
            {images && images[0] ? (
              <img src={images[0].cloudImage} alt="travello" />
            ) : (
              ""
            )}
          </Link>
          {IsFeatured ? (
            <div className="image-badge">
              <p className="pera">Featured</p>
            </div>
          ) : (
            ""
          )}
          <div className="fav-badge">
            <i className="ri-heart-fill"></i>
          </div>
        </div>
        <div className="package-content">
          <div className="location">
            <i className="ri-map-pin-line"></i>
            <div className="name"> {locations ? locations.join(", ") : ""}</div>
          </div>
          <h4 className="area-name">
            <Link href={`/tour/${id ? id : ""}`}>{title ? title : ""}</Link>
          </h4>
          <div className="packages-person mb-16">
            <div className="count">
              <i className="ri-time-line"></i>
              <p className="pera">
                {Duration ? Duration : ""} Hours
                {Duration
                  ? Duration / 24 == 0.5
                    ? "Full Day"
                    : Duration / 24 == 0.5
                    ? "Half Day"
                    : ""
                  : ""}
              </p>
            </div>
          </div>
          <div className="price-review mb-0">
            <div className="d-flex gap-10">
              <p className="light-pera">From</p>
              <p className="pera"> {price ? "$"+ price : ""}</p>
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

export default TourCardV2;
