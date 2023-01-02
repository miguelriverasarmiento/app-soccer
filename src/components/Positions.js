import { useEffect, useState, useMemo } from 'react';
import { positionsDb } from '../api/positionsDb';
import Scorers from './Scorers';
import Assists from './Assists';

export function Positions() {

    const [table, setTable] = useState([]);

    const tableMemo = useMemo(() => table, [table]);
    
    useEffect(() => {
        positionsDb()
            .then((data) => setTable(data))
            .catch((err) => console.log("error", err));
    }, []);

    return(
        <>
            <div className="BodyPos">
                <div className="DivTitlePos">
                    <h1 className='TitlePositions'>Posiciones temporada 2022-23</h1>
                </div>
                <Scorers></Scorers>
                <div className='DivTable'>
                    <table className='TabForResponsive'>
                        <thead>
                            <tr className='TabTrForResponsive'>
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
                            {tableMemo.map((pos) => (
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
                <Assists></Assists>
            </div>
        </>
    );
}
