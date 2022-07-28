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
                throw new NetworkError()
            }
            const data = await response.json();
            console.log(data);
            return data;
    } catch (err) {
        throw err;
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
                throw new NetworkError()
            }
            const data = await response.json();
            console.log(data);
            return data;
    } catch (err) {
        throw err;
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
                throw new NetworkError()
            }
            const data = await response.json();
            console.log(data);
            return data;
    } catch (err) {
        throw err;
    }
}

class NetworkError extends Error {
    constructor(){
        super('Network Error');
    }
}
