import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/ShoppingCartContext'
import {
    Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { getFirestore, collection, addDoc } from "firebase/firestore";

const SendOrder = () => {
    const [orderID, setOrderId] = useState("")
    const [cart, setCart] = useContext(CartContext)
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const bgColor = useColorModeValue("gray.100", "gray.700");

    const handleSubmit = async () => {
        try {
            if (email !== confirmEmail) {
                toast({
                  title: "Error",
                  description: "Los correos electrónicos no coinciden.",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
                return;
              }
            const db = getFirestore();
            const ordersCol = collection(db, 'orders');
            const newOrder = {
                user: user,
                email: email,
                items: cart,
                total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
                date: new Date().toLocaleDateString()
            };
            const docRef = await addDoc(ordersCol, newOrder);
            setOrderId(docRef.id);
            onOpen();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
    const handleCloseModal = () => {
        setCart([]);
        onClose();
    }

    return (
        <>
        <Box w="100%"
      maxW="90%"
      p={8}
      bg={bgColor}
      boxShadow="md"
      borderRadius="md"
      mx={"auto"}
      my={"8px"}>

            <FormControl mb={4}>
                <FormLabel>Nombre</FormLabel>
                <Input  placeholder="Nombre" value={user} onChange={(e) => setUser(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Email</FormLabel>
                <Input  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Confirmar Email</FormLabel>
                <Input  type="email" placeholder="Confirmar Email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
            </FormControl>
            <Button
                colorScheme="green"
                isDisabled={cart.length === 0 || user === "" || email === ""}
                onClick={handleSubmit}
                >
                Enviar orden
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Resumen de orden</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb={4}>ID de orden: {orderID}</Text>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Producto</Th>
                                    <Th isNumeric>Cantidad</Th>
                                    <Th isNumeric>Precio</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {cart.map((item) => (
                                    <Tr key={item.id}>
                                        <Td>{item.name}</Td>
                                        <Td isNumeric>{item.quantity}</Td>
                                        <Td isNumeric>${item.price * item.quantity}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                        <Text fontWeight="bold" mt={4}>
                            Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Link to="/cart">
                        <Button colorScheme="green" mr={3} onClick={handleCloseModal}>
                            Cerrar
                        </Button>
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
                                </Box>
        </>
    )
}

export default SendOrder