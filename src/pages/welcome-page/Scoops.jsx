import React, { useEffect, useState } from "react";
import axios from "axios";

const Scoops = () => {
    const [icecreamOptions, setIcecreamOptions] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        axios
            .get(" http://localhost:3005/cesitler")
            .then((res) => {
                setIcecreamOptions(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleReset = (icecream) => {
        const updatedCart = cart.filter((i) => i.name !== icecream.name)
        setCart(updatedCart)
    }
    const handleTotal = (icecream) => {
        const qua = cart.filter((i) => i.name === icecream.name);
        return qua.length;
    }
    return (
        <div className="container mt-3">
            <h1 className="text-start">Our Icecreams</h1>
            <p className="text-start">Price: 3€ each</p>
            <h2
                className="text-start"
                data-testid="totalPrice"
            >Total Price:{cart.length * 3}€ </h2>
            <div className="row d-flex gap-4 justify-content-center align-item-center ">
                {
                    icecreamOptions.map((icecream) => {
                        const quantity = handleTotal(icecream);
                        return (
                            <div
                            key={icecream.name}
                                className="col-2"
                                style={{ maxwidth: "350px" }}
                            >
                                <img
                                    id={icecream.name}
                                    className="w-100"
                                    src={icecream.imagePath}
                                    alt="" />
                                <label htmlFor={icecream.name}>{icecream.name}</label>

                                <div
                                    className="d-flex flex-column"
                                >
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleReset(icecream)}
                                    >Delete</button>
                                    <span className="lead">{quantity}</span>
                                    <button
                                        onClick={() => setCart([...cart, icecream])}
                                        className="btn btn-info">Add</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Scoops