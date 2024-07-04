import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h2>{product.name}</h2>

        <div>
          <Link to={`/detail/${product.id}`} className="button-item">
            Detalle del Producto
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Item;
