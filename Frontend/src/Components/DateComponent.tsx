import {Now} from "./DateNow.ts";
import {Trademark} from "../Types/Trademark.ts";

const DateComponent = () => {
    return (
        <div>
            <p>{Trademark} {Now}</p>
        </div>
    )
}

export default DateComponent;