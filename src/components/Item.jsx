import React from "react";
import remeraImage from "../assets/images/remeraroja.png";
import {
  useColorModeValue,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Divider,
  Heading,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Item = ({ id, name, category, price, image }) => {
  return (
    <>
      <Card key={id} maxW="sm">
        <CardBody>
          <Image src={remeraImage} alt={name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Flex justifyContent="space-between">
              <Text color="gray.600" fontSize="1xl">
                {category}
              </Text>
              <Text
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontSize="2xl"
              >
                ${price}
              </Text>
            </Flex>
          </Stack>
        </CardBody>
        <CardFooter>
          <Link to={`/item/${id}`}>
            <Button
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              width="full"
            >
              Detalles
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
