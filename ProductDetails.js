import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {

    const { productId } = useParams();

    const [product, setProduct] = useState({})

    const fetechProducts = async () => {

        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

        console.log(response, "resp")

        const data = await response.json()

        console.log(data, "data")

        setProduct(data)
    }
    console.log(product, "product")

    useEffect(
        () => {
            fetechProducts()
        }, []
    )

    return (

        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <h1>

                Product Details
            </h1>

            <div class="p-3 mb-2 bg-secondary text-white">

                <h1 class='text-bg-info p-3'>{product.title}</h1>

                <img src={product.image} alr="image" width={300} />



                <h5 class='badge text-bg-secondary'>

                    {product.price}


                </h5>



                <p class='text-bg-success p-3'>{product.description}</p>

            </div>
        </div>
    )

}
export default ProductDetails;












