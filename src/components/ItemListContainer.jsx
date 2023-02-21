import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import products from "../data.json";

const ItemListContainer = () => {
  const { category } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(products);
  }, []);

  const prodFilter = product.filter(
    (producto) => producto.category === category
  );
  return (
    <>
      {category ? (
        <ItemList productos={prodFilter} />
      ) : (
        <ItemList productos={product} />
      )}
    </>
  );
};

export default ItemListContainer;
