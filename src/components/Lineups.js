import { useEffect, useState } from 'react';
import { lineupsMatches } from '../api/matchesFixtures';
import FormationHome from './FormationHome';
import FormationAway from './FormationAway';
import { useParams } from "react-router-dom";

export function Lineups() {

    const [lineups, setLineaups] = useState([]);
    const params = useParams();
    const id = parseInt(params.idFix);
    
    useEffect(() => {
        lineupsMatches(id)
            .then((data) => setLineaups(data.response))
            .catch((err) => console.log("error", err));
    }, [id]);

    return(
        <div className="ContainerLineups">
            <div className="DivTitleLineups"><h3 className="TitleLineups">Alineaciones de equipos</h3></div>
            <div className='DivLineupsHome'>
                <div>{lineups[0]?.formation}</div>
                <FormationHome lineups={lineups}/>
            </div>
            <div className='DivLineupsAway'>
                <div>{lineups[1]?.formation}</div>
                <FormationAway lineups={lineups}/>
            </div>
        </div>
    );
}
