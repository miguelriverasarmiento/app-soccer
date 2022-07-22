import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getSoccerLeagues } from './api/soccer';

  test('This should show a name of soccer league', async () => {
    render(<App />)
    expect(await screen.getByText(/Premier League/i)).toBeInTheDocument();
  });

  test('This get a first team of teams list', async () => {
    const list = await getSoccerLeagues();
      console.log("Running test");
      expect(list.response[0].team.name).toBe('Manchester United');
    });