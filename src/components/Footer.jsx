import "../SASS/base/_Footer.scss";

const Footer = ({cardsLength}) => {
    return (
        <>
        <footer className="Footer">
            <h2 className="Footer-value">{cardsLength.length}            { cardsLength.length === 1 ?
                "card" : "cards"}</h2>
        </footer>
        </>
    )
}

export default Footer
