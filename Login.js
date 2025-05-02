import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
//import { Link } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()//calling contructor
    console.log(username, "username");
    console.log(password, "password");

    function handleUsername(e) {
        // console.log(username)
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        // console.log(password)
        setPassword(e.target.value)
    }

    const handleSubmit = async () =>{ 
        const response = await fetch("http://localhost:5000/auth/login",{
            method : "POST",
            headers:{"Content-Type" : "application/json"}, //object
            body :JSON.stringify({username,password})
        })

        const data = await response.json();
        if(response.status == 200){
            navigate("/products")
        }
        setPassword('')
        setUsername('')

        console.log(data,"login data")
    }


    console.log(password, username)

    return (
        <div className="d-flex flex-column align-items-center">

            <h1>
                this is login page
            </h1>

            <input
                type="text"
                className="mt-1"
                placeholder="enter username"
                value={username}
                onChange={(e) => handleUsername(e)}
            />

            <input
                type="text"
                className="mt-3"
                placeholder="enter password"
                value={password}
                onChange={(e) => handlePassword(e)}
            />

            <button className="btn btn-primary" onClick={() => handleSubmit()}>
                submit
            </button>
            <Link to='/register'>go to register page</Link>

        </div >
    )

}

export default Login;








// import React from 'react'

// import { useState } from 'react';

// import { Link, useNavigate } from 'react-router-dom';

// function Login() {

//     const [username, setUsername] = useState("");

//     const [password, setPassword] = useState("");

//     const navigate = useNavigate()

//     console.log(username, "username");

//     console.log(password, "password");

//     const handleUsername = (e) => {

//         setUsername(e.target.value)
//     }

//     const handlePassword = (e) => {

//         setPassword(e.target.value)
//     }

//     const handleSubmit = async () => {

//         const response = await fetch("http://localhost:5000/auth/login"
//             , {

//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ username, password })
//         })
//         const data = await response.json();
//         console.log(data,'handlesubmit');

//         if(response.status == 200){
//             navigate('/Products')
//         }

//         setPassword('')
//         setUsername('')

//         console.log(data, "handlesubmit")

//     }


//     console.log(password, username)

//     return (

//         <div className='d-flex flex-column align-items-center'>

//             <h1> this is a login page </h1>

//             <input
//                 type="text"
//                 className='mt-1'
//                 placeholder='enter username'
//                 value={username}
//                 onChange={(e) => handleUsername(e)}
//             />

//             <input
//                 type="text"
//                 className='mt-1'
//                 placeholder='enter username'
//                 value={password}
//                 onChange={(e) => handlePassword(e)}
//             />



//             <button className='btn btn-primary mt-2'
//                 onClick={() => handleSubmit()}

//             > submit </button>
//                 <Link to='/Register'> go to register page</Link>


//         </div>
//     )
// }
// export default Login;