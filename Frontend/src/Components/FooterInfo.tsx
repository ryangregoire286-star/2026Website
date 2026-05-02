import DateComponent from "./DateComponent.tsx";

const FooterInfo = () => {

    return (
        <div>
            <footer style={{
                padding: 20,
                color: "white",
                fontWeight: "900",
                position: "relative",
                top: 300,
                fontFamily: "sans-serif",
                background: "#101010"
            }}>
                <DateComponent/>
            </footer>
        </div>
    )
}

export default FooterInfo;