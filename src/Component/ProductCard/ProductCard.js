import React from "react";

function ProductCard({ data = {}, handleClick = (e) => {} }) {

    
  return (
    <div className="resturant-card" id="resturant-card">
      <div className="resturant-logo"></div>
      <div className="resturant-details">
        <h2>{data.foodName ? data.foodName : "food Name"}</h2>
        <h3>
          {data.foodDescription ? data.foodDescription : "food description"}
        </h3>
        <h4>{data.foodType ? data.foodType : "food type"}</h4>
        <h5>{data.actualPrice ? data.actualPrice : "food price"} $Price</h5>
      </div>
      <div
        className="resturant-gocta"
        role="button"
        onClick={() => handleClick(data._id)}
      >
        Add
      </div>
    </div>
  );
}

export default ProductCard;
