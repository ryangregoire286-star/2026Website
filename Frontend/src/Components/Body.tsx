import {Fragment, useState} from "react";
import axios from 'axios'
import MostUsedLanguages from "./MostUsedLanguages.tsx";

const Body = () => {

    const [data, setData] = useState("");
    axios.get("http://localhost:3000").then(e => {
        setData(e.data);
    });

    return (
        <Fragment>
            <h2>{data}</h2>
            <MostUsedLanguages/>
        </Fragment>
    )

}

export default Body;