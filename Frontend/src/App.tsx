import {useState} from "react";
import axios from 'axios'

const App = () => {

    const [data, useData] = useState("");
    axios.get("http://localhost:3000").then(e => {
        useData((e.data));
    });

    return (
        <>
            <h2>{data}</h2>

        </>
    )

}

export default  App;