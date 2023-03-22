import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import Cart from "./components/Cart";
import SendOrder from "./components/SendOrder";



function App() {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}></Route>
        <Route
          exact
          path="/category/:category"
          element={<ItemListContainer />}
          />
        <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/order" element={<SendOrder />}></Route>      
      </Routes>
    </BrowserRouter>
        </ShoppingCartProvider>
  );
}

export default App;
