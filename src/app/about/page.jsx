import "./about.module.css";

const About = () => {
  return (
    <>
  <section className="inner-heading">
    <div className="container">
      <h1>About US</h1>
      <ul className="xs-breadcumb">
        <li>
          <a href="index.html"> Home / </a> <a href="index.html">Pages /</a>
          About US
        </li>
      </ul>
    </div>
  </section>
  {/*about-info start*/}
  <section className="about-info">
    {/*container start*/}
    <div className="container">
      {/*row start*/}
      <div className="row">
        {/*col start*/}
        <div className="col-md-6 col-sm-push-6">
          <div className="section-title">
            <h3>
              {" "}
              <span>About our Company</span>
            </h3>
            <h4>Nunc porta turpis at leo posuere convallis</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquet, massa ac ornare feugiat, nunc dui auctor ipsum Fusce
              aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed
              posuere eros sapien id quam. Lorem ipsum dolor sit amet, sed
              posuere eros sapien id quam. Lorem ipsum dolor sit amet, sed
              posuere eros sapien id quam. Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="aboutUs-description">
            <div className="row">
              {/*col start*/}
              <div className="col-sm-4 counter-item">
                <div className="single-about">
                  <i className="fa fa-list-ul" aria-hidden="true" />{" "}
                  <span
                    className="counter_number"
                    data-from={1}
                    data-to={25}
                    data-speed={1000}
                  >
                    25
                  </span>
                  <p>year of experience</p>
                </div>
              </div>
              {/*col end*/}
              {/*col start*/}
              <div className="col-sm-4 counter-item">
                <div className="single-about">
                  {" "}
                  <i className="fa fa-thumbs-o-up" aria-hidden="true" />{" "}
                  <span
                    className="counter_number"
                    data-from={1}
                    data-to={1756}
                    data-speed={3000}
                  >
                    1756
                  </span>
                  <p>Happy Customer</p>
                </div>
              </div>
              {/*col end*/}
              {/*col start*/}
              <div className="col-sm-4 counter-item">
                <div className="single-about">
                  {" "}
                  <i className="fa fa-trophy" aria-hidden="true" />{" "}
                  <span
                    className="counter_number"
                    data-from={1}
                    data-to={88}
                    data-speed={4000}
                  >
                    88
                  </span>
                  <p>Professional Awards</p>
                </div>
              </div>
              {/*col end*/}
              {/*col start*/}
            </div>
          </div>
        </div>
        {/*col end*/}
        {/*col start*/}
        <div className="col-md-6 col-sm-pull-6">
          <div className="about-img">
            <figure>
              {" "}
              <img
                src="images/about4.png"
                className="img-responsive"
                alt="Image"
              />
            </figure>
          </div>
        </div>
        {/*col start*/}
      </div>
      {/*row end*/}
    </div>
    {/*container end*/}
  </section>
  {/*about-info end*/}
  {/*get_qoute start*/}
  <section className="get_qoute">
    <div className="container">
      <div className="section-title">
        <h2> Are you ready to take our service?</h2>
        <h4>Nunc porta turpis at leo posuere convallis</h4>
        <p>
          Be brought first whales he signs thing our give were all fowl sea upon
          make firmament called face, together. I third deep days fifth spirit
          you're is you're saw bearing{" "}
        </p>
        <div className="readmore">
          <button className="main-btn btn-1 btn-1e white_color">Submit</button>
        </div>
      </div>
    </div>
  </section>
  {/*get_qoute end*/}
  {/*why_choose_us_sec start*/}
  <section className="why_choose_us_sec">
    <div className="container">
      <div className="section-title">
        <h3>
          Why <span>Choose Us</span>
        </h3>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="why_choose_us_sec_img">
            <img src="images/worker.png" alt="img" className="img-responsive" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <div className="single-why-choose-list">
                {" "}
                <i className="fa fa-users" />
                <h3>Workers</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquet, massa ac ornare feugiat.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-why-choose-list">
                <i className="fa fa-wrench" />
                <h3>Repairs</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquet, massa ac ornare feugiat.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-why-choose-list">
                {" "}
                <i className="fa fa-home" />
                <h3>Home Builds</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquet, massa ac ornare feugiat.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-why-choose-list">
                {" "}
                <i className="fa fa-map-signs" />
                <h3>Map Markers</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquet, massa ac ornare feugiat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*why_choose_us_sec end*/}
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
  )
}

export default About