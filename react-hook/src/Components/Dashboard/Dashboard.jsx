import React, { useState } from "react"
import axios from 'axios';
import { useEffect } from "react";
import './Dashboard.css'


function Dashboard() {

    const [products, setProducts] = useState([]);

    async function getProducts() {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProducts(res.data);
    }

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <>
            <h3 style={{ color: 'black' }}>Dashboard Component</h3>
            <div className="card-container">
                {
                    products.map((ele) => {

                        return (
                            <div className="card" key={ele.id}>
                                {ele.title}
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}

export default Dashboard