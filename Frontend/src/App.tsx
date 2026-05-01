import {Fragment, useState} from "react";
import axios from 'axios'
import Header from "./Components/Header.tsx";


const App = () => {

    const [data, setData] = useState("");

    axios.get("http://localhost:3000").then(e => {
        setData(e.data);
    });

    return (
        <Fragment>
            <Header/>
            <h2>{data}</h2>
        </Fragment>
    )

}

export default  App;