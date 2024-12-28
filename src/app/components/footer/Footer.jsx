import "./footer.module.css";

const Footer = () => {
  return (
    <footer className="footer-sec">
      {/*container start*/}
      <div className="container">
        {/*row start*/}
        <div className="row">
          {/*col start*/}
          <div className="col-md-4 col-sm-12">
            <div className="footer-info">
              <div className="footer-logo">
                {" "}
                <a href="index.html">
                  <img
                    className="footer-logo-default"
                    src="images/footer-logo-default.png"
                    alt=""
                  />{" "}
                </a>{" "}
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed
                posuere eros sapien id quam.{" "}
              </p>
              <ul className="footer-social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-google-plus-square"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-vimeo-square" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*col end*/}
          {/*col start*/}
          <div className="col-md-8">
            {/*row start*/}
            <div className="row">
              {/*col start*/}
              <div className="col-md-3 col-sm-6">
                <div className="footer-info">
                  <h3 className="footer-title">Usefull Links</h3>
                  <ul className="service-link">
                    <li>
                      {" "}
                      <a href="index.html">Home</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="about.html">About Us</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="service.html">Services</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="projects-four.html">Gallery</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="blog.html">blog</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="faq.html">Faq</a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/*col end*/}
              {/*col start*/}
              <div className="col-md-4 col-sm-6">
                <div className="footer-info">
                  <h3 className="footer-title">Our Services</h3>
                  <ul className="service-link">
                    <li>
                      {" "}
                      <a href="#">Design &amp; Planing</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Garden care</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Snow removal</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Preparing landscape</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Forest planing</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Fence grate</a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/*col end*/}
              {/*col start*/}
              <div className="col-md-5 col-sm-6">
                <div className="footer-info">
                  <h3 className="footer-title">Contact Us</h3>
                  <ul className="footer-adress">
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>8500 lorem, New Ispum, Dolor amet sit 12301 </span>
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      <span>Call Us : 0934 343 343</span>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o" />
                      <span>Email : info@your-site.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/*col end*/}
            </div>
            {/*row end*/}
          </div>
          {/*col end*/}
        </div>
        {/*row end*/}
      </div>
      {/*container end*/}
    </footer>
  );
};

export default Footer;
