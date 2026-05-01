import {Fragment, useState} from "react";
import axios from 'axios'

const Body = () => {

    const [data, setData] = useState("");
    axios.get("http://localhost:3000").then(e => {
        setData(e.data);
    });

    return (
        <Fragment>
            <h2>{data}</h2>
        </Fragment>
    )

}

export default Body;