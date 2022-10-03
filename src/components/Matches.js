import { matchesFixtures, lastTenGames } from '../api/matchesFixtures';
import { useEffect, useState } from 'react';

export function Matches() {

    const [fixtures, setFixtures] = useState([]);
    const [openList, setOpenList] = useState(false);
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
        setOpenList(prevState => !prevState);
    };
    
    return(
        <div className="ContainerMatches">
            <div className="DivTitleMatchesCom">
                <h1 className="TitleMatches">Calendario de partidos temporada 2022-23</h1>
            </div>
            {openList ? (
                <div className="DivTableMatches">
                    {fixtures.map((matches) => ( 
                        <table key={matches.fixture?.id} className="TableMatches">
                            <tbody  className="TbodyMatches">
                                <tr className="TrMatches">
                                    <td className="TdMatches">
                                        <div className="DivMatches">
                                            <div className="DataMatch">{matches.fixture?.date}</div>

                                            <div className="TeamHome">
                                                <div className='DivHomeLogo'>
                                                    <img src={matches.teams?.home?.logo} className='TeamHomeLogo'/>
                                                </div>
                                                <div className='NameTeamHome'>
                                                    <h3>{matches.teams?.home?.name}</h3>
                                                </div>
                                            </div>
                                                <div className="StatusMatch">vs</div>
                                            <div className="TeamAway">
                                                <div className='DivAwayLogo'>
                                                    <img src={matches.teams?.away?.logo} className='TeamAwayLogo'/>
                                                </div>
                                                <div className='NameTeamAway'>
                                                    <h3>{matches.teams?.away?.name}</h3>
                                                </div>
                                            </div>
                                        </div>
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
                                        <div className="DivMatches">
                                            <div className="DataMatch">{matches.fixture?.date}</div>

                                            <div className="TeamHome">
                                                <div className='DivHomeLogo'>
                                                    <img src={matches.teams?.home?.logo} className='TeamHomeLogo'/>
                                                </div>
                                                <div className='NameTeamHome'>
                                                    <h3>{matches.teams?.home?.name}</h3>
                                                </div>
                                            </div>
                                                <div className="StatusMatch">vs</div>
                                            <div className="TeamAway">
                                                <div className='DivAwayLogo'>
                                                    <img src={matches.teams?.away?.logo} className='TeamAwayLogo'/>
                                                </div>
                                                <div className='NameTeamAway'>
                                                    <h3>{matches.teams?.away?.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>    
                    ))}  
                </div> 
            }
            <div className="DivButtonGames"><button onClick={toggleList} className="GamesButton">Ver mas</button></div>
        </div>
    );
}
