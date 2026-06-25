interface Deck{
    imagePath: string;
    deckName: string;
    decklists : string[];
}

export default function Deck({imagePath, deckName, decklists} : Deck){
    return(
        <div className="deckPanel">
            <h1 className="deckName">{deckName}</h1>
            <img src={imagePath} alt={deckName}></img>
            <div className="decklistPanel">
                {decklists.map ((d, index) => 
                    <div key={d}>
                        <a href={d} target="_blank">Deck #{index + 1}</a>
                    </div>
                )}
            </div>
        </div>
    );
}