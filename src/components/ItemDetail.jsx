import React, { useEffect, useState } from "react";
import ItemCount from "./itemCount";
import { useParams } from "react-router-dom";

import {
  
  StackDivider,
  useColorModeValue,
  Box,
  
  Image,
  Stack,
  Container,
  SimpleGrid,
  Heading,
  Text,
  
  VStack,
  Flex,
  
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { getFirestore, getDoc, doc } from "firebase/firestore";
const ItemDetail = ({products}) => {
  const [producto, setProducto] = useState([])
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();

    const itemRef = doc(db, "ropa", `${id}`);

    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("Document does not exist.");
      }
    });
  }, []);
  const itemFilter = products.filter((item) => item.id == id);

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
              <>
              <ItemCount
              id={item.id}
              stock={item.stock}
              price={item.price}
              name={item.name}
              />
              </>

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
