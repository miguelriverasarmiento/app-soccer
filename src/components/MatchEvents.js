import { useEffect, useState, memo } from 'react';
import { eventsMatches } from '../api/matchesFixtures';

const MatchEvents = ({id}) => {

    const [matchEvents, setMatchEvents] = useState([]);

    useEffect(() => {
        eventsMatches(id)
            .then((data) => setMatchEvents(data.response))
            .catch((err) => console.log("error", err));
    }, [id]);

    return(
        <>
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
                        {matchEvents?.map((action, index) => (
                        <tr key={index} className='TrActionsMatch'>
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
                                    {action.player?.name} {action.type === "subst" ? `por ${action.assist?.name}` : null }    
                                </div>
                            </td>
                            <td>
                                <div>{action.time?.elapsed}</div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default memo(MatchEvents, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
});
