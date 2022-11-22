import { useEffect, useState } from 'react';
import { searchPlayerDetails, searchTeamPlayerOne, searchTeamPlayersNumbers } from '../api/soccer';
import '../App.css';

const Players = (props) => {

    const [idPlay, setIdPlay] = useState(882);
    const [playerDetails, setPlayerDetails] = useState({});
    const [idPlayNumber, setIdPlayNumber] = useState([]);
    
    useEffect(() => {
        searchPlayerDetails(idPlay)
            .then((data) => setPlayerDetails(data.response))
            .catch((err) => console.log("error", err));
    }, [idPlay]);

    useEffect(() => {
        searchTeamPlayerOne(props.idTeam)
            .then((data) => setIdPlay(data))
            .catch((err) => console.log("error", err));
    }, [props.idTeam]);

    useEffect(() => {
        searchTeamPlayersNumbers(idPlay)
            .then((data) => setIdPlayNumber(data.response))
            .catch((err) => console.log("error", err));
    }, [idPlay]);
    
    const players = props.players.map((item, index) => {
        return <li onClick={() => handlePlayer(item)} className='PlayersTeamLi' key={item.id}>{item.value.name}</li>
    });

    function handlePlayer(item) {
        const idPlayer = item.value.id;
        setIdPlay(idPlayer);
    }

    return(
    <>
        <div className='DivPlayersTeam'>
            <div className='TitleDivPlayers'><h4>Jugadores</h4></div>
            <div>
                <ul className='PlayersTeamUl'>
                    {players}
                </ul>
            </div>
        </div>
        <div className='DivButtonsPag'>
            <button onClick={props.prevHandler} className='ButtonPlayersTeam'>Prev</button>
                <b className='PagePlayersTeam'>{props.currentPage}</b>
            <button onClick={props.nextHandler} className='ButtonPlayersTeam'>Next</button>
        </div>
        <div className='DivDetailsPlayer'>
            <div><img src={playerDetails[0]?.player?.photo} /></div>
            <ul className='FeaturesPlayerUl'>
                <li className='PlayersTeamLi'><b>Nombre:</b> {playerDetails[0]?.player?.firstname}</li>
                <li className='PlayersTeamLi'><b>Apellido:</b> {playerDetails[0]?.player?.lastname}</li>
                <li className='PlayersTeamLi'><b>Edad:</b> {playerDetails[0]?.player?.age} años</li>
                <li className='PlayersTeamLi'><b>Altura:</b> {playerDetails[0]?.player?.height}</li>
                <li className='PlayersTeamLi'><b>Peso:</b> {playerDetails[0]?.player?.weight}</li>
                <li className='PlayersTeamLi'><b>Nacionalidad:</b> {playerDetails[0]?.player?.nationality}</li>
                <li className='PlayersTeamLi'><b>Numero:</b> {idPlayNumber[0]?.players[0]?.number}</li>
            </ul>
        </div>
        <div className='DivDetailsPlayerTwo'>
            {playerDetails[0]?.statistics[0]?.games?.position === "Goalkeeper" &&
                <ul className='FeaturesPlayerUlTwo'>
                    <li className='PlayersTeamLi'><b>Posición:</b> {playerDetails[0]?.statistics[0]?.games?.position}</li>
                    <li className='PlayersTeamLi'><b>Apariciones:</b> {playerDetails[0]?.statistics[0]?.games?.appearences}</li>
                    <li className='PlayersTeamLi'><b>Minutos:</b> {playerDetails[0]?.statistics[0]?.games?.minutes}</li>
                    <li className='PlayersTeamLi'><b>Asistencias:</b> {playerDetails[0]?.statistics[0]?.goals?.assists === null ? "0" : playerDetails[0]?.statistics[0]?.goals?.assists}</li>
                    <li className='PlayersTeamLi'><b>Precision de pases:</b> {playerDetails[0]?.statistics[0]?.passes?.accuracy}%</li>
                    <li className='PlayersTeamLi'><b>Goles recibidos:</b> {playerDetails[0]?.statistics[0]?.goals?.conceded}</li>
                    <li className='PlayersTeamLi'><b>Remates atajados:</b> {playerDetails[0]?.statistics[0]?.goals?.saves}</li>
                    <li className='PlayersTeamLi'><b>Entradas bloqueadas:</b> {playerDetails[0]?.statistics[0]?.tackles?.blocks === null ? "0" : playerDetails[0]?.statistics[0]?.tackles?.blocks}</li>
                    <li className='PlayersTeamLi'><b>Duelos ganados:</b> {playerDetails[0]?.statistics[0]?.duels?.won}</li>
                    <li className='PlayersTeamLi'><b>Faltas cometidas:</b> {playerDetails[0]?.statistics[0]?.fouls?.committed === null ? "0" : playerDetails[0]?.statistics[0]?.fouls?.committed}</li>
                    <li className='PlayersTeamLi'><b>Penaltis comprometidos:</b> {playerDetails[0]?.statistics[0]?.penalty?.commited === null ? "0" : playerDetails[0]?.statistics[0]?.penalty?.commited}</li>
                    <li className='PlayersTeamLi'><b>Penaltis perdidos:</b> {playerDetails[0]?.statistics[0]?.penalty?.missed}</li>
                    <li className='PlayersTeamLi'><b>Penaltis atajados:</b> {playerDetails[0]?.statistics[0]?.penalty?.saved}</li>
                    <li className='PlayersTeamLi'><b>Tarjetas amarillas:</b> {playerDetails[0]?.statistics[0]?.cards?.yellow}</li>
                    <li className='PlayersTeamLi'><b>Tarjetas rojas:</b> {playerDetails[0]?.statistics[0]?.cards?.red}</li>
                </ul>
            }
            {playerDetails[0]?.statistics[0]?.games?.position === "Defender" &&
                <ul className='FeaturesPlayerUlTwo'>
                    <li className='PlayersFeaturesLi'><b>Posición:</b> {playerDetails[0]?.statistics[0]?.games?.position}</li>
                    <li className='PlayersFeaturesLi'><b>Apariciones:</b> {playerDetails[0]?.statistics[0]?.games?.appearences}</li>
                    <li className='PlayersFeaturesLi'><b>Minutos:</b> {playerDetails[0]?.statistics[0]?.games?.minutes}</li>
                    <li className='PlayersFeaturesLi'><b>Asistencias:</b> {playerDetails[0]?.statistics[0]?.goals?.assists === null ? "0" : playerDetails[0]?.statistics[0]?.goals?.assists}</li>
                    <li className='PlayersFeaturesLi'><b>Goles marcados:</b> {playerDetails[0]?.statistics[0]?.goals?.total}</li>
                    <li className='PlayersFeaturesLi'><b>Duelos ganados:</b> {playerDetails[0]?.statistics[0]?.duels?.won}</li>
                    <li className='PlayersFeaturesLi'><b>Faltas cometidas:</b> {playerDetails[0]?.statistics[0]?.fouls?.committed}</li>
                    <li className='PlayersFeaturesLi'><b>Penaltis anotados:</b> {playerDetails[0]?.statistics[0]?.penalty?.scored}</li>
                    <li className='PlayersFeaturesLi'><b>Penaltis comprometidos:</b> {playerDetails[0]?.statistics[0]?.penalty?.commited}</li>
                    <li className='PlayersFeaturesLi'><b>Penaltis perdidos:</b> {playerDetails[0]?.statistics[0]?.penalty?.missed}</li>
                    <li className='PlayersFeaturesLi'><b>Precision de pases:</b> {playerDetails[0]?.statistics[0]?.passes?.accuracy}%</li>
                    <li className='PlayersFeaturesLi'><b>Entradas bloqueadas:</b> {playerDetails[0]?.statistics[0]?.tackles?.blocks}</li>
                    <li className='PlayersFeaturesLi'><b>Pases interceptados:</b> {playerDetails[0]?.statistics[0]?.tackles?.interceptions}</li>
                    <li className='PlayersFeaturesLi'><b>Tarjetas amarillas:</b> {playerDetails[0]?.statistics[0]?.cards?.yellow}</li>
                    <li className='PlayersFeaturesLi'><b>Tarjetas rojas:</b> {playerDetails[0]?.statistics[0]?.cards?.red}</li>
                </ul>
            }
            {playerDetails[0]?.statistics[0]?.games?.position === "Midfielder" &&
                <ul className='FeaturesPlayerUlTwo'>
                    <li className='PlayersFeaturesLi'><b>Posición:</b> {playerDetails[0]?.statistics[0]?.games?.position}</li>
                    <li className='PlayersFeaturesLi'><b>Apariciones:</b> {playerDetails[0]?.statistics[0]?.games?.appearences}</li>
                    <li className='PlayersFeaturesLi'><b>Minutos:</b> {playerDetails[0]?.statistics[0]?.games?.minutes}</li>
                    <li className='PlayersFeaturesLi'><b>Asistencias:</b> {playerDetails[0]?.statistics[0]?.goals?.assists === null ? "0" : playerDetails[0]?.statistics[0]?.goals?.assists}</li>
                    <li className='PlayersFeaturesLi'><b>Disparos al arco:</b> {playerDetails[0]?.statistics[0]?.shots?.total}</li>
                    <li className='PlayersFeaturesLi'><b>Goles marcados:</b> {playerDetails[0]?.statistics[0]?.goals?.total}</li>
                    <li className='PlayersFeaturesLi'><b>Duelos ganados:</b> {playerDetails[0]?.statistics[0]?.duels?.won}</li>
                    <li className='PlayersFeaturesLi'><b>Faltas cometidas:</b> {playerDetails[0]?.statistics[0]?.fouls?.committed}</li>
                    <li className='PlayersFeaturesLi'><b>Penaltis anotados:</b> {playerDetails[0]?.statistics[0]?.penalty?.scored}</li>
                    <li className='PlayersFeaturesLi'><b>Penaltis comprometidos:</b> {playerDetails[0]?.statistics[0]?.penalty?.commited}</li>
                    <li className='PlayersFeaturesLi'><b>Penaltis perdidos:</b> {playerDetails[0]?.statistics[0]?.penalty?.missed}</li>
                    <li className='PlayersFeaturesLi'><b>Precision de pases:</b> {playerDetails[0]?.statistics[0]?.passes?.accuracy}%</li>
                    <li className='PlayersFeaturesLi'><b>Pases interceptados:</b> {playerDetails[0]?.statistics[0]?.tackles?.interceptions}</li>
                    <li className='PlayersFeaturesLi'><b>Tarjetas amarillas:</b> {playerDetails[0]?.statistics[0]?.cards?.yellow}</li>
                    <li className='PlayersFeaturesLi'><b>Tarjetas rojas:</b> {playerDetails[0]?.statistics[0]?.cards?.red}</li>
                </ul>
            }
            {playerDetails[0]?.statistics[0]?.games?.position === "Attacker" &&
                <ul className='FeaturesPlayerUlTwo'>
                    <li className='PlayersFeaturesLi'><b>Posición:</b> {playerDetails[0]?.statistics[0]?.games?.position}</li>
                    <li className='PlayersFeaturesLi'><b>Apariciones:</b> {playerDetails[0]?.statistics[0]?.games?.appearences}</li>
                    <li className='PlayersFeaturesLi'><b>Minutos:</b> {playerDetails[0]?.statistics[0]?.games?.minutes}</li>
                    <li className='PlayersFeaturesLi'><b>Asistencias:</b> {playerDetails[0]?.statistics[0]?.goals?.assists === null ? "0" : playerDetails[0]?.statistics[0]?.goals?.assists}</li>
                    <li className='PlayersFeaturesLi'><b>Disparos al arco:</b> {playerDetails[0]?.statistics[0]?.shots?.total}</li>
                    <li className='PlayersFeaturesLi'><b>Goles marcados:</b> {playerDetails[0]?.statistics[0]?.goals?.total}</li>
                    <li className='PlayersFeaturesLi'><b>Regates logrados:</b> {playerDetails[0]?.statistics[0]?.dribbles?.success}</li>
                    <li className='PlayersFeaturesLi'><b>Faltas Recibidas:</b> {playerDetails[0]?.statistics[0]?.fouls?.drawn}</li>
                    <li className='PlayersFeaturesLi'><b>Penaltis anotados:</b> {playerDetails[0]?.statistics[0]?.penalty?.scored}</li>
                    <li className='PlayersFeaturesLi'><b>Penaltis comprometidos:</b> {playerDetails[0]?.statistics[0]?.penalty?.commited}</li>
                    <li className='PlayersFeaturesLi'><b>Penaltis perdidos:</b> {playerDetails[0]?.statistics[0]?.penalty?.missed}</li>
                    <li className='PlayersFeaturesLi'><b>Precision de pases:</b> {playerDetails[0]?.statistics[0]?.passes?.accuracy}%</li>
                    <li className='PlayersFeaturesLi'><b>Pases interceptados:</b> {playerDetails[0]?.statistics[0]?.tackles?.interceptions}</li>
                    <li className='PlayersFeaturesLi'><b>Tarjetas amarillas:</b> {playerDetails[0]?.statistics[0]?.cards?.yellow}</li>
                    <li className='PlayersFeaturesLi'><b>Tarjetas rojas:</b> {playerDetails[0]?.statistics[0]?.cards?.red}</li>
                </ul>
            }   
        </div>
    </>
    );
}

export default Players;
