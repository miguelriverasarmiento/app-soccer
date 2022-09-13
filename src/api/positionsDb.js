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
                throw new NetworkError()
            }
            const data = await response.json();
            const standings = data.response[0].league.standings[0];
            console.log(standings);
            return standings;
    } catch(err) {
        throw err;
    }

}

class NetworkError extends Error {
    constructor(){
        super('Network Error');
    }
}