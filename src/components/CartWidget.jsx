import { Box, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext)
  const prodsQ = cart.length
  console.log(prodsQ)
  return (
    <Box display="flex" ml={3} mr={3} alignItems={"baseline"}>
      <Button colorScheme={"green"} color={"black"}>
        {prodsQ}
      <Icon
        as={AiOutlineShoppingCart}
        color={"black"}
        boxSize={8}
        >
      </Icon>
        </Button>
    </Box>
  );
};

export default CartWidget;
