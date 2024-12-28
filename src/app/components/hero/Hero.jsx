import React from "react";

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
              {" "}
              <img
                alt=""
                src="images/dummy.png"
                data-lazyload="images/banner.jpg"
              />
              <div
                className="caption lft large-title tp-resizeme slidertext4"
                data-x="center"
                data-y={160}
                data-speed={600}
                data-start={1600}
              >
                Welcome to Construction Company
              </div>
              <div
                className="caption lft large-title tp-resizeme slidertext1"
                data-x="center"
                data-y={200}
                data-speed={600}
                data-start={2200}
              >
                We Build Big Things For Our Peoples
              </div>
              <div
                className="caption lfb large-title tp-resizeme slidertext2"
                data-x="center"
                data-y={310}
                data-speed={600}
                data-start={2800}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dapibus ex sed eros molestie blandit. Fusce <br />
                sem enim, commodo sit amet diam pharetra, aliquet pulvinar
                purus.
              </div>
              <div
                className="caption lfl large-title tp-resizeme slidertext3"
                data-x="center"
                data-y={370}
                data-speed={600}
                data-start={3500}
              >
                {" "}
                <a
                  href="#"
                  className="main-btn btn-1 btn-1e white_color"
                  data-dismiss="modal"
                  aria-label="Close"
                  data-toggle="modal"
                  data-target=".bs-example-modal-md-2"
                >
                  Get Started
                </a>{" "}
                <a
                  href="contact.html"
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
              {" "}
              <img
                alt=""
                src="images/dummy.png"
                data-lazyload="images/banner-1.jpg"
              />
              <div
                className="caption lft large-title tp-resizeme slidertext4"
                data-x="center"
                data-y={160}
                data-speed={600}
                data-start={1600}
              >
                Welcome to Construction Company
              </div>
              <div
                className="caption lft large-title tp-resizeme slidertext1"
                data-x="center"
                data-y={200}
                data-speed={600}
                data-start={2200}
              >
                We Build Big Things For Our Peoples
              </div>
              <div
                className="caption lfb large-title tp-resizeme slidertext2"
                data-x="center"
                data-y={310}
                data-speed={600}
                data-start={2800}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dapibus ex sed eros molestie blandit. Fusce <br />
                sem enim, commodo sit amet diam pharetra, aliquet pulvinar
                purus.
              </div>
              <div
                className="caption lfl large-title tp-resizeme slidertext3"
                data-x="center"
                data-y={370}
                data-speed={600}
                data-start={3500}
              >
                {" "}
                <a
                  href="#"
                  className="main-btn btn-1 btn-1e white_color"
                  data-dismiss="modal"
                  aria-label="Close"
                  data-toggle="modal"
                  data-target=".bs-example-modal-md-2"
                >
                  Get Started
                </a>{" "}
                <a
                  href="contact.html"
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
              {" "}
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
                Welcome to Construction Company
              </div>
              <div
                className="caption lft large-title tp-resizeme slidertext1"
                data-x="center"
                data-y={200}
                data-speed={600}
                data-start={2200}
              >
                We Build Big Things For Our Peoples
              </div>
              <div
                className="caption lfb large-title tp-resizeme slidertext2"
                data-x="center"
                data-y={310}
                data-speed={600}
                data-start={2800}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dapibus ex sed eros molestie blandit. Fusce <br />
                sem enim, commodo sit amet diam pharetra, aliquet pulvinar
                purus.
              </div>
              <div
                className="caption lfl large-title tp-resizeme slidertext3"
                data-x="center"
                data-y={370}
                data-speed={600}
                data-start={3500}
              >
                {" "}
                <a
                  href="#"
                  className="main-btn btn-1 btn-1e white_color"
                  data-dismiss="modal"
                  aria-label="Close"
                  data-toggle="modal"
                  data-target=".bs-example-modal-md-2"
                >
                  Get Started
                </a>{" "}
                <a
                  href="contact.html"
                  className="main-btn btn-1 btn-1e white_color"
                >
                  Contact Us
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/*slider end*/}
      <div className="quick-quote">
        <div className="container">
          {/*Row Start*/}
          <div className="row">
            <div className="col-md-9">
              <h2>Looking for a quality constructor for your next project?</h2>
            </div>
            <div className="col-md-3">
              <div className="quote-btn">
                <a href="#">get a Quote</a>
              </div>
            </div>
          </div>
          {/*Row End*/}
        </div>
      </div>
    </>
  );
};

export default Hero;
