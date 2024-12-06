import PantheonName from '../../Components/PantheonName/PantheonName';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import './Pantheon.css'

interface Winner {
    id: number;
    playerName: string;
    date: EpochTimeStamp
}

const Pantheon = () => {
    const [winnersList, setWinnersList] = useState([] as Winner[]);
    useEffect(() => {
        async function fetchWinners() {
            try {
              const response: AxiosResponse<Winner[]> = await axios.get('http://localhost:3000/sherlock/pantheon');
              let data: Winner[] = await response.data;
              setWinnersList(data);
            } catch (error) {
              console.error('Erreur lors de la récupération des utilisateurs:', error);
              throw error; // Relancer l'erreur pour la gérer ailleurs si nécessaire
            }
          }
      
        fetchWinners();
      }, []);
      const mockWinners = [
        {
            "playerName": "titusse",
            "date": 1733442362
          },
          {
            "playerName": "Obama2.0",
            "date": 1733442362
          },
            {
            "playerName": "EarthKii",
            "date": 1733442362
          },
            {
            "playerName": "Alaix",
            "date": 1733442362
          },
            {
            "playerName": "Dodo",
            "date": 1733442362
          },
      ];
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