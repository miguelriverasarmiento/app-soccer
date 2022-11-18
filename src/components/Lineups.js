import { useEffect, useState } from 'react';
import { lineupsMatches, eventsMatches, matchesScore } from '../api/matchesFixtures';
import FormationHome from './FormationHome';
import FormationAway from './FormationAway';
import { useParams } from "react-router-dom";

export function Lineups() {

    const [lineups, setLineaups] = useState([]);
    const [matchEvents, setMatchEvents] = useState([]);
    const [scoreMatch, setScoreMatch] = useState([]);
    const params = useParams();
    const id = parseInt(params.idFix);
    
    useEffect(() => {
        lineupsMatches(id)
            .then((data) => setLineaups(data.response))
            .catch((err) => console.log("error", err));
    }, [id]);

    useEffect(() => {
        eventsMatches(id)
            .then((data) => setMatchEvents(data.response))
            .catch((err) => console.log("error", err));
    }, [id]);

    useEffect(() => {
        matchesScore(id)
            .then((data) => setScoreMatch(data.response))
            .catch((err) => console.log("error", err));
    }, [id]);

    return(
        <div className="ContainerLineups">
            <div className="DivTitleLineups"><h3 className="TitleLineups">Alineaciones de equipos</h3></div>
            <div className="DivNameTeamHome">
                <div className='ClubLogoLineups'><img src={lineups[0]?.team?.logo} className='TeamLogoLineups'/></div>
                <div className='ClubNameLineupsHome'>{lineups[0]?.team?.name}</div>
                <div className='ClubCoachLineups'>Entrenador: {lineups[0]?.coach?.name}</div>
            </div>
            <div className='DivLineupsHome'>
                <div className='Formation'>{lineups[0]?.formation}</div>
                <FormationHome lineups={lineups}/>
            </div>
            <div className="DivNameTeamAway">
                <div className='ClubLogoLineups'><img src={lineups[1]?.team?.logo} className='TeamLogoLineups'/></div>
                <div className='ClubNameLineupsAway'>{lineups[1]?.team?.name}</div>
                <div className='ClubCoachLineups'>Entrenador: {lineups[1]?.coach?.name}</div>
            </div>
            <div className='DivLineupsAway'>
                <div className='Formation'>{lineups[1]?.formation}</div>
                <FormationAway lineups={lineups}/>
            </div>
            <div className='DivMark'>{scoreMatch[0]?.goals?.home} - {scoreMatch[0]?.goals?.away}</div>
            <div className='DivSubtitutesHome'>
                <div className='TitleSust'><b>Sustitutos</b></div>
                <div className='NumberPlaySust'>{lineups[0]?.substitutes[0]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[0]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[0]?.substitutes[1]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[1]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[0]?.substitutes[2]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[2]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[0]?.substitutes[3]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[3]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[0]?.substitutes[4]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[4]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[0]?.substitutes[5]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[5]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[0]?.substitutes[6]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[6]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[0]?.substitutes[7]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[7]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[0]?.substitutes[8]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[8]?.player?.name}</div>
            </div>
            <div className='DivScoreMatch'>
                <table className='EventsTable'>
                    <thead>
                        <tr>
                            <th className='ThEventOne'>Club</th>
                            <th className='ThEventTwo'>Evento</th>
                            <th className='ThEventThree'>Jugador</th>
                            <th className='ThEventFour'>Minuto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matchEvents.map((action) => (
                        <tr className='TrActionsMatch'>
                            <td>
                                <div>{action.team.name}</div>
                            </td>
                            <td>
                                <div>
                                    {action.type === "Goal" ? "Gol" : null}
                                    {action.detail === "Yellow Card" ? "Tarjeta Amarilla" : null}
                                    {action.detail === "Red Card" ? "Tarjeta Roja" : null}
                                    {action.type === "subst" ? "Sustitucion" : null}
                                    {action.type === "Var" ? "Var" : null}
                                </div>
                            </td>
                            <td>
                                <div>
                                    {action.player.name} {action.type === "subst" ? `por ${action.assist.name}` : null }    
                                </div>
                            </td>
                            <td>
                                <div>{action.time.elapsed}</div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='DivSubtitutesAway'>
                <div className='TitleSust'><b>Sustitutos</b></div>
                <div className='NumberPlaySust'>{lineups[1]?.substitutes[0]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[0]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[1]?.substitutes[1]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[1]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[1]?.substitutes[2]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[2]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[1]?.substitutes[3]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[3]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[1]?.substitutes[4]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[4]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[1]?.substitutes[5]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[5]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[1]?.substitutes[6]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[6]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[1]?.substitutes[7]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[7]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineups[1]?.substitutes[8]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[8]?.player?.name}</div>
            </div>
        </div>
    );
}
