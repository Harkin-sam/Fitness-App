import React from "react";
import "./HeroBanner.css";
import { Fragment } from "react";

import HeroBannerImage from "../assets/images/banner-3.jpg";

function HeroBanner() {
  return (
    <Fragment>
      <div className="banner_container">

        <div className="cols">
          <div className="col col-left">
            <div className="copy">
              <div className="header"> Fitness Club</div>
              <div className="sub-header">
              Sweat, Smile <br /> And Repeat
              </div>

              <div className="info">
                Check out out most effective exercises personalized for you
              </div>

              <button>
              Explore Exercises
              </button>
              
            </div>
          </div>

          <div className="col col-right">
            <div className="img-wrapper">
                <img src={HeroBannerImage} alt="" />
              </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default HeroBanner;





// for later usage
{/* <div className="loader-text block">
          <h1 className="loader-text "> amw-soon</h1>
        </div>

        <div className="revealer"></div>
        <div className="pre-loader block">
          <div className="loader-wrapper">
            <div className="loader"></div>
          </div>
        </div> */}


// image address : https://i.pinimg.com/736x/56/46/e5/5646e5409e224e143537ed0a144cdc56.jpg

// https://i.pinimg.com/736x/f2/31/17/f231175cc4af23ccb0e07f3db7900397.jpg