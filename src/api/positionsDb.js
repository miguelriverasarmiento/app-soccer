import _handleError from './myErrorHandler';
import _throwSpecificError from './myErrorHandler';

export async function positionsDb() {
    try {
        const response = await fetch("https://v3.football.api-sports.io/standings?league=39&season=2022", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "5c42fdc9e107817b839c25662930d2c6"
                }
            });
            if(!response.ok) {
                return _handleError(response.status);
            }
            const data = await response.json();
            const standings = data.response[0].league.standings[0];
            return standings;
    } catch(err) {
        _throwSpecificError(err);
    }
}

export async function topScorers() {
    try {
        const response = await fetch("https://v3.football.api-sports.io/players/topscorers?league=39&season=2022", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "5c42fdc9e107817b839c25662930d2c6"
                }
            });
            if(!response.ok) {
                return _handleError(response.status);
            }
            const data = await response.json();
            return data;
    } catch(err) {
        _throwSpecificError(err);
    }
}

export async function topAssists() {
    try {
        const response = await fetch("https://v3.football.api-sports.io/players/topassists?league=39&season=2022", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "5c42fdc9e107817b839c25662930d2c6"
                }
            });
            if(!response.ok) {
                return _handleError(response.status);
            }
            const data = await response.json();
            return data;
    } catch(err) {
        _throwSpecificError(err);
    }
}
