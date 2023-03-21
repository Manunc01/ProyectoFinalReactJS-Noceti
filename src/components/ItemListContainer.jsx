import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams, } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const ropaCollection = collection(db, "ropa");
    getDocs(ropaCollection).then((querySnapshot) => {
      const product = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(product);
    });
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
