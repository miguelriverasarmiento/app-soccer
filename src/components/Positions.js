import { useEffect, useState } from 'react';
import { positionsDb } from '../api/positionsDb';

export function Positions() {

    const [table, setTable] = useState([]);

    useEffect(() => {
        positionsDb()
            .then((data) => setTable(data))
            .catch((err) => console.log("error", err));
    }, []);

    return(

        <>
            <div className="BodyPos">
                <div className="DivTitlePos">
                    <h1 className='TitlePositions'>Tabla de posiciones temporada 2022-23</h1>
                </div>
                <div className='DivTable'>
                    <table>
                        <thead>
                            <tr>
                                <th>Club</th>
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
            </div>
        </>
    );
}
