import Link from "next/link";
function HeaderSearchComponent() {
    return ( 
    <>
        {/* <!-- Search box --> */}
        <div className="search-container">
            <div className="top-section">
                <div className="search-icon">
                    <i className="ri-search-line"></i>
                </div>
                <div className="modal-search-box">
                    <input type="text" id="searchField" className="search-field"
                        placeholder="Destination, Agency, Country"/>
                    <button id="closeSearch" className="close-search-btn">
                        <kbd className="light-text"> ESC </kbd>
                    </button>
                </div>
            </div>
            <div className="body-section">
                <div className="row">
                    <div className="col-md-8">
                        <ul className="listing">
                            <li>
                                <h4 className="search-label">Recent</h4>
                            </li>
                            <li className="single-list">
                                <Link href="details-with-slider.html">
                                    <div className="search-flex">
                                        <div className="content-img">
                                            <img src="/assets/images/gallery/search-img-1.jpeg" alt="travello"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title line-clamp-1">
                                                Dubai by Night City Tour with Fountain show
                                            </h4>
                                            <p className="pera line-clamp-2">
                                                Wonderful evening escapade starting at Madinat
                                                Jumeirah to the musical fountains to see another.
                                                Wonderful evening escapade starting at Madinat
                                                Jumeirah to the musical fountains to see another
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="right-section" id="filterMenu">
                            <h4 className="title">Filter Options</h4>
                            {/* <!-- List of Filter --> */}
                            <ul className="listing">
                                <li>
                                    <h4 className="search-label">Post Type</h4>
                                </li>
                                <li className="single-list">
                                    <div className="d-flex align-items-center gap-8">
                                        <label className="checkbox-label">
                                            <input className="checkbox-style" type="checkbox" value="remember"
                                                name="remember"/>
                                            <span className="checkmark-style"></span>
                                        </label>
                                        <div className="content">
                                            <p className="pera">Posts (3)</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="div">
                        <div className="filter_menu"></div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- / End-Search --> */}
    </> );
}

export default HeaderSearchComponent;