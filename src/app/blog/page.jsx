import Link from "next/link";
import { Brands } from "../components";
import { blogItems } from "./data";
import "./blog.module.css";


const Blog = () => {
  return (
    <>
      <section className="inner-heading">
        <div className="container">
          <h1>BLOG DETAIL</h1>
          <ul className="xs-breadcumb">
            <li>
              <a href="/home"> Home / </a> <a href="/home">Pages /</a>
              Blog
            </li>
          </ul>
        </div>
      </section>

      <section className="inner-wrap">
        <div className="container">
          <div className="row"> </div>
          <ul className="blog-grid">
            <div className="col-md-8 col-sm-12">
              {blogItems.map((item) => (
                <li key={item.id}>
                  <Link className="a" href={`/blog/${item.id}`}>
                    <div className="blog-inter">
                      <div className="row">
                        <div className="col-md-5 col-sm-4">
                          <figure className="style-greens-two green">
                            <img src={item.image} alt="portfolio" />
                            <div>
                              <i className="fa fa-plus" />
                            </div>
                          </figure>
                        </div>
                        <div className="col-md-7 col-sm-8">
                          <div className="post-tittle">
                            <h4 className="a">{item.blogTitle}</h4>
                          </div>
                          <ul className="blogDate">
                            <li>
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              />
                              <span>{item.date}</span>
                            </li>
                          </ul>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
          {/*row end*/}
        </div>
        {/*container end*/}
      </section>
      <Brands />
    </>
  );
};

export default Blog;
