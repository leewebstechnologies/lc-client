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
                {" "}
                <img
                  src="images/company-logo/1.png"
                  alt="themeforest"
                  className="img-responsive"
                />
                <figcaption>
                  <h5>Themeforest</h5>
                </figcaption>
                <a href="https://themeforest.net/" target="_blank" />{" "}
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                {" "}
                <img
                  src="images/company-logo/2.png"
                  alt="photodune"
                  className="img-responsive"
                />
                <figcaption>
                  <h5>Photodune</h5>
                </figcaption>
                <a href="https://photodune.net/" target="_blank" />{" "}
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                {" "}
                <img
                  src="images/company-logo/3.png"
                  alt="audiojungle"
                  className="img-responsive"
                />
                <figcaption>
                  <h5>Audiojungle</h5>
                </figcaption>
                <a href="https://audiojungle.net/" target="_blank" />{" "}
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                {" "}
                <img
                  src="images/company-logo/4.png"
                  alt="codecanyon"
                  className="img-responsive"
                />
                <figcaption>
                  <h5>Codecanyon</h5>
                </figcaption>
                <a href="https://codecanyon.net/" target="_blank" />{" "}
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                {" "}
                <img
                  src="images/company-logo/5.png"
                  alt="graphicriver"
                  className="img-responsive"
                />
                <figcaption>
                  <h5>Graphicriver</h5>
                </figcaption>
                <a href="https://graphicriver.net/" target="_blank" />{" "}
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                {" "}
                <img
                  src="images/company-logo/6.png"
                  alt="3docean"
                  className="img-responsive"
                />
                <figcaption>
                  <h5>3docean</h5>
                </figcaption>
                <a href="https://3docean.net/" target="_blank" />{" "}
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                {" "}
                <img
                  src="images/company-logo/7.png"
                  alt="videohive"
                  className="img-responsive"
                />
                <figcaption>
                  <h5>Videohive</h5>
                </figcaption>
                <a href="https://videohive.net/" target="_blank" />{" "}
              </figure>
            </li>
            <li>
              <figure className="logo-grey-style">
                {" "}
                <img
                  src="images/company-logo/8.png"
                  alt="activeden"
                  className="img-responsive"
                />
                <figcaption>
                  <h5>Activeden</h5>
                </figcaption>
                <a href="https://activeden.net/" target="_blank" />{" "}
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
