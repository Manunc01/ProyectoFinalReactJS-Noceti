import {useState,useEffect} from "react"
import ItemDetail from "./ItemDetail";

import {getFirestore, collection, getDocs,} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "ropa");
    getDocs(productsCollection).then((querySnapshot)=>{
      const item = querySnapshot.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
      }))
      setProduct(item)
    })
  }, [])

  
  return <ItemDetail products={product} />;
};

export default ItemDetailContainer;
