import { Box, Button, IconButton, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (
    <Box display="flex" ml={3} mr={3} alignItems={"baseline"}>
      <Button colorScheme={"green"} color={"black"}>
        1
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
