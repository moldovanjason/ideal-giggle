import React, {useEffect, useState} from 'react'
import axios from "axios";

function UseEffect() {
    const [data, setdata] = useState("")

    useEffect(()=> {
        axios.get("http://jsonplaceholder.typicode.com/comments").then((response) => {
            setdata(response.data[0].email);
        })
    }, []);


    return (
        <div>
            <h1>Hello World</h1> <h3>{data}</h3> 
        </div>
    )
}

export default UseEffect
