import React from "react";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { MenuItem, MenuList, MenuButton, Menu, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MenuCategories = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "ropa");
    getDocs(productsCollection).then((querySnapshot) => {
      const item = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const categoriasUnicas = [...new Set(item.map((item) => item.category))];
      setCategorias(categoriasUnicas);
    });
  }, []);
  return (
    <Menu>
      <MenuButton
        rightIcon={<ChevronDownIcon />}
        _hover={{ background: "#417d53" }}
        _active={{ background: "#56a86e" }}
        as={Button}
        bgColor={"#50ad6c"}
      >
        Categorias
      </MenuButton>
      <MenuList bgColor={"#50ad6c"}>
        {categorias.map((categoria, index) => (
          <Link key={index} to={`/category/${categoria}`}>
            <MenuItem bgColor={"#50ad6c"} _hover={{ background: "#417d53" }}>
              {categoria}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuCategories;
