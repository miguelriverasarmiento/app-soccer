import { useEffect, useState, memo } from 'react';
import { getSoccerLeagues } from '../api/soccer';
import '../App.css';

const TeamList = ({handleDetailsTeam, handleError}) => {

    const [league, setLeague] = useState([]);

    useEffect(() => {
        getSoccerLeagues()
          .then((data) => setLeague(data.response))
          .catch(handleError);
      }, [handleError]);

    return (
        <div className='List'>
            <h2 className='TitleTeamsList'>Equipos</h2>
            <ul className='TeamsUl'>
            {league.map((lea) => (
                <li className='TeamsLi' key={lea.team.id} onClick={() => handleDetailsTeam(lea)}>
                <div className='DivLeagueTeamLogo'><img src={lea.team?.logo} className='LeagueTeamLogo'/></div> <div className='LeagueTeamName'>{lea.team.name}</div>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default memo(TeamList);
