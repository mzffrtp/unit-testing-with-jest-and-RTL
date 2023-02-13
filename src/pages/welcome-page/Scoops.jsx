import React, { useEffect, useState } from "react";
import axios from "axios";

const Scoops = () => {
    const [icecreamOptions, setIcecreamOptions] = useState([])
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

    return (
        <div className="container mt-3">
            <h1>Our Icecreams</h1>
            <p>Price: 3 € each</p>
            <div className="row d-flex gap-4 justify-content-center">
                {
                    icecreamOptions.map((icecream) => (
                        <div
                            className="col-2"
                            style={{ maxwidth: "350px" }}
                        >
                            <img
                                className="w-100"
                                src={icecream.imagePath} />
                            <label>{icecream.name}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Scoops