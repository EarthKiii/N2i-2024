import { useState } from 'react';
import './Collection.css';

import cardAlgae from "../../assets/cards/card_algae.webp";
import cardKetchup from "../../assets/cards/card_ketchup.webp";
import cardBiodiversity from "../../assets/cards/card_biodiversity.webp";
import cardKidneys from "../../assets/cards/card_kidneys.webp";
import cardBloodCells from "../../assets/cards/card_blood_cells.webp";
import cardLungs from "../../assets/cards/card_lungs.webp";
import cardCoral from "../../assets/cards/card_coral.webp";
import cardEcosystem from "../../assets/cards/card_ecosystem.webp";
import cardPhotosynthesis from "../../assets/cards/card_photosynthesis.webp";
import cardFlow from "../../assets/cards/card_flow.webp";
import cardPlankton from "../../assets/cards/card_plankton.webp";
import cardHair from "../../assets/cards/card_hair.webp";
import cardSeaTemp from "../../assets/cards/card_sea_temp.webp";
import cardHearth from "../../assets/cards/card_hearth.webp";
import cardWhale from "../../assets/cards/card_whale.webp";
import cardHumanTemp from "../../assets/cards/card_human_temp.webp";
import cardWhiteCell from "../../assets/cards/card_white_cell.webp";
import cardIntestines from "../../assets/cards/card_intestines.webp";
import { Link } from 'react-router';

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

    const [isCollectionFull, setIsCollectionFull] = useState<boolean>(false)

    let savedCards: string[] = JSON.parse(localStorage.getItem('saved-cards') || '[]');
    if (savedCards) {
        cards.forEach(c => {
            if (savedCards.includes(c.id)) {
                c.locked = false;
            }
        })
    }

    const checkCollection = (): boolean => {
        for (const c of cards) {
            console.log(c);
            if (c.locked === true) {
                return false;
            }
        }
        
        console.log("All cards are unlocked");
        return true;
    };

    if (checkCollection() && !isCollectionFull) {
        setIsCollectionFull(true);
    }

    return <div className="h-screen w-screen flex flex-col items-center p-8">
        <div className="text-4xl font-bold mb-16 trans">Collection</div>

        <div className="flex flex-wrap justify-center gap-4 overflow-y-scroll">
            {cards.map((card: Card) => <div className={`size-44 bg-cover bg-center ${card.locked ? 'opacity-40' : ''}`} style={{ backgroundImage: `url(${card.src})` }} />)}
        </div>

        {isCollectionFull && <Link to="/win"><div className="px-12 py-4 my-4 bg-blue-600 text-white text-center rounded-full hover:bg-blue-400 hover:scale-110 transition-all hover:shadow-mg">Unlock</div></Link>}
    </div>
}

export default Collection;