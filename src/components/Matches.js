import { matchesFixtures, lastTenGames } from '../api/matchesFixtures';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export function Matches() {

    const [fixtures, setFixtures] = useState([]);
    const [openList, setOpenList] = useState({isToggleOn: false});
    const [recentTenGames, setRecentTenGames] = useState([]);
    
    useEffect(() => {
        matchesFixtures()
            .then((data) => setFixtures(data.response))
            .catch((err) => console.log("error", err));
    }, []);

    useEffect(() => {
        lastTenGames()
            .then((data) => setRecentTenGames(data.response))
            .catch((err) => console.log("error", err));
    }, []);

    const toggleList = () => {
        setOpenList(prevState => ({ 
            isToggleOn: !prevState.isToggleOn
        }));
    }

    function convertDate(item) {
        const theDate = new Date(Date.parse(item));
        const finalDate = theDate.toLocaleString();
        return finalDate
    }

    function statusMatchLong(item) {
        if (item === "Not Started") {
            return "Sin iniciar"
        }else if (item === "In Progress") {
            return "En vivo"
        }else if (item === "First Half") {
            return "En vivo"
        }else if (item === "Second Half") {
            return "En vivo"
        }else if (item === "2nd Half Started") {
            return "En vivo"
        }else if (item === "Match Finished") {
            return "Finalizado"
        }else if (item === "Match Postponed") {
            return "Pospuesto"
        }else if (item === "First Half" || "Halftime") {
            return "Medio tiempo"
        }else if (item === "Second Half") {
            return "Tiempo completo"
        }else if (item === "Extra Time") {
            return "Tiempo extra"
        }else if (item === "Penalty In Progress") {
            return "Penales"
        }else if (item === "Match Finished After Extra Time") {
            return "Finalizado extra"
        }else if (item === "Match Finished After Penalty") {
            return "Penales finalizados "
        }else if (item === "Break Time") {
            return "Descanso"
        }else if (item === "Match Suspended") {
            return "Suspendido"
        }else if (item === "Match Interrupted") {
            return "Interrumpido"
        }else if (item === "Match Cancelled") {
            return "Cancelado"
        }else if (item === "Match Abandoned") {
            return "Abandonado"
        }else if (item === "Technical Loss") {
            return "Perdida tecnica"
        }else if (item === "Kick Off") {
            return "En vivo"
        }
    }
    
    return(
        <div className="ContainerMatches">
            <div className="DivTitleMatchesCom">
                <h1 className="TitleMatches">Calendario de partidos temporada 2022-23</h1>
            </div>
            {openList.isToggleOn ? (
                <div className="DivTableMatches">
                    {fixtures.map((matches) => ( 
                        <table key={matches.fixture?.id} className="TableMatches">
                            <tbody  className="TbodyMatches">
                                <tr className="TrMatches">
                                    <td className="TdMatches">
                                        <Link to={`/matches/${matches.fixture?.id}`} className="LinkMatchId">
                                            <div className="DivMatches">
                                                <div className="DataMatch">
                                                    {convertDate(matches.fixture?.date)}
                                                </div>
                                                <div className="DivRounds">Jornada {matches.league?.round.split("-").slice(1, 2).toString()}</div>
                                                <div className="TeamHome">
                                                    <div className='DivHomeLogo'>
                                                        <img src={matches.teams?.home?.logo} className='TeamHomeLogo'/>
                                                    </div>
                                                    <div className='NameTeamHome'>
                                                        <h3>{matches.teams?.home?.name}</h3>
                                                    </div>
                                                </div>
                                                    <div className="StatusMatch">
                                                        <div className='StatusLong'>{statusMatchLong(matches.fixture?.status?.long)}</div>
                                                        <div className='StatusElapsed'>
                                                            {matches.fixture?.status?.elapsed}
                                                        </div>
                                                        <div className='StatusGoalsHome'>{matches.goals?.home}</div>
                                                        <div className='StatusGoalsAway'>{matches.goals?.away}</div>
                                                    </div>
                                                <div className="TeamAway">
                                                    <div className='DivAwayLogo'>
                                                        <img src={matches.teams?.away?.logo} className='TeamAwayLogo'/>
                                                    </div>
                                                    <div className='NameTeamAway'>
                                                        <h3>{matches.teams?.away?.name}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>    
                    ))}  
                </div>
            ) : <div className="DivTableMatches">
                    {recentTenGames.map((matches) => ( 
                        <table key={matches.fixture?.id} className="TableMatches">
                            <tbody  className="TbodyMatches">
                                <tr className="TrMatches">
                                    <td className="TdMatches">
                                        <Link to={`/matches/${matches.fixture?.id}`} className="LinkMatchId">
                                            <div className="DivMatches">
                                                <div className="DataMatch">
                                                    {convertDate(matches.fixture?.date)}
                                                </div>
                                                <div className="DivRounds">Jornada {matches.league?.round.split("-").slice(1, 2).toString()}</div>
                                                <div className="TeamHome">
                                                    <div className='DivHomeLogo'>
                                                        <img src={matches.teams?.home?.logo} className='TeamHomeLogo'/>
                                                    </div>
                                                    <div className='NameTeamHome'>
                                                        <h3>{matches.teams?.home?.name}</h3>
                                                    </div>
                                                </div>
                                                    <div className="StatusMatch">
                                                        <div className='StatusLong'>{statusMatchLong(matches.fixture?.status?.long)}</div>
                                                        <div className='StatusElapsed'>
                                                            {matches.fixture?.status?.elapsed}
                                                        </div>
                                                        <div className='StatusGoalsHome'>{matches.goals?.home}</div>
                                                        <div className='StatusGoalsAway'>{matches.goals?.away}</div>
                                                    </div>
                                                <div className="TeamAway">
                                                    <div className='DivAwayLogo'>
                                                        <img src={matches.teams?.away?.logo} className='TeamAwayLogo'/>
                                                    </div>
                                                    <div className='NameTeamAway'>
                                                        <h3>{matches.teams?.away?.name}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>            
                    ))}  
                </div> 
            }

            <div className="DivButtonGames">
                <button onClick={() => toggleList()} className="GamesButton">
                    {openList.isToggleOn ? 'Ver menos' : 'Ver mas'}
                </button>
            </div>
        </div>
    );
}
