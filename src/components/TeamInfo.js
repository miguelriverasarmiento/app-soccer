import { useEffect, useState, memo } from 'react';
import { searchTeamStadium } from '../api/soccer';
import '../App.css';

const TeamInfo = ({ idTeam, handleError }) => {

    const [teamStadium, setTeamStadium] = useState({});

    useEffect(() => {
        searchTeamStadium(idTeam)
          .then((data) => setTeamStadium(data.response))
          .catch(handleError);
    }, [idTeam, handleError]);
    
    return (
        <>
            <div className='DivTeamLogo'>
                <img src={teamStadium[0]?.team?.logo} className='TeamLogo'/>
                <h3 className='TitleTeam'>{teamStadium[0]?.team?.name}</h3>
            </div>
            <div className='DivDetailsTeam'>
                <ul className='FeaturesTeamUl'>
                    <li className='FeaturesTeamLi'><b>Fundado:</b> Año {teamStadium[0]?.team?.founded}</li>
                    <li className='FeaturesTeamLi'><b>Ciudad:</b> {teamStadium[0]?.venue?.city}</li>
                    <li className='FeaturesTeamLi'><b>Estadio:</b> {teamStadium[0]?.venue?.name}</li>
                    <li className='FeaturesTeamLi'><b>Capacidad:</b> {teamStadium[0]?.venue?.capacity} espectadores</li>
                    <li className='FeaturesTeamLi'><b>Direccion:</b> {teamStadium[0]?.venue?.address}</li>
                </ul>
            </div>
            <div className='DivStadiumLogo'>
                <img src={teamStadium[0]?.venue?.image} className='StadiumLogo'/>
            </div>
        </>
    );
}

export default memo(TeamInfo, (prevProps, nextProps) => {
    return prevProps.idTeam === nextProps.idTeam
});