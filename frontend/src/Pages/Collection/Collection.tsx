import { useState } from 'react';
import './Collection.css';

import cardAlgae from "../../assets/cards/card_algae.png";
import cardKetchup from "../../assets/cards/card_ketchup.png";
import cardBiodiversity from "../../assets/cards/card_biodiversity.png";
import cardKidneys from "../../assets/cards/card_kidneys.png";
import cardBloodCells from "../../assets/cards/card_blood_cells.png";
import cardLungs from "../../assets/cards/card_lungs.png";
import cardCoral from "../../assets/cards/card_coral.png";
import cardEcosystem from "../../assets/cards/card_ecosystem.png";
import cardPhotosynthesis from "../../assets/cards/card_photosynthesis.png";
import cardFlow from "../../assets/cards/card_flow.png";
import cardPlankton from "../../assets/cards/card_plankton.png";
import cardHair from "../../assets/cards/card_hair.png";
import cardSeaTemp from "../../assets/cards/card_sea_temp.png";
import cardHearth from "../../assets/cards/card_hearth.png";
import cardWhale from "../../assets/cards/card_whale.png";
import cardHumanTemp from "../../assets/cards/card_human_temp.png";
import cardWhiteCell from "../../assets/cards/card_white_cell.png";
import cardIntestines from "../../assets/cards/card_intestines.png";
import cardLyreco from "../../assets/cards/card_lyreco.png";

interface Card {
    src: string,
    locked: boolean,
    id: string,
};

const Collection = () => {
    const cards: Card[] = [
        { src: cardKetchup, locked: true, id: "card-ketchup" },
        { src: cardKidneys, locked: true, id: "card-kidneys" },
        { src: cardBloodCells, locked: true, id: "card-blood-cells" },
        { src: cardLungs, locked: true, id: "card-lungs" },
        { src: cardHair, locked: true, id: "card-hair" },
        { src: cardHearth, locked: true, id: "card-hearth" },
        { src: cardHumanTemp, locked: true, id: "card-human-temperature" },
        { src: cardWhiteCell, locked: true, id: "card-white-cell" },
        { src: cardIntestines, locked: true, id: "card-intestines" },
        { src: cardWhale, locked: true, id: "card-whale" },
        { src: cardAlgae, locked: true, id: "card-algae" },
        { src: cardPlankton, locked: true, id: "card-plankton" },
        { src: cardPhotosynthesis, locked: true, id: "card-photosynthesis" },
        { src: cardCoral, locked: true, id: "card-coral" },
        { src: cardFlow, locked: true, id: "card-flow" },
        { src: cardSeaTemp, locked: true, id: "card-sea-temperature" },
        { src: cardBiodiversity, locked: true, id: "card-biodiversity" },
        { src: cardEcosystem, locked: true, id: "card-ecosystem" },
    ];

    let savedCards: string[] = JSON.parse(localStorage.getItem('saved-cards') || '[]');
    if (savedCards) {
        cards.forEach(c => {
            if (savedCards.includes(c.id)) {
                c.locked = false;
            }
        })
    }

    return <div className="h-screen w-screen flex flex-col items-center p-8">
        <div className="text-4xl font-bold mb-16 trans">Collection</div>

        <div className="flex flex-wrap justify-center gap-4 overflow-y-scroll">
            {cards.map((card: Card) => <div className={`size-44 bg-cover bg-center ${card.locked ? 'opacity-40' : ''}`} style={{ backgroundImage: `url(${card.src})` }} />)}
        </div>
    </div>
}

export default Collection;