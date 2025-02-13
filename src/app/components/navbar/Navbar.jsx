import logo from "../../../images/logo.png";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="user-wrap">
                <span>
                  <a href="https://wa.me/+2348028752742">+234 802 875 2742</a>
                </span>
                <div className="clearfix" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="top-left">
                <p>Welcome to Lacrete Concept</p>
              </div>
            </div>
            <div className="col-md-5 col-sm-6 col-xs-6">
              <ul className="top-social-icons">
                <li>
                  <a href="https://web.facebook.com/Lacreteconcept">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@lacrete_concept?_t=ZM-8tR5goUupDp&_r=1">
                    <i className="fa-brands fa-tiktok" aria-hidden="true" />
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/lacrete2025">
                    <i className="fa-brands fa-instagram" aria-hidden="true" />
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
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-lower">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <div className="logo-outer">
                <div className="logo">
                  <a href="/">
                    <img
                      className="logo-default"
                      src="images/logo.png"
                      alt=""
                      title=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <div className="nav-outer clearfix menu-bg">
                <nav className="main-menu">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className="current">
                        <a className="hvr-link" href="/">
                          Home
                        </a>
                      </li>
                      <li>
                        <a className="hvr-link" href="/about">
                          About
                        </a>
                      </li>
                      <li>
                        <a className="hvr-link" href="/projects">
                          Projects
                        </a>
                      </li>
                      <li>
                        <a className="hvr-link" href="/blog">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="hvr-link" href="/contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="clearfix" />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-header">
        <div className="container clearfix">
          <div className="row">
            <div className="col-md-5 col-sm-5">
              <div className="logo">
                {" "}
                <a href="#" className="img-responsive">
                  <img
                    className="logo-default"
                    src="images/logo.png"
                    alt=""
                    title=""
                  />
                </a>{" "}
              </div>
            </div>
            <div className="col-md-7 col-sm-7">
              <nav className="main-menu">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="icon-bar" /> <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    <li className="current">
                      <a className="hvr-link" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="hvr-link" href="/about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="hvr-link" href="/projects">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a className="hvr-link" href="/blog">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="hvr-link" href="/contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
