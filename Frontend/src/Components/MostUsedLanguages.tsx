import Languages from "./LanguagesParserObject.ts";

const MostUsedLanguages = () => {

    const UsedLanguage = Languages.map(lang => {
        return "     " + lang;
    });

    return (
        <p id="languages" style={{
            fontWeight:100,
            fontSize: 19,
            position: "relative",
            top: 1200 / 2,
            fontFamily: "sans-serif"
        }}>I Have Used | {UsedLanguage}</p>
    )
}

export default  MostUsedLanguages;