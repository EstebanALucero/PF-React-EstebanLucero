import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
    <CartContextProvider>

    <Navbar />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/category/:categoriaName" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />
        
        <Route path="*" element={<h1> Error 404. </h1>} />

      </Routes>

      </CartContextProvider>
    </BrowserRouter>

  );
}

export default App;
