import React from "react";

const Contact = () => {
  return (
    <>
      <section className="inner-heading">
        <div className="container">
          <h1>Contact Us</h1>
          <ul className="xs-breadcumb">
            <li>
              <a href="index.html"> Home / </a> <a href="index.html">Pages /</a>
              Contact
            </li>
          </ul>
        </div>
      </section>
      {/*inner-heading end*/}
      {/*inner content start*/}
      <section className="contactWrap">
        {/*container start*/}
        <div className="container">
          <div className="section-title">
            <h3>
              Get in <span>touch</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed
              posuere eros sapien id quam.{" "}
            </p>
          </div>
          {/*row start*/}
          <div className="row serviceList">
            {/*col start*/}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="contact-item">
                <div className="fig_caption">
                  <div className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                  </div>
                  <div className="details">
                    <h3>Visit our office</h3>
                    <p>
                      {" "}
                      <strong>13AH, SAN FRANCISCO,</strong> <br />
                      NEW YORK, UNITED STATES
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="contact-item">
                <div className="fig_caption">
                  <div className="icon">
                    <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
                  </div>
                  <div className="details">
                    <h3>Mail us</h3>
                    <p>
                      {" "}
                      <strong>Yourdomain@gmail.com </strong> <br />
                      Yourdomain@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="contact-item">
                <div className="fig_caption">
                  <div className="icon">
                    <i className="fa fa-phone" aria-hidden="true" />{" "}
                  </div>
                  <div className="details">
                    <h3>Visit our office</h3>
                    <p>
                      {" "}
                      <strong>CALL US NOW </strong> <br />
                      703-288-3128
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="contact-item">
                <div className="fig_caption">
                  <div className="icon">
                    <i className="fa fa-clock-o" aria-hidden="true" />{" "}
                  </div>
                  <div className="details">
                    <h3>Working hour</h3>
                    <p>
                      {" "}
                      <strong>Mon - Sat : 10am to 7pm</strong> <br />
                      Sunday : Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*col end*/}
          </div>
          {/*row end*/}
          <div className="section-title margin_t40">
            <h3>
              Drop <span>your massege</span>
            </h3>
          </div>
          <form
            action="#"
            method="POST"
            id="xs-contact-form"
            className="xs-form"
          >
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your name"
                  id="xs_contact_name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control invaild"
                  name="email"
                  placeholder="Your email"
                  id="xs_contact_email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="phone-number"
                  placeholder="Your phone number"
                  id="xs_contact_phone"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="Subject"
                  placeholder="Subject"
                  id="xs_contact_subject"
                />
              </div>
            </div>
            <textarea
              name="massage"
              placeholder="Message"
              id="x_contact_massage"
              className="form-control message-box"
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <div className="readmore text-center">
              <button className="main-btn btn-1 btn-1e">SEND MESSAGE</button>
            </div>
          </form>
        </div>
        {/*container end*/}
      </section>
      {/*inner content end*/}
      <div className="xs-map-sec">
        <div className="xs-maps-wraper">
          <div className="map">
            <iframe src="https://maps.google.com/maps?width=100&height=600&hl=en&q=New%20York%2C%20USA+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" />
          </div>
        </div>
      </div>
      {/*brand-section start*/}
      <div className="brand-section">
        {/*container start*/}
        <div className="container">
          <div className="brand-content">
            <ul className="brand-slider">
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="images/company-logo/1.png"
                      alt=""
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="images/company-logo/2.png"
                      alt=""
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="images/company-logo/3.png"
                      alt=""
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="images/company-logo/4.png"
                      alt=""
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="images/company-logo/5.png"
                      alt=""
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="images/company-logo/6.png"
                      alt=""
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="images/company-logo/7.png"
                      alt=""
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="images/company-logo/8.png"
                      alt=""
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*container end*/}
      </div>
    </>
  );
};

export default Contact;
