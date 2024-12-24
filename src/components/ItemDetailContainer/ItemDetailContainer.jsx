import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProductById(itemId)
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error al cargar producto:", error))
            .finally(() => setLoading(false));
    }, [itemId]);

    return (
        <div>
            {loading ? (
                <p>Cargando producto...</p>
            ) : product ? (
                <div className="product-detail">
                    <h1>{product.title}</h1>
                    <img src={product.image} alt={product.title} />
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                </div>
            ) : (
                <p>Producto no encontrado</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
