// COMPONENTE QUE USO PARA AGREGAR ITEMS MAS RAPIDO A LA COLLECIÓN DE FIREBASE


import React, { useState } from "react";

import { getFirestore, collection, addDoc } from "firebase/firestore";

const AddClothingItem = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const clothingItem = {
      category: category,
      name: name,
      description: description,
      price: Number(price),
      stock: Number(stock),
      image: image,
    };

    try {
      const db = getFirestore();
      const clothingItemsCollectionRef = collection(db, "ropa");
      await addDoc(clothingItemsCollectionRef, clothingItem);

      setCategory("");
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setImage("");
    } catch (error) {
      console.error("Error adding clothing item: ", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label>Image:</label>
        <textarea
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Stock:</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddClothingItem;
