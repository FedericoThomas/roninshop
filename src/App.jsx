import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/footer/Footer";
import ItemListContainer from "./pages/home/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="estos son nuestros productos" />
            }
          />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
