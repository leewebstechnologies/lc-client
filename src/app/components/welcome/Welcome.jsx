import React from "react";

const Welcome = () => {
  return (
    <section className="about-info">
      <div
        className="about-img-pro"
        style={{ backgroundImage: "url(images/group.png)" }}
      />
      <div className="container">
        {/*row start*/}
        <div className="row">
          {/*col start*/}
          <div className="col-md-6 col-sm-push-6">
            <div className="section-title">
              <h3>
                Many years of experience
                <br />
                <span>Welcome to Lacrete Concept Construction Company </span>
              </h3>
              <h4>Our Mission</h4>
              <p>
                LA CRETE CONCEPT Mission and Policy statement is to render the
                best quality services available anywhere with a view of
                providing optimum customer / client satisfaction through better
                and consistently improving operational procedures.
              </p>
            </div>
            <div className="about-description">
              <h3>What we do:</h3>
              <ul>
                <li>
                  Building / Civil Designs (Building Plan & Structural Drawings)
                </li>
                <li>Building & Civil Construction Services</li>
                <li>Building Renovation & Maintenance</li>
                <li>Steel Works & Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
