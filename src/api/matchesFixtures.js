import {_handleError, _throwSpecificError} from './myErrorHandler';

export async function matchesFixtures() {
    try {
        const response = await fetch("https://v3.football.api-sports.io/fixtures?season=2022&league=39", {
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

export async function lastTenGames() {
    try {
        const response = await fetch("https://v3.football.api-sports.io/fixtures?last=10&season=2022&league=39", {
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

export async function lineupsMatches(idFixture) {
    try {
        const response = await fetch(`https://v3.football.api-sports.io/fixtures/lineups?fixture=${idFixture}`, {
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

export async function eventsMatches(idFixture) {
    try {
        const response = await fetch(`https://v3.football.api-sports.io/fixtures/events?fixture=${idFixture}`, {
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

export async function matchesScore(idFixt) {
    try {
        const response = await fetch(`https://v3.football.api-sports.io/fixtures?id=${idFixt}`, {
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
