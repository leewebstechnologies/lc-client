// import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="tp-banner-container sliderWraper">
        <div className="tp-banner">
          <ul>
            <li
              data-slotamount={7}
              data-transition="pop"
              data-masterspeed={1000}
              data-saveperformance="on"
            >
              <img
                alt="name"
                src="images/dummy.png"
                data-lazyload="images/banner.png"
              />
              <div
                className="caption lft large-title tp-resizeme slidertext4"
                data-x="center"
                data-y={160}
                data-speed={600}
                data-start={1600}
              >
                Welcome to Lacrete Concept Construction Company
              </div>
              <div
                className="caption lft large-title tp-resizeme slidertext1"
                data-x="center"
                data-y={200}
                data-speed={600}
                data-start={2200}
              >
                Willingness to undertake new and challenging assignments.
              </div>
              <div
                className="caption lfb large-title tp-resizeme slidertext2"
                data-x="center"
                data-y={310}
                data-speed={600}
                data-start={2800}
              >
                We deliver top-notch projects
              </div>
              <div
                className="caption lfl large-title tp-resizeme slidertext3"
                data-x="center"
                data-y={370}
                data-speed={600}
                data-start={3500}
              >
                <a
                  href="/contact"
                  className="main-btn btn-1 btn-1e white_color"
                >
                  Contact Us
                </a>
              </div>
            </li>
            <li
              data-slotamount={7}
              data-transition="flip"
              data-masterspeed={1000}
              data-saveperformance="on"
            >
              <img
                alt=""
                src="images/dummy.png"
                data-lazyload="images/banner-1.png"
              />
              <div
                className="caption lft large-title tp-resizeme slidertext4"
                data-x="center"
                data-y={160}
                data-speed={600}
                data-start={1600}
              >
                Welcome to Lacrete Concept Construction Company
              </div>
              <div
                className="caption lft large-title tp-resizeme slidertext1"
                data-x="center"
                data-y={200}
                data-speed={600}
                data-start={2200}
              >
                We Build Quality Projects for Our Client
              </div>
              <div
                className="caption lfb large-title tp-resizeme slidertext2"
                data-x="center"
                data-y={310}
                data-speed={600}
                data-start={2800}
              >
                Willingness to undertake new and challenging assignments.
              </div>
              <div
                className="caption lfl large-title tp-resizeme slidertext3"
                data-x="center"
                data-y={370}
                data-speed={600}
                data-start={3500}
              >
                <a
                  href="/contact"
                  className="main-btn btn-1 btn-1e white_color"
                >
                  Contact Us
                </a>
              </div>
            </li>
            <li
              data-slotamount={7}
              data-transition="slidedown"
              data-masterspeed={1000}
              data-saveperformance="on"
            >
              <img
                alt=""
                src="images/dummy.png"
                data-lazyload="images/banner-2.jpg"
              />
              <div
                className="caption lft large-title tp-resizeme slidertext4"
                data-x="center"
                data-y={160}
                data-speed={600}
                data-start={1600}
              >
                Welcome to Lacrete Concept Construction Company
              </div>
              <div
                className="caption lft large-title tp-resizeme slidertext1"
                data-x="center"
                data-y={200}
                data-speed={600}
                data-start={2200}
              >
                We Build Top-Notch Projects
              </div>
              <div
                className="caption lfb large-title tp-resizeme slidertext2"
                data-x="center"
                data-y={310}
                data-speed={600}
                data-start={2800}
              >
                Our approach to all customer services is based upon an
                understanding of organizational needs and problems
              </div>
              <div
                className="caption lfl large-title tp-resizeme slidertext3"
                data-x="center"
                data-y={370}
                data-speed={600}
                data-start={3500}
              >
                <a
                  href="/contact"
                  className="main-btn btn-1 btn-1e white_color"
                >
                  Contact Us
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="quick-quote">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h2>Looking for a quality constructor for your next project?</h2>
            </div>
            <div className="col-md-3">
              <div className="quote-btn">
                <a href="/contact">get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
