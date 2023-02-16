import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    //<div className="App">
    //   <Navbar /> 
    //   <ItemListContainer />
    //   <ItemDetailContainer />
    //</div>

    <BrowserRouter>

    <Navbar />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/" element={<ItemListContainer />} />
        <Route path="*" element={<h1> Error 404. </h1>} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
