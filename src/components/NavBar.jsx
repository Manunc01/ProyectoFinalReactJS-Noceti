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
import MenuCategories from "./MenuCategories";

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
          <Text fontWeight={"bold"} color={"#50ad6c"} fontSize={"3xl"}>
            TOVAMA
          </Text>
        </Box>
        </Link>
        <MenuCategories/>
        <Link to={"/cart"}>
        <CartWidget />
        </Link>
      </Box>
    </>
  );
};

export default NavBar;
