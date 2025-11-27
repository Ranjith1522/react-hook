import React from "react"
import axios from 'axios';


function Dashboard() {

    function getProducts() {
        axios.get("https://api.escuelajs.co/api/v1/products");

       console.log(products);
    }
    

    return(

        <>
        <h3 style={{color:'black'}}>Dashboard Component</h3>
        <button onClick={()=>{getProducts}}>click</button>

        </>
    )
}

export default Dashboard