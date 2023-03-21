import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {productos?.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            name={producto.name}
            description={producto.description}
            price={producto.price}
            stock={producto.stock}
            image={producto.image}
            category={producto.category}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ItemList;
