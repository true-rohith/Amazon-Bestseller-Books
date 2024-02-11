import React from "react";

const Card = ({ data }) => {
  function handle(e) {
    console.log(e.target);
  }
  return (
    <>
      {data.map((info) => {
        const { image, numbering, title, rating, price } = info;
        return (
          <div key={numbering} className="card-container">
            <div className="card-numbering">
              <h4 onClick={handle}>{numbering}</h4>
            </div>
            <img src={image} />
            <div className="card-values">
              <h4 onClick={handle} className="card-title">
                {title}
              </h4>
              <h4 onClick={handle} className="card-rating">
                {rating}
              </h4>
              <h4 onClick={handle} className="card-price">
                Rs. {price}
              </h4>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
