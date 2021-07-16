function Card(pros) {
    return (
            <div className={pros.name}>
                <div className="fakeimg">
                <img src={pros.sr} alt={pros.altr} height="100%" width="100%" />
                </div>
                <p>{pros.title}</p>
            </div>
    )
}

export default Card;