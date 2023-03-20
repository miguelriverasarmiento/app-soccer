import { useEffect, useState, memo } from 'react';
import { searchTeamStadium } from '../api/soccer';
import tottenhamImage from '../assets/tottenham-Image.jpg';
import brentfordImage from '../assets/bren-stadium.jpg';
import '../App.css';

const TeamInfo = ({ idTeam, handleError }) => {

    const [teamStadium, setTeamStadium] = useState({});

    useEffect(() => {
        searchTeamStadium(idTeam)
          .then((data) => setTeamStadium(data.response))
          .catch(handleError);
    }, [idTeam, handleError]);

    function imageStadiumTeam(item) {
        if (item?.split('/')[5] === "593.png") {
            return <img className='StadiumLogo' src={tottenhamImage}/> 
        } else if (item?.split('/')[5] === "10503.png") {
            return <img className='StadiumLogo' src={brentfordImage}/> 
        } else {
            return <img className='StadiumLogo' src={item}/>
            }
        }
    
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
                {imageStadiumTeam(teamStadium[0]?.venue?.image)}
            </div>
        </>
    );
}

export default memo(TeamInfo, (prevProps, nextProps) => {
    return prevProps.idTeam === nextProps.idTeam
});
