import React from "react";
import "./productList.css";
// Be sure to uncomment this line before trying to use the Product component!
import Product from "./product";

function ProductList(props) {
  return (
    <div className="ProductList">
      <Product
        name={props.inventory[0].name}
        price={props.inventory[0].price}
        inventory={props.inventory[0].url}
      />
      <Product
        // Add in name, price, and inventory
        name={props.inventory[1].name}
        price={props.inventory[1].price}
        inventory={props.inventory[1].url}
      />
      <Product
        // Add in name, price, and inventory
        name={props.inventory[2].name}
        price={props.inventory[2].price}
        inventory={props.inventory[2].url}
      />
      <Product
        // Add in name, price, and inventory
        name={props.inventory[3].name}
        price={props.inventory[3].price}
        inventory={props.inventory[3].url}
      />
      <Product
        // Add in name, price, and inventory
        name={props.inventory[4].name}
        price={props.inventory[4].price}
        inventory={props.inventory[4].url}
      />
      <Product
        // Add in name, price, and inventory
        name={props.inventory[5].name}
        price={props.inventory[5].price}
        inventory={props.inventory[5].url}
      />
      <Product
        // Add in name, price, and inventory
        name={props.inventory[6].name}
        price={props.inventory[6].price}
        inventory={props.inventory[6].url}
      />
      <Product
        // Add in name, price, and inventory
        name={props.inventory[7].name}
        price={props.inventory[7].price}
        inventory={props.inventory[7].url}
      />
    </div>
  );
}

export default ProductList;
