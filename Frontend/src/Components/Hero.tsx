import {AboutMe} from "../Types/MiddleHeroTypeText.ts";

function Hero (props: {title: string, years: number}) {

    return (
        <div>
            <h2 style={{
                marginTop: -10,
                fontSize: 17,
                color: "#101010",
                fontWeight: (10 * 10)
            }}>{props.title} {2026 - 2020} Years</h2>

            <article>
                <div className="container">
                    <article>
                        <h2 style={{marginTop: 200, fontSize: 17}}>Language #1</h2>
                        <p style={{
                            fontSize: 15,
                            fontFamily: "sans-serif"
                        }}
                        >My First Language was: HTML
                        </p>

                    </article>

                    <article>
                        <h2 style={{marginTop: 200, fontSize: 17}}>Language #2</h2>

                        <p style={{
                            fontSize: 15,
                            fontFamily: "sans-serif"
                        }}
                        >My First Language was: CSS
                        </p>

                    </article>

                    <article>
                        <h2 style={{marginTop: 200, fontSize: 17}}>Language #3</h2>

                        <p style={{
                            fontSize: 15,
                            fontFamily: "sans-serif"
                        }}
                        >My First Language was: JS
                        </p>
                    </article>

                </div>
            </article>

            <h3 style={{
                fontFamily: "sans-serif",
                width: 700,
                marginTop:400,
                margin: "0 auto",
                fontSize: 15,
                textAlign: "center"
            }}>{AboutMe.toUpperCase()}</h3>

        </div>
    )
}

export default Hero;