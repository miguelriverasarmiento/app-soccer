import { useEffect, useState } from 'react';
import { getSoccerLeagues, searchTeamPlayers, searchTeamStadium } from './api/soccer';
import Players from './components/Players';
import logoPremier from './assets/premierLogo.png';
import './App.css';

const ITEMS_PER_PAGE = 10;

function App() {

  const [league, setLeague] = useState([]);
  const [idTeam, setIdTeam] = useState(33);
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [idTeamStadium, setIdTeamStadium] = useState(33);
  const [teamStadium, setTeamStadium] = useState({});
  const [errorState, setErrorState] = useState({ hasError: false });
  const [currentPage, setCurrentPage] = useState(0);

  const [playersForPage, setPlayersForPage] = useState([]);

  useEffect(() => {
    getSoccerLeagues()
      .then((data) => setLeague(data.response))
      .catch(handleError);
  }, []);

  useEffect(() => {
    searchTeamStadium(idTeamStadium)
      .then((data) => setTeamStadium(data.response))
      .catch(handleError);
  }, [idTeamStadium]);

  useEffect(() => {
    searchTeamPlayers(idTeam)
      .then((data) => setTeamPlayers(data))
      .catch(handleError);
  }, [idTeam]);

  useEffect(() => {
    const players = [...teamPlayers].splice(0, ITEMS_PER_PAGE);
    setPlayersForPage(players)
  }, [teamPlayers]);

  function handleError(err){
    setErrorState({hasError: true, message: err.message}); 
  }
  
  function handleDetails(lea){
    const id = lea.team.id;
    setIdTeam(id);
    setIdTeamStadium(id);
  }

  function nextHandler() {
    const totalItems = teamPlayers.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;
    if (firstIndex >= totalItems) return;
    setPlayersForPage([...teamPlayers].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(nextPage);
  }

  function prevHandler() {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * ITEMS_PER_PAGE;
    setPlayersForPage([...teamPlayers].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
  }

  return (
    <div className='App'>
      <div className='HeaderPage'>
          <h1 className='TitlePage'>Premier</h1><img src={logoPremier} className='LogoPremier'/><h1 className='TitlePage'>League</h1>
      </div>
      <div className='List'>
        <h2 className='TitleTeamsList'>Equipos</h2>
        <ul>
          {errorState.hasError && <div>{errorState.message}</div>}
          {league.map((lea) => (
            <li key={lea.team.id} onClick={() => handleDetails(lea)}>{lea.team.name}</li>
          ))}
        </ul>
      </div>
      <div className='InfoTeam'>
        <div className='DivTeamLogo'><img src={teamStadium[0]?.team?.logo} className='TeamLogo'/></div>
        <div className='DivTitleTeam' ><h3 className='TitleTeam'>{teamStadium[0]?.team?.name}</h3></div>
        <div className='DivDetailsTeam'>
          <ul className='FeaturesTeamUl'>
            <li className='FeaturesTeamLi'>Fundado: Año {teamStadium[0]?.team?.founded}</li>
            <li className='FeaturesTeamLi'>Ciudad: {teamStadium[0]?.venue?.city}</li>
            <li className='FeaturesTeamLi'>Estadio: {teamStadium[0]?.venue?.name}</li>
            <li className='FeaturesTeamLi'>Capacidad: {teamStadium[0]?.venue?.capacity} espectadores</li>
            <li className='FeaturesTeamLi'>Direccion: {teamStadium[0]?.venue?.address}</li>
          </ul>
        </div>
        <div className='DivStadiumLogo'><img src={teamStadium[0]?.venue?.image} className='StadiumLogo'/></div>
        <Players currentPage={currentPage} players={playersForPage} nextHandler={nextHandler} prevHandler={prevHandler}></Players>
      </div>
    </div>
  );
}

export default App;