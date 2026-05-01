const Header = () => {

    return (
        <>
            <header>
                <div>
                    <a>{UpperName("Ryan James")}</a>
                </div>
            </header>
        </>
    )
}

function UpperName(s: string): string {
    return s;
}

export default Header;
