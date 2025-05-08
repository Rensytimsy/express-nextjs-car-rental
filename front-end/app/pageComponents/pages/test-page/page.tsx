"use client"
import axios from "axios"
import { useEffect, useState } from "react"

const backend_endpoint:string = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || "";


export default function TestPage(){

    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async() => {
            let response = await axios.get(`${backend_endpoint}/api/sample`);
            setData(response.data);
        }
        getData();
    }, []);

    console.log(data);

    return (
        <div>
            <p>This is the test page </p>
        </div>
    )
}