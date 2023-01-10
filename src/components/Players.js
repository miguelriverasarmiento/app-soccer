import { useEffect, useState, memo, useCallback } from 'react';
import { searchTeamPlayers } from '../api/soccer';
import '../App.css';

const ITEMS_PER_PAGE = 10;

const Players = ({ handlePlayer, idTeam, handleError }) => {

    const [teamPlayers, setTeamPlayers] = useState([]);  
    const [currentPage, setCurrentPage] = useState(0);
    const [playersForPage, setPlayersForPage] = useState([]);

    useEffect(() => {
        searchTeamPlayers(idTeam)
          .then((data) => setTeamPlayers(data))
          .catch(handleError);
      }, [idTeam, handleError]);
    
      useEffect(() => {
        const players = [...teamPlayers].splice(0, ITEMS_PER_PAGE);
        setPlayersForPage(players)
      }, [teamPlayers]);
    
    const players = playersForPage.map((item) => {
        return <li onClick={() => handlePlayer(item)} className='PlayersTeamLi' key={item.id}>{item.value.name}</li>
    });

    const nextHandler = useCallback(() => {
        const totalItems = teamPlayers.length;
        const nextPage = currentPage + 1;
        const firstIndex = nextPage * ITEMS_PER_PAGE;
        if (firstIndex >= totalItems) return;
        setPlayersForPage([...teamPlayers].splice(firstIndex, ITEMS_PER_PAGE));
        setCurrentPage(nextPage);
    }, [currentPage, teamPlayers]);
    
      const prevHandler = useCallback(() => {
        const prevPage = currentPage - 1;
        if (prevPage < 0) return;
        const firstIndex = prevPage * ITEMS_PER_PAGE;
        setPlayersForPage([...teamPlayers].splice(firstIndex, ITEMS_PER_PAGE));
        setCurrentPage(prevPage);
    }, [currentPage, teamPlayers]);

    return(
    <>
        <div className='DivPlayersTeam'>
            <div className='TitleDivPlayers'><h4>Jugadores</h4></div>
            <div>
                <ul className='PlayersTeamUl'>
                    {players}
                </ul>
            </div>
            <div className='DivButtonsPag'>
            <button onClick={prevHandler} className='ButtonPlayersTeam'>Prev</button>
                <b className='PagePlayersTeam'>{currentPage}</b>
            <button onClick={nextHandler} className='ButtonPlayersTeam'>Next</button>
        </div>
        </div>
    </>
    );
}

export default memo(Players, (prevProps, nextProps) => {
   return prevProps.idTeam === nextProps.idTeam
});
