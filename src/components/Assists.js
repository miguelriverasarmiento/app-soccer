import { useEffect, useState, memo } from 'react';
import { topAssists } from '../api/positionsDb';

const Assists = () => {

    const [topAssist, setTopAssist] = useState([]);

    useEffect(() => {
        topAssists()
            .then((data) => setTopAssist(data.response))
            .catch((err) => console.log("error", err));
    }, []);

    return(
        <>
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
        </>

    );
}

export default memo(Assists);
