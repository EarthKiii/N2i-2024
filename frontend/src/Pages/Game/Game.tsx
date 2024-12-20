import CardComponent from "../../Components/Card/Card";
import ExplainationPopup from "../../Components/ExplainationPopup/ExplainationPopup";
import WinPopup from "../../Components/WinPopup/WinPopup";

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
import cardLyreco from "../../assets/cards/card_lyreco.webp";

import { useEffect, useState } from "react";


interface Card {
    src: string,
    pairIndex: number,
    id: string,
    isFlipped: boolean
}


const Game = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [currentlySelectedCards, setCurrentlySelectedCards] = useState<number[]>([]);
    const [canSelectCard, setCanSelectCard] = useState<boolean>(true);
    const [isExplainationVisible, setIsExplainationVisinble] = useState<boolean>(false);
    const [explainedPair, setExplainedPair] = useState<number>(0);
    const [isWinPopupVisible, setIsWinPopupVisible] = useState<boolean>(false);

    useEffect(() => {
        initGame();
    }, []);

    const cardsBody: Card[] = [
        { src: cardKetchup, pairIndex: 0, isFlipped: false, id: "card-ketchup" },
        { src: cardKidneys, pairIndex: 1, isFlipped: false, id: "card-kidneys" },
        { src: cardBloodCells, pairIndex: 2, isFlipped: false, id: "card-blood-cells" },
        { src: cardLungs, pairIndex: 3, isFlipped: false, id: "card-lungs" },
        { src: cardHair, pairIndex: 4, isFlipped: false, id: "card-hair" },
        { src: cardHearth, pairIndex: 5, isFlipped: false, id: "card-hearth" },
        { src: cardHumanTemp, pairIndex: 6, isFlipped: false, id: "card-human-temperature" },
        { src: cardWhiteCell, pairIndex: 7, isFlipped: false, id: "card-white-cell" },
        { src: cardIntestines, pairIndex: 8, isFlipped: false, id: "card-intestines" },
        { src: cardLyreco, pairIndex: 9, isFlipped: false, id: "the-secret-card" },
    ];

    const cardsOcean: Card[] = [
        { src: cardWhale, pairIndex: 0, isFlipped: false, id: "card-whale" },
        { src: cardAlgae, pairIndex: 1, isFlipped: false, id: "card-algae" },
        { src: cardPlankton, pairIndex: 2, isFlipped: false, id: "card-plankton" },
        { src: cardPhotosynthesis, pairIndex: 3, isFlipped: false, id: "card-photosynthesis" },
        { src: cardCoral, pairIndex: 4, isFlipped: false, id: "card-coral" },
        { src: cardFlow, pairIndex: 5, isFlipped: false, id: "card-flow" },
        { src: cardSeaTemp, pairIndex: 6, isFlipped: false, id: "card-sea-temperature" },
        { src: cardBiodiversity, pairIndex: 7, isFlipped: false, id: "card-biodiversity" },
        { src: cardEcosystem, pairIndex: 8, isFlipped: false, id: "card-ecosystem" },
        { src: cardLyreco, pairIndex: 9, isFlipped: false, id: "the-secret-card" },
    ];

    const pairs: {title:string, text:string}[] = [
        {title: "Transport", text: "Le sang et les baleines partagent un rôle crucial dans leurs systèmes respectifs : la circulation et le transport. Le sang parcourt le corps pour acheminer l’oxygène et les nutriments essentiels, tandis que les baleines, en migrant à travers les océans, dispersent les nutriments et favorisent la biodiversité marine. Tous deux sont des vecteurs de vie et d’équilibre."},
        {title: "Filtre", text: "Les reins et les algues jouent un rôle essentiel de filtration et de régulation. Les reins purifient le sang en éliminant les déchets et en maintenant l’équilibre hydrique, tandis que les algues filtrent l’eau en absorbant le dioxyde de carbone et les nutriments, contribuant ainsi à la santé des écosystèmes marins. Tous deux sont des gardiens d’équilibre vital."},
        {title: "Base", text: "Les vaisseaux sanguins et le plancton assurent la distribution essentielle à la vie. Les vaisseaux sanguins transportent l’oxygène et les nutriments à travers le corps, tandis que le plancton, en flottant dans les océans, diffuse l’énergie et nourrit la chaîne alimentaire marine. Tous deux sont des réseaux vitaux pour leurs écosystèmes respectifs."},
        {title: "Respiration", text: "Les poumons et la photosynthèse jouent un rôle clé dans la gestion des gaz essentiels à la vie. Les poumons captent l’oxygène et expulsent le dioxyde de carbone, alimentant le corps en énergie. La photosynthèse, inversement, absorbe le dioxyde de carbone et libère l’oxygène, soutenant la vie sur Terre. Tous deux sont des moteurs d’échanges vitaux."},
        {title: "Protection", text: "Les poils et les coraux partagent une fonction de protection et de soutien dans leurs systèmes respectifs. Les poils protègent la peau en la préservant des agressions extérieures, tandis que les coraux offrent un habitat et un refuge à de nombreuses espèces marines. Tous deux jouent un rôle de barrière protectrice pour leur environnement."},
        {title: "Flux", text: "Le cœur et les courants marins peuvent être comparés car tous deux assurent une circulation essentielle. Le cœur pompe le sang pour nourrir et oxygéner le corps, tandis que les courants marins déplacent l’eau pour réguler le climat et distribuer les nutriments. Tous deux maintiennent l'équilibre et la vie dans leur système respectif."},
        {title: "Temperature", text: "La température du corps humain et celle de l’océan sont des indicateurs cruciaux d’équilibre. Le corps maintient une température stable pour assurer le bon fonctionnement des organes, tandis que la température de l’océan régule le climat et la vie marine. Dans les deux cas, un déséquilibre peut perturber tout le système."},
        {title: "Biodiversité", text: "Les globules blancs et la biodiversité marine jouent un rôle protecteur et régulateur. Les globules blancs défendent le corps contre les infections, tandis que la biodiversité marine stabilise les écosystèmes en soutenant les chaînes alimentaires et la résilience des océans. Tous deux sont essentiels à la santé et à l’équilibre de leur environnement respectif."},
        {title: "Ecosysteme", text: "Le microbiote et la biodiversité sont des piliers de l’équilibre et de la résilience. Le microbiote, riche en micro-organismes, maintient la santé de l’organisme en favorisant la digestion et l’immunité. La biodiversité, en offrant une variété d’espèces, stabilise les écosystèmes et soutient la vie sur Terre. Tous deux illustrent l’importance de la diversité pour la survie."},
        {title: "Lyreco", text: "Lyreco partenaires de la N2I et d'un super défi, Des fournitures aux solutions pour entreprises."}
    ]

    const initGame = () => {
        let selectedIndexes: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort((_a: number, _b: number) => 0.5 - Math.random()).slice(0, 6);
        
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
                setIsWinPopupVisible(true);

                let savedCards: string[] = JSON.parse(localStorage.getItem('saved-cards') || '[]');
                let usedCards = cards.map(c => c.id);
                
                usedCards.forEach(c => {
                    if (!savedCards.includes(c)) {
                        savedCards.push(c);
                    }
                });
                
                localStorage.setItem('saved-cards', JSON.stringify(savedCards));


                console.log(cards.map(a => a.id));
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
        {/* <button onClick={initGame}>start game</button> */}

        <div className="grid grid-cols-3 gap-4 z-10">
            {cards.map((card: Card, i: number) => <CardComponent image={card.src} key={i} onClick={() => {selectCard(card)}} isFlipped={card.isFlipped} />)}
        </div>

        {isExplainationVisible && <ExplainationPopup title={pairs[explainedPair].title} text={pairs[explainedPair].text} onClose={() => setIsExplainationVisinble(false)} />}

        {isWinPopupVisible && <WinPopup />}
    </div>
}

export default Game;