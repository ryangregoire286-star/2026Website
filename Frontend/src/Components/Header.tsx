import {BrowserRouter, Route, Routes} from "react-router-dom";
import Body from "./Body.tsx";

const Header = () => {

    return (
        <>
            <header>
                <div>
                    <a>{UpperName("Ryan James")}</a>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </nav>

            </header>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Body/>}></Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

function UpperName(s: string): string {
    return s;
}

export default Header;
