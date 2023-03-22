# Proyecto ReactJS de tienda online

Este es un proyecto de tienda online desarrollado en ReactJS utilizando los siguientes componentes:

- `Cart`: Este componente muestra los productos agregados al carrito y permite realizar la compra.

- `CartWidget`: Es un icono que muestra la cantidad de productos agregados al carrito.

- `Item`: Este componente muestra la información detallada de un producto.

- `ItemCount`: Permite al usuario agregar o quitar productos del carrito.

- `ItemDetail`: Este componente muestra la información detallada de un producto, incluyendo su imagen y descripción.

- `ItemDetailContainer`: Este componente es un contenedor para el componente `ItemDetail` y permite obtener la información de un producto desde Firebase.

- `ItemList`: Muestra una lista de productos.

- `ItemListContainer`: Este componente es un contenedor para el componente `ItemList` y permite obtener la lista de productos desde Firebase.

- `NavBar`: Es la barra de navegación de la tienda.

- `SendOrder`: Permite enviar la orden de compra al servidor.

- `ShoppingCartContext`: Componente de contexto que permite guardar el estado del carrito de compras y utilizarlo en diferentes partes de la aplicación.

Para la implementación de este proyecto se utilizó la librería ChakraUI para la interfaz de usuario y Firebase para la base de datos.

## Dependencias

- `react`: Librería principal de ReactJS.
- `react-dom`: Librería para manejar el renderizado del DOM.
- `@chakra-ui/react`: Librería de componentes de interfaz de usuario.
- `firebase`: SDK de Firebase para integrar la base de datos con la aplicación.
- `react-router-dom`: Librería de enrutamiento para ReactJS.

## Pasos para utilizar la aplicación

1. Clonar el repositorio.
2. Instalar las dependencias utilizando el comando `npm install`.
3. Crear un proyecto en Firebase y obtener las credenciales de configuración.
4. Crear un archivo `.env` en la raíz del proyecto y agregar las credenciales de Firebase en el siguiente formato:

```ini
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Crear una colección llamada `ropa` en Firestore y agregar algunos productos con los siguientes campos:

```javascript
name: string
category: string
description: string
price: number
image: string //url de la imagen
stock: number
```
6. Crear una colección llamada `orders` en Firestore
7. Ejecutar la aplicación utilizando el comando `npm run dev`.
8. Seleccionar productos y agregarlos al carrito.
9. Completar el formulario para enviar la orden de compra.

¡Listo! Ahora ya puedes utilizar la aplicación de tienda online y realizar compras de manera virtual.


