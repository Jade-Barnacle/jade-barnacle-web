import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the Product type
type Product = {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    rating: number;
    numberOfReviews: number;
    imageUrl: string;
};

// Initialize an empty array of Product type
const emptyProducts: Product[] = [];

// Products component
function Products() {
    // State for products with type annotation
    const [products, setProducts]: [Product[], React.Dispatch<React.SetStateAction<Product[]>>] = useState(emptyProducts);

    // Fetch data from the API when the component mounts
    useEffect(() => {
        axios
            .get<Product[]>("https://localhost:7250/catalog", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    }, []); // Empty dependency array means this runs once after initial render

    return (
        <div className="content">
            <ul className="products">
                {products.map((product) => (
                    <li key={product.id}>
                        <div className="product">
                            <img
                                className="product-image"
                                src={product.imageUrl}
                                alt={product.name}
                            />
                            <div className="product-name">
                                <a href="product.html">{product.name}</a>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">
                                {product.rating} Stars ({product.numberOfReviews} reviews)
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
