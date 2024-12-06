import { useState } from 'react';
import './Card.css';

import Back from '../../assets/card_back.png';

const Card = ({image, onClick, isFlipped}: {image: Object, onClick: Function, isFlipped: boolean}) => {
    const [isFlipping, setIsFlipping] = useState(false);
    // const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipping(true);
        onClick();
    }

    return <div className={`${isFlipping ? '' : '' } test rounded-2xl size-44 shadow-lg transition-all hover:scale-110`} onClick={handleClick} onAnimationEnd={() => setIsFlipping(false)} style={{ backgroundImage: `url(${isFlipped ? image : Back})` }}>
    </div>
}

export default Card;