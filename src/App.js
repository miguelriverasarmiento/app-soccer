import { useEffect, useState } from 'react';
import { getSoccerLeagues } from './api/soccer';

function App() {

  const [league, setLeague] = useState([]);

  useEffect(() => {
    getSoccerLeagues().then((data) => setLeague(data.response));
  }, []);

  return (
    <div>
      <h1>Premier League</h1>
      <h3>Teams</h3>
      <ul>
        {league.map((lea) => (
          <li role="contentInfo" key={lea.team.id}>{lea.team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
