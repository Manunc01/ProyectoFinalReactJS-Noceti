import {
  background,
  Box,
  Button,
  Container,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Box
        bgColor={"#000a03"}
        w={"100%"}
        h={"50px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link to = {"/"}>
        <Box ml={3}>
          <Text as={"a"}fontWeight={"bold"} color={"#50ad6c"} fontSize={"3xl"} href={"#"}>
            TOVAMA
          </Text>
        </Box>
        </Link>
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
            <Link to={`/category/${"Remeras"}`}>
            <MenuItem bgColor={"#50ad6c"} _hover={{ background: "#417d53" }}>
              Remeras
            </MenuItem>
            </Link>
            <Link to={`/category/${"Pantalones"}`}>
            <MenuItem bgColor={"#50ad6c"} _hover={{ background: "#417d53" }}>
              Pantalones
            </MenuItem>
            </Link>
            <Link to={`/category/${"Abrigos"}`}>
            <MenuItem bgColor={"#50ad6c"} _hover={{ background: "#417d53" }}>
              Abrigos
            </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <CartWidget />
      </Box>
    </>
  );
};

export default NavBar;
