import { useState, useCallback } from 'react';
import AllCalendarMatches from './AllCalendarMatches';
import LastTenMatches from './LastTenMatches';

export function Matches() {

    const [openList, setOpenList] = useState({isToggleOn: false});

    const toggleList = () => {
        setOpenList(prevState => ({ 
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const convertDate = useCallback((item) => {
        const theDate = new Date(Date.parse(item));
        const finalDate = theDate.toLocaleString();
        return finalDate
    }, []);

    const statusMatchLong = useCallback((item) => {
        if (item === "Not Started") {
            return "Sin iniciar"
        }else if (item === "In Progress") {
            return "En vivo"
        }else if (item === "First Half") {
            return "En vivo"
        }else if (item === "Second Half") {
            return "En vivo"
        }else if (item === "2nd Half Started") {
            return "En vivo"
        }else if (item === "Match Finished") {
            return "Finalizado"
        }else if (item === "Match Postponed") {
            return "Pospuesto"
        }else if (item === "First Half" || "Halftime") {
            return "Medio tiempo"
        }else if (item === "Second Half") {
            return "Tiempo completo"
        }else if (item === "Extra Time") {
            return "Tiempo extra"
        }else if (item === "Penalty In Progress") {
            return "Penales"
        }else if (item === "Match Finished After Extra Time") {
            return "Finalizado extra"
        }else if (item === "Match Finished After Penalty") {
            return "Penales finalizados "
        }else if (item === "Break Time") {
            return "Descanso"
        }else if (item === "Match Suspended") {
            return "Suspendido"
        }else if (item === "Match Interrupted") {
            return "Interrumpido"
        }else if (item === "Match Cancelled") {
            return "Cancelado"
        }else if (item === "Match Abandoned") {
            return "Abandonado"
        }else if (item === "Technical Loss") {
            return "Perdida tecnica"
        }else if (item === "Kick Off") {
            return "En vivo"
        }
    }, []);
    
    return(
        <div className="ContainerMatches">
            <div className="DivTitleMatchesCom">
                <h1 className="TitleMatches">Temporada 2022-23</h1>
            </div>
            {openList.isToggleOn ? (
                <AllCalendarMatches convertDate={convertDate} statusMatchLong={statusMatchLong}></AllCalendarMatches>
            ) : 
                <LastTenMatches convertDate={convertDate} statusMatchLong={statusMatchLong}></LastTenMatches>
            }
            <div className="DivButtonGames">
                <button onClick={() => toggleList()} className="GamesButton">
                    {openList.isToggleOn ? 'Ver menos' : 'Ver mas'}
                </button>
            </div>
        </div>
    );
}
