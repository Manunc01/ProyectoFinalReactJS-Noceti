import {useContext, useState,} from 'react'
import { ButtonGroup, Button, Spacer, Text, useColorModeValue, } from '@chakra-ui/react';
import { CartContext } from '../contexts/ShoppingCartContext';

const ItemCount = ({stock, id, price, name, }) => {
  
  const [count, setCount] = useState(1);
  const [cart, setCart] = useContext(CartContext);
  const isStockAvailable = stock > 0;

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      return isItemFound
        ? currItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + count } : item
          )
        : [...currItems, { id, quantity: count, price, name }];
    });
  };

    return (
    <>
    <ButtonGroup>
                <Button
                  py={"7"}
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                  bg={useColorModeValue("gray.900", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  -
                </Button>
                <Spacer />
                <Text
                  fontSize={"3xl"}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  {isStockAvailable ? (count) : ("0")}
                </Text>
                <Spacer />
                <Button
                  py={"7"}
                  onClick={() => {
                    if (count < stock) {
                      setCount(count + 1);
                    }
                  }}
                  bg={useColorModeValue("gray.900", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                    
                  }}
                >
                  +
                </Button>
                <Spacer />
                <Button
        onClick={addToCart}
        rounded={"none"}
        width={"full"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
        isDisabled={!isStockAvailable}
      >
        Añadir al Carrito
      </Button>
              </ButtonGroup>
    </>
  )
}

export default ItemCount