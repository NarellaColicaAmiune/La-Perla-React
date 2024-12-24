import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../data";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts();

        fetchData
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error al cargar productos:", error))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div>
            {greeting && <h1>{greeting}</h1>}
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <ul className="product-list">
                    {products.map((product) => (
                        <div className="product-item" key={product.id}>
                        <img src={product.image} alt={product.title}/>
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <a className="button-detalle" href={`/item/${product.id}`}>Ver detalle</a>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemListContainer;