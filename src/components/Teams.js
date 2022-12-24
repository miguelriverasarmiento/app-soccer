import { useState, useCallback, useEffect } from 'react';
import { searchTeamPlayerOne } from '../api/soccer';
import Players from './Players';
import TeamsList from './TeamsList';
import TeamInfo from './TeamInfo';
import PlayerDetails from './PlayerDetails';
import '../App.css';

export function Teams() {

  const [idPlay, setIdPlay] = useState(882);
  const [idTeam, setIdTeam] = useState(33);
  const [errorState, setErrorState] = useState({ hasError: false });

  const handleError = useCallback((err) => {
    setErrorState({hasError: true, message: err.message}); 
  }, []);

  useEffect(() => {
    searchTeamPlayerOne(idTeam)
        .then((data) => setIdPlay(data))
        .catch(handleError);
}, [idTeam, handleError]);

  const handleDetailsTeam = useCallback((lea) => {
    const id = lea.team.id;
    setIdTeam(id);
}, []);

  const handlePlayer = useCallback((item) => {
    const idPlayer = item.value.id;
    setIdPlay(idPlayer);
}, []);

  return (
    <div className='App'>
      {errorState.hasError && <div>{errorState.message}</div>}
      <TeamsList handleDetailsTeam={handleDetailsTeam} handleError={handleError}></TeamsList>
      <TeamInfo idTeam={idTeam} handleError={handleError}></TeamInfo>
      <Players handlePlayer={handlePlayer} idTeam={idTeam} handleError={handleError}></Players>
      <PlayerDetails idPlay={idPlay} handleError={handleError}></PlayerDetails>
    </div>
  );
}
