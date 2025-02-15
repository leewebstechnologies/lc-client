import "./page.module.css";
import { blogDetails } from "./data";
import { PortableText } from "@portabletext/react";

const BlogDetail = () => {
  return (
    <>
      {/*inner-heading start*/}
      <section className="inner-heading">
        <div className="container">
          <h1>BLOG DETAIL</h1>
          <ul className="xs-breadcumb">
            <li>
              <a href="/home"> Home / </a> <a href="/home">Pages /</a> Blog
            </li>
          </ul>
        </div>
      </section>
      {/*inner-heading end*/}
      {/*inner content start*/}
      <section className="inner-wrap">
        {/*container start*/}
        <div className="container">
          {/*row start*/}
          <ul className="row blog-grid">
            {blogDetails.map((detail) => (
              <li key={detail.id} className="col-md-12 col-sm-12 ">
                <div className="blog-inter">
                  <figure className="style-greens-two green">
                    <img
                      src={detail.image}
                      style={{ width: "100%" }}
                      alt="portfolio"
                    />
                    {/* <a href={`/blog/${detail.id}`} /> */}
                  </figure>
                  <div className="post-tittle">
                    <h4>
                      <a href="/blogdetail">{detail.blogTitle}</a>
                    </h4>
                  </div>
                  <ul className="blogDate">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      <span>{detail.date}</span>
                    </li>
                  </ul>
                  <p>{detail.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/*container end*/}
      </section>
      {/* <Brands /> */}
    </>
  );
};

export default BlogDetail;
