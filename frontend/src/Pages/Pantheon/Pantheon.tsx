import PantheonName from '../../Components/PantheonName/PantheonName';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import './Pantheon.css'

interface Winner {
    id: number;
    playerName: string;
    date: EpochTimeStamp
}

const backHost = import.meta.env.VITE_BACK_HOST || "http://localhost:3000"

const Pantheon = () => {
    const [winnersList, setWinnersList] = useState([] as Winner[]);
    useEffect(() => {
        async function fetchWinners() {
            try {
              const response: AxiosResponse<Winner[]> = await axios.get(`${backHost}/sherlock/pantheon`);
              let data: Winner[] = await response.data;
              setWinnersList(data);
            } catch (error) {
              console.error('Erreur lors de la récupération des utilisateurs:', error);
              throw error; // Relancer l'erreur pour la gérer ailleurs si nécessaire
            }
          }
      
        fetchWinners();
      }, []);

  return (
    <div className="pantheon">
        {winnersList.map(element => (
          <div className="test" key={element.id}>
            <PantheonName name={element.playerName} dateAdd={new Date(element.date)}/>
          </div>
        ))}
        
    </div>
  )
};

export default Pantheon;