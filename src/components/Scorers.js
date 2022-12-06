import { useEffect, useState, memo } from 'react';
import { topScorers } from '../api/positionsDb';

const Scorers = () => {

    const [topScorer, setTopScorer] = useState([]);

    useEffect(() => {
        topScorers()
            .then((data) => setTopScorer(data.response))
            .catch((err) => console.log("error", err));
    }, []);

    return (

        <>
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
        </>

    );
}

export default memo(Scorers);
