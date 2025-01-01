import Image from "next/image";
import styles from "./page.module.css";

import { Hero, Welcome, Brands } from "./components/index";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <div className="counter">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 counter-item">
              <div className="counterbox">
                <div className="counter-icon">
                  <i className="fa fa-list-ul" aria-hidden="true" />
                </div>
                <div className="counter_area">
                  <span>Many </span>
                  <span className="counter-text">
                    years of experience
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 counter-item">
              <div className="counterbox">
                <div className="counter-icon">
                  <i className="fa fa-users" aria-hidden="true" />
                </div>
                <div className="counter_area">
                  <span>Team</span>
                  <span className="counter-text"> of experts</span>{" "}
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 counter-item">
              <div className="counterbox">
                <div className="counter-icon">
                  <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                </div>
                <div className="counter_area">
                  <span>Countless number</span>
                  <span className="counter-text"> happy clients</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="whychoose-wrap">
        {/*container start*/}
        <div className="container">
          {/*row start*/}
          <div className="row">
            {/*col start*/}
            <div className="col-md-6">
              <div className="section-title">
                <h3>
                  Our special support
                  <br />
                  <span>Why Choose Us </span>
                </h3>
                <p>
                  LA CRETE CONCEPT encourages employees to participate in safety
                  courses, and other CASHES training programs. We are committed
                  to ensuring a clean and healthy environment especially in the
                  course of work. Every effort will be concentrated towards
                  minimization of noise, and other pollution agents released
                  during our jobs. It is expected of every employee to provide
                  healthy, safe and environmentally accepted conditions both at
                  work and at home. All jobs executed by this company shall
                  comply with accepted codes of standard practices. All
                  specifications stipulated in the drawings and contract
                  documents must be strictly complied with. Necessary
                  precautions must be taken and safe work practices and methods
                  employed throughout the execution of the job.
                </p>
              </div>
              <div className="whychoose-description">
                <ul className="row">
                  <li className="col-md-6">Expert &amp; Professional </li>
                  <li className="col-md-6">Professional Approach</li>
                  <li className="col-md-6"> High Quality Work</li>
                  <li className="col-md-6">Satisfaction Guarantee</li>
                  <li className="col-md-6"> Quick In Response</li>
                  <li className="col-md-6">24/7 Emergency</li>
                </ul>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-6">
              <div className="about-video-item">
                <div className="about-video-img">
                  {" "}
                  <img src="images/welcome-1.jpg" alt="" />{" "}
                  <a
                    href="https://www.youtube.com/watch?v=Vn_FGpZJqUs"
                    className="video-play mfp-iframe xs-video"
                  >
                    <i className="fa fa-play" />
                  </a>{" "}
                </div>
              </div>
            </div>
            {/*col end*/}
          </div>
          {/*row end*/}
        </div>
        {/*container end*/}
      </section>
      {/*whychoose-wrap end*/}
      {/*Testimonials Start*/}
      <div className="testimonials-wrap">
        <div className="container">
          <div className="section-title">
            <h3 className="white_color">Testimonials</h3>
          </div>
          <ul className="owl-carousel">
            <li className="item">
              <div className="testiWrp">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  imperdiet odio a lectus dictum, et porttitor libero
                  condimentum. Donec sollicitudin ex eleifend justo consectetur
                  lobortis.{" "}
                </p>
                <div className="clientInfo">
                  <div className="clientImg">
                    <img alt="" src="images/testimonial-1.jpg" />
                  </div>
                  <div className="name">
                    Jessica Jeni{" "}
                    <span className="white_color">Lorem Ispum</span>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </li>
            <li className="item">
              <div className="testiWrp">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  imperdiet odio a lectus dictum, et porttitor libero
                  condimentum. Donec sollicitudin ex eleifend justo consectetur
                  lobortis.{" "}
                </p>
                <div className="clientInfo">
                  <div className="clientImg">
                    <img alt="" src="images/testimonial-1.jpg" />
                  </div>
                  <div className="name">
                    Jessica Jeni{" "}
                    <span className="white_color">Lorem Ispum</span>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </li>
            <li className="item">
              <div className="testiWrp">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  imperdiet odio a lectus dictum, et porttitor libero
                  condimentum. Donec sollicitudin ex eleifend justo consectetur
                  lobortis.{" "}
                </p>
                <div className="clientInfo">
                  <div className="clientImg">
                    <img alt="" src="images/testimonial-1.jpg" />
                  </div>
                  <div className="name">
                    Jessica Jeni{" "}
                    <span className="white_color">Lorem Ispum</span>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </li>
            <li className="item">
              <div className="testiWrp">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  imperdiet odio a lectus dictum, et porttitor libero
                  condimentum. Donec sollicitudin ex eleifend justo consectetur
                  lobortis.{" "}
                </p>
                <div className="clientInfo">
                  <div className="clientImg">
                    <img alt="" src="images/testimonial-1.jpg" />
                  </div>
                  <div className="name">
                    Jessica Jeni{" "}
                    <span className="white_color">Lorem Ispum</span>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Brands />
    </>
  );
}
