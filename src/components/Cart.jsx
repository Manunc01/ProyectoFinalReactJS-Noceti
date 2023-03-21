import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  IconButton,
  Grid,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";


const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const bgColor = useColorModeValue("gray.100", "gray.700");

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <Box
      w="100%"
      maxW="90%"
      p={8}
      bg={bgColor}
      boxShadow="md"
      borderRadius="md"
      mx={"auto"}
      my={"8px"}
    >
      <Flex align="center" mb={8}>
        <Heading as="h2" fontSize="2xl">
          Carrito de compras
        </Heading>
        <Spacer />
        <Link to={"/"}>
        <CloseButton />
        </Link>
      </Flex>

      {cart.length === 0 ? (<Stack>
        <Text>Tu carrito está vacío.</Text>
        <Link to={"/"}>
            <Button colorScheme="green">Ir al Catalogo</Button>
            </Link>
      </Stack>
      ) : (
        <>
          <Grid
            templateColumns="repeat(4, 1fr) auto"
            gap={4}
            alignItems="center"
            mb={8}
          >
            <Text fontWeight="bold">Producto</Text>
            <Text fontWeight="bold">Precio</Text>
            <Text fontWeight="bold">Cantidad</Text>
            <Text fontWeight="bold">Subtotal</Text>
            <Box />
            {cart.map((item) => (
              <Fragment key={item.id}>
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
                <Text>{item.quantity}</Text>
                <Text>${item.price * item.quantity}</Text>
                <IconButton
                  aria-label="Eliminar producto"
                  icon={<FaTrash />}
                  onClick={() => removeFromCart(item.id)}
                />
              </Fragment>
            ))}
          </Grid>
          <Stack direction="row" justify="flex-end" align="center">
            <Text fontWeight="bold" fontSize="xl">
              Total: ${total}
            </Text>
            <Link to={"/order"}>
            <Button colorScheme="green">Finalizar Compra</Button>
            </Link>
          
          </Stack>
          
        </>
      )}
    </Box>
  );
};

export default Cart;