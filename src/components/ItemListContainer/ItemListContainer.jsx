import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../config/data";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";

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
        <div className="contenedorProductos">
            {greeting && <h1>{greeting}</h1>}
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <ul className="product-list">
                    {products.map((product) => (
                        <div className="product-item" key={product.id}>
                        <img src={product.img} alt={product.name}/>
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                        <Link className="button-detalle" to={`/item/${product.id}`}>Ver detalle</Link>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemListContainer;