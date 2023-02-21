import React from "react";
import ItemDetail from "./ItemDetail";
import products from "../data.json";

const ItemDetailContainer = () => {
  return <ItemDetail products={products} />;
};

export default ItemDetailContainer;
