import React from 'react';

function Cart({ cart, calculateTotal }) {
  return (
    <div className="container mt-5">
      <h2>🛒 Cart Summary</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{item.title}</span>
                <span className="badge bg-secondary">${item.price}</span>
              </li>
            ))}
          </ul>

          <h5>Total: ${calculateTotal()}</h5>
        </>
      )}
    </div>
  );
}

export default Cart;





// src/Cart.js
// import React from 'react';

// function Cart({ cart, calculateTotal }) {
//   return (
//     <div className="container mt-5">
//       <h2>Cart Summary</h2>

//       <p>Items in Cart: {cart.length}</p>

//       <ul>
//         {cart.map((item, index) => (
//           <li key={index}>
//             {item.title} - ${item.price}
//           </li>
//         ))}
//       </ul>

//       <p>Total: ${calculateTotal()}</p>
//     </div>
//   );
// }

// export default Cart;

// import React from 'react';
// // import { CartContext } from './CartContext';

// function Cart() {
//   const { cart, calculateTotal } = useContext(CartContext);

//   return (
//     <div className="container mt-5">
//       <h2>🛒 Cart Summary</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <>
//           <ul className="list-group mb-3">
//             {cart.map((item, index) => (
//               <li key={index} className="list-group-item d-flex justify-content-between">
//                 {item.title}
//                 <span>${item.price}</span>
//               </li>
//             ))}
//           </ul>
//           <h5>Total: ${calculateTotal()}</h5>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;















// import React, { useEffect, useState } from "react";

// function Cart ({cart,setCart,handleChange,item}) {

//     const [price,setPrice] = useState(0);

//     const handlePrice = () => {
//         let ans = 0;
//         item.map((item) => {
//             ans += item.amount + item.price
//         }
//         )
//         setPrice(ans);
//     }

//     // const handleRemove = (productid) => {
//     //     const arr = cart.filter((item) => item.id !== productid);
//     //     setCart(arr);
//     //    // handlePrice();
//     // }
//     // useEffect(() => {
//     //     handlePrice();
//     // })
//    return (
//     <article>
//         {
//             cart?.map((item) => (
//                 <div className="cart_box" key = {item.productid}>
//                     <div className="cart.img">

//                     <img src = {item.img}/>

//                     <p>{item.title}</p>

//                     </div>

//                     <div>

//                     <button > + </button>
//                     <button>{item.amount}</button>
//                     <button > - </button>

//                     </div>
//                     <div>

//                         <span>{item.price}</span>
//                         <button > Remove </button>
//                     </div>
//                 </div>
//             ))
//         }
//         <div>
//             <span> Total Price of your Cart </span>
//             <span> Rs - {price}</span>
//         </div>
//     </article>
//    )
// }
// export default Cart;



















































// // import { useState,useEffect } from "react"
// // import { Link } from "react-router-dom"


// // function Cart({items}) {
    

// //     const [products, setProducts] = useState([])
// //     const [counter, setCounter] = useState(0)
// //     const [filteredProducts, setFilteredProducts] = useState([])
// //     const [category, setCategory] = useState("all")

// //     const [cart, setCart] = useState([]); // State to store cart items
// //   const [showCart, setShowCart] = useState(false); // State to control cart visibility

// //   // Function to handle adding items to the cart
// // //   const addToCart = (product) => {
// // //     setCart((prevCart) => [...prevCart, product]);
// // //   };

// // const CartApp = () => {
// //     const [cart,setCart] = useState([]);
// //     const addToCart = (product) => {
// //         setCart([...cart,product]);
// //     };
// //     const removeFromCart =(id) => {
// //         setCart(cart.filter((item) => item.id !== id));
// //     }
  

// //   // Function to handle removing items from the cart
  

// //   // Calculate total price of the cart
// // //   const calculateTotal = () => {
// // //     return cart.reduce((total, item) => total + item.price, 0);
// // //   };

// // //   const removeFromCart = (productId) => {
// // //     setCart((prevCart) => prevCart.filter(item => item.id !== productId));
// // //   };



// //      const fetchProducts = async () => {
// //         const response = await fetch("https://fakestoreapi.com/products");
// //         //console.log(response, "resp")
// //         const data = await response.json();
// //         //console.log(data,"data")
// //         setProducts(data);
// //         setFilteredProducts(data);

// //      }

    

// //      useEffect(
// //             () => {
// //                 fetchProducts()
// //                 console.log("useeffect is called")
// //             }, [counter]);
        
// //      return (
// //         <div>
// //     {
// //         filteredProducts.map((item, index) => (
// //             <div className='col-3 border d-flex justify-content-center flex-column align-items-center '
// //                 key={index}
// //             >
// //                 <div>
// //                     {
// //                         item.title
// //                     }
// //                 </div>
// //                 <Link to={`/product-description/${item.id}`}>
// //                     <img
// //                         src={item.image}
// //                         alt=""
// //                         width={100}
// //                     />
// //                 </Link>
// //                 <p >
// //                     <span className="badge text-bg-secondary">${item.price}
// //                     </span>
// //                 </p>

// //                 <div>
// //                     <button className='btn btn-primary' >Add to Cart</button>
// //                 </div>
// //                 {/* <button onClick={() => removeFromCart(item.id)}>Remove</button> */}











// //             </div>



// //         ))
// //     }
// //     <ul>
// //         {products.map((product) => (
// //             <li>{product.title}-{product.description}
// //             <button onClick={() => addToCart(product)}>Add to cart</button>
// //             </li>
// //         ))}
// //     </ul>
// //     {cart.length === 0 ? <p>Cart is empty </p>:
// //           <ul>
// //          {cart.map((item) => (
// //             <li>{item.name}-{item.description}
// //             <button onClick={() => removeFromCart(item.id)}>Remove</button>
            
// //             </li>
// //             ))}
// //             </ul>
// //         }

    
   

// //       {/* <div className="App">
// //       <h1>Product List</h1>
// //       <div className="product-list">
// //         {products.map((product) => (
// //           <div key={product.id} className="product-item">
// //             <img src={product.image} alt={product.name} />
// //             <h3>{product.name}</h3>
// //             <p>${product.price}</p>
// //             <button onClick={() => addToCart(product)}>Add to Cart</button> 
// //           </div>
// //         ))}
// //       </div>

// //       Go to Cart Button 
// //       <button onClick={() => setShowCart(true)}>Go to Cart
// //         <a href="Cart.css"></a>
// //       </button>

// //        Cart Section - Display items if showCart is true 
// //       {showCart && (
// //         <div className="cart">
// //           <h2>Your Cart</h2>
// //           <div className="cart-items">
// //             {Cart.length === 0 ? (
// //               <p>No items in the cart</p>
// //             ) : (
// //               Cart.map((item, index) => (
// //                 <div key={index} className="cart-item">
// //                   <img src={item.image} alt={item.name} />
// //                   <h4>{item.name}</h4>
// //                   <p>Price: ${item.price}</p>
// //                   {/* Remove Button for each cart item 
// //                   <button onClick={() => removeFromCart(item.id)}>Remove</button>
// //                 </div>
// //               ))
// //             )}
// //           </div>
// //           <div className="cart-total">
// //             <h3>Total: ${calculateTotal()}</h3>
// //           </div>
// //         </div>
// //       )}
// //      </div>*/}
// //       </div> 
// //     )
// //     };
// // }


// // export default Cart;