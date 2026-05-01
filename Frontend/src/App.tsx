import {Fragment} from "react";
import Header from "./Components/Header.tsx";
import "./App.css"
import Hero from "./Components/Hero.tsx";

const App = () => {

    return (
        <Fragment>
            <Header/>
            <Hero title="Developer for" years={2026 - 2020} />
        </Fragment>
    )

}

export default App;