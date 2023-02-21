import React from "react";
import { useParams } from "react-router-dom";
import {
  Spacer,
  StackDivider,
  useColorModeValue,
  Box,
  List,
  ListItem,
  Image,
  Stack,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, TimeIcon } from "@chakra-ui/icons";
import { useState } from "react";

const ItemDetail = (products) => {
  const { id } = useParams();
  const itemFilter = products.products.filter((item) => item.id == id);
  const [count, setCount] = useState(1);
  const handleResetCount = () => {
    setCount(1);
  };

  console.log(count);
  return (
    <>
      {itemFilter.map((item) => (
        <Container key={item.id} maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={item.image}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {item.name}
                </Heading>
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                >
                  ${item.price} ARS
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                  >
                    {item.description}
                  </Text>
                  <Text fontSize={"lg"}>{item.description}</Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    {item.stock > 0 ? "En stock" : "No hay stock"}
                  </Text>
                </Box>
              </Stack>
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
                  {item.stock > 0 ? count : "0"}
                </Text>
                <Spacer />
                <Button
                  py={"7"}
                  onClick={() => {
                    if (count < item.stock) {
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
                  onClick={handleResetCount}
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
                >
                  Añadir al Carrito
                </Button>
              </ButtonGroup>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <TimeIcon />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      ))}
    </>
  );
};

export default ItemDetail;
