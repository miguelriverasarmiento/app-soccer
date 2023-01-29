import { render, screen } from '@testing-library/react';
import App from './App';
import { getSoccerLeagues, searchTeamPlayers, searchTeamStadium } from './api/soccer';

  test('This should show a name of soccer league', async () => {
    render(<App />)
    expect(await screen.getByText(/PremierLeague/i)).toBeInTheDocument();
  });

  test('This get a first team of teams list', async () => {
    const list = await getSoccerLeagues();
      console.log("Running test");
      expect(list.response[0].team.name).toBe('Manchester United');
    });
  
  test('This get a second player of team player list', async () => {
    const list = await searchTeamPlayers();
      console.log("Running test");
      expect(list.response[0].players[1].name).toBe('David de Gea');
    });

  test('This get a stadium of the first team in list', async () => {
    const list = await searchTeamStadium();
      console.log("Running test");
      expect(list.response[0].venue.name).toBe('Old Trafford');
    });
