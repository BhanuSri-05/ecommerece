import React,{ useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ProductDetails from './ProductDetails';
import Todo from './Todo';
import Cart from './Cart'
import Products from './Products'
import { Link } from "react-router-dom";
import { CartProvider } from './CartContext';
// import Navbar from './Navbar1'

 function App (){


  // const [show,setShow] = useState(true);
  // const [cart, setCart] = useState([]);

  // const handleClick = (item) => {
  //   let isPresent = false;
  //   cart.forEach((product) => {
  //     if(item.id === product.id)
  //       isPresent = true;
  //   })
  //   setCart([...cart,item]);
  // }
  // const handleChange = (item, d) => {
  //   let ind = -1;
  //   cart.forEach((tem,index) => {
  //     item.id(item.productid === item.id);
  //     ind = index;
  //   })

  //   const tempArr = cart;
  //   tempArr[ind] += d;
  //   if(tempArr[ind].amount === 0)
  //     tempArr[ind].amount = 1;
  //   setCart([...tempArr])
  // }

  // Function to handle adding items to the cart
  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };
  const[cart,setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart,product]);
  }

  const calculateTotal = () => {
    return cart.reduce((total,item) => total + item.price,0);
  }


  return(
    <>
    <BrowserRouter>



    <Routes>
      
         
        

    
     
    

      <Route path='/products' element={<Home/>}/>
      <Route path ='/' element={<Login/>}/>
      
      <Route path ='/register' element={<Register/>}/>
      
      <Route path ='/product-description/:productId' element={<ProductDetails/>}/>
      <Route path ='/todos' element={<Todo/>}/>
      {/* <Route path = '/cart' element={<Cart/>}/> */}
      
      
         {/* <Navbar size = {cart.length} 

         show : <Cart cart = {cart} setCart={setCart} /> 
         */}
      <Route
      path='/home'
      element = {
        <Home
        cart = {cart}
        setCart={setCart}
        addToCart={addToCart}
        calculateTotal={calculateTotal}
        />
    
      }
      />
      <Route
      path='/cart'
      element={<Cart cart={cart} calculateTotal={calculateTotal}/>}
      />


    </Routes>

    </BrowserRouter>
    
    
    
    </>


  )
}

 
export default App;











// {/*import React from 'react';
// import Home from './Home';
  


//   function App() {
//     return(
//      <>
    
//      <Home/>

//      </>
//     );
// }
// export default App;*/}



// /*import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Home from './Home';
// import Login from './Login';
// import Register from './Register';
// import ProductDetails from './ProductDetails';


//  function App() {
//   return(
//     <>
//     <BrowserRouter>
    
//     <Routes>

//       <Route path ='/' element={<Home />}/>
//       <Route path ='/Login' element={<Login />}/>
//       <Route path ='/Register' element={<Register />}/>
//       <Route path ='/product-description/:productId' element={<ProductDetails />}/>

     

//     </Routes>

//     </BrowserRouter>
    
    
    
//     </>


//   )
//  }
// export default App;*/








