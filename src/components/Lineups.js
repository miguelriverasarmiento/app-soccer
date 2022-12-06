import { useEffect, useState, useMemo } from 'react';
import { lineupsMatches, matchesScore } from '../api/matchesFixtures';
import FormationHome from './FormationHome';
import FormationAway from './FormationAway';
import MatchEvents from './MatchEvents';
import { useParams } from "react-router-dom";

export function Lineups() {

    const [lineups, setLineaups] = useState([]);
    const [scoreMatch, setScoreMatch] = useState([]);
    const params = useParams();
    const id = parseInt(params.idFix);
    
    useEffect(() => {
        lineupsMatches(id)
            .then((data) => setLineaups(data.response))
            .catch((err) => console.log("error", err));
    }, [id]);

    useEffect(() => {
        matchesScore(id)
            .then((data) => setScoreMatch(data.response))
            .catch((err) => console.log("error", err));
    }, [id]);

    const lineupsMemo = useMemo(() => lineups, [lineups]);
    
    return(
        <div className="ContainerLineups">
            <div className="DivTitleLineups"><h3 className="TitleLineups">Alineaciones de equipos</h3></div>
            <div className="DivNameTeamHome">
                <div className='ClubLogoLineups'><img src={lineupsMemo[0]?.team?.logo} className='TeamLogoLineups'/></div>
                <div className='ClubNameLineupsHome'>{lineupsMemo[0]?.team?.name}</div>
                <div className='ClubCoachLineups'>Entrenador: {lineupsMemo[0]?.coach?.name}</div>
            </div>
            <div className='DivLineupsHome'>
                <div className='Formation'>{lineupsMemo[0]?.formation}</div>
                <FormationHome lineups={lineupsMemo}></FormationHome>
            </div>
            <div className="DivNameTeamAway">
                <div className='ClubLogoLineups'><img src={lineupsMemo[1]?.team?.logo} className='TeamLogoLineups'/></div>
                <div className='ClubNameLineupsAway'>{lineupsMemo[1]?.team?.name}</div>
                <div className='ClubCoachLineups'>Entrenador: {lineupsMemo[1]?.coach?.name}</div>
            </div>
            <div className='DivLineupsAway'>
                <div className='Formation'>{lineupsMemo[1]?.formation}</div>
                <FormationAway lineups={lineupsMemo}></FormationAway>
            </div>
            <div className='DivMark'>{scoreMatch[0]?.goals?.home} - {scoreMatch[0]?.goals?.away}</div>
            <div className='DivSubtitutesHome'>
                <div className='TitleSust'><b>Sustitutos</b></div>
                <div className='NumberPlaySust'>{lineupsMemo[0]?.substitutes[0]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[0]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[0]?.substitutes[1]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[1]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[0]?.substitutes[2]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[2]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[0]?.substitutes[3]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[3]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[0]?.substitutes[4]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[4]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[0]?.substitutes[5]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[5]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[0]?.substitutes[6]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[6]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[0]?.substitutes[7]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[7]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[0]?.substitutes[8]?.player?.number}</div> <div className='NamePlaySust'>{lineups[0]?.substitutes[8]?.player?.name}</div>
            </div>
            <MatchEvents id={id}></MatchEvents>
            <div className='DivSubtitutesAway'>
                <div className='TitleSust'><b>Sustitutos</b></div>
                <div className='NumberPlaySust'>{lineupsMemo[1]?.substitutes[0]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[0]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[1]?.substitutes[1]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[1]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[1]?.substitutes[2]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[2]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[1]?.substitutes[3]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[3]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[1]?.substitutes[4]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[4]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[1]?.substitutes[5]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[5]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[1]?.substitutes[6]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[6]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[1]?.substitutes[7]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[7]?.player?.name}</div>
                <div className='NumberPlaySust'>{lineupsMemo[1]?.substitutes[8]?.player?.number}</div> <div className='NamePlaySust'>{lineups[1]?.substitutes[8]?.player?.name}</div>
            </div>
        </div>
    );
}
