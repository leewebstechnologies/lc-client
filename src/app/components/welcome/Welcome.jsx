import React from "react";

const Welcome = () => {
  return (
    <section className="about-info">
      <div
        className="about-img-pro"
        style={{ backgroundImage: "url(images/group.jpg)" }}
      />
      <div className="container">
        {/*row start*/}
        <div className="row">
          {/*col start*/}
          <div className="col-md-6 col-sm-push-6">
            <div className="section-title">
              <h3>
                24 years of experience
                <br />
                <span>Welcome to Construction Company </span>
              </h3>
              <h4>Nunc porta turpis at leo posuere convallis</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed
                posuere eros sapien id quam.
              </p>
            </div>
            <div className="about-description">
              <ul>
                <li>Suspendisse aliquam ligula eget odio ornare</li>
                <li>Fusce aliquet, massa ac ornare feugiat</li>
                <li>Sed posuere eros sapien id quam</li>
              </ul>
              <div className="readmore">
                <button className="main-btn btn-1 btn-1e">Read More</button>
              </div>
            </div>
          </div>
          {/*col end*/}
          {/*col start*/}
        </div>
        {/*col start*/}
      </div>
      {/*row end*/}
    </section>
  );
};

export default Welcome;
