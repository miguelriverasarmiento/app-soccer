import {_handleError, _throwSpecificError} from './myErrorHandler';

export async function getSoccerLeagues() {
    try {
        const response = await fetch('https://v3.football.api-sports.io/teams?league=39&season=2022', {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "5c42fdc9e107817b839c25662930d2c6"
                }
            });
            if(!response.ok){
                return _handleError(response.status);
            }
            const data = await response.json();
            return data;
    } catch (err) {
        _throwSpecificError(err);
    }
}

export async function searchTeamPlayers(id = 33){
    try {
        const response = await fetch(`https://v3.football.api-sports.io/players/squads?team=${id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "5c42fdc9e107817b839c25662930d2c6"
                }
            });
            if(!response.ok){
                return _handleError(response.status);
            }
            const data = await response.json();
            const players = data.response[0]?.players;
            const result = Object.keys(players).map(key => ({
                id: key, value: players[key]
            }));
            return result;
    } catch (err) {
        _throwSpecificError(err);
    }
} 

export async function searchTeamStadium(id = 33){
    try {
        const response = await fetch(`https://v3.football.api-sports.io//teams?id=${id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "5c42fdc9e107817b839c25662930d2c6"
                }
            });
            if(!response.ok){
                return _handleError(response.status);
            }
            const data = await response.json();
            console.log(data);
            return data;
    } catch (err) {
        _throwSpecificError(err);
    }
}

export async function searchPlayerDetails(id = 882){
    try {
        const response = await fetch(`https://v3.football.api-sports.io/players?id=${id}&season=2022`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "5c42fdc9e107817b839c25662930d2c6"
                }
            });
            if(!response.ok){
                return _handleError(response.status);
            }
            const data = await response.json();
            return data;
    } catch (err) {
        _throwSpecificError(err);
    }
}

export async function searchTeamPlayerOne(id = 33){
    try {
        const response = await fetch(`https://v3.football.api-sports.io/players/squads?team=${id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "5c42fdc9e107817b839c25662930d2c6"
                }
            });
            if(!response.ok){
                return _handleError(response.status);
            }
            const data = await response.json();
            const player = data.response[0]?.players[0]?.id;
            return player;
    } catch (err) {
        _throwSpecificError(err);
    }
}

export async function searchTeamPlayersNumbers(id = 33){
    try {
        const response = await fetch(`https://v3.football.api-sports.io/players/squads?player=${id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "5c42fdc9e107817b839c25662930d2c6"
                }
            });
            if(!response.ok){
                return _handleError(response.status);
            }
            const data = await response.json();
            return data;
    } catch (err) {
        _throwSpecificError(err);
    }
} 
