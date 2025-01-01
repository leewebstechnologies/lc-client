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
                <a href="/">
                  <img
                    className="footer-logo-default"
                    src="images/lacrete_logo.png"
                    alt=""
                  />
                </a>
              </div>
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
                    <i
                      className="fa-brands fa-square-whatsapp"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer-info">
                  <h3 className="footer-title">Links</h3>
                  <ul className="service-link">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/projects">Projects</a>
                    </li>
                    <li>
                      <a href="/blog">blog</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="footer-info">
                  <h3 className="footer-title">Our Services</h3>
                  <ul className="service-link">
                    <li>
                      <a href="/services">Building & Civil Engineering Services</a>
                    </li>
                    <li>
                      <a href="/services">Design & Planning</a>
                    </li>

                    <li>
                      <a href="/services">Building & Maintenance</a>
                    </li>
                    <li>
                      <a href="/services">Steel Work</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="footer-info">
                  <h3 className="footer-title">Contact Us</h3>
                  <ul className="footer-adress">
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>
                        28, Abiodun Shobanjo Street, Agidingbi, Ikeja, Lagos.
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      <span>Call Us : +234 802 875 2742</span>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o" />
                      <span>Email : lacreteconcept@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
