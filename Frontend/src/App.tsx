import {Fragment, useState} from "react";
import axios from 'axios'
import Header from "./Components/Header.tsx";


const App = () => {

    const [data, useData] = useState("");

    axios.get("http://localhost:3000").then(e => {
        useData(e.data);
    });

    return (
        <Fragment>
            <Header/>
            <h2>{data}</h2>
        </Fragment>
    )

}

export default  App;