"use client";
// import React, { useState, useEffect } from "react";
import { Brands } from "../components";
// import ProjectsList from "../components/projectsList/ProjectsList";

const Projects = () => {
  // const [selected, setSelected] = useState("all");
  // const list = [
  //   {
  //     id: "all",
  //     title: "All",
  //   },
  //   {
  //     id: "branding",
  //     title: "Branding",
  //   },
  //   {
  //     id: "financing",
  //     title: "Financing",
  //   },
  //   {
  //     id: "marketing",
  //     title: "Marketing",
  //   },
  //   {
  //     id: "promotion",
  //     title: "Promotion",
  //   },
  // ];
  return (
    <>
      {/*inner-heading start*/}
      <section className="inner-heading">
        <div className="container">
          <h1>Project</h1>
          <ul className="xs-breadcumb">
            <li>
              <a href="/home"> Home / </a> <a href="/home">Pages /</a>
              Project
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-gray portfolio-area">
        <div className="container-fluid">
          <div className="section-title">
            <h3>
              OUR RECENT <span>PORTFOLIOS</span>
            </h3>
          </div>
          <div className="row">
            <ul className="container-filter categories-filter">
              <li>
                <a className="categories active" data-filter="*">
                  All Projects
                </a>
              </li>
              <li>
                <a className="categories hvr-link" data-filter=".completed">
                  Completed Projects
                </a>
              </li>
              <li>
                <a className="categories hvr-link" data-filter=".ongoing">
                  Ongoing Projetcs
                </a>
              </li>
              <li>
                <a className="categories hvr-link" data-filter=".designs">
                  Designs
                </a>
              </li>
            </ul>
          </div>
          <div className="portfolio-inner">
            <ul className="row container-masonry  portfolio-posts grid">
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item grid-sizer completed">
                <div className="image-hover-effect">
                  <img src="images/gallery/1.png" alt="img-1" />
                  <div className="caption">
                    <h3>Mansion</h3>
                    <p>Completed Project</p>
                  </div>
                  <div className="link-wrap">
                    <a
                      href="images/gallery/1.png"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item ongoing">
                <div className="image-hover-effect-1">
                  <img src="images/gallery/2.png" alt="img-2" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Check out the most populer sweets</p>
                  </div>
                  <div className="link-wrap">
                    <a
                      href="images/gallery/2.png"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item grid-sizer completed">
                <div className="image-hover-effect-2">
                  <img src="images/gallery/3.png" alt="img-3" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>True running burns more calories</p>
                  </div>
                  <div className="link-wrap">
                    <a
                      href="images/gallery/3.png"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item grid-sizer completed">
                <div className="image-hover-effect-3">
                  {" "}
                  <img src="images/gallery/4.png" alt="img-4" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Check out the most populer sweets</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/4.png"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item completed">
                <div className="image-hover-effect-4">
                  {" "}
                  <img src="images/gallery/5.png" alt="img-5" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>True running burns more calories</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/5.png"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item completed">
                <div className="image-hover-effect-5">
                  <img src="images/gallery/6.png" alt="img-6" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Check out the most populer sweets</p>
                  </div>
                  <div className="link-wrap">
                    <a
                      href="images/gallery/6.png"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item ongoing">
                <div className="image-hover-effect-6">
                  <img src="images/gallery/7.png" alt="img-7" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Check out the most populer sweets</p>
                  </div>
                  <div className="link-wrap">
                    <a
                      href="images/gallery/7.png"
                      title="Ongoing Project"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>
                    
                  </div>
                </div>
              </li>
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item ongoing">
                <div className="serviceWrap">
                  <img src="images/gallery/8.png" alt="img-8" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Lorem ipsum dolor</p>
                  </div>
                  <div className="link-wrap">
                    <a
                      href="images/gallery/8.png"
                      title="Brand Promotion"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>
                
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item ongoing">
                <div className="image-hover-effect">
                  {" "}
                  <img src="images/gallery/9.png" alt="img-1" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>True running burns more calories</p>
                  </div>
                  <div className="link-wrap">
                    {" "}
                    <a
                      href="images/gallery/9.png"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>{" "}
                  
                  </div>
                </div>
              </li>
              {/*col end*/}
              {/*col start*/}
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item ongoing">
                <div className="image-hover-effect-1">
                  <img src="images/gallery/10.png" alt="img-2" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>Check out the most populer sweets</p>
                  </div>
                  <div className="link-wrap">
                    <a
                      href="images/gallery/10.png"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="col-md-2 col-sm-6 col-xs-12 nf-item designs">
                <div className="image-hover-effect-2">
                  {" "}
                  <img src="images/gallery/11.png" alt="img-3" />
                  <div className="caption">
                    <h3>Business Financing</h3>
                    <p>True running burns more calories</p>
                  </div>
                  <div className="link-wrap">
                    <a
                      href="images/gallery/11.png"
                      title="Business Financing"
                      className="lightbox-image"
                    >
                      <i className="fa fa-search" />
                    </a>
                  
                  </div>
                </div>
              </li>      
            </ul>
        
          </div>
        </div>
  
      </section>    
      <Brands />
    </>
  );
};

export default Projects;
