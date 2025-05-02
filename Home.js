import React, { useState, useEffect, } from "react"
import Products from './Products';
import { Link } from "react-router-dom";
//import show from './show';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Home() {
    const [products, setProducts] = useState([])
    const [counter, setCounter] = useState(0)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [category, setCategory] = useState("all")


    // onst items = [
    //     { id: 1, name: 'Product 1', price: 10 },
    //     { id: 2, name: 'Product 2', price: 15 },
    //     { id: 3, name: 'Product 3', price: 20 },
    // ];c

    //Cart state to store items added to the cart
    const [cart, setCart] = useState([]);

    // Add product to the cart
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    // Calculate the total price of items in the cart
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };


    // const HomePage = ({ addToCart }) => {
    //     const products = [
    //       { id: 1, name: 'Product 1', price: 10 },
    //       { id: 2, name: 'Product 2', price: 15 },
    //       { id: 3, name: 'Product 3', price: 20 },
    //     ];




    // const [cart, setCart] = useState([]);


    // const addToCart = (product) => {
    //     setCart((prevCart) => [...prevCart, product]);
    //     console.log(`${product.name} added to the cart!`); // Log to check
    // };
    const navigate = useNavigate();

    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response, "resp")
        const data = await response.json();
        console.log(data, "data")
        setProducts(data);
        setFilteredProducts(data);

    }
    //console.log(products,"prod")
    useEffect(
        () => {
            fetchProducts()
            console.log("useeffect is called")
        }, [counter]
    )
    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    console.log(category, "category");
    useEffect(() => {
        if (category === "all") {
            setFilteredProducts(products)
        } else if (category === "Men") {
            const categoryProduct = products.filter((item, index) => item.category === "men's clothing")
            setFilteredProducts(categoryProduct)
        } else if (category === "Women") {
            const categoryProduct = products.filter((item, index) => item.category === "women's clothing")
            setFilteredProducts(categoryProduct)
        } else if (category === "jewellary") {
            const categoryProduct = products.filter((item, index) => item.category === "jewelery")
            setFilteredProducts(categoryProduct)
        } else if (category === "eletronics") {
            const categoryProduct = products.filter((item, index) => item.category === "electronics")
            setFilteredProducts(categoryProduct)
        } else {
            const categoryProduct = products.filter((item, index) => item.category === "addtocart")
            {
                <div className="cart-summary">
                    <h2>Cart Summary</h2>
                    <button> CART
                        <p>Items in Cart: {cart.length}</p>
                    </button>

                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>{item.title} - ${item.price}

                            </li>
                        ))}


                    </ul>


                    <p>Total: ${calculateTotal()}</p>

                </div>


                setFilteredProducts(categoryProduct)

            }
        }
    }, [category])
    return (
        <div>


            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



            <div class='text-bg-warning p-3'>


                <div className='mb-3 align-items-center'>

                    <button className="btn btn-success ms-2 justify-content-cente">
                        <Link to='/'>Login</Link>
                    </button>
                    <button className="btn btn-success ms-2">
                        <Link to='/register'>New Registration </Link>
                    </button>
                    <button className="btn btn-success ms-2"
                    > 
                    <Link to='/todos'> Todos </Link> </button>
                </div>

                <h1 className=" text-center mt-4 mb-5"> products  </h1>









                {/*<h1> count :{counter} </h1>
             <button className="btn btn-primary" onClick={() => handleIncrement()} > increment</button>*/}




                <div className='mb-3'>
                    <button className="btn btn-secondary ms-2" onClick={() => setCategory('all')}>ALL</button>
                    <button className="btn btn-secondary ms-2" onClick={() => setCategory('Men')}>Mens</button>
                    <button className="btn btn-secondary ms-2" onClick={() => setCategory('Women')}>Womens</button>
                    <button className="btn btn-secondary ms-2" onClick={() => setCategory('jewellary')}>Jewellary</button>
                    <button className="btn btn-secondary ms-2" onClick={() => setCategory('eletronics')}>Eletronics</button>
                    {/* <button className='btn btn-secondary ms-2' onClick={() => setCategory('addtocart')}>Add to Cart</button> */}
                </div>
            </div>
            <div className='row'>
                {
                    filteredProducts.map((item, index) => (
                        <div className='col-3 border d-flex justify-content-center flex-column align-items-center '
                            key={index}
                        >
                            <div>
                                {
                                    item.title
                                }
                            </div>
                            <Link to={`/product-description/${item.id}`}>
                                <img
                                    src={item.image}
                                    alt=""
                                    width={100}
                                />
                            </Link>
                            <p >
                                <span class="badge text-bg-secondary">${item.price}
                                </span>
                            </p>

                            <div>
                                {/* <button className='btn btn-primary'>Add to Cart</button> */}

                                <button
                                    className='btn btn-primary'
                                    onClick={() => addToCart(item)}
                                >
                                    Add to Cart
                                </button>

                                {/* <button className='btn btn-warning' onClick={() => navigate('/cart')}>
                                    CART <span className='ms-2'>({cart.length})</span>
                                </button> */}
                            </div>
                            {/* <div>
                                <div className="cart-summary">
                                    <h2>Cart Summary</h2>
                                    <button> CART
                                        <p>Items in Cart: {cart.length}</p>
                                    </button>

                                    <ul>
                                        {cart.map((item, index) => (
                                            <li key={index}>{item.title} - ${item.price}

                                            </li>
                                        ))}

                                    </ul>


                                    <p>Total: ${calculateTotal()}</p>
                                </div>
                            </div>  */}








                        </div>



                    ))

                }
                <div className="cart-summary">
                    <h2>Cart Summary</h2>
                    {/* <button> CART
                        <p>Items in Cart: {cart.length}</p>
                    </button> */}
                    <button className='btn btn-warning' onClick={() => navigate('/cart')}>
                        CART <span className='ms-2'>({cart.length})</span>
                    </button>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>{item.title} - ${item.price}

                            </li>
                        ))}

                    </ul>


                    <p>Total: ${calculateTotal()}</p>
                </div>
            </div>




        </div>












    )

};
//}
export default Home;