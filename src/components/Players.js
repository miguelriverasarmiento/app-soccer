import '../App.css';

const Players = (props) => {

    const players = props.players.map((item, index) => {
        return <li className='PlayersTeamLi' key={item.id}>{item.value.name}</li>
    });

return(
    <>
        <div className='DivPlayersTeam'>
            <div className='TitleDivPlayers'><h4>Jugadores</h4></div>
            <div>
                <ul className='PlayersTeamUl'>
                    {players}
                </ul>
            </div>
            <div className='DivButtonsPag'>
                <button onClick={props.prevHandler}>Prev</button>
                    {props.currentPage}
                <button onClick={props.nextHandler}>Next</button>
            </div>
        </div>
    </>
    );
}

export default Players;
