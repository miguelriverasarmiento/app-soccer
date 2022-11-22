import { useEffect, useState } from 'react';
import { positionsDb, topScorers, topAssists } from '../api/positionsDb';

export function Positions() {

    const [table, setTable] = useState([]);
    const [topScorer, setTopScorer] = useState([]);
    const [topAssist, setTopAssist] = useState([]);

    useEffect(() => {
        positionsDb()
            .then((data) => setTable(data))
            .catch((err) => console.log("error", err));
    }, []);

    useEffect(() => {
        topScorers()
            .then((data) => setTopScorer(data.response))
            .catch((err) => console.log("error", err));
    }, []);

    useEffect(() => {
        topAssists()
            .then((data) => setTopAssist(data.response))
            .catch((err) => console.log("error", err));
    }, []);

    return(
        <>
            <div className="BodyPos">
                <div className="DivTitlePos">
                    <h1 className='TitlePositions'>Tabla de posiciones temporada 2022-23</h1>
                </div>
                <div className="DivScorers">
                <h1 className='TitlePositions'>Goleadores</h1>
                    <table className="TableScorers">
                        <thead>
                            <tr>
                                <th>Jugador</th>
                                <th>Goles</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{topScorer[0]?.player?.name}</td>
                                <td>{topScorer[0]?.statistics[0]?.goals?.total}</td>
                            </tr>
                            <tr>
                                <td>{topScorer[1]?.player?.name}</td>
                                <td>{topScorer[1]?.statistics[0]?.goals?.total}</td>
                            </tr>
                            <tr>
                                <td>{topScorer[2]?.player?.name}</td>
                                <td>{topScorer[2]?.statistics[0]?.goals?.total}</td>
                            </tr>
                            <tr>
                                <td>{topScorer[3]?.player?.name}</td>
                                <td>{topScorer[3]?.statistics[0]?.goals?.total}</td>
                            </tr>
                            <tr>
                                <td>{topScorer[4]?.player?.name}</td>
                                <td>{topScorer[4]?.statistics[0]?.goals?.total}</td>
                            </tr>
                            <tr>
                                <td>{topScorer[5]?.player?.name}</td>
                                <td>{topScorer[5]?.statistics[0]?.goals?.total}</td>
                            </tr>
                            <tr>
                                <td>{topScorer[6]?.player?.name}</td>
                                <td>{topScorer[6]?.statistics[0]?.goals?.total}</td>
                            </tr>
                            <tr>
                                <td>{topScorer[7]?.player?.name}</td>
                                <td>{topScorer[7]?.statistics[0]?.goals?.total}</td>
                            </tr>
                            <tr>
                                <td>{topScorer[8]?.player?.name}</td>
                                <td>{topScorer[8]?.statistics[0]?.goals?.total}</td>
                            </tr>
                            <tr>
                                <td>{topScorer[9]?.player?.name}</td>
                                <td>{topScorer[9]?.statistics[0]?.goals?.total}</td>
                            </tr>
                            <tr>
                                <td>{topScorer[10]?.player?.name}</td>
                                <td>{topScorer[10]?.statistics[0]?.goals?.total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='DivTable'>
                    <table>
                        <thead>
                            <tr>
                                <th className="TheadThPos">Club</th>
                                <th>PJ</th>
                                <th>G</th>
                                <th>E</th>
                                <th>P</th>
                                <th>GF</th>
                                <th>GC</th>
                                <th>DG</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((pos) => (
                            <tr key={pos.rank}>
                                <td>
                                    <div className='ClubRank'>{pos.rank}</div>
                                    <div className='ClubLogo'><img src={pos.team?.logo} className='TableTeamLogo'/></div>
                                    <div className='ClubName'>{pos.team?.name}</div>
                                </td>
                                <td align="center"><div className='ClubAllPoints'>{pos.all?.played}</div></td>
                                <td align="center"><div className='ClubAllPoints'>{pos.all?.win}</div></td>
                                <td align="center"><div className='ClubAllPoints'>{pos.all?.draw}</div></td>
                                <td align="center"><div className='ClubAllPoints'>{pos.all?.lose}</div></td>
                                <td align="center"><div className='ClubAllPoints'>{pos.all?.goals?.for}</div></td>
                                <td align="center"><div className='ClubAllPoints'>{pos.all?.goals?.against}</div></td>
                                <td align="center"><div className='ClubAllPoints'>{pos.goalsDiff}</div></td>
                                <td align="center"><div className='ClubAllPoints'>{pos.points}</div></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="DivAssists">
                <h1 className='TitlePositions'>Asistidores</h1>
                    <table className="TableAssists">
                        <thead>
                            <tr>
                                <th>Jugador</th>
                                <th>Asistencias</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{topAssist[0]?.player?.name}</td>
                                <td>{topAssist[0]?.statistics[0]?.goals?.assists}</td>
                            </tr>
                            <tr>
                                <td>{topAssist[1]?.player?.name}</td>
                                <td>{topAssist[1]?.statistics[0]?.goals?.assists}</td>
                            </tr>
                            <tr>
                                <td>{topAssist[2]?.player?.name}</td>
                                <td>{topAssist[2]?.statistics[0]?.goals?.assists}</td>
                            </tr>
                            <tr>
                                <td>{topAssist[3]?.player?.name}</td>
                                <td>{topAssist[3]?.statistics[0]?.goals?.assists}</td>
                            </tr>
                            <tr>
                                <td>{topAssist[4]?.player?.name}</td>
                                <td>{topAssist[4]?.statistics[0]?.goals?.assists}</td>
                            </tr>
                            <tr>
                                <td>{topAssist[5]?.player?.name}</td>
                                <td>{topAssist[5]?.statistics[0]?.goals?.assists}</td>
                            </tr>
                            <tr>
                                <td>{topAssist[6]?.player?.name}</td>
                                <td>{topAssist[6]?.statistics[0]?.goals?.assists}</td>
                            </tr>
                            <tr>
                                <td>{topAssist[7]?.player?.name}</td>
                                <td>{topAssist[7]?.statistics[0]?.goals?.assists}</td>
                            </tr>
                            <tr>
                                <td>{topAssist[8]?.player?.name}</td>
                                <td>{topAssist[8]?.statistics[0]?.goals?.assists}</td>
                            </tr>
                            <tr>
                                <td>{topAssist[9]?.player?.name}</td>
                                <td>{topAssist[9]?.statistics[0]?.goals?.assists}</td>
                            </tr>
                            <tr>
                                <td>{topAssist[10]?.player?.name}</td>
                                <td>{topAssist[10]?.statistics[0]?.goals?.assists}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
