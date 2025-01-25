import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext"; // Ajusta la ruta según tu proyecto
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"; // Ajusta la ruta según tu proyecto
import "./ItemDetail.css";

const ItemDetail = ({ products }) => {
  const { addItems, getProductsQuantityInCart } = useContext(CartContext);
  const [showItemCount, setShowItemCount] = useState(true);

  const onAdd = (quantity) => {
    addItems(products, quantity);
    setShowItemCount(false);
  };

  const quantityInCart = getProductsQuantityInCart(products.id);
  const availableStock = products.stock - quantityInCart;

  return (
    <div className="productContainer">
      <div className="imgContainer">
        <img src={products.img} alt={products.name} />
      </div>

      <div className="detailContainer">
        <h2>{products.name}</h2>
        <p>{products.description}</p>
        <p>Stock disponible: {availableStock}</p>
        <p>
          <strong>${products.price}</strong>
        </p>

        {availableStock <= 0 ? (
          <p>No hay stock disponible</p>
        ) : showItemCount ? (
          <ItemCount initial={1} stock={availableStock} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button>Ir al carrito</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
