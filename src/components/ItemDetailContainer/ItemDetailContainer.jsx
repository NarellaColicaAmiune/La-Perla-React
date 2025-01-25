import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../config/data";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((res) => setProduct(res))
      .catch((err) => console.error(err));
  }, [itemId]);

  if (!product) return <p>Cargando producto...</p>; // Cambia según prefieras

  return <ItemDetail products={product} />;
};

export default ItemDetailContainer;
