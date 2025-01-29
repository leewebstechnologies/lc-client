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
                  <a href="https://web.facebook.com/profile.php?id=61571781196207">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/Aliu94992120">
                    <i className="fa fa-twitter-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/aliu-ajibade-a43210139">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+2348028752742"
                    target="_link"
                    rel="no referrer"
                  >
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
                      <a href="/about">
                        Building / Civil Designs (Building Plan & Structural
                        Drawings)
                      </a>
                    </li>
                    <li>
                      <a href="/about">
                        Building & Civil Construction Services
                      </a>
                    </li>

                    <li>
                      <a href="/about">Building Renovation & Maintenance</a>
                    </li>
                    <li>
                      <a href="/about">Steel Works & Planning</a>
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
