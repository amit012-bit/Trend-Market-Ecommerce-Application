

import React from "react";
import Banner1 from "../../assets/images/banner_1.png";
import Banner2 from "../../assets/images/banner_2.jpg";
import Banner3 from "../../assets/images/banner_3.jpg";

function CategoryBanner(props) {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Banner1})`
              }}
              data-aos="fade-right"
            >
              <div className="banner_category">
                <a href="/trend-market/shops/Women/Basics">women's</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Banner2})`
              }}
              data-aos="fade-up"
            >
              <div className="banner_category">
                <a href="/trend-market/shops/Kids/Boy">accessories's</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Banner3})`
              }}
              data-aos="fade-left"
            >
              <div className="banner_category">
                <a href="/trend-market/shops/Men/Jackets">men's</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
