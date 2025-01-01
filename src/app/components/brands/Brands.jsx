import "./brands.module.css";

const Brands = () => {
  return (
    <div className="brand-section">
      {/*container start*/}
      <div className="container">
        <div className="brand-content">
          <ul className="brand-slider">
            <li>
              <figure className="logo-grey-style">
                <img
                  src="images/company-logo/1.png"
                  alt="services"
                  className="img-responsive"
                />
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                <img
                  src="images/company-logo/2.png"
                  alt="services"
                  className="img-responsive"
                />
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                <img
                  src="images/company-logo/3.png"
                  alt="services"
                  className="img-responsive"
                />
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                <img
                  src="images/company-logo/4.png"
                  alt="services"
                  className="img-responsive"
                />
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                <img
                  src="images/company-logo/5.png"
                  alt="services"
                  className="img-responsive"
                />
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                <img
                  src="images/company-logo/6.png"
                  alt="services"
                  className="img-responsive"
                />
              </figure>
            </li>
          </ul>
        </div>
      </div>
      {/*container end*/}
    </div>
  );
};

export default Brands;
