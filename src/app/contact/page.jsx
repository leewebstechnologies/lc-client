"use client";
import React from "react";
import { Brands } from "../components";
import { useState } from "react";
import client, { sendEmailRequest } from "../../../sanity/client";

const Contact = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    phone: "",
    _type: "contact",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message, subject, phone } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setError("Empty field(s) ");
      return;
    }
    const contact = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    sendEmailRequest({
      data: contact,
      success: () => setIsFormSubmitted(true),
      fail: () => setLoading(false),
    })
  };

  return (
    <>
      <section className="inner-heading">
        <div className="container">
          <h1>Contact Us</h1>
          <ul className="xs-breadcumb">
            <li>
              <a href="/"> Home / </a> <a href="/">Pages /</a>
              Contact
            </li>
          </ul>
        </div>
      </section>
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
              posuere eros sapien id quam.
            </p>
          </div>
          {/*row start*/}
          <div className="row serviceList">
            {/*col start*/}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="contact-item">
                <div className="fig_caption">
                  <div className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                  </div>
                  <div className="details">
                    <h3>Visit our office</h3>
                    <p>
                      <strong> 28, Abiodun Shobanjo Street, Agidingbi,</strong>
                      <br />
                      Ikeja, Lagos.
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
                      <strong>lacreteconcept@gmail.com</strong>
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
                      <strong>CALL US NOW </strong> <br />
                      08028752742, 08157360363
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="contact-item">
                <div className="fig_caption">
                  <div className="icon">
                    <i className="fa fa-clock-o" aria-hidden="true" />{" "}
                  </div>
                  <div className="details">
                    <h3>Working hour</h3>
                    <p>
                      <strong>Monday - Friday : 9am to 5pm</strong> <br />
                      Weekend : Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-title margin_t40">
            <h3>
              Drop <span>your massege</span>
            </h3>
          </div>
          {!isFormSubmitted ? (
            <form
              id="xs-contact-form"
              className="xs-form"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your name"
                    id="xs_contact_name"
                    value={name}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control invaild"
                    name="email"
                    placeholder="Your email"
                    id="xs_contact_email"
                    value={email}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    placeholder="Your phone number"
                    id="xs_contact_phone"
                    value={phone}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    id="xs_contact_subject"
                    value={subject}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
              </div>
              <textarea
                defaultValue={message}
                placeholder="Message"
                id="x_contact_massage"
                className="form-control message-box"
                cols={30}
                rows={10}
                onChange={handleChangeInput}
                required
                name="message"
              />
              <div className="readmore text-center">
                <button
                  className="main-btn btn-1 btn-1e"
                  type="submit"
                >
                  {loading? "Loading..." : "Submit"}
                </button>
              </div>
              {error !== "" && <p>{error}</p>}
            </form>
          ) : (
            <div>
              <h3 className="head-text">Thank you for getting in touch!</h3>
            </div>
          )}
        </div>
        {/*container end*/}
      </section>
      {/*inner content end*/}
      <div className="xs-map-sec">
        <div className="xs-maps-wraper">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63411.34650611288!2d3.2885464919797114!3d6.62092010694631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s28%20abiodun%20shobajo%20street!5e0!3m2!1sen!2sng!4v1735844278596!5m2!1sen!2sng"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <Brands />
    </>
  );
};

export default Contact;
