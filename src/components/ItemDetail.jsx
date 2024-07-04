import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const handleClick = (count) => {
    const productCart = { ...product, quantity: count };
  };

  return (
    <div>
      <div>
        <h1>{product.name}</h1>
        <img src={product.img}></img>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <ItemCount handleClick={handleClick} stock={product.stock} />
      </div>
    </div>
  );
};
export default ItemDetail;
