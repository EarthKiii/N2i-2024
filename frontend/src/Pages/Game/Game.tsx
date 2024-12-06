import CardComponent from "../../Components/Card/Card";

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
// import cardLyreco from "../../assets/cards/card_lyreco.png";

import { useState } from "react";
import ExplainationPopup from "../../Components/ExplainationPopup/ExplainationPopup";


interface Card {
    src: string,
    pairIndex: number,
    alt: string,
    isFlipped: boolean
}


const Game = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [currentlySelectedCards, setCurrentlySelectedCards] = useState<number[]>([]);
    const [canSelectCard, setCanSelectCard] = useState<boolean>(true);
    const [isExplainationVisible, setIsExplainationVisinble] = useState<boolean>(false);
    const [explainedPair, setExplainedPair] = useState<number>(0);

    const cardsBody: Card[] = [
        { src: cardKetchup, pairIndex: 0, isFlipped: false, alt: "Card Ketchup" },
        { src: cardKidneys, pairIndex: 1, isFlipped: false, alt: "Card Kidneys" },
        { src: cardBloodCells, pairIndex: 2, isFlipped: false, alt: "Card Blood Cells" },
        { src: cardLungs, pairIndex: 3, isFlipped: false, alt: "Card Lungs" },
        { src: cardHair, pairIndex: 4, isFlipped: false, alt: "Card Hair" },
        { src: cardHearth, pairIndex: 5, isFlipped: false, alt: "Card Hearth" },
        { src: cardHumanTemp, pairIndex: 6, isFlipped: false, alt: "Card Human Temperature" },
        { src: cardWhiteCell, pairIndex: 7, isFlipped: false, alt: "Card White Cell" },
        { src: cardIntestines, pairIndex: 8, isFlipped: false, alt: "Card Intestines" },
    ];

    const cardsOcean: Card[] = [
        { src: cardWhale, pairIndex: 0, isFlipped: false, alt: "Card Whale" },
        { src: cardAlgae, pairIndex: 1, isFlipped: false, alt: "Card Algae" },
        { src: cardPlankton, pairIndex: 2, isFlipped: false, alt: "Card Plankton" },
        { src: cardPhotosynthesis, pairIndex: 3, isFlipped: false, alt: "Card Photosynthesis" },
        { src: cardCoral, pairIndex: 4, isFlipped: false, alt: "Card Coral" },
        { src: cardFlow, pairIndex: 5, isFlipped: false, alt: "Card Flow" },
        { src: cardSeaTemp, pairIndex: 6, isFlipped: false, alt: "Card Sea Temperature" },
        { src: cardBiodiversity, pairIndex: 7, isFlipped: false, alt: "Card Biodiversity" },
        { src: cardEcosystem, pairIndex: 8, isFlipped: false, alt: "Card Ecosystem" },
    ];

    const pairs: {title:string, text:string}[] = [
        {title: "Transport", text: "Transport tout ça"},
        {title: "Filtre", text: "Filtre tout ça"},
        {title: "JSP", text: "JSP tout ça"},
        {title: "Respiration", text: "Respiration tout ça"},
        {title: "Protection", text: "Protection tout ça"},
        {title: "Flux", text: "Flux sanguin tout ça"},
        {title: "Temperature", text: "Temperature tout ça"},
        {title: "Biodiversité", text: "Biodiversité tout ça"},
        {title: "Ecosysteme", text: "Ecosysteme tout ça"}
    ]

    const initGame = () => {
        console.log("== GAME START ==")
        let selectedIndexes: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort((_a: number, _b: number) => 0.5 - Math.random()).slice(0, 6);
        
        let selectedCards: Card[] = [];

        selectedIndexes.forEach((i: number) => {
            selectedCards.push(cardsBody[i]);
            selectedCards.push(cardsOcean[i]);
        });

        let shuffledCards: Card[] = selectedCards.sort((_a: object, _b: object) => 0.5 - Math.random());

        setCards(shuffledCards);
    }

    const selectCard = (card: Card) => {
        if (!canSelectCard || card.isFlipped) {
            return;
        }

        card.isFlipped = true;

        const newlySelectedCards = [...currentlySelectedCards, card.pairIndex];
        setCurrentlySelectedCards(newlySelectedCards);

        if (newlySelectedCards.length == 2) {
            setCanSelectCard(false);
            if (newlySelectedCards[0] == newlySelectedCards[1]) {
                setCanSelectCard(true);

                setExplainedPair(newlySelectedCards[0]);
                setIsExplainationVisinble(true);
            } else {
                setTimeout(() => {
                    const updatedCards = cards.map(c => {
                        if (newlySelectedCards.includes(c.pairIndex)) {
                            return {...c, isFlipped: false}
                        } else {
                            return c;
                        }
                    });
                    setCards(updatedCards);
                    setCanSelectCard(true);
                }, 500);
            }
                        
            setCurrentlySelectedCards([]);

            if (checkForWin()) {
                console.log("GG mon salaud");
            }
        }        
    }

    const checkForWin: () => boolean = () => {
        for (let i: number = 0; i < cards.length; i++) {
            if (!cards[i].isFlipped) {
                return false;
            }
        }
        return true;
    }


    return <div className="flex justify-center items-center h-screen w-screen">
        <button onClick={initGame}>start game</button>

        <div className="grid grid-cols-3 gap-4 z-10">
            {cards.map((card: Card, i: number) => <CardComponent image={card.src} key={i} onClick={() => {selectCard(card)}} isFlipped={card.isFlipped} />)}
        </div>

        {isExplainationVisible && <ExplainationPopup title={pairs[explainedPair].title} text={pairs[explainedPair].text} onClose={() => setIsExplainationVisinble(false)} />}
    </div>
}

export default Game;