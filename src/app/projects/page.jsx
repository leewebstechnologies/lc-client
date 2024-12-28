import React from "react";

const Projects = () => {
  return (
    <>
      <section className="inner-heading">
        <div className="container">
          <h1>Project</h1>
          <ul className="xs-breadcumb">
            <li>
              <a href="index.html"> Home / </a> <a href="index.html">Pages /</a>{" "}
              Project
            </li>
          </ul>
        </div>
      </section>
      {/*inner-heading end*/}
      {/*portfolio-area start*/}
      <section className="bg-gray portfolio-area">
        {/*container start*/}
        <div className="container-fluid">
          <div className="section-title">
            <h3>
              OUR RECENT <span>PORTFOLIOS</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed
              posuere eros sapien id quam.{" "}
            </p>
          </div>
          {/*row start*/}
          <div className="row">
            <ul className="container-filter categories-filter">
              <li>
                {" "}
                <a className="categories active" data-filter="*">
                  All Projects
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="categories hvr-link" data-filter=".branding">
                  Branding
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="categories hvr-link" data-filter=".financing">
                  Financing
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="categories hvr-link" data-filter=".marketing">
                  Marketing
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="categories hvr-link" data-filter=".promotion">
                  Promotion
                </a>{" "}
              </li>
            </ul>
          </div>
          {/*row end*/}
          <div className="portfolio-inner">
            {/*row start*/}
            <ul className="row container-masonry  portfolio-posts grid">
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item grid-sizer branding">
                <div className="image-hover-effect">
                  {" "}
                  <img src="images/gallery/01.jpg" alt="img-1" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>True running burns more calories</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/01.jpg"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item financing promotion">
                <div className="image-hover-effect-1">
                  {" "}
                  <img src="images/gallery/02.jpg" alt="img-2" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Check out the most populer sweets</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/02.jpg"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item grid-sizer marketing branding promotion">
                <div className="image-hover-effect-2">
                  {" "}
                  <img src="images/gallery/03.jpg" alt="img-3" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>True running burns more calories</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/03.jpg"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item branding marketing">
                <div className="image-hover-effect-3">
                  {" "}
                  <img src="images/gallery/04.jpg" alt="img-4" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Check out the most populer sweets</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/04.jpg"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item financing marketing branding">
                <div className="image-hover-effect-4">
                  {" "}
                  <img src="images/gallery/05.jpg" alt="img-5" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>True running burns more calories</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/05.jpg"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item financing marketing branding">
                <div className="image-hover-effect-5">
                  {" "}
                  <img src="images/gallery/06.jpg" alt="img-6" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Check out the most populer sweets</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/06.jpg"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item financing marketing branding">
                <div className="image-hover-effect-6">
                  {" "}
                  <img src="images/gallery/07.jpg" alt="img-7" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Check out the most populer sweets</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/07.jpg"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item financing marketing branding">
                <div className="serviceWrap">
                  {" "}
                  <img src="images/gallery/08.jpg" alt="img-8" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Lorem ipsum dolor</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/08.jpg"
                      title="Brand Promotion"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item grid-sizer branding">
                <div className="image-hover-effect">
                  {" "}
                  <img src="images/gallery/01.jpg" alt="img-1" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>True running burns more calories</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/01.jpg"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item financing promotion">
                <div className="image-hover-effect-1">
                  {" "}
                  <img src="images/gallery/02.jpg" alt="img-2" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Check out the most populer sweets</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/02.jpg"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item grid-sizer marketing branding promotion">
                <div className="image-hover-effect-2">
                  {" "}
                  <img src="images/gallery/03.jpg" alt="img-3" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>True running burns more calories</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/03.jpg"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item branding marketing">
                <div className="image-hover-effect-3">
                  {" "}
                  <img src="images/gallery/04.jpg" alt="img-4" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Check out the most populer sweets</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/04.jpg"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                    <a href="projects-single.html">
                      <i className="fa fa-link" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
            </ul>
            {/*row end*/}
          </div>
        </div>
        {/*container end*/}
      </section>
      {/*portfolio-area end*/}
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

export default Projects;
