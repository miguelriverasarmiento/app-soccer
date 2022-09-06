import { useEffect, useState } from 'react';
import { searchPlayerDetails, searchTeamPlayerOne } from '../api/soccer';
import '../App.css';

const Players = (props) => {

    const [idPlay, setIdPlay] = useState(882);
    const [playerDetails, setPlayerDetails] = useState({});
    
    useEffect(() => {
        searchPlayerDetails(idPlay)
            .then((data) => setPlayerDetails(data.response))
    }, [idPlay]);

    useEffect(() => {
        searchTeamPlayerOne(props.idTeam)
            .then((data) => setIdPlay(data))
    }, [props.idTeam]);
    
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
            <button onClick={props.prevHandler}>Prev</button>
                <b>{props.currentPage}</b>
            <button onClick={props.nextHandler}>Next</button>
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
                <li className='PlayersTeamLi'><b>Numero:</b> {playerDetails[0]?.statistics[0]?.games?.number}</li>
            </ul>
        </div>
        <div className='DivDetailsPlayerTwo'>
            {playerDetails[0]?.statistics[0]?.games?.position === "Goalkeeper" &&
                <ul className='FeaturesPlayerUlTwo'>
                    <li className='PlayersTeamLi'><b>Posición:</b> {playerDetails[0]?.statistics[0]?.games?.position}</li>
                    <li className='PlayersTeamLi'><b>Apariciones:</b> {playerDetails[0]?.statistics[0]?.games?.appearences}</li>
                    <li className='PlayersTeamLi'><b>Minutos:</b> {playerDetails[0]?.statistics[0]?.games?.minutes}</li>
                    <li className='PlayersTeamLi'><b>Asistencias:</b> {playerDetails[0]?.statistics[0]?.goals?.assists}</li>
                    <li className='PlayersTeamLi'><b>Precision de pases:</b> {playerDetails[0]?.statistics[0]?.passes?.accuracy}%</li>
                    <li className='PlayersTeamLi'><b>Goles recibidos:</b> {playerDetails[0]?.statistics[0]?.goals?.conceded}</li>
                    <li className='PlayersTeamLi'><b>Remates atajados:</b> {playerDetails[0]?.statistics[0]?.goals?.saves}</li>
                    <li className='PlayersTeamLi'><b>Entradas bloqueadas:</b> {playerDetails[0]?.statistics[0]?.tackles?.blocks}</li>
                    <li className='PlayersTeamLi'><b>Faltas cometidas:</b> {playerDetails[0]?.statistics[0]?.fouls?.committed}</li>
                    <li className='PlayersTeamLi'><b>Penaltis comprometidos:</b> {playerDetails[0]?.statistics[0]?.penalty?.commited}</li>
                    <li className='PlayersTeamLi'><b>Penaltis perdidos:</b> {playerDetails[0]?.statistics[0]?.penalty?.missed}</li>
                    <li className='PlayersTeamLi'><b>Penaltis atajados:</b> {playerDetails[0]?.statistics[0]?.penalty?.saved}</li>
                    <li className='PlayersTeamLi'><b>Tarjetas amarillas:</b> {playerDetails[0]?.statistics[0]?.cards?.yellow}</li>
                    <li className='PlayersTeamLi'><b>Tarjetas rojas:</b> {playerDetails[0]?.statistics[0]?.cards?.red}</li>
                </ul>
            }
            {playerDetails[0]?.statistics[0]?.games?.position === "Defender" &&
                <ul className='FeaturesPlayerUlTwo'>
                    <li className='PlayersFeaturesLi'>Posición: {playerDetails[0]?.statistics[0]?.games?.position}</li>
                    <li className='PlayersFeaturesLi'>Apariciones: {playerDetails[0]?.statistics[0]?.games?.appearences}</li>
                    <li className='PlayersFeaturesLi'>Minutos: {playerDetails[0]?.statistics[0]?.games?.minutes}</li>
                    <li className='PlayersFeaturesLi'>Asistencias: {playerDetails[0]?.statistics[0]?.goals?.assists}</li>
                    <li className='PlayersFeaturesLi'>Goles marcados: {playerDetails[0]?.statistics[0]?.goals?.total}</li>
                    <li className='PlayersFeaturesLi'>Duelos ganados: {playerDetails[0]?.statistics[0]?.duels?.won}</li>
                    <li className='PlayersFeaturesLi'>Faltas cometidas: {playerDetails[0]?.statistics[0]?.fouls?.committed}</li>
                    <li className='PlayersFeaturesLi'>Penaltis anotados: {playerDetails[0]?.statistics[0]?.penalty?.scored}</li>
                    <li className='PlayersFeaturesLi'>Penaltis comprometidos: {playerDetails[0]?.statistics[0]?.penalty?.commited}</li>
                    <li className='PlayersFeaturesLi'>Penaltis perdidos: {playerDetails[0]?.statistics[0]?.penalty?.missed}</li>
                    <li className='PlayersFeaturesLi'>Precision de pases: {playerDetails[0]?.statistics[0]?.passes?.accuracy}%</li>
                    <li className='PlayersFeaturesLi'>Entradas bloqueadas: {playerDetails[0]?.statistics[0]?.tackles?.blocks}</li>
                    <li className='PlayersFeaturesLi'>Pases interceptados: {playerDetails[0]?.statistics[0]?.tackles?.interceptions}</li>
                    <li className='PlayersFeaturesLi'>Tarjetas amarillas: {playerDetails[0]?.statistics[0]?.cards?.yellow}</li>
                    <li className='PlayersFeaturesLi'>Tarjetas rojas: {playerDetails[0]?.statistics[0]?.cards?.red}</li>
                </ul>
            }
            {playerDetails[0]?.statistics[0]?.games?.position === "Midfielder" &&
                <ul className='FeaturesPlayerUlTwo'>
                    <li className='PlayersFeaturesLi'>Posición: {playerDetails[0]?.statistics[0]?.games?.position}</li>
                    <li className='PlayersFeaturesLi'>Apariciones: {playerDetails[0]?.statistics[0]?.games?.appearences}</li>
                    <li className='PlayersFeaturesLi'>Minutos: {playerDetails[0]?.statistics[0]?.games?.minutes}</li>
                    <li className='PlayersFeaturesLi'>Asistencias: {playerDetails[0]?.statistics[0]?.goals?.assists}</li>
                    <li className='PlayersFeaturesLi'>Disparos al arco: {playerDetails[0]?.statistics[0]?.shots?.total}</li>
                    <li className='PlayersFeaturesLi'>Goles marcados: {playerDetails[0]?.statistics[0]?.goals?.total}</li>
                    <li className='PlayersFeaturesLi'>Duelos ganados: {playerDetails[0]?.statistics[0]?.duels?.won}</li>
                    <li className='PlayersFeaturesLi'>Faltas cometidas: {playerDetails[0]?.statistics[0]?.fouls?.committed}</li>
                    <li className='PlayersFeaturesLi'>Penaltis anotados: {playerDetails[0]?.statistics[0]?.penalty?.scored}</li>
                    <li className='PlayersFeaturesLi'>Penaltis comprometidos: {playerDetails[0]?.statistics[0]?.penalty?.commited}</li>
                    <li className='PlayersFeaturesLi'>Penaltis perdidos: {playerDetails[0]?.statistics[0]?.penalty?.missed}</li>
                    <li className='PlayersFeaturesLi'>Precision de pases: {playerDetails[0]?.statistics[0]?.passes?.accuracy}%</li>
                    <li className='PlayersFeaturesLi'>Pases interceptados: {playerDetails[0]?.statistics[0]?.tackles?.interceptions}</li>
                    <li className='PlayersFeaturesLi'>Tarjetas amarillas: {playerDetails[0]?.statistics[0]?.cards?.yellow}</li>
                    <li className='PlayersFeaturesLi'>Tarjetas rojas: {playerDetails[0]?.statistics[0]?.cards?.red}</li>
                </ul>
            }
            {playerDetails[0]?.statistics[0]?.games?.position === "Attacker" &&
                <ul className='FeaturesPlayerUlTwo'>
                    <li className='PlayersFeaturesLi'>Posición: {playerDetails[0]?.statistics[0]?.games?.position}</li>
                    <li className='PlayersFeaturesLi'>Apariciones: {playerDetails[0]?.statistics[0]?.games?.appearences}</li>
                    <li className='PlayersFeaturesLi'>Minutos: {playerDetails[0]?.statistics[0]?.games?.minutes}</li>
                    <li className='PlayersFeaturesLi'>Asistencias: {playerDetails[0]?.statistics[0]?.goals?.assists}</li>
                    <li className='PlayersFeaturesLi'>Disparos al arco: {playerDetails[0]?.statistics[0]?.shots?.total}</li>
                    <li className='PlayersFeaturesLi'>Goles marcados: {playerDetails[0]?.statistics[0]?.goals?.total}</li>
                    <li className='PlayersFeaturesLi'>Regates logrados: {playerDetails[0]?.statistics[0]?.dribbles?.success}</li>
                    <li className='PlayersFeaturesLi'>Faltas Recibidas: {playerDetails[0]?.statistics[0]?.fouls?.drawn}</li>
                    <li className='PlayersFeaturesLi'>Penaltis anotados: {playerDetails[0]?.statistics[0]?.penalty?.scored}</li>
                    <li className='PlayersFeaturesLi'>Penaltis comprometidos: {playerDetails[0]?.statistics[0]?.penalty?.commited}</li>
                    <li className='PlayersFeaturesLi'>Penaltis perdidos: {playerDetails[0]?.statistics[0]?.penalty?.missed}</li>
                    <li className='PlayersFeaturesLi'>Precision de pases: {playerDetails[0]?.statistics[0]?.passes?.accuracy}%</li>
                    <li className='PlayersFeaturesLi'>Pases interceptados: {playerDetails[0]?.statistics[0]?.tackles?.interceptions}</li>
                    <li className='PlayersFeaturesLi'>Tarjetas amarillas: {playerDetails[0]?.statistics[0]?.cards?.yellow}</li>
                    <li className='PlayersFeaturesLi'>Tarjetas rojas: {playerDetails[0]?.statistics[0]?.cards?.red}</li>
                </ul>
            }   
        </div>
    </>
    );
}

export default Players;
