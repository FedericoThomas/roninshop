import getProducts from "../../asyncMock";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    getProducts
      .then((respuesta) => {
        if (idCategory) {
          const productsFilter = respuesta.filter(
            (product) => product.category === idCategory
          );
          setProducts(productsFilter);
        } else {
          setProducts(respuesta);
        }
      })

      .catch((error) => console.log(error))
      .finally(() => console.log("finalizo la promesa"));
  }, [idCategory]);

  return (
    <div>
      <h2> Bienvenidos a Ronin {greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
