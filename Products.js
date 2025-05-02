import React from 'react'

const Product = ({ product, addToCart }) => {

    const Products = ({ addToCart }) => {
        
        const products = [
                {
                    id: 1, name: "Product A",price: "$10"},

                    {id: 2,name: "Products B", price: "$20"}


                
        ];
    }
    
function Product(){
   return(
    <div>
        <h2> Products </h2>
        {Products.map((product) =>(

            <div key={product.id}>
                <h3>{product.name}</h3>

                <p>{product.price}</p>

                <button onClick={() => addToCart(product)}> Add to cart </button>


            </div>
        ))}
    </div>


   );
};
}
export default Product;



















