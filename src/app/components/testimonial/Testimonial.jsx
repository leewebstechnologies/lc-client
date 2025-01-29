import React from 'react'
import client from '../../../../sanity/client';
import { urlFor } from '../../../../sanity/client';
import Image from 'next/image';

const Testimonial = async ({statement, image, name}) => {
  const res = await client.fetch(`*[_type == "testimonial"]`);
  return (
    <div className="testimonials-wrap">
      <div className="container">
        <div className="section-title">
          <h3 className="white_color">Testimonial</h3>
        </div>
        <ul className="owl-carousel">
          <li className="item">
            <div className="testiWrp">
              {res.map((val) => (
                <>
                  <p>{val.statement}</p>
                  <div className="clientInfo">
                    <div className="clientImg">
                      <img alt={name} src={urlFor(val.image).url()} />
                    </div>
                    <div className="name">{val.name}</div>
                    <div className="clearfix" />
                  </div>
                </>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonial