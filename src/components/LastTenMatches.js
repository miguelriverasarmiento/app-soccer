import { useEffect, useState, memo } from 'react';
import { Link } from "react-router-dom";
import { lastTenGames } from '../api/matchesFixtures';

const LastTenMatches = ({convertDate, statusMatchLong}) => {

    const [recentTenGames, setRecentTenGames] = useState([]);

    useEffect(() => {
        lastTenGames()
            .then((data) => setRecentTenGames(data.response))
            .catch((err) => console.log("error", err));
    }, []);

    return(
        <>
            <div className="DivTableMatches">
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
                                            <div className='StatusLong'>{statusMatchLong(matches.fixture?.status?.long)}</div>
                                            <div className="TeamHome">
                                                <div className='DivHomeLogo'>
                                                    <img src={matches.teams?.home?.logo} className='TeamHomeLogo'/>
                                                </div>
                                                <div className='NameTeamHome'>
                                                    <h3>{matches.teams?.home?.name}</h3>
                                                </div>
                                            </div>
                                                <div className="StatusMatch">
                                                    <div className='DivGoalsMark'>
                                                        <div className='StatusGoalsHome'>{matches.goals?.home}</div>
                                                        <div className='StatusGoalsAway'>{matches.goals?.away}</div>
                                                    </div>
                                                    <div className='StatusElapsed'>
                                                        {matches.fixture?.status?.elapsed}
                                                    </div>
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
        </>
    );
}

export default memo(LastTenMatches);
