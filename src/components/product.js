import React from "react";

function Product(props) {
  console.log(props);
  return (
    <div className="Product">
      <h2>{props.name}</h2>
      <h3>$ {props.price}</h3>
      <img src={props.inventory} />
      <div className="buttons">
        <button
          onClick={() => {
            console.log("ADDING ITEM");
          }}
        >
          Add
        </button>

        <button>Remove</button>
      </div>
    </div>
  );
}

export default Product;
