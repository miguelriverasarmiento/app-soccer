import { useEffect, useState } from 'react';
import { getSoccerLeagues, searchTeamPlayers, searchTeamStadium } from './api/soccer';
import './App.css';
import logoPremier from './assets/premierLogo.png';

function App() {

  const [league, setLeague] = useState([]);
  const [idTeam, setIdTeam] = useState(33);
  const [teamPlayers, setTeamPlayers] = useState({});
  const [idTeamStadium, setIdTeamStadium] = useState(33)
  const [teamStadium, setTeamStadium] = useState({});
  const [errorState, setErrorState] = useState({ hasError: false });

  useEffect(() => {
    getSoccerLeagues()
      .then((data) => setLeague(data.response))
      .catch(handleError);
  }, []);

  useEffect(() => {
    searchTeamPlayers(idTeam)
      .then((data) => setTeamPlayers(data.response))
      .catch(handleError);
  }, [idTeam]);

  useEffect(() => {
    searchTeamStadium(idTeamStadium)
      .then((data) => setTeamStadium(data.response))
      .catch(handleError);
  }, [idTeamStadium]);

  function handleError(err){
    setErrorState({hasError: true, message: err.message}); 
  }
  
  function handleDetails(lea){
    const id = lea.team.id;
    setIdTeam(id);
    setIdTeamStadium(id);
  }

  return (
    <div className='App'>
      <div className='HeaderPage'>
          <h1 className='TitlePage'>Premier</h1><img src={logoPremier} className='LogoPremier'/><h1 className='TitlePage'>League</h1>
      </div>
      <div className='List'>
        <h2>Teams</h2>
        <ul>
          {errorState.hasError && <div>{errorState.message}</div>}
          {league.map((lea) => (
            <li key={lea.team.id} onClick={() => handleDetails(lea)}>{lea.team.name}</li>
          ))}
        </ul>
      </div>
      <div className='InfoTeam'>
        <div className='DivTeamLogo'><img src={teamPlayers[0]?.team?.logo} className='TeamLogo'/></div>
        <div className='DivTitleTeam' ><h3 className='TitleTeam'>{teamPlayers[0]?.team?.name}</h3></div>
        <div className='DivDetailsTeam'>
          
        </div>
        <div className='DivStadiumLogo'><img src={teamStadium[0]?.venue?.image} className='StadiumLogo'/></div>
      </div>
    </div>
  );
}

export default App;
