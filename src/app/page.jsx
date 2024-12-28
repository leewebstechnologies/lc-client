import Image from "next/image";
import styles from "./page.module.css";

import { Navbar, Hero, Welcome, Brands, Footer } from "./components/index";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/*about-info start*/}
      <Welcome />
      {/*about-info end*/}
      {/*services start*/}
      <section className="services bg-gray">
        {/*container start*/}
        <div className="container">
          <div className="section-title">
            <h3>
              OUR BEST <span>SERVICES</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Fusce
              aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed
              posuere eros sapien id quam.{" "}
            </p>
          </div>
          {/*row start*/}
          <div className="row serviceList">
            {/*col start*/}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-item">
                <div className="fig_caption">
                  <div className="icon">
                    <i className="fa fa-users" />{" "}
                  </div>
                  <div className="details">
                    <h3>
                      <a href="service-signle.html">Workers</a>
                    </h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce aliquet, massa ac ornare feugiat, nunc dui auctor
                      ipsum..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-item">
                <div className="fig_caption">
                  <div className="icon">
                    <i className="fa fa-wrench" />{" "}
                  </div>
                  <div className="details">
                    <h3>
                      <a href="service-signle.html">Repairs</a>
                    </h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet massa ac ornare feugiat,
                      consectetur adipiscing elit. Fusce aliquet, massa ac
                      ornare feugiat, nunc dui auctor ipsum massa ac ornare
                      feugiat..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-item">
                <div className="fig_caption">
                  <div className="icon">
                    {" "}
                    <i className="fa fa-home" />{" "}
                  </div>
                  <div className="details">
                    <h3>
                      <a href="service-signle.html">Home Builds</a>
                    </h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce aliquet, massa ac ornare feugiat, nunc dui auctor
                      ipsum..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-item">
                <div className="fig_caption">
                  <div className="icon">
                    <i className="fa fa-map-signs" />{" "}
                  </div>
                  <div className="details">
                    <h3>
                      <a href="service-signle.html">Map Markers</a>
                    </h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, massa ac ornare feugiat massa
                      ac ornare feugiat, consectetur adipiscing elit. Fusce
                      aliquet, massa ac ornare feugiat, nunc dui auctor ipsum..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-item">
                <div className="fig_caption">
                  <div className="icon">
                    <i className="fa fa-universal-access" />{" "}
                  </div>
                  <div className="details">
                    <h3>
                      <a href="service-signle.html">Conference </a>
                    </h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce aliquet, massa ac ornare feugiat, nunc dui auctor
                      ipsum..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-item">
                <div className="fig_caption">
                  <div className="icon">
                    <i className="fa fa-rocket" />{" "}
                  </div>
                  <div className="details">
                    <h3>
                      <a href="service-signle.html">UpLift</a>
                    </h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce aliquet, massa ac ornare feugiat, nunc dui auctor
                      ipsum..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*col end*/}
          </div>
          {/*row end*/}
          <div className="readmore text-center">
            <button className="main-btn btn-1 btn-1e">All Services</button>
          </div>
        </div>
        {/*container end*/}
      </section>
      {/*services end*/}
      {/*counter start*/}
      <div className="counter">
        {/*container start*/}
        <div className="container">
          {/*row start*/}
          <div className="row">
            {/*col start*/}
            <div className="col-md-3 col-sm-6 col-xs-12 counter-item">
              <div className="counterbox">
                <div className="counter-icon">
                  <i className="fa fa-list-ul" aria-hidden="true" />
                </div>
                <div className="counter_area">
                  <span
                    className="counter-number"
                    data-from={1}
                    data-to={25}
                    data-speed={1000}
                  >
                    25
                  </span>{" "}
                  <span className="counter-text">year of experience</span>{" "}
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-3 col-sm-6 col-xs-12 counter-item">
              <div className="counterbox">
                <div className="counter-icon">
                  <i className="fa fa-users" aria-hidden="true" />
                </div>
                <div className="counter_area">
                  {" "}
                  <span
                    className="counter-number"
                    data-from={1}
                    data-to={55}
                    data-speed={2000}
                  >
                    55
                  </span>{" "}
                  <span className="counter-text">Expert</span>{" "}
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-3 col-sm-6 col-xs-12 counter-item">
              <div className="counterbox">
                <div className="counter-icon">
                  <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                </div>
                <div className="counter_area">
                  {" "}
                  <span
                    className="counter-number"
                    data-from={1}
                    data-to={1756}
                    data-speed={3000}
                  >
                    1756
                  </span>{" "}
                  <span className="counter-text">Happy Customer</span>{" "}
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
            <div className="col-md-3 col-sm-6 col-xs-12 counter-item">
              <div className="counterbox">
                <div className="counter-icon">
                  <i className="fa fa-trophy" aria-hidden="true" />
                </div>
                <div className="counter_area_1">
                  {" "}
                  <span
                    className="counter-number"
                    data-from={1}
                    data-to={88}
                    data-speed={4000}
                  >
                    88
                  </span>{" "}
                  <span className="counter-text">Professional Awards</span>
                </div>
              </div>
            </div>
            {/*col end*/}
            {/*col start*/}
          </div>
          {/*row end*/}
        </div>
        {/*container end*/}
      </div>
      {/*counter end*/}
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
              <li className="col-md-3 col-sm-6 col-xs-12 nf-item grid-sizer branding">
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
              <li className="col-md-3 col-sm-6 col-xs-12 nf-item financing promotion">
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
              <li className="col-md-3 col-sm-6 col-xs-12 nf-item grid-sizer marketing branding promotion">
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
              <li className="col-md-3 col-sm-6 col-xs-12 nf-item branding marketing">
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
              <li className="col-md-3 col-sm-6 col-xs-12 nf-item financing marketing branding">
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
              <li className="col-md-3 col-sm-6 col-xs-12 nf-item financing marketing branding">
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
              <li className="col-md-3 col-sm-6 col-xs-12 nf-item financing marketing branding">
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
              <li className="col-md-3 col-sm-6 col-xs-12 nf-item financing marketing branding">
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
            </ul>
            {/*row end*/}
          </div>
        </div>
        {/*container end*/}
      </section>
      {/*portfolio-area end*/}
      {/*whychoose-wrap start*/}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed
                  posuere eros sapien id quam. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Fusce aliquet,
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
      {/*Testimonials End*/}
      {/*blogWrapper start*/}
      <section className="blogWrapper">
        {/*container start*/}
        <div className="container">
          <div className="section-title">
            <h3>
              Our Latest<span> Blog</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed
              posuere eros sapien id quam.{" "}
            </p>
          </div>
          {/*row start*/}
          <ul className="row blog-grid">
            {/*col start*/}
            <li className="col-md-4 col-sm-12 ">
              <div className="blog-inter">
                <figure className="style-greens-two green">
                  {" "}
                  <img src="images/blog.jpg" alt="sq-sample2" />
                  <div>
                    <i className="fa fa-plus" />
                  </div>
                  <a href="blog.html" />{" "}
                </figure>
                <div className="post-tittle">
                  <h4>
                    <a href="#">Duis ultricies aliquet mauris</a>
                  </h4>
                </div>
                <ul className="blogDate">
                  <li>
                    {" "}
                    <i className="fa fa-user" aria-hidden="true" />
                    <span>Admin</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-calendar" aria-hidden="true" />{" "}
                    <span>23 Dec 2017</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-comments" aria-hidden="true" />{" "}
                    <span> 5 Comments</span>{" "}
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem
                  vel neque rhoncus dignissim. Ut et eros rhoncus, gravida
                  tellus auctor, lobortis diam. In eu porta purus.
                </p>
              </div>
            </li>
            {/*col end*/}
            {/*col start*/}
            <li className="col-md-4 col-sm-12 ">
              <div className="blog-inter">
                <figure className="style-greens-two green">
                  {" "}
                  <img src="images/blog.jpg" alt="sq-sample2" />
                  <div>
                    <i className="fa fa-plus" />
                  </div>
                  <a href="blog.html" />{" "}
                </figure>
                <div className="post-tittle">
                  <h4>
                    <a href="#">
                      Maecenas quis sem vel neque rhoncus dignissim
                    </a>
                  </h4>
                </div>
                <ul className="blogDate">
                  <li>
                    {" "}
                    <i className="fa fa-user" aria-hidden="true" />
                    <span>Admin</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-calendar" aria-hidden="true" />{" "}
                    <span>23 Dec 2017</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-comments" aria-hidden="true" />{" "}
                    <span> 5 Comments</span>{" "}
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem
                  vel neque rhoncus dignissim. Ut et eros rhoncus, gravida
                  tellus auctor, lobortis diam. In eu porta purus.
                </p>
              </div>
            </li>
            {/*col end*/}
            {/*col start*/}
            <li className="col-md-4 col-sm-12 ">
              <div className="blog-inter">
                <figure className="style-greens-two green">
                  {" "}
                  <img src="images/blog.jpg" alt="sq-sample2" />
                  <div>
                    <i className="fa fa-plus" />
                  </div>
                  <a href="blog.html" />{" "}
                </figure>
                <div className="post-tittle">
                  <h4>
                    <a href="#">Duis ultricies aliquet mauris</a>
                  </h4>
                </div>
                <ul className="blogDate">
                  <li>
                    {" "}
                    <i className="fa fa-user" aria-hidden="true" />
                    <span>Admin</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-calendar" aria-hidden="true" />{" "}
                    <span>23 Dec 2017</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-comments" aria-hidden="true" />{" "}
                    <span> 5 Comments</span>{" "}
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem
                  vel neque rhoncus dignissim. Ut et eros rhoncus, gravida
                  tellus auctor, lobortis diam. In eu porta purus.
                </p>
              </div>
            </li>
          </ul>
          <div className="pagination-area">
            <ul className="pagination">
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <a href="#">7</a>
              </li>
              <li>
                <a href="#">8</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Brands />
      <Footer />
    </>
  );
}
