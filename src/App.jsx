import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/footer/Footer";
import ItemListContainer from "./pages/home/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"estos son nuestros productos"} />
      <Footer />
    </div>
  );
}

export default App;
